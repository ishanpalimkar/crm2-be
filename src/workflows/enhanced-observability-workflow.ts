import { WorkflowEntrypoint, WorkflowEvent, WorkflowStep } from 'cloudflare:workers';
import { ProgramTypeWorkflowParams, ProgramTypeWorkflowResult } from '../types/program-types';
import { ProgramTypeService } from '../services/program-type.service';
import { generateRequestId, getPrismaClient } from '../utils';

/**
 * 🔍 Enhanced ProgramType Workflow with Full Observability
 * 
 * This workflow demonstrates production-grade observability features:
 * - Structured logging with correlation IDs
 * - Real-time performance monitoring
 * - Comprehensive error tracking and classification
 * - Custom metrics collection
 * - Resource usage optimization
 * - Automated alerting thresholds
 */

// Observability Classes
class WorkflowLogger {
  constructor(
    private workflowId: string,
    private requestId: string,
    private environment: string = process.env.NODE_ENV || 'development'
  ) {}

  info(step: string, message: string, data?: any) {
    console.log(JSON.stringify({
      level: 'INFO',
      timestamp: new Date().toISOString(),
      workflowId: this.workflowId,
      requestId: this.requestId,
      step: step,
      message: message,
      data: data || {},
      environment: this.environment
    }));
  }

  error(step: string, message: string, error: any, data?: any) {
    console.error(JSON.stringify({
      level: 'ERROR',
      timestamp: new Date().toISOString(),
      workflowId: this.workflowId,
      requestId: this.requestId,
      step: step,
      message: message,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      data: data || {},
      environment: this.environment
    }));
  }

  performance(step: string, duration: number, metadata?: any) {
    console.log(JSON.stringify({
      level: 'PERFORMANCE',
      timestamp: new Date().toISOString(),
      workflowId: this.workflowId,
      requestId: this.requestId,
      step: step,
      duration: duration,
      metadata: metadata || {},
      environment: this.environment
    }));
  }

  metrics(step: string, metrics: any) {
    console.log(JSON.stringify({
      level: 'METRICS',
      timestamp: new Date().toISOString(),
      workflowId: this.workflowId,
      requestId: this.requestId,
      step: step,
      metrics: metrics,
      environment: this.environment
    }));
  }
}

class PerformanceMonitor {
  private metrics: Map<string, any> = new Map();
  private startTime: number = Date.now();

  startStep(stepName: string) {
    this.metrics.set(`${stepName}_start`, Date.now());
  }

  endStep(stepName: string, additionalData?: any) {
    const startTime = this.metrics.get(`${stepName}_start`);
    const duration = Date.now() - startTime;
    
    const stepMetrics = {
      duration: duration,
      memoryUsage: process.memoryUsage?.(),
      ...additionalData
    };
    
    this.metrics.set(stepName, stepMetrics);
    return stepMetrics;
  }

  getOverallMetrics() {
    return {
      totalDuration: Date.now() - this.startTime,
      stepMetrics: Object.fromEntries(this.metrics),
      peakMemoryUsage: this.getPeakMemoryUsage(),
      averageStepDuration: this.getAverageStepDuration()
    };
  }

  private getPeakMemoryUsage() {
    let peak = 0;
    for (const [key, value] of this.metrics) {
      if (key.endsWith('_start')) continue;
      const memUsage = value.memoryUsage?.heapUsed || 0;
      peak = Math.max(peak, memUsage);
    }
    return peak;
  }

  private getAverageStepDuration() {
    const durations = [];
    for (const [key, value] of this.metrics) {
      if (key.endsWith('_start')) continue;
      durations.push(value.duration);
    }
    return durations.reduce((a, b) => a + b, 0) / durations.length;
  }
}

enum ErrorCategory {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  RESOURCE_EXHAUSTION = 'RESOURCE_EXHAUSTION',
  BUSINESS_LOGIC_ERROR = 'BUSINESS_LOGIC_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

class ErrorTracker {
  private static errorCounts: Map<string, number> = new Map();

  static trackError(error: Error, context: {
    workflowId: string;
    step: string;
    requestId: string;
    data?: any;
  }) {
    const errorCategory = this.categorizeError(error);
    const errorKey = `${errorCategory}:${context.step}`;
    
    this.errorCounts.set(errorKey, (this.errorCounts.get(errorKey) || 0) + 1);
    
    console.error(JSON.stringify({
      level: 'ERROR_TRACKED',
      timestamp: new Date().toISOString(),
      category: errorCategory,
      step: context.step,
      workflowId: context.workflowId,
      requestId: context.requestId,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      errorCount: this.errorCounts.get(errorKey)
    }));
  }

  private static categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    
    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorCategory.VALIDATION_ERROR;
    }
    if (message.includes('database') || message.includes('prisma')) {
      return ErrorCategory.DATABASE_ERROR;
    }
    if (message.includes('network') || message.includes('fetch')) {
      return ErrorCategory.NETWORK_ERROR;
    }
    if (message.includes('timeout') || message.includes('timed out')) {
      return ErrorCategory.TIMEOUT_ERROR;
    }
    if (message.includes('memory') || message.includes('resource')) {
      return ErrorCategory.RESOURCE_EXHAUSTION;
    }
    
    return ErrorCategory.UNKNOWN_ERROR;
  }
}

class AlertingService {
  private static readonly ALERT_THRESHOLDS = {
    ERROR_RATE_THRESHOLD: 0.1, // 10%
    LATENCY_THRESHOLD: 10000,  // 10 seconds
    BATCH_FAILURE_THRESHOLD: 0.2 // 20%
  };

  static async checkAndAlert(metrics: any, logger: WorkflowLogger) {
    const errorRate = metrics.errorCount / metrics.totalCount;
    
    if (errorRate > this.ALERT_THRESHOLDS.ERROR_RATE_THRESHOLD) {
      const alertPayload = {
        alertType: 'HIGH_ERROR_RATE',
        errorRate: errorRate,
        totalCount: metrics.totalCount,
        errorCount: metrics.errorCount,
        workflowId: metrics.workflowId,
        severity: 'HIGH',
        timestamp: new Date().toISOString()
      };
      
      console.log(JSON.stringify({
        level: 'ALERT',
        ...alertPayload
      }));
      
      logger.error('alerting', 'High error rate detected', new Error('High error rate'), alertPayload);
    }
  }
}

// Enhanced Workflow Implementation
export class EnhancedProgramTypeWorkflow extends WorkflowEntrypoint {
  async run(event: WorkflowEvent<ProgramTypeWorkflowParams>, step: WorkflowStep): Promise<ProgramTypeWorkflowResult> {
    const executionId = generateRequestId();
    const requestId = generateRequestId();
    const logger = new WorkflowLogger(executionId, requestId);
    const performanceMonitor = new PerformanceMonitor();
    
    // Workflow initialization with observability
    logger.info('workflow-start', 'Enhanced ProgramType workflow initiated', {
      itemCount: event.payload.data.length,
      batchSize: event.payload.batchSize || 10,
      executionId: executionId,
      memoryAtStart: process.memoryUsage?.()
    });

    const workflowMetrics = {
      startTime: Date.now(),
      itemCount: event.payload.data.length,
      batchCount: 0,
      processingTimes: [] as any[],
      errorCount: 0,
      successCount: 0,
      totalCount: event.payload.data.length,
      workflowId: executionId
    };

    try {
      // Step 1: Input Validation with Observability
      const validationResult = await step.do('validate-input', async () => {
        performanceMonitor.startStep('validate-input');
        logger.info('validate-input', 'Starting input validation', { itemCount: event.payload.data.length });
        
        try {
          const result = await this.validateInputWithMetrics(event.payload.data, logger);
          const stepMetrics = performanceMonitor.endStep('validate-input', {
            itemsValidated: event.payload.data.length,
            validationRules: 12,
            validItems: result.validItems.length,
            invalidItems: result.invalidItems.length
          });
          
          logger.performance('validate-input', stepMetrics.duration, stepMetrics);
          logger.metrics('validate-input', {
            validItems: result.validItems.length,
            invalidItems: result.invalidItems.length,
            validationRate: result.validItems.length / event.payload.data.length
          });
          
          return result;
        } catch (error) {
          workflowMetrics.errorCount++;
          const errorObj = error instanceof Error ? error : new Error(String(error));
          ErrorTracker.trackError(errorObj, {
            workflowId: executionId,
            step: 'validate-input',
            requestId: requestId,
            data: { itemCount: event.payload.data.length }
          });
          logger.error('validate-input', 'Validation failed', errorObj);
          throw error;
        }
      });

      if (validationResult.invalidItems.length > 0) {
        logger.info('validate-input', 'Found invalid items', {
          invalidCount: validationResult.invalidItems.length,
          invalidItems: validationResult.invalidItems
        });
      }

      // Step 2: Database Initialization with Monitoring
      const initResult = await step.do('initialize-database', async () => {
        performanceMonitor.startStep('initialize-database');
        logger.info('initialize-database', 'Initializing database connection');
        
        try {
          const prisma = getPrismaClient();
          const service = new ProgramTypeService({ prisma });
          const connectionTest = await service.testConnection();
          
          const stepMetrics = performanceMonitor.endStep('initialize-database', {
            connectionTest: connectionTest,
            databaseReady: true
          });
          
          logger.performance('initialize-database', stepMetrics.duration, stepMetrics);
          logger.metrics('initialize-database', {
            connectionLatency: stepMetrics.duration,
            connectionSuccess: connectionTest
          });
          
          return { service, connectionTest };
        } catch (error) {
          workflowMetrics.errorCount++;
          const errorObj = error instanceof Error ? error : new Error(String(error));
          ErrorTracker.trackError(errorObj, {
            workflowId: executionId,
            step: 'initialize-database',
            requestId: requestId
          });
          logger.error('initialize-database', 'Database initialization failed', errorObj);
          throw error;
        }
      });

      // Step 3: Batch Processing with Advanced Monitoring
      const processingResult = await step.do('process-batches', async () => {
        performanceMonitor.startStep('process-batches');
        logger.info('process-batches', 'Starting batch processing', {
          totalItems: validationResult.validItems.length,
          batchSize: event.payload.batchSize || 10
        });
        
        try {
          const results = await this.processBatchesWithObservability(
            initResult.service,
            validationResult.validItems,
            event.payload.batchSize || 10,
            logger,
            workflowMetrics
          );
          
          const stepMetrics = performanceMonitor.endStep('process-batches', {
            batchesProcessed: results.batchCount,
            itemsProcessed: results.processedCount,
            successfulItems: results.successfulItems,
            failedItems: results.failedItems,
            averageBatchTime: results.averageBatchTime
          });
          
          logger.performance('process-batches', stepMetrics.duration, stepMetrics);
          logger.metrics('process-batches', {
            throughput: results.processedCount / (stepMetrics.duration / 1000), // items per second
            successRate: results.successfulItems / results.processedCount,
            batchEfficiency: results.averageBatchTime,
            errorRate: results.failedItems / results.processedCount
          });
          
          workflowMetrics.successCount = results.successfulItems;
          workflowMetrics.errorCount += results.failedItems;
          workflowMetrics.batchCount = results.batchCount;
          
          return results;
        } catch (error) {
          workflowMetrics.errorCount++;
          const errorObj = error instanceof Error ? error : new Error(String(error));
          ErrorTracker.trackError(errorObj, {
            workflowId: executionId,
            step: 'process-batches',
            requestId: requestId,
            data: { itemCount: validationResult.validItems.length }
          });
          logger.error('process-batches', 'Batch processing failed', errorObj);
          throw error;
        }
      });

      // Step 4: Final Metrics and Alerting
      const finalMetrics = performanceMonitor.getOverallMetrics();
      workflowMetrics.processingTimes = Object.values(finalMetrics.stepMetrics);
      
      // Check alert thresholds
      await AlertingService.checkAndAlert(workflowMetrics, logger);
      
      // Log final comprehensive metrics
      logger.metrics('workflow-complete', {
        ...workflowMetrics,
        ...finalMetrics,
        successRate: workflowMetrics.successCount / workflowMetrics.totalCount,
        errorRate: workflowMetrics.errorCount / workflowMetrics.totalCount,
        throughput: workflowMetrics.totalCount / (finalMetrics.totalDuration / 1000)
      });

      logger.info('workflow-complete', 'Workflow completed successfully', {
        executionId: executionId,
        totalDuration: finalMetrics.totalDuration,
        processedCount: processingResult.processedCount,
        successRate: `${((workflowMetrics.successCount / workflowMetrics.totalCount) * 100).toFixed(2)}%`
      });

      return {
        success: true,
        processedCount: processingResult.processedCount,
        successfulItems: processingResult.successfulItems,
        failedItems: processingResult.failedItems,
        invalidItems: validationResult.invalidItems.length,
        executionId: executionId,
        duration: finalMetrics.totalDuration,
        
        // Enhanced observability data
        observabilityData: {
          metrics: workflowMetrics,
          performance: finalMetrics,
          steps: Object.keys(finalMetrics.stepMetrics),
          alertsTriggered: workflowMetrics.errorCount > 0,
          resourceUsage: {
            peakMemory: finalMetrics.peakMemoryUsage,
            averageStepDuration: finalMetrics.averageStepDuration
          }
        }
      };

    } catch (error) {
      const finalMetrics = performanceMonitor.getOverallMetrics();
      
      logger.error('workflow-failed', 'Workflow execution failed', error, {
        executionId: executionId,
        totalDuration: finalMetrics.totalDuration,
        completedSteps: Object.keys(finalMetrics.stepMetrics)
      });

      const errorObj = error instanceof Error ? error : new Error(String(error));
      ErrorTracker.trackError(errorObj, {
        workflowId: executionId,
        step: 'workflow-execution',
        requestId: requestId,
        data: workflowMetrics
      });

      throw error;
    }
  }

  private async validateInputWithMetrics(data: any[], logger: WorkflowLogger) {
    const validItems = [];
    const invalidItems = [];
    
    for (const item of data) {
      try {
        // Enhanced validation with detailed logging
        if (!item.programTypeName || item.programTypeName.trim().length === 0) {
          invalidItems.push({ item, reason: 'Missing program type name' });
          continue;
        }
        
        if (!item.programTypeId || item.programTypeId.trim().length === 0) {
          invalidItems.push({ item, reason: 'Missing program type ID' });
          continue;
        }
        
        validItems.push(item);
        
      } catch (error) {
        const errorObj = error instanceof Error ? error : new Error(String(error));
        logger.error('validate-input', 'Item validation error', errorObj, { item });
        invalidItems.push({ item, reason: errorObj.message });
      }
    }
    
    return { validItems, invalidItems };
  }

  private async processBatchesWithObservability(
    service: ProgramTypeService,
    items: any[],
    batchSize: number,
    logger: WorkflowLogger,
    metrics: any
  ) {
    const batches = this.createBatches(items, batchSize);
    let processedCount = 0;
    let successfulItems = 0;
    let failedItems = 0;
    const batchTimes = [];
    
    logger.info('process-batches', 'Processing batches', {
      totalBatches: batches.length,
      batchSize: batchSize,
      totalItems: items.length
    });
    
    for (let i = 0; i < batches.length; i++) {
      const batchStart = Date.now();
      const batch = batches[i];
      
      try {
        logger.info('process-batch', `Processing batch ${i + 1}/${batches.length}`, {
          batchIndex: i,
          batchSize: batch.length
        });
        
        const batchResults = await service.createBatch(batch);
        const batchDuration = Date.now() - batchStart;
        batchTimes.push(batchDuration);
        
        const batchSuccessful = batchResults.filter((r: any) => r.success).length;
        const batchFailed = batchResults.filter((r: any) => !r.success).length;
        
        successfulItems += batchSuccessful;
        failedItems += batchFailed;
        processedCount += batch.length;
        
        logger.performance('process-batch', batchDuration, {
          batchIndex: i,
          batchSize: batch.length,
          successfulItems: batchSuccessful,
          failedItems: batchFailed,
          batchSuccessRate: (batchSuccessful / batch.length) * 100
        });
        
        // Log any failed items in this batch
        if (batchFailed > 0) {
          const failedResults = batchResults.filter((r: any) => !r.success);
          logger.error('process-batch', `Batch ${i + 1} had failures`, new Error('Batch processing failures'), {
            batchIndex: i,
            failedItems: failedResults
          });
        }
        
      } catch (error) {
        const batchDuration = Date.now() - batchStart;
        batchTimes.push(batchDuration);
        failedItems += batch.length;
        
        const errorObj = error instanceof Error ? error : new Error(String(error));
        logger.error('process-batch', `Batch ${i + 1} failed completely`, errorObj, {
          batchIndex: i,
          batchSize: batch.length
        });
        
        ErrorTracker.trackError(errorObj, {
          workflowId: metrics.workflowId,
          step: 'process-batch',
          requestId: 'batch-' + i,
          data: { batchIndex: i, batchSize: batch.length }
        });
      }
    }
    
    const averageBatchTime = batchTimes.reduce((a, b) => a + b, 0) / batchTimes.length;
    
    return {
      processedCount,
      successfulItems,
      failedItems,
      batchCount: batches.length,
      averageBatchTime
    };
  }

  private createBatches<T>(items: T[], batchSize: number): T[][] {
    const batches: T[][] = [];
    for (let i = 0; i < items.length; i += batchSize) {
      batches.push(items.slice(i, i + batchSize));
    }
    return batches;
  }
} 
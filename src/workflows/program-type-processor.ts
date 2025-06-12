import { 
  WorkflowEntrypoint,
  WorkflowStep,
  WorkflowEvent
} from 'cloudflare:workers';
import { ProgramTypeService } from '../services/program-type.service';
import { 
  ProgramTypeData,
  WorkflowContext,
  WorkflowResult
} from '../types/program-types';
import { 
  ErrorCode,
  WorkflowExecution,
  WorkflowStep as WorkflowStepType
} from '../types/common';
import { 
  getPrismaClient,
  generateRequestId,
  createErrorDetail,
  validateData,
  sanitizeForDb
} from '../utils';
import { Env } from '../types/env';

export interface ProgramTypeWorkflowParams {
  data: ProgramTypeData[];
  requestId: string;
  metadata?: {
    source?: string;
    userId?: string;
    timestamp?: string;
  };
}

export interface ProgramTypeWorkflowResult {
  success: boolean;
  processedCount: number;
  errorCount: number;
  results: Array<{
    programTypeId: string;
    success: boolean;
    error?: string;
  }>;
  executionId: string;
  duration: number;
}

export class ProgramTypeWorkflow extends WorkflowEntrypoint {
  async run(event: WorkflowEvent<ProgramTypeWorkflowParams>, step: WorkflowStep): Promise<ProgramTypeWorkflowResult> {
    const startTime = Date.now();
    const executionId = generateRequestId();
    const { data, requestId, metadata } = event.payload;

    console.log(`Starting Program Type Workflow: ${executionId}`, {
      requestId,
      itemCount: data.length,
      metadata
    });

    try {
      // Step 1: Validate Input Data
      const validationResult = await step.do('validate-input', async () => {
        console.log('Step 1: Validating input data...');
        
        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid input: data must be a non-empty array');
        }

        if (data.length > 100) {
          throw new Error('Invalid input: maximum 100 items can be processed at once');
        }

        return {
          success: true,
          validatedCount: data.length,
          timestamp: new Date().toISOString()
        };
      });

      // Step 2: Initialize Database Connection
      const dbConnection = await step.do('initialize-database', async () => {
        console.log('Step 2: Initializing database connection...');
        
        try {
          const prisma = getPrismaClient();
          
          // Test connection
          await prisma.$connect();
          
          return {
            success: true,
            connectionEstablished: true,
            timestamp: new Date().toISOString()
          };
        } catch (error) {
          throw new Error(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      });

      // Step 3: Process Data in Batches
      const batchSize = 10; // Process 10 items at a time
      const batches = [];
      for (let i = 0; i < data.length; i += batchSize) {
        batches.push(data.slice(i, i + batchSize));
      }

      const batchResults: any[] = [];
      for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        
        const batchResult = await step.do(`process-batch-${i}`, async () => {
          console.log(`Step 3.${i + 1}: Processing batch ${i + 1}/${batches.length} (${batch.length} items)...`);
          
          const prisma = getPrismaClient();
          const programTypeService = new ProgramTypeService({ prisma });
          
          const results = [];
          
          for (const programType of batch) {
            try {
              // Validate individual item
              if (!programType.programTypeId || !programType.programTypeName) {
                results.push({
                  programTypeId: programType.programTypeId || 'unknown',
                  success: false,
                  error: 'Missing required fields: programTypeId or programTypeName'
                });
                continue;
              }

              // Process the program type
              const result = await programTypeService.createProgramType(programType);
              
              results.push({
                programTypeId: programType.programTypeId,
                success: result.success,
                error: result.error?.message
              });

            } catch (error) {
              results.push({
                programTypeId: programType.programTypeId || 'unknown',
                success: false,
                error: error instanceof Error ? error.message : 'Unknown processing error'
              });
            }
          }

          const successCount = results.filter(r => r.success).length;
          const errorCount = results.filter(r => !r.success).length;

          return {
            batchIndex: i,
            itemsProcessed: batch.length,
            successCount,
            errorCount,
            results,
            timestamp: new Date().toISOString()
          };
        });

        batchResults.push(batchResult);
      }

      // Step 4: Consolidate Results
      const finalResults = await step.do('consolidate-results', async () => {
        console.log('Step 4: Consolidating results...');
        
        const allResults = batchResults.flatMap(batch => batch.results);
        const totalSuccessCount = allResults.filter(r => r.success).length;
        const totalErrorCount = allResults.filter(r => !r.success).length;
        
        return {
          processedCount: totalSuccessCount,
          errorCount: totalErrorCount,
          results: allResults,
          batchCount: batchResults.length,
          timestamp: new Date().toISOString()
        };
      });

      // Step 5: Cleanup and Logging
      await step.do('cleanup', async () => {
        console.log('Step 5: Cleanup and logging...');
        
        // Log final results
        console.log('Workflow completed successfully:', {
          executionId,
          requestId,
          totalItems: data.length,
          processedCount: finalResults.processedCount,
          errorCount: finalResults.errorCount,
          duration: Date.now() - startTime
        });

        return {
          cleanupCompleted: true,
          timestamp: new Date().toISOString()
        };
      });

      const endTime = Date.now();
      
      return {
        success: true,
        processedCount: finalResults.processedCount,
        errorCount: finalResults.errorCount,
        results: finalResults.results,
        executionId,
        duration: endTime - startTime
      };

    } catch (error) {
      console.error('Workflow execution failed:', {
        executionId,
        requestId,
        error: error instanceof Error ? error.message : 'Unknown error',
        duration: Date.now() - startTime
      });

      return {
        success: false,
        processedCount: 0,
        errorCount: data.length,
        results: data.map((item: ProgramTypeData) => ({
          programTypeId: item.programTypeId || 'unknown',
          success: false,
          error: error instanceof Error ? error.message : 'Workflow execution failed'
        })),
        executionId,
        duration: Date.now() - startTime
      };
    }
  }
}

// Workflow Configuration
export const programTypeWorkflowConfig = {
  name: 'program-type-processor',
  description: 'Processes program type data with validation, transformation, and storage',
  version: '1.0.0',
  timeout: 300000, // 5 minutes
  retryPolicy: {
    maxRetries: 3,
    backoff: 'exponential',
    initialDelay: 1000,
    maxDelay: 10000
  },
  concurrency: {
    maxConcurrentExecutions: 5
  }
};

// Helper function to start the workflow
export async function startProgramTypeWorkflow(
  env: Env,
  params: ProgramTypeWorkflowParams
): Promise<string> {
  try {
    const workflowId = `wf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    console.log(`🚀 [REAL WORKFLOW] Starting Cloudflare Workflow: ${workflowId}`, {
      requestId: params.requestId,
      itemCount: params.data.length,
      timestamp: new Date().toISOString()
    });

    // Create workflow instance using Cloudflare Workers Workflow API
    if (env.PROGRAM_TYPE_WORKFLOW) {
      const instance = await env.PROGRAM_TYPE_WORKFLOW.create({
        id: workflowId,
        params: params
      });

      console.log(`✅ [REAL WORKFLOW] Workflow instance created successfully: ${workflowId}`, {
        instanceId: instance.id,
        status: 'created'
      });

      return workflowId;
    } else {
      throw new Error('PROGRAM_TYPE_WORKFLOW binding not available');
    }

  } catch (error) {
    console.error('❌ [REAL WORKFLOW] Failed to start workflow:', error);
    throw new Error(`Failed to start workflow: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Helper function to get workflow status
export async function getProgramTypeWorkflowStatus(
  env: Env,
  workflowId: string
): Promise<{
  id: string;
  status: 'running' | 'completed' | 'failed';
  result?: ProgramTypeWorkflowResult;
  error?: string;
}> {
  try {
    console.log(`🔍 [REAL WORKFLOW] Getting status for workflow: ${workflowId}`);

    if (env.PROGRAM_TYPE_WORKFLOW) {
      const instance = await env.PROGRAM_TYPE_WORKFLOW.get(workflowId);
      
      if (!instance) {
        throw new Error(`Workflow ${workflowId} not found`);
      }

      console.log(`📊 [REAL WORKFLOW] Status retrieved: ${instance.status}`, {
        workflowId,
        status: instance.status,
        hasResult: !!instance.result
      });

      return {
        id: workflowId,
        status: instance.status as 'running' | 'completed' | 'failed',
        result: instance.result,
        error: instance.error?.message
      };
    } else {
      throw new Error('PROGRAM_TYPE_WORKFLOW binding not available');
    }

  } catch (error) {
    console.error('❌ [REAL WORKFLOW] Failed to get workflow status:', error);
    throw new Error(`Failed to get workflow status: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 
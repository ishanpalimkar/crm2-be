import { PrismaClient } from '../generated/prisma';
import { 
  ProgramTypeData, 
  ProgramTypeDbInput, 
  PaginationQuery 
} from '../types/program-types';
import { 
  ErrorCode, 
  HttpStatus 
} from '../types/common';
import { 
  createErrorDetail, 
  sanitizeForDb, 
  withRetry 
} from '../utils';

export interface ProgramTypeServiceOptions {
  prisma: PrismaClient;
}

export interface CreateProgramTypeResult {
  success: boolean;
  data?: ProgramTypeData;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface GetProgramTypesResult {
  success: boolean;
  data?: ProgramTypeData[];
  totalCount?: number;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export class ProgramTypeService {
  private prisma: PrismaClient;

  constructor(options?: ProgramTypeServiceOptions) {
    // Allow creating without options for enhanced workflow
    if (options) {
      this.prisma = options.prisma;
    } else {
      // This will be handled by getPrismaClient in the enhanced workflow
      this.prisma = null as any;
    }
  }

  /**
   * Create a single program type
   */
  async createProgramType(data: ProgramTypeData): Promise<CreateProgramTypeResult> {
    try {
      // Check if programTypeId already exists
      const existing = await this.prisma.programType.findUnique({
        where: { programTypeId: data.programTypeId }
      });

      if (existing) {
        return {
          success: false,
          error: {
            code: ErrorCode.DUPLICATE_ENTRY,
            message: `Program type with ID '${data.programTypeId}' already exists`,
            details: { programTypeId: data.programTypeId }
          }
        };
      }

      // Prepare data for database insertion
      const sanitized = sanitizeForDb({
        programTypeId: data.programTypeId,
        programTypeName: data.programTypeName,
        description: data.description || null,
        typicalDuration: data.typicalDuration || null,
        format: data.format || null,
        targetAudience: data.targetAudience || null,
        defaultBaseFee: data.defaultBaseFee || null,
        isEntryLevel: data.isEntryLevel,
        isAdvancedLevel: data.isAdvancedLevel,
        isKidsProgram: data.isKidsProgram,
        healthDeclarations: data.healthDeclarations || null,
        isActive: data.isActive,
        metaData: {}
      });

      const dbData: ProgramTypeDbInput = sanitized as ProgramTypeDbInput;

      // Create with retry logic
      const created = await withRetry(async () => {
        return await this.prisma.programType.create({
          data: dbData,
          select: {
            id: true,
            programTypeId: true,
            programTypeName: true,
            description: true,
            typicalDuration: true,
            format: true,
            targetAudience: true,
            defaultBaseFee: true,
            isEntryLevel: true,
            isAdvancedLevel: true,
            isKidsProgram: true,
            healthDeclarations: true,
            isActive: true,
            createdAt: true,
            updatedAt: true
          }
        });
      });

      // Convert Decimal to number for response
      const responseData: ProgramTypeData = {
        programTypeId: created.programTypeId,
        programTypeName: created.programTypeName,
        description: created.description || undefined,
        typicalDuration: created.typicalDuration || undefined,
        format: created.format || undefined,
        targetAudience: created.targetAudience || undefined,
        defaultBaseFee: created.defaultBaseFee ? Number(created.defaultBaseFee) : undefined,
        isEntryLevel: created.isEntryLevel,
        isAdvancedLevel: created.isAdvancedLevel,
        isKidsProgram: created.isKidsProgram,
        healthDeclarations: created.healthDeclarations || undefined,
        isActive: created.isActive
      };

      return {
        success: true,
        data: responseData
      };

    } catch (error) {
      console.error('Error creating program type:', error);
      
      return {
        success: false,
        error: {
          code: ErrorCode.DATABASE_ERROR,
          message: 'Failed to create program type',
          details: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }
  }

  /**
   * Create multiple program types in batch
   */
  async createProgramTypes(dataArray: ProgramTypeData[]): Promise<{
    success: boolean;
    results: CreateProgramTypeResult[];
    successCount: number;
    errorCount: number;
  }> {
    const results: CreateProgramTypeResult[] = [];
    let successCount = 0;
    let errorCount = 0;

    // Process each program type individually to handle partial failures
    for (const data of dataArray) {
      const result = await this.createProgramType(data);
      results.push(result);
      
      if (result.success) {
        successCount++;
      } else {
        errorCount++;
      }
    }

    return {
      success: successCount > 0,
      results,
      successCount,
      errorCount
    };
  }

  /**
   * Get program types with pagination
   */
  async getProgramTypes(
    pagination: PaginationQuery,
    filters: {
      isActive?: boolean;
      isEntryLevel?: boolean;
      isAdvancedLevel?: boolean;
      isKidsProgram?: boolean;
      search?: string;
    } = {}
  ): Promise<GetProgramTypesResult> {
    try {
      const { limit = 10, offset = 0 } = pagination;
      
      // Build where clause
      const where: any = {};
      
      if (filters.isActive !== undefined) {
        where.isActive = filters.isActive;
      }
      
      if (filters.isEntryLevel !== undefined) {
        where.isEntryLevel = filters.isEntryLevel;
      }
      
      if (filters.isAdvancedLevel !== undefined) {
        where.isAdvancedLevel = filters.isAdvancedLevel;
      }
      
      if (filters.isKidsProgram !== undefined) {
        where.isKidsProgram = filters.isKidsProgram;
      }
      
      if (filters.search) {
        where.OR = [
          { programTypeName: { contains: filters.search } },
          { description: { contains: filters.search } },
          { targetAudience: { contains: filters.search } }
        ];
      }

      // Get total count and data in parallel
      const [totalCount, programTypes] = await Promise.all([
        this.prisma.programType.count({ where }),
        this.prisma.programType.findMany({
          where,
          select: {
            id: true,
            programTypeId: true,
            programTypeName: true,
            description: true,
            typicalDuration: true,
            format: true,
            targetAudience: true,
            defaultBaseFee: true,
            isEntryLevel: true,
            isAdvancedLevel: true,
            isKidsProgram: true,
            healthDeclarations: true,
            isActive: true,
            createdAt: true,
            updatedAt: true
          },
          orderBy: { createdAt: 'desc' },
          skip: offset,
          take: limit
        })
      ]);

      // Convert to response format
      const data: ProgramTypeData[] = programTypes.map(pt => ({
        programTypeId: pt.programTypeId,
        programTypeName: pt.programTypeName,
        description: pt.description || undefined,
        typicalDuration: pt.typicalDuration || undefined,
        format: pt.format || undefined,
        targetAudience: pt.targetAudience || undefined,
        defaultBaseFee: pt.defaultBaseFee ? Number(pt.defaultBaseFee) : undefined,
        isEntryLevel: pt.isEntryLevel,
        isAdvancedLevel: pt.isAdvancedLevel,
        isKidsProgram: pt.isKidsProgram,
        healthDeclarations: pt.healthDeclarations || undefined,
        isActive: pt.isActive
      }));

      return {
        success: true,
        data,
        totalCount
      };

    } catch (error) {
      console.error('Error fetching program types:', error);
      
      return {
        success: false,
        error: {
          code: ErrorCode.DATABASE_ERROR,
          message: 'Failed to fetch program types',
          details: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }
  }

  /**
   * Get a single program type by ID
   */
  async getProgramTypeById(programTypeId: string): Promise<CreateProgramTypeResult> {
    try {
      const programType = await this.prisma.programType.findUnique({
        where: { programTypeId },
        select: {
          id: true,
          programTypeId: true,
          programTypeName: true,
          description: true,
          typicalDuration: true,
          format: true,
          targetAudience: true,
          defaultBaseFee: true,
          isEntryLevel: true,
          isAdvancedLevel: true,
          isKidsProgram: true,
          healthDeclarations: true,
          isActive: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (!programType) {
        return {
          success: false,
          error: {
            code: ErrorCode.RESOURCE_NOT_FOUND,
            message: `Program type with ID '${programTypeId}' not found`
          }
        };
      }

      const data: ProgramTypeData = {
        programTypeId: programType.programTypeId,
        programTypeName: programType.programTypeName,
        description: programType.description || undefined,
        typicalDuration: programType.typicalDuration || undefined,
        format: programType.format || undefined,
        targetAudience: programType.targetAudience || undefined,
        defaultBaseFee: programType.defaultBaseFee ? Number(programType.defaultBaseFee) : undefined,
        isEntryLevel: programType.isEntryLevel,
        isAdvancedLevel: programType.isAdvancedLevel,
        isKidsProgram: programType.isKidsProgram,
        healthDeclarations: programType.healthDeclarations || undefined,
        isActive: programType.isActive
      };

      return {
        success: true,
        data
      };

    } catch (error) {
      console.error('Error fetching program type:', error);
      
      return {
        success: false,
        error: {
          code: ErrorCode.DATABASE_ERROR,
          message: 'Failed to fetch program type',
          details: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }
  }

  /**
   * Update a program type
   */
  async updateProgramType(
    programTypeId: string, 
    data: Partial<ProgramTypeData>
  ): Promise<CreateProgramTypeResult> {
    try {
      // Check if program type exists
      const existing = await this.prisma.programType.findUnique({
        where: { programTypeId }
      });

      if (!existing) {
        return {
          success: false,
          error: {
            code: ErrorCode.RESOURCE_NOT_FOUND,
            message: `Program type with ID '${programTypeId}' not found`
          }
        };
      }

      // Prepare update data
      const updateData = sanitizeForDb({
        ...(data.programTypeName && { programTypeName: data.programTypeName }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.typicalDuration !== undefined && { typicalDuration: data.typicalDuration }),
        ...(data.format !== undefined && { format: data.format }),
        ...(data.targetAudience !== undefined && { targetAudience: data.targetAudience }),
        ...(data.defaultBaseFee !== undefined && { defaultBaseFee: data.defaultBaseFee }),
        ...(data.isEntryLevel !== undefined && { isEntryLevel: data.isEntryLevel }),
        ...(data.isAdvancedLevel !== undefined && { isAdvancedLevel: data.isAdvancedLevel }),
        ...(data.isKidsProgram !== undefined && { isKidsProgram: data.isKidsProgram }),
        ...(data.healthDeclarations !== undefined && { healthDeclarations: data.healthDeclarations }),
        ...(data.isActive !== undefined && { isActive: data.isActive })
      });

      const updated = await this.prisma.programType.update({
        where: { programTypeId },
        data: updateData,
        select: {
          id: true,
          programTypeId: true,
          programTypeName: true,
          description: true,
          typicalDuration: true,
          format: true,
          targetAudience: true,
          defaultBaseFee: true,
          isEntryLevel: true,
          isAdvancedLevel: true,
          isKidsProgram: true,
          healthDeclarations: true,
          isActive: true,
          createdAt: true,
          updatedAt: true
        }
      });

      const responseData: ProgramTypeData = {
        programTypeId: updated.programTypeId,
        programTypeName: updated.programTypeName,
        description: updated.description || undefined,
        typicalDuration: updated.typicalDuration || undefined,
        format: updated.format || undefined,
        targetAudience: updated.targetAudience || undefined,
        defaultBaseFee: updated.defaultBaseFee ? Number(updated.defaultBaseFee) : undefined,
        isEntryLevel: updated.isEntryLevel,
        isAdvancedLevel: updated.isAdvancedLevel,
        isKidsProgram: updated.isKidsProgram,
        healthDeclarations: updated.healthDeclarations || undefined,
        isActive: updated.isActive
      };

      return {
        success: true,
        data: responseData
      };

    } catch (error) {
      console.error('Error updating program type:', error);
      
      return {
        success: false,
        error: {
          code: ErrorCode.DATABASE_ERROR,
          message: 'Failed to update program type',
          details: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }
  }

  /**
   * Test database connection
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.prisma.$connect();
      return true;
    } catch (error) {
      console.error('Database connection test failed:', error);
      return false;
    }
  }

  /**
   * Create batch of items - alias for createProgramTypes for workflow compatibility
   */
  async createBatch(items: ProgramTypeData[]): Promise<CreateProgramTypeResult[]> {
    const result = await this.createProgramTypes(items);
    return result.results;
  }
} 
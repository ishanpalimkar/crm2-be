import { Hono } from 'hono';
import { ProgramTypeService } from '../../../services/program-type.service';
import { 
  ProgramTypesRequest,
  ProgramTypeData,
  PaginationQuery
} from '../../../types/program-types';
import { 
  ValidationRule,
  ErrorCode,
  HttpStatus
} from '../../../types/common';
import { 
  getPrismaClient,
  generateRequestId,
  parsePaginationQuery,
  calculatePagination,
  formatSuccessResponse,
  formatErrorResponse,
  createErrorDetail,
  validateData,
  validationErrorsToErrorDetails
} from '../../../utils';

const app = new Hono();

// Validation rules for program type data
const programTypeValidationRules: ValidationRule[] = [
  {
    field: 'programTypeId',
    required: true,
    type: 'string',
    minLength: 3,
    maxLength: 50,
    pattern: /^ptyp_[a-zA-Z0-9_-]+$/,
    custom: (value) => {
      if (!value.startsWith('ptyp_')) {
        return 'Program type ID must start with "ptyp_"';
      }
      return true;
    }
  },
  {
    field: 'programTypeName',
    required: true,
    type: 'string',
    minLength: 2,
    maxLength: 200
  },
  {
    field: 'description',
    required: false,
    type: 'string',
    maxLength: 1000
  },
  {
    field: 'typicalDuration',
    required: false,
    type: 'string',
    maxLength: 50
  },
  {
    field: 'format',
    required: false,
    type: 'string',
    maxLength: 50
  },
  {
    field: 'targetAudience',
    required: false,
    type: 'string',
    maxLength: 100
  },
  {
    field: 'defaultBaseFee',
    required: false,
    type: 'number',
    custom: (value) => {
      if (value !== undefined && (value < 0 || value > 1000000)) {
        return 'Default base fee must be between 0 and 1,000,000';
      }
      return true;
    }
  },
  {
    field: 'isEntryLevel',
    required: true,
    type: 'boolean'
  },
  {
    field: 'isAdvancedLevel',
    required: true,
    type: 'boolean'
  },
  {
    field: 'isKidsProgram',
    required: true,
    type: 'boolean'
  },
  {
    field: 'healthDeclarations',
    required: false,
    type: 'string',
    maxLength: 500
  },
  {
    field: 'isActive',
    required: true,
    type: 'boolean'
  }
];

/**
 * POST /api/v1/taol/program-types
 * Create or update program types with pagination support
 */
app.post('/', async (c) => {
  const requestId = generateRequestId();
  
  try {
    // Parse request body
    let requestBody: ProgramTypesRequest;
    try {
      requestBody = await c.req.json();
    } catch (error) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.INVALID_PARAMETER,
            'Invalid JSON in request body',
            'Request body must be valid JSON'
          ),
          requestId
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    // Validate request structure
    if (!requestBody.data || !Array.isArray(requestBody.data)) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.INVALID_PARAMETER,
            'Invalid request structure',
            'Request must contain a "data" array with program types'
          ),
          requestId
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    if (requestBody.data.length === 0) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.INVALID_PARAMETER,
            'Empty data array',
            'At least one program type must be provided'
          ),
          requestId
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    if (requestBody.data.length > 50) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.INVALID_PARAMETER,
            'Too many items',
            'Maximum 50 program types can be processed at once'
          ),
          requestId
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    // Validate each program type in the data array
    const allValidationErrors: any[] = [];
    requestBody.data.forEach((programType, index) => {
      const errors = validateData(programType, programTypeValidationRules);
      if (errors.length > 0) {
        allValidationErrors.push({
          index,
          programTypeId: programType.programTypeId || 'unknown',
          errors: validationErrorsToErrorDetails(errors)
        });
      }
    });

    if (allValidationErrors.length > 0) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.VALIDATION_ERROR,
            'Validation failed for one or more program types',
            allValidationErrors
          ),
          requestId
        ),
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    // Parse pagination from URL (for response metadata)
    const url = new URL(c.req.url);
    const pagination = parsePaginationQuery(url);

    // Initialize services
    const prisma = getPrismaClient();
    const programTypeService = new ProgramTypeService({ prisma });

    // Create program types (this will trigger workflow in the future)
    const result = await programTypeService.createProgramTypes(requestBody.data);

    if (!result.success) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.DATABASE_ERROR,
            'Failed to process program types',
            {
              successCount: result.successCount,
              errorCount: result.errorCount,
              errors: result.results.filter(r => !r.success).map(r => r.error)
            }
          ),
          requestId
        ),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    // Prepare response data
    const successfulResults = result.results
      .filter(r => r.success && r.data)
      .map(r => r.data!) as ProgramTypeData[];

    const failedResults = result.results
      .filter(r => !r.success)
      .map(r => r.error);

    // Calculate pagination metadata for the response
    const totalItems = successfulResults.length;
    const paginationMeta = calculatePagination(
      totalItems,
      pagination.currentPage,
      pagination.limit || 10,
      `${url.origin}${url.pathname}`,
      {}
    );

    // Prepare response
    const response = formatSuccessResponse(
      successfulResults,
      {
        pagination: paginationMeta,
        requestId,
        processing: {
          totalSubmitted: requestBody.data.length,
          successCount: result.successCount,
          errorCount: result.errorCount,
          ...(failedResults.length > 0 && { 
            failures: failedResults 
          })
        }
      }
    );

    // Return appropriate status code based on results
    if (result.errorCount > 0 && result.successCount > 0) {
      // Partial success
      return c.json(response, HttpStatus.CREATED);
    } else if (result.errorCount === 0) {
      // Complete success
      return c.json(response, HttpStatus.CREATED);
    } else {
      // All failed (this shouldn't happen due to earlier checks)
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            ErrorCode.DATABASE_ERROR,
            'All program types failed to process',
            failedResults
          ),
          requestId
        ),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

  } catch (error) {
    console.error('Unexpected error in program-types endpoint:', error);
    
    return c.json(
      formatErrorResponse(
        createErrorDetail(
          ErrorCode.INTERNAL_ERROR,
          'An unexpected error occurred',
          error instanceof Error ? error.message : 'Unknown error'
        ),
        requestId
      ),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
});

/**
 * GET /api/v1/taol/program-types
 * Retrieve program types with pagination and filtering
 */
app.get('/', async (c) => {
  const requestId = generateRequestId();
  
  try {
    const url = new URL(c.req.url);
    const pagination = parsePaginationQuery(url);
    
    // Parse filter parameters
    const filters = {
      isActive: url.searchParams.get('isActive') === 'true' ? true : 
                url.searchParams.get('isActive') === 'false' ? false : undefined,
      isEntryLevel: url.searchParams.get('isEntryLevel') === 'true' ? true :
                   url.searchParams.get('isEntryLevel') === 'false' ? false : undefined,
      isAdvancedLevel: url.searchParams.get('isAdvancedLevel') === 'true' ? true :
                      url.searchParams.get('isAdvancedLevel') === 'false' ? false : undefined,
      isKidsProgram: url.searchParams.get('isKidsProgram') === 'true' ? true :
                    url.searchParams.get('isKidsProgram') === 'false' ? false : undefined,
      search: url.searchParams.get('search') || undefined
    };

    // Initialize services
    const prisma = getPrismaClient();
    const programTypeService = new ProgramTypeService({ prisma });

    // Get program types
    const result = await programTypeService.getProgramTypes(pagination, filters);

    if (!result.success) {
      return c.json(
        formatErrorResponse(
          createErrorDetail(
            result.error!.code,
            result.error!.message,
            result.error!.details
          ),
          requestId
        ),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    // Calculate pagination metadata
    const paginationMeta = calculatePagination(
      result.totalCount || 0,
      pagination.currentPage,
      pagination.limit || 10,
      `${url.origin}${url.pathname}`,
      Object.fromEntries(url.searchParams)
    );

    const response = formatSuccessResponse(
      result.data || [],
      {
        pagination: paginationMeta,
        requestId,
        filters
      }
    );

    return c.json(response, HttpStatus.OK);

  } catch (error) {
    console.error('Unexpected error in GET program-types endpoint:', error);
    
    return c.json(
      formatErrorResponse(
        createErrorDetail(
          ErrorCode.INTERNAL_ERROR,
          'An unexpected error occurred',
          error instanceof Error ? error.message : 'Unknown error'
        ),
        requestId
      ),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
});

export default app; 
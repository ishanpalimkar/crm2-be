// Program Type API Types
export interface ProgramTypeData {
  programTypeId: string;
  programTypeName: string;
  description?: string;
  typicalDuration?: string;
  format?: string;
  targetAudience?: string;
  defaultBaseFee?: number;
  isEntryLevel: boolean;
  isAdvancedLevel: boolean;
  isKidsProgram: boolean;
  healthDeclarations?: string;
  isActive: boolean;
}

// Request Types
export interface ProgramTypesRequest {
  data: ProgramTypeData[];
  meta?: {
    pagination?: {
      totalItems?: number;
      currentPage?: number;
      pageSize?: number;
      totalPages?: number;
      links?: {
        next?: string | null;
        prev?: string | null;
      };
    };
    requestId?: string;
  };
}

// Response Types
export interface PaginationMeta {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  links: {
    next: string | null;
    prev: string | null;
  };
}

export interface SuccessResponse<T = any> {
  status: 'success';
  data: T;
  meta?: {
    pagination?: PaginationMeta;
    requestId?: string;
    processedAt?: string;
    [key: string]: any;
  };
}

export interface ErrorDetail {
  code: string;
  message: string;
  details?: string | object;
  field?: string;
  path?: string;
  value?: any;
}

export interface ErrorResponse {
  status: 'fail' | 'error';
  error?: ErrorDetail;
  errors?: ErrorDetail[];
  meta?: {
    requestId?: string;
    [key: string]: any;
  };
}

// Query Parameters
export interface PaginationQuery {
  limit?: number;
  offset?: number;
}

// Database Types (matching updated Prisma schema)
export interface ProgramTypeDbInput {
  programTypeId: string;
  programTypeName: string;
  description?: string;
  typicalDuration?: string;
  format?: string;
  targetAudience?: string;
  defaultBaseFee?: number;
  isEntryLevel: boolean;
  isAdvancedLevel: boolean;
  isKidsProgram: boolean;
  healthDeclarations?: string;
  isActive: boolean;
  metaData?: any;
}

// Workflow Types
export interface WorkflowContext {
  requestId: string;
  data: ProgramTypeData[];
  pagination?: PaginationQuery;
  originalRequest: ProgramTypesRequest;
}

export interface WorkflowResult {
  success: boolean;
  processedCount: number;
  errors: ErrorDetail[];
  data?: ProgramTypeData[];
} 
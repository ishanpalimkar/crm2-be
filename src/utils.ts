// /**
//  * MySQL identifier validation utilities
//  */

import { PrismaPlanetScale } from "@prisma/adapter-planetscale"
import { PrismaClient } from "./generated/prisma"
import { env } from 'cloudflare:workers'
import { 
  PaginationMeta, 
  SuccessResponse, 
  ErrorResponse, 
  ErrorDetail, 
  PaginationQuery 
} from './types/program-types'
import { 
  ValidationRule, 
  ValidationError, 
  HttpStatus, 
  ErrorCode 
} from './types/common'

// // MySQL reserved keywords list
// export const MYSQL_RESERVED_KEYWORDS = [
//   "accessible",
//   "add",
//   "all",
//   "alter",
//   "analyze",
//   "and",
//   "as",
//   "asc",
//   "asensitive",
//   "before",
//   "between",
//   "bigint",
//   "binary",
//   "blob",
//   "both",
//   "by",
//   "call",
//   "cascade",
//   "case",
//   "change",
//   "char",
//   "character",
//   "check",
//   "collate",
//   "column",
//   "condition",
//   "constraint",
//   "continue",
//   "convert",
//   "create",
//   "cross",
//   "cube",
//   "cume_dist",
//   "current_date",
//   "current_time",
//   "current_timestamp",
//   "current_user",
//   "cursor",
//   "database",
//   "databases",
//   "day_hour",
//   "day_microsecond",
//   "day_minute",
//   "day_second",
//   "dec",
//   "decimal",
//   "declare",
//   "default",
//   "delayed",
//   "delete",
//   "dense_rank",
//   "desc",
//   "describe",
//   "deterministic",
//   "distinct",
//   "distinctrow",
//   "div",
//   "double",
//   "drop",
//   "dual",
//   "each",
//   "else",
//   "elseif",
//   "empty",
//   "enclosed",
//   "escaped",
//   "except",
//   "exists",
//   "exit",
//   "explain",
//   "false",
//   "fetch",
//   "first_value",
//   "float",
//   "float4",
//   "float8",
//   "for",
//   "force",
//   "foreign",
//   "from",
//   "fulltext",
//   "function",
//   "generated",
//   "get",
//   "grant",
//   "group",
//   "grouping",
//   "groups",
//   "having",
//   "high_priority",
//   "hour_microsecond",
//   "hour_minute",
//   "hour_second",
//   "if",
//   "ignore",
//   "in",
//   "index",
//   "infile",
//   "inner",
//   "inout",
//   "insensitive",
//   "insert",
//   "int",
//   "int1",
//   "int2",
//   "int3",
//   "int4",
//   "int8",
//   "integer",
//   "interval",
//   "into",
//   "io_after_gtids",
//   "io_before_gtids",
//   "is",
//   "iterate",
//   "join",
//   "json_table",
//   "key",
//   "keys",
//   "kill",
//   "lag",
//   "last_value",
//   "lead",
//   "leading",
//   "leave",
//   "left",
//   "like",
//   "limit",
//   "linear",
//   "lines",
//   "load",
//   "localtime",
//   "localtimestamp",
//   "lock",
//   "long",
//   "longblob",
//   "longtext",
//   "loop",
//   "low_priority",
//   "master_bind",
//   "master_ssl_verify_server_cert",
//   "match",
//   "maxvalue",
//   "mediumblob",
//   "mediumint",
//   "mediumtext",
//   "middleint",
//   "minute_microsecond",
//   "minute_second",
//   "mod",
//   "modifies",
//   "natural",
//   "not",
//   "no_write_to_binlog",
//   "nth_value",
//   "ntile",
//   "null",
//   "numeric",
//   "of",
//   "on",
//   "optimize",
//   "optimizer_costs",
//   "option",
//   "optionally",
//   "or",
//   "order",
//   "out",
//   "outer",
//   "outfile",
//   "over",
//   "partition",
//   "percent_rank",
//   "persist",
//   "persist_only",
//   "precision",
//   "primary",
//   "procedure",
//   "purge",
//   "range",
//   "rank",
//   "read",
//   "reads",
//   "read_write",
//   "real",
//   "recursive",
//   "references",
//   "regexp",
//   "release",
//   "rename",
//   "repeat",
//   "replace",
//   "require",
//   "resignal",
//   "restrict",
//   "return",
//   "revoke",
//   "right",
//   "rlike",
//   "row",
//   "rows",
//   "row_number",
//   "schema",
//   "schemas",
//   "second_microsecond",
//   "select",
//   "sensitive",
//   "separator",
//   "set",
//   "show",
//   "signal",
//   "smallint",
//   "spatial",
//   "specific",
//   "sql",
//   "sqlexception",
//   "sqlstate",
//   "sqlwarning",
//   "sql_big_result",
//   "sql_calc_found_rows",
//   "sql_small_result",
//   "ssl",
//   "starting",
//   "stored",
//   "straight_join",
//   "system",
//   "table",
//   "terminated",
//   "then",
//   "tinyblob",
//   "tinyint",
//   "tinytext",
//   "to",
//   "trailing",
//   "trigger",
//   "true",
//   "undo",
//   "union",
//   "unique",
//   "unlock",
//   "unsigned",
//   "update",
//   "usage",
//   "use",
//   "using",
//   "utc_date",
//   "utc_time",
//   "utc_timestamp",
//   "values",
//   "varbinary",
//   "varchar",
//   "varcharacter",
//   "varying",
//   "virtual",
//   "when",
//   "where",
//   "while",
//   "window",
//   "with",
//   "write",
//   "xor",
//   "year_month",
//   "zerofill",
// ];

// /**
//  * Validates a MySQL identifier (table or column name)
//  * @param name The name to validate
//  * @returns Result object indicating if the name is valid and an optional error message
//  */
// export function isValidMySQLIdentifier(name: string): {
//   valid: boolean;
//   message?: string;
// } {
//   if (!name || typeof name !== "string") {
//     return { valid: false, message: "Name is required" };
//   }

//   if (name.length > 64) {
//     return { valid: false, message: "Name exceeds 64 character limit" };
//   }

//   // Check if it starts with a digit
//   if (/^\d/.test(name)) {
//     return { valid: false, message: "Name cannot start with a number" };
//   }

//   // Check for valid characters
//   if (!/^[a-zA-Z0-9_]+$/.test(name)) {
//     return {
//       valid: false,
//       message: "Name can only contain letters, numbers, and underscores",
//     };
//   }

//   // Check against reserved keywords
//   if (MYSQL_RESERVED_KEYWORDS.includes(name.toLowerCase())) {
//     return { valid: false, message: `"${name}" is a MySQL reserved keyword` };
//   }

//   return { valid: true };
// }

export function getPrismaClient(){
    const adapter = new PrismaPlanetScale({url:env.DATABASE_URL})
  const prisma = new PrismaClient({ adapter })
  return prisma
}

// Utility Functions

/**
 * Generate a unique request ID
 */
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Calculate pagination metadata
 */
export function calculatePagination(
  totalItems: number,
  currentPage: number,
  pageSize: number,
  baseUrl: string,
  additionalParams: Record<string, string> = {}
): PaginationMeta {
  const totalPages = Math.ceil(totalItems / pageSize);
  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;
  
  const buildUrl = (page: number) => {
    const params = new URLSearchParams({
      ...additionalParams,
      offset: ((page - 1) * pageSize).toString(),
      limit: pageSize.toString()
    });
    return `${baseUrl}?${params.toString()}`;
  };

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    links: {
      next: hasNext ? buildUrl(currentPage + 1) : null,
      prev: hasPrev ? buildUrl(currentPage - 1) : null
    }
  };
}

/**
 * Parse pagination query parameters
 */
export function parsePaginationQuery(url: URL): PaginationQuery & { currentPage: number } {
  const limit = Math.min(
    Math.max(parseInt(url.searchParams.get('limit') || '10'), 1), 
    100
  ); // Default 10, max 100
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0'), 0);
  const currentPage = Math.floor(offset / limit) + 1;

  return { limit, offset, currentPage };
}

/**
 * Format success response
 */
export function formatSuccessResponse<T>(
  data: T,
  meta?: SuccessResponse<T>['meta']
): SuccessResponse<T> {
  return {
    status: 'success',
    data,
    meta: {
      ...meta,
      processedAt: new Date().toISOString()
    }
  };
}

/**
 * Format error response
 */
export function formatErrorResponse(
  error: ErrorDetail | ErrorDetail[],
  requestId?: string
): ErrorResponse {
  const isArray = Array.isArray(error);
  
  return {
    status: isArray && error.length > 1 ? 'fail' : 'error',
    ...(isArray ? { errors: error } : { error }),
    meta: {
      requestId,
      timestamp: new Date().toISOString()
    }
  };
}

/**
 * Create error detail object
 */
export function createErrorDetail(
  code: string,
  message: string,
  details?: string | object,
  field?: string,
  value?: any
): ErrorDetail {
  return {
    code,
    message,
    ...(details && { details }),
    ...(field && { field }),
    ...(value !== undefined && { value })
  };
}

/**
 * Validate data against rules
 */
export function validateData(
  data: any,
  rules: ValidationRule[]
): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const rule of rules) {
    const value = data[rule.field];
    
    // Required field validation
    if (rule.required && (value === undefined || value === null || value === '')) {
      errors.push({
        field: rule.field,
        message: `${rule.field} is required`,
        value,
        rule: 'required'
      });
      continue;
    }

    // Skip further validation if field is optional and empty
    if (!rule.required && (value === undefined || value === null || value === '')) {
      continue;
    }

    // Type validation
    if (rule.type) {
      const actualType = Array.isArray(value) ? 'array' : typeof value;
      if (actualType !== rule.type) {
        errors.push({
          field: rule.field,
          message: `${rule.field} must be of type ${rule.type}`,
          value,
          rule: 'type'
        });
        continue;
      }
    }

    // String length validation
    if (typeof value === 'string') {
      if (rule.minLength && value.length < rule.minLength) {
        errors.push({
          field: rule.field,
          message: `${rule.field} must be at least ${rule.minLength} characters long`,
          value,
          rule: 'minLength'
        });
      }
      
      if (rule.maxLength && value.length > rule.maxLength) {
        errors.push({
          field: rule.field,
          message: `${rule.field} must be no more than ${rule.maxLength} characters long`,
          value,
          rule: 'maxLength'
        });
      }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      errors.push({
        field: rule.field,
        message: `${rule.field} format is invalid`,
        value,
        rule: 'pattern'
      });
    }

    // Custom validation
    if (rule.custom) {
      const customResult = rule.custom(value);
      if (customResult !== true) {
        errors.push({
          field: rule.field,
          message: typeof customResult === 'string' ? customResult : `${rule.field} is invalid`,
          value,
          rule: 'custom'
        });
      }
    }
  }

  return errors;
}

/**
 * Convert validation errors to error details
 */
export function validationErrorsToErrorDetails(errors: ValidationError[]): ErrorDetail[] {
  return errors.map(error => createErrorDetail(
    ErrorCode.VALIDATION_ERROR,
    error.message,
    undefined,
    error.field,
    error.value
  ));
}

/**
 * Safe JSON parse with error handling
 */
export function safeJsonParse<T = any>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString);
  } catch {
    return fallback;
  }
}

/**
 * Sanitize data for database insertion
 */
export function sanitizeForDb<T extends Record<string, any>>(data: T): Partial<T> {
  const sanitized: any = { ...data };
  
  // Remove undefined values and trim strings
  Object.keys(sanitized).forEach(key => {
    if (sanitized[key] === undefined) {
      delete sanitized[key];
    } else if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitized[key].trim();
    }
  });
  
  return sanitized as Partial<T>;
}

/**
 * Retry function with exponential backoff
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Exponential backoff
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError!;
}
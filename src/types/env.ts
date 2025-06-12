// Cloudflare Worker Environment Types

export interface Env {
  // Database
  DATABASE_URL: string;
  
  // Environment
  NODE_ENV?: string;
  API_VERSION?: string;
  
  // Workflow Bindings
  PROGRAM_TYPE_WORKFLOW?: any; // Workflow binding for program type processing
  
  // Secrets (these would be configured via wrangler secret put)
  // Add any secrets here as needed
  
  // KV Namespaces (if used in future)
  // MY_KV_NAMESPACE?: KVNamespace;
  
  // R2 Buckets (if used in future)  
  // MY_R2_BUCKET?: R2Bucket;
  
  // D1 Database (if migrating from PlanetScale)
  // MY_D1_DB?: D1Database;
}

// Global declaration for Worker environment
declare global {
  const env: Env;
}

export default Env; 
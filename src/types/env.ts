// Cloudflare Worker Environment Types

// Cloudflare Workflow Instance Interface
export interface WorkflowInstance {
  id: string;
  status: 'running' | 'completed' | 'failed' | 'terminated';
  result?: any;
  error?: { message: string };
}

// Cloudflare Workflow Binding Interface  
export interface WorkflowBinding {
  create(options: { id: string; params: any }): Promise<WorkflowInstance>;
  get(id: string): Promise<WorkflowInstance | null>;
  list(): Promise<WorkflowInstance[]>;
}

export interface Env {
  // Database
  DATABASE_URL: string;
  
  // Environment
  NODE_ENV?: string;
  API_VERSION?: string;
  
  // Workflow Bindings
  PROGRAM_TYPE_WORKFLOW?: WorkflowBinding; // Real Cloudflare Workflow binding
  
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
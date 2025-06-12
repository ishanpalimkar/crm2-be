import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { logger } from 'hono/logger'

import { getPrismaClient } from './utils'

// Import API routes
import programTypesRoutes from './api/v1/taol/program-types'

// Import workflow for global registration
import { ProgramTypeWorkflow } from './workflows/program-type-processor'

const app = new Hono()

// Global middleware
app.use(logger())
app.use(prettyJSON())
app.use('*', cors({
  origin: ['*'], // Configure as needed for production
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposeHeaders: ['X-Total-Count'],
  credentials: false,
  maxAge: 600
}))

// Health check endpoint
app.get('/', (c) => c.json({ 
  message: 'TAOL CRM Backend API', 
  version: '1.0.0',
  status: 'healthy',
  timestamp: new Date().toISOString()
}))

// Global error handler
app.onError((err, c) => {
  console.error('Global error handler:', err)
  
  return c.json({
    status: 'error',
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An internal server error occurred',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    },
    meta: {
      timestamp: new Date().toISOString()
    }
  }, 500)
})

// 404 handler
app.notFound((c) => c.json({ 
  status: 'fail',
  error: {
    code: 'NOT_FOUND',
    message: 'The requested resource was not found',
    path: c.req.path
  },
  meta: {
    timestamp: new Date().toISOString()
  }
}, 404))

// API Routes
const api = new Hono()

// API root endpoint
api.get('/', async (c) => {
  try {
    const prisma = getPrismaClient()
    
    // Test database connection
    await prisma.$connect()
    
    return c.json({ 
      message: "TAOL CRM API v1", 
      status: 'operational',
      database: 'connected',
      endpoints: {
        programTypes: '/api/v1/taol/program-types'
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database connection test failed:', error)
    
    return c.json({
      message: "TAOL CRM API v1",
      status: 'degraded',
      database: 'disconnected',
      error: 'Database connection failed',
      timestamp: new Date().toISOString()
    }, 503)
  }
})

// V1 API Routes
const v1 = new Hono()
const taol = new Hono()

// Mount TAOL specific routes
taol.route('/program-types', programTypesRoutes)

// Mount versioned routes
v1.route('/taol', taol)
api.route('/v1', v1)

// Mount API routes
app.route('/api', api)

// Health check endpoints
app.get('/health', async (c) => {
  try {
    const prisma = getPrismaClient()
    await prisma.$connect()
    
    return c.json({
      status: 'healthy',
      checks: {
        database: 'connected',
        api: 'operational'
      },
      timestamp: new Date().toISOString(),
      uptime: process.uptime ? process.uptime() : 0
    })
  } catch (error) {
    return c.json({
      status: 'unhealthy',
      checks: {
        database: 'disconnected',
        api: 'operational'
      },
      error: 'Database connection failed',
      timestamp: new Date().toISOString()
    }, 503)
  }
})

app.get('/ready', (c) => {
  return c.json({
    status: 'ready',
    message: 'Service is ready to accept requests',
    timestamp: new Date().toISOString()
  })
})

// Export the workflow for Cloudflare Workers
export { ProgramTypeWorkflow }

export default app
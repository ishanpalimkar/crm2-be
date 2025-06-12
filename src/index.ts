import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'

import { getPrismaClient } from './utils'

const app = new Hono()
app.get('/', (c) => c.text('Nothing to see here'))
app.use(prettyJSON())
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

const api = new Hono()
api.use('*', cors())

api.get('/', async (c) => {
  const prisma = getPrismaClient()
  const results = await prisma.user.findMany()
  return c.json({ message: "Hello World !", results })
})

// api.post('/register', async (c) => {
//   const prisma = getPrismaClient()
//   const results = await prisma.registration.create()
//   return c.json({ message: "Registration created", results })
// })

app.route('/api', api)

export default app
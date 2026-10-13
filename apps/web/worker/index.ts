import { createDb, getMetaValue } from '@amarelab/data'
import { Hono } from 'hono'

const app = new Hono<{ Bindings: Env }>().basePath('/api').get('/greeting', async (c) => {
  const db = createDb(c.env.DB)
  const greeting = await getMetaValue(db, 'greeting')
  return c.json({ greeting })
})

export type AppType = typeof app
export default app

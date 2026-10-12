import { Hono } from "hono";

const app = new Hono().basePath("/api").get('/hello', (c) => c.json({ message: 'hi from worker' }))

export default app

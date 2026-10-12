import { env } from 'cloudflare:workers'
import { expect, test } from 'vitest'

import app from '../worker/index.ts'

test('GET /api/greeting returns the value stored in D1', async () => {
  const res = await app.request('/api/greeting', {}, env)

  expect(res.status).toBe(200)
  expect(await res.json()).toEqual({ greeting: 'Hi from d1' })
})

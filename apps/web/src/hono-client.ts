import { hc } from 'hono/client'

import type { AppType } from '../worker/index.ts'

export const honoClient = hc<AppType>('/')

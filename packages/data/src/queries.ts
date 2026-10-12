import { eq } from 'drizzle-orm'

import type { Db } from './db.ts'

import { meta } from './schema.ts'

export async function getMetaValue(db: Db, key: string) {
  const row = await db.select({ value: meta.value }).from(meta).where(eq(meta.key, key)).get()

  return row?.value ?? null
}

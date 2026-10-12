import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const meta = sqliteTable('meta', {
  key: text().primaryKey(),
  value: text().notNull(),
})

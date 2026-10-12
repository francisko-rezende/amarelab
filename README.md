# Amarelab

Tracks the lab test history of the owner's patients. See `CONTEXT.md` for the
vocabulary and `docs/adr/` for the decisions behind the structure.

Deployed at https://amarelab.francisko-smrtlnks.workers.dev

## Structure

- `apps/web`: one Cloudflare Worker serving the React app and the Hono API under `/api`
- `packages/data`: Drizzle schema, queries and migrations, consumed as TypeScript source

## Requirements

Node 22.12 or later and pnpm 12.

## Install

```bash
pnpm install
pnpm --filter @amarelab/web db:migrate:local
```

The second command creates the local D1 database and applies the migrations.

## Run

```bash
pnpm dev
```

Serves the frontend and the API together at http://localhost:5173.

## Test and check

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm fmt:check
```

Tests run inside the Workers runtime against an in-memory D1 database.

## Migrations

1. Change `packages/data/src/schema.ts`.
2. Generate the SQL: `pnpm --filter @amarelab/data generate --name <name>`
3. Apply it locally: `pnpm --filter @amarelab/web db:migrate:local`

After changing `apps/web/wrangler.jsonc`, regenerate the Worker types:

```bash
pnpm --filter @amarelab/web exec wrangler types
```

## Deploy

Needs `wrangler login` once. Apply migrations before deploying.

```bash
pnpm --filter @amarelab/web db:migrate:remote
pnpm --filter @amarelab/web run deploy
```

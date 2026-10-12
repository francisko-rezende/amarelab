# One Worker in a pnpm workspace

The React frontend and the Hono API are deployed together as a single Cloudflare Worker, with the data layer (Drizzle schema, queries, Zod schemas) in a separate workspace package. A solo app gains nothing from independent frontend and API deploys, and one origin avoids CORS and keeps Cloudflare Access to a single application; the workspace split keeps the data layer importable if a second Worker for background work is added later.

## Considered Options

- Separate frontend and API Workers: rejected because of version skew between the two and cross-origin setup behind Access.
- A single package with no workspace: rejected because the data layer would have no enforced boundary.

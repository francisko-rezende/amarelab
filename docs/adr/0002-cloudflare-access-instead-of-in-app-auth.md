# Cloudflare Access instead of in-app auth

The app has no login code: Cloudflare Access gates it at the edge and a single Hono middleware turns the Access identity into a row in our own `users` table, which every patient is owned by. The app is used almost only by its owner, so an allowlist is enough; keeping our own user ids and one middleware means a later move to Better Auth replaces that middleware and adds login pages without touching the data.

## Consequences

- Routes must read the user from request context, never from the Access header directly.
- Data is keyed by `users.id`, never by email.

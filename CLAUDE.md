# CLAUDE.md

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues on `francisko-rezende/amarelab` (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage labels, unchanged. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Tooling

Lint with oxlint and format with oxfmt, both configured at the repo root. Do not add ESLint or Prettier, including through generators and templates; remove them if a tool adds them. After a generator writes files, run `pnpm fmt`.

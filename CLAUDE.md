# CLAUDE.md — marimbas-hub-next

> Repo-specific guidance. Workspace-wide rules en `/Users/enriquemiceli/Documents/MarimbasHome/.claude/CLAUDE.md`.
> Last updated: May 13 2026.

## Negocio que sirve
Hub interno tipo intranet — cards, dashboards y atajos para operaciones cross-app (ops + finanzas + screening). Punto de entrada que centraliza acciones recurrentes.

## Stack
- Framework: Next.js 14.2.35 (App Router)
- Deploy: Vercel project mapped to GitHub repo `marimbashome/marimbas-hub`
- URL prod: https://hub.marimbashome.com
- Branch: main → auto-deploy on push
- Criticality: P1 (internal ops, no expone al guest)

## Comandos
- Run dev: `npm run dev`
- Build local: `npm run build`
- Deploy: `git push origin main`

## Schema / dependencias críticas
- Lee de prácticamente todo Supabase (reservations, guests, properties, kpis canónicos vía `fn_canonical_kpis` RPC).
- Env: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` o `SUPABASE_ANON_KEY` según endpoint.

## Gotchas
- **iCloud lock**: push directo desde el folder iCloud falla — usar fresh clone a `/tmp/marimbas-hub-next` con PAT inline (ver memoria `marimbas_hub_push_workaround.md`).
- **canonical KPI**: no consultar tablas de revenue crudas — siempre via `fn_canonical_kpis` RPC o `monthly_pnl` (SoT).
- **CDMX TZ**: `cdmxNow()` para "today" si compara fechas (mismo bug que admin-dashboard).
- **Combos vs canonical**: properties tienen `rooms_config.kind in ('single','combo')` — filtrar correctamente (ver `canonical_properties_model_apr24_2026.md`).

## Convenciones
- Git author: enrique.miceli@gmail.com.
- Pre-push hook: no instalado, validar manualmente antes de push grande.
- Sentry: no instalado actualmente (no aparece en mapping de may 12 2026).
- Mobile + Desktop parity: required si añades vistas (es hub, todo cards-driven).

## Memoria + Skills relevantes
- Memoria: `marimbas_hub_push_workaround.md`, `canonical_kpi_overhaul_apr27_2026.md`, `revenue_chart_tz_apr30_2026.md`
- Skills: `data:analyze`, `operations:status-report`

## NO hacer
- NO consultar revenue raw — usar fn_canonical_kpis (single SoT).
- NO push directo desde la carpeta iCloud — usar workaround `/tmp` + PAT.
- NO commits sin permiso explícito.

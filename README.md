# marimbas-hub-next

> Landing page Next.js de `marimbashome.com` — versión migrada desde el `index.html` estático original (variante "hub"), con i18n cliente y secciones modulares.

## Línea de negocio

Sitio público de marca. Capta tráfico directo (referidos, búsquedas branded "Marimbas Home Chiapas / CDMX") y reenvía a los canales correctos: huéspedes a `marimbashome.com` propiamente, propietarios a `propietarios.marimbashome.com`. Hero, properties, testimoniales, sección owners.

## Status

- **Producción**: https://hub.marimbashome.com (también sirve `www.marimbashome.com` / `marimbashome.com`)
- **Vercel deploy**: ACTIVO — último deploy READY en `main` (commit a5ccbe1, May 9 2026)
- **Criticality**: P1 (hub interno de ops + landing público de marca)
- **Stack**: Next.js 14.2.35, deploys via GitHub webhook → Vercel (auto-deploy on push to main)

## Criticality

**P1** — hub interno de ops + landing público. Impacto directo si se cae: tráfico de `marimbashome.com` y acceso a operaciones.

## Stack

- Framework: Next.js 14.2.35 (App Router)
- i18n: cliente custom (`lib/i18n.tsx`), ES + EN
- Hosting: Vercel project `marimbas-hub` (team: marimbashome)
- Database: principalmente estático; endpoints internos leen Supabase via service role
- Auth: n/a (hub interno, sin auth de huéspedes)

## Quickstart

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy

Automatizado via Vercel + GitHub. Cada push a `main` triggerea deploy en producción. Ver CLAUDE.md para workaround iCloud lock al pushear.

## Repos relacionados

- `marimbas-web` — sitio publico canonico con blog, guias y booking funnel
- `marimbas-blog` — `marimbashome.com/blog` (guias SEO)
- `propietarios` — `propietarios.marimbashome.com` (B2B captacion)

## Owners

- Negocio: Enrique (enrique@marimbashome.com)
- Code: Enrique + Claude/Cowork agents

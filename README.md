# marimbas-hub-next

> Landing page Next.js de `marimbashome.com` — versión migrada desde el `index.html` estático original (variante "hub"), con i18n cliente y secciones modulares.

## Línea de negocio

Sitio público de marca. Capta tráfico directo (referidos, búsquedas branded "Marimbas Home Chiapas / CDMX") y reenvía a los canales correctos: huéspedes a `marimbashome.com` propiamente, propietarios a `propietarios.marimbashome.com`. Hero, properties, testimoniales, sección owners.

**Nota:** El sitio público canónico hoy es `marimbas-web` (Next 14 + Supabase, con `/guides`, `/properties`, booking funnel). Este repo (`marimbas-hub-next`) parece ser una variante hub más ligera sin deploy fijo en producción — sin `.vercel/project.json` propio.

## URL produccion

Sin deploy activo confirmado. Cualquier traffic de `marimbashome.com` lo sirve `marimbas-web`. Revisar antes de invertir más en este repo: ¿este "next" es un draft, un standalone alterno, o se debe archivar?

## Criticality

**P2** — sitio interno/draft. Cero impacto operativo si se cae.

## Stack

- Framework: Next.js 14 (App Router)
- i18n: cliente custom (`lib/i18n.tsx`), ES + EN
- Hosting: sin Vercel project pinneado en este checkout
- Database: ninguna (estatico, no consume Supabase)
- Auth: n/a

## Quickstart

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy

No automatizado. Si se decide promoverlo, registrar Vercel project y agregar a la tabla de `Planes/Instrucciones/MARIMBAS_MASTER_INSTRUCTIONS_v3.1.md` (seccion 7).

## Repos relacionados

- `marimbas-web` — sitio publico canonico (marimbashome.com)
- `marimbas-blog` — `marimbashome.com/blog` (guias SEO)
- `propietarios` — `propietarios.marimbashome.com` (B2B captacion)

## Owners

- Negocio: Enrique (enrique@marimbashome.com)
- Code: Enrique + Claude/Cowork agents

## Decision pendiente

Workspace review (Apr 19 2026, Registros/2026-W16) listo este repo entre los candidatos a consolidacion. Antes de cambiar codigo aqui, confirmar con Enrique si es: (a) base para reemplazar `marimbas-web`, (b) draft a archivar, (c) version standalone para subdominio especifico.

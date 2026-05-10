# INTEGRATION — Next.js project (cross-cutting rollout 2026-05)

This branch adds **5 new files**. Nothing existing was modified. Production behavior is unchanged until you wire the snippets below.

## What was added

```
.github/workflows/lighthouse.yml   ← runs on Vercel preview deploys
lighthouserc.json                  ← Lighthouse thresholds (warn-only for now)
lib/security-headers.js            ← inert until imported in next.config.js
lib/bundle-analyzer.js             ← inert until ANALYZE=true is set
INTEGRATION.md                     ← this file
```

## How to activate (3 minutes per project)

### Step 1 — Wire security headers in `next.config.js`

Find your `next.config.js` (or `.mjs`). Wrap your existing config with `headers()`:

**BEFORE (typical):**
```js
const nextConfig = {
  output: 'standalone',
}
module.exports = nextConfig
```

**AFTER:**
```js
const securityHeaders = require('./lib/security-headers')

const nextConfig = {
  output: 'standalone',
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}
module.exports = nextConfig
```

If your config already has `headers()`, **merge** — don't replace. Append `securityHeaders` to the existing array.

### Step 2 — (optional) Wire the bundle analyzer

Same file:
```js
const withBundleAnalyzer = require('./lib/bundle-analyzer')
// ...your nextConfig...
module.exports = withBundleAnalyzer(nextConfig)
```

Then install: `npm i -D @next/bundle-analyzer` and run `ANALYZE=true npm run build` when you want to inspect.

### Step 3 — Test locally before merging the PR

```bash
npm run build
npm run start
curl -sI http://localhost:3000 | grep -iE "csp|hsts|x-frame|permissions|x-content"
```

You should see `Content-Security-Policy-Report-Only` listed.

### Step 4 — Deploy preview, watch CSP report-only logs for 1 week

The CSP starts in **Report-Only** mode — it doesn't block anything, only reports violations. After 1 week of clean violation logs, change in `lib/security-headers.js`:

```diff
- { key: 'Content-Security-Policy-Report-Only', value: csp },
+ { key: 'Content-Security-Policy', value: csp },
```

Open a 1-line PR for that flip.

## Rollback

If anything misbehaves: revert step 1 (delete the `headers()` block + the `require('./lib/security-headers')` line). The library file stays — it's harmless when not imported.

## What about Lighthouse CI?

The workflow runs on the Vercel preview of every PR. Right now it's in **warn-only mode** (`continue-on-error: true`). It posts results to PR checks but doesn't block merges. After you've seen 5–10 PRs run cleanly, flip `continue-on-error: false` and bump the score thresholds in `lighthouserc.json`.

## Common allowlist customizations

The CSP in `lib/security-headers.js` already allows:
- `*.supabase.co` (DB + realtime)
- `*.posthog.com` (analytics)
- `*.sentry.io` (errors)
- Google Tag Manager, GA4, AdSense
- `*.vercel.app`, `vercel.live`

If your project loads scripts from another origin (e.g., Stripe, Mapbox, YouTube embeds), add it to `script-src` or `connect-src` in the `csp` array of `lib/security-headers.js`. Errors will appear in the Vercel runtime logs as "Refused to load... violates the following Content Security Policy".

## Questions?

Search ClickUp Master Context for "cross-cutting rollout 2026-05" or ask Enrique.

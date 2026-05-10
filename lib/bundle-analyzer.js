/**
 * Marimbas cross-cutting rollout 2026-05 — bundle analyzer wrapper
 *
 * INERT BY DEFAULT. Run with `ANALYZE=true npm run build` to open the treemap.
 *
 * Usage in next.config.js:
 *   const withBundleAnalyzer = require('./lib/bundle-analyzer')
 *   module.exports = withBundleAnalyzer({ ...yourExistingConfig })
 *
 * Requires: npm i -D @next/bundle-analyzer
 *
 * Lint exceptions: this file MUST be CommonJS (Next.js config files load CJS),
 * and the bare-catch is intentional (we don't care WHY require() failed, only
 * that it did).
 */
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

let withBundleAnalyzer
try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: process.env.CI !== 'true',
  })
} catch {
  // Package not installed — return identity. Safe default so config loads anyway.
  withBundleAnalyzer = (config) => config
}

module.exports = withBundleAnalyzer

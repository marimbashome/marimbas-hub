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
 * Note: this file MUST be CommonJS (Next.js config files load CJS). The
 * blanket eslint-disable below is intentional and portable across both
 * @typescript-eslint and plain-eslint configs.
 */
/* eslint-disable */

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

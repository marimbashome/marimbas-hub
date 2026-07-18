// Cross-cutting rollout 2026-05 — security headers wired in.
// CSP is enforced (lib/security-headers.js) — see file header for audit history.
const securityHeaders = require('./lib/security-headers')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig

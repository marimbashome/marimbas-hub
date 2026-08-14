/**
 * Marimbas cross-cutting rollout 2026-05 — security headers
 *
 * YA ESTA CONECTADO: next.config.js lo importa y lo aplica con headers().
 * Si alguna vez hay que desconectarlo, se quita ese bloque de next.config.js;
 * este archivo por si solo no hace nada.
 *
 * CSP is ENFORCED (2026-07-18 audit). Verified script-src covers every host
 * the site actually loads: GTM (googletagmanager.com), GA4 (google-analytics.com),
 * *.google.com / *.gstatic.com. AdSense was removed (no <ins class="adsbygoogle">
 * anywhere in the repo — third-party cost with zero monetization), so the
 * pagead2.googlesyndication.com / *.googlesyndication.com hosts were dropped too.
 */

const VERCEL = '*.vercel.app vercel.live'
const GOOGLE = 'https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://*.gstatic.com'
const POSTHOG = 'https://*.posthog.com https://us.i.posthog.com https://us-assets.i.posthog.com'
const SUPABASE = 'https://*.supabase.co https://*.supabase.in wss://*.supabase.co'
const SENTRY = 'https://*.sentry.io https://*.ingest.sentry.io'

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GOOGLE} ${POSTHOG} ${VERCEL}`,
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
  `img-src 'self' data: blob: https:`,
  `font-src 'self' data: https://fonts.gstatic.com`,
  `connect-src 'self' ${SUPABASE} ${POSTHOG} ${SENTRY} ${GOOGLE} ${VERCEL}`,
  `frame-src 'self' https://www.youtube.com https://player.vimeo.com`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join('; ')

const securityHeaders = [
  // Enforced (was Report-Only through 2026-07-18; book.marimbashome.com already enforced).
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(self), microphone=(), geolocation=(self), payment=(self), usb=(), accelerometer=(), gyroscope=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

module.exports = securityHeaders
module.exports.csp = csp

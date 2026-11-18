/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        // Statische Medien: 30 Tage Browser-Cache, danach Revalidierung im Hintergrund
        source: '/:dir(landing|og|icons|videos|manuals|Zertifikate|QuickAlert|compliance)/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ]
  },
  async redirects() {
    return [
      // Frueher reine Client-Weiterleitung (fuer Google eine leere Seite) – jetzt 308 auf den Ratgeber.
      {
        source: '/warum-nicht-das-warndreieck',
        destination: '/warnleuchte-auto#warndreieck',
        permanent: true,
      },
      // Alte, nicht mehr gueltige Anleitungs-PDFs (falsche Angaben) auf die Anleitungsseite
      {
        source: '/QuickAlert/QuickAlert_V16_Bedienungsanleitung.pdf',
        destination: '/manual',
        permanent: true,
      },
      {
        source: '/QuickAlert/QuickAlert%20User%20Manual.pdf',
        destination: '/manual',
        permanent: true,
      },
      {
        source: '/compliance/manual-:lang.pdf',
        destination: '/manual',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

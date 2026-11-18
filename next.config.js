/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Frueher reine Client-Weiterleitung (fuer Google eine leere Seite) – jetzt 308 auf den Ratgeber.
      {
        source: '/warum-nicht-das-warndreieck',
        destination: '/warnleuchte-auto#warndreieck',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

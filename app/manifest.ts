import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QuickAlert – Magnetische LED-Warnleuchte fürs Auto',
    short_name: 'QuickAlert',
    description: 'Magnetische LED-Warnleuchte fürs Auto und vernetzte V16-Warnleuchte für Spanien.',
    lang: 'de-DE',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0c0f',
    theme_color: '#0b0c0f',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}

/**
 * Produktvideos der Website.
 *
 * Ablage: `public/videos/<datei>` (MP4, H.264) plus Vorschaubild `<datei-ohne-endung>.jpg`.
 * Ein Video erscheint auf der Website und in den strukturierten Daten (VideoObject)
 * nur, wenn beide Dateien beim Build vorhanden sind – fehlende Dateien brechen nichts.
 *
 * Quelle der Inhalte: Amazon-Produktvideos vom 15.11.2026 und Instagram-Reel
 * (Notion: „Amazon Ads & Coupon Q4 2026“ › Produktvideos).
 */

import { SITE_URL } from '@/lib/seo'

export type SiteVideo = {
  id: string
  file: string
  poster: string
  title: string
  description: string
  /** ISO-8601-Dauer, z. B. PT24S */
  duration: string
  uploadDate: string
  orientation: 'landscape' | 'portrait'
  product: 'base' | 'pro' | 'both'
}

export const VIDEO_CATALOG: SiteVideo[] = [
  {
    id: 'base',
    file: '/videos/quickalert-base.mp4',
    poster: '/videos/quickalert-base.jpg',
    title: 'QuickAlert BASE: 360° Warnlicht mit Magnetfuß',
    description:
      'Die magnetische LED-Warnleuchte fürs Auto im Überblick: 360°-Warnlicht in Amber, weiße Taschenlampe, starker Magnetfuß. Aus der Tür greifen, aufs Dach setzen, einschalten.',
    duration: 'PT24S',
    uploadDate: '2026-11-15',
    orientation: 'landscape',
    product: 'base',
  },
  {
    id: 'pro',
    file: '/videos/quickalert-pro.mp4',
    poster: '/videos/quickalert-pro.jpg',
    title: 'QuickAlert PRO: V16-Warnleuchte mit GPS',
    description:
      'Die vernetzte V16-Warnleuchte für Spanien im Überblick: V16 nach DGT 3.0, GPS und Mobilfunk (NB-IoT), ein Knopf, sofort aktiv. Zertifiziert nach IDIADA PC26020115.',
    duration: 'PT24S',
    uploadDate: '2026-11-15',
    orientation: 'landscape',
    product: 'pro',
  },
  {
    id: 'reel',
    file: '/videos/quickalert-reel.mp4',
    poster: '/videos/quickalert-reel.jpg',
    title: 'QuickAlert in 38 Sekunden: BASE und PRO im Einsatz',
    description:
      'Kurzvideo: Warnleuchte aufs Autodach setzen und sofort gesehen werden. BASE für Deutschland, PRO als V16-Warnleuchte für Spanien.',
    duration: 'PT38S',
    uploadDate: '2026-11-15',
    orientation: 'portrait',
    product: 'both',
  },
]

export function videoJsonLd(video: SiteVideo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: [`${SITE_URL}${video.poster}`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: `${SITE_URL}${video.file}`,
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

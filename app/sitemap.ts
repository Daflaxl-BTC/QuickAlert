import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// Feste Aenderungsdaten statt `new Date()`: sonst meldet jede Auslieferung
// alle Seiten als geaendert, und Google ignoriert lastModified irgendwann ganz.
const PAGES: { path: string; lastModified: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '', lastModified: '2026-11-18', changeFrequency: 'weekly', priority: 1 },
  { path: '/v16-warnleuchte', lastModified: '2026-11-18', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/warnleuchte-auto', lastModified: '2026-11-18', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ratgeber', lastModified: '2026-11-18', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/warndreieck-abstand', lastModified: '2026-11-18', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/panne-autobahn', lastModified: '2026-11-18', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/manual', lastModified: '2026-11-18', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/doc/base', lastModified: '2026-06-18', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/doc/pro', lastModified: '2026-06-18', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/impressum', lastModified: '2026-11-18', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/datenschutz', lastModified: '2026-11-18', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/agb', lastModified: '2026-11-18', changeFrequency: 'yearly', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}

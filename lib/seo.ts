/**
 * Zentrale SEO-Daten: Basis-URL, Keyword-Leitlinie und JSON-LD-Bausteine.
 *
 * Keyword-Leitlinie (Compliance, siehe .cursorrules):
 *  - "V16" / "V16-Warnleuchte" nur fuer QuickAlert PRO (IDIADA PC26020115, Spanien)
 *    oder in neutral-informativem Kontext verwenden.
 *  - QuickAlert BASE wird als "LED-Warnleuchte fuers Auto" / "Pannenleuchte"
 *    beworben, niemals als V16 oder homologiert.
 */

import { amazonProductUrl } from '@/lib/amazon'

// Kanonische Domain = Vercel-Primaerdomain. quickalert.eu leitet bei Vercel auf www weiter;
// Canonicals, Sitemap und Schema muessen deshalb auf www zeigen, sonst widersprechen sie sich.
export const SITE_URL = 'https://www.quickalert.eu'
export const SITE_NAME = 'QuickAlert'

export const OG_IMAGE = {
  url: '/og/quickalert-og.jpg',
  width: 1200,
  height: 630,
  alt: 'QuickAlert magnetische LED-Warnleuchte fürs Auto mit leuchtendem 360°-LED-Ring',
}

type Faq = { q: string; a: string }

export const PRODUCTS = {
  base: {
    name: 'QuickAlert BASE – magnetische LED-Warnleuchte fürs Auto',
    description:
      'Magnetische LED-Warnleuchte fürs Autodach mit 360° Amber-LED-Ring. Lichtparameter nach ECE R65 (laut IDIADA-Tests), Neodym-Magnetfuß, IP54, Standard-Batterien inklusive. Zusätzliche Absicherung zum Warndreieck in Deutschland.',
    image: [`${SITE_URL}/landing/amazon/base-01.jpg`, `${SITE_URL}/landing/amazon/base-04.jpg`],
    gtin13: '4270005258300',
    asin: 'B0HFGL3YC5',
    url: () => amazonProductUrl('base'),
  },
  pro: {
    name: 'QuickAlert PRO – V16-Warnleuchte (V16 conectada) mit GPS für Spanien',
    description:
      'Vernetzte V16-Warnleuchte für Spanien: zertifiziert nach IDIADA PC26020115, automatische GPS-Standortmeldung an die DGT 3.0, 12 Jahre eSIM inklusive, magnetisch, IP54.',
    image: [`${SITE_URL}/landing/amazon/pro-01.jpg`, `${SITE_URL}/landing/amazon/pro-07.jpg`],
    gtin13: '4270005258317',
    asin: 'B0HFGRRV8D',
    url: () => amazonProductUrl('pro'),
  },
} as const

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/QuickAlert-Logo-mit-Text.png`,
    sameAs: ['https://www.instagram.com/quickalert_germany'],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export function productJsonLd(key: keyof typeof PRODUCTS) {
  const p = PRODUCTS[key]
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product-${key}`,
    name: p.name,
    description: p.description,
    image: p.image,
    gtin13: p.gtin13,
    brand: { '@type': 'Brand', name: SITE_NAME },
    sku: p.asin,
    category: 'Auto & Motorrad > Pannenhilfe > Warnleuchten',
    // Bewusst ohne Offer/Preis: Der Preis wird bei Amazon laufend angepasst (Preisregel,
    // Coupons, Aktionen). Ein fester Preis in den Daten waere sofort falsch und widerspraeche
    // der Seite, die keinen Preis nennt (Google-Richtlinie: Daten = sichtbarer Inhalt).
    url: p.url(),
  }
}

export function faqJsonLd(items: readonly Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function articleJsonLd({
  path,
  title,
  description,
  image,
  published = '2026-11-18',
  modified = '2026-11-18',
}: {
  path: string
  title: string
  description: string
  image: string
  published?: string
  modified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'de-DE',
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: `${SITE_URL}${image}`,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

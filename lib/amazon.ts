/**
 * Zentrale Amazon-Links fuer alle Kauf-CTAs der Website.
 *
 * Aenderungen an den Listings ausschliesslich hier pflegen – die Seiten
 * importieren nur `amazonUrl()` und `AMAZON_LINK_REL`.
 *
 * Amazon Attribution (Brand Referral Bonus):
 *   Die Links tragen Attribution-Parameter (`maas`, `ref_=aa_maas`, `tag=maas`).
 *   Damit misst Amazon Ads, welche Seitenaufrufe, Warenkorb-Aktionen und Kaeufe
 *   von quickalert.eu kommen; nach Freischaltung des Markenempfehlungsbonus wird
 *   darueber auch der Bonus gutgeschrieben.
 *   Quelle: Amazon Ads › Amazon Attribution, Kampagne „QuickAlert Referral Links 2026“
 *   (ID 592944693576438188), Anzeigengruppen „Website“, Stand 18.11.2026.
 *   Alle Kanal-Links: Notion › QuickAlert General Roadmap › QuickAlert Referral-Links.
 *   Links unveraendert verwenden, keine weiteren Parameter anhaengen.
 *
 *   Ein PartnerNet-/Associates-Tag ist bewusst NICHT eingebaut: Amazon wertet je
 *   Link nur einen `tag`-Parameter aus, Attribution und Partnerprovision schliessen
 *   sich gegenseitig aus.
 *
 * Uebersteuerung ohne Code-Aenderung (optional):
 *   Vercel-Umgebungsvariablen `NEXT_PUBLIC_AMAZON_URL_BASE` / `NEXT_PUBLIC_AMAZON_URL_PRO`
 *   (vollstaendige Amazon-URL). Nur oeffentliche Werte: NEXT_PUBLIC_* landet im Browser-Code.
 */

export type AmazonProduct = 'base' | 'pro' | 'store'

const ASIN = {
  base: 'B0HFGL3YC5',
  pro: 'B0HFGRRV8D',
} as const

// Attribution-Links der Anzeigengruppen „Website BASE“ / „Website PRO“ (Kanal Display).
const ATTRIBUTION_URLS = {
  base: 'https://www.amazon.de/dp/B0HFGL3YC5?maas=maas_adg_E9A6C6182D4DEF9D8FF07347BE164E2E_afap_abs&ref_=aa_maas&tag=maas',
  pro: 'https://www.amazon.de/dp/B0HFGRRV8D?maas=maas_adg_67337FE880FB07FE0BD3C8937DF1A9A2_afap_abs&ref_=aa_maas&tag=maas',
} as const

function isAmazonUrl(value: string | undefined): value is string {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && /(^|\.)amazon\.(de|es|com|fr|it|nl)$/.test(url.hostname)
  } catch {
    return false
  }
}

// process.env.NEXT_PUBLIC_* muss woertlich stehen, damit Next.js den Wert beim Build einsetzt.
const ENV_URLS = {
  base: process.env.NEXT_PUBLIC_AMAZON_URL_BASE,
  pro: process.env.NEXT_PUBLIC_AMAZON_URL_PRO,
}

const AMAZON_LINKS: Record<AmazonProduct, string> = {
  base: isAmazonUrl(ENV_URLS.base) ? ENV_URLS.base : ATTRIBUTION_URLS.base,
  pro: isAmazonUrl(ENV_URLS.pro) ? ENV_URLS.pro : ATTRIBUTION_URLS.pro,
  // Allgemeine Kauf-CTAs (Navigation, Abschluss-CTA) zeigen auf das BASE-Listing,
  // das in Deutschland relevante Produkt. Sobald ein Brand Store existiert, hier eintragen.
  store: isAmazonUrl(ENV_URLS.base) ? ENV_URLS.base : ATTRIBUTION_URLS.base,
}

/** Kanonische Produkt-URL ohne Tracking-Parameter (fuer strukturierte Daten). */
export function amazonProductUrl(product: 'base' | 'pro'): string {
  return `https://www.amazon.de/dp/${ASIN[product]}`
}

/**
 * rel-Attribut fuer alle Amazon-Links. Eigene Produkte, keine Partnerprovision:
 * daher kein `sponsored`, aber kein Referrer-Leak und kein window.opener.
 */
export const AMAZON_LINK_REL = 'noopener noreferrer'

export function amazonUrl(product: AmazonProduct = 'store'): string {
  return AMAZON_LINKS[product]
}

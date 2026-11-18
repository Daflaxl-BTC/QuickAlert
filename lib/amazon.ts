/**
 * Zentrale Amazon-Links fuer alle Kauf-CTAs der Website.
 *
 * Aenderungen an den Listings ausschliesslich hier pflegen – die Seiten
 * importieren nur `amazonUrl()` und `AMAZON_LINK_REL`.
 *
 * Partner-Tag (Amazon PartnerNet / Associates):
 *   Der persoenliche Tracking-Tag (Format `xxxxx-21`) wird an jeden Link als
 *   `?tag=` angehaengt. Pflege bevorzugt ueber die Vercel-Umgebungsvariable
 *   `NEXT_PUBLIC_AMAZON_PARTNER_TAG`; alternativ direkt in `FALLBACK_PARTNER_TAG`.
 *   Ist kein gueltiger Tag gesetzt, werden die Links unveraendert ausgegeben
 *   und der Partnerhinweis im Footer bleibt ausgeblendet.
 *
 * Brand Referral Bonus (Amazon Attribution):
 *   Attribution-Parameter (`maas`, `ref_`, `tag=maas`) koennen je Listing in
 *   `ATTRIBUTION` hinterlegt werden. Sind sie gesetzt, haben sie Vorrang vor dem
 *   Partner-Tag, weil Amazon nur einen `tag`-Parameter je Link auswertet.
 */

export type AmazonProduct = 'base' | 'pro' | 'store'

const AMAZON_LINKS: Record<AmazonProduct, string> = {
  // QuickAlert BASE (Deutschland) – batteriebetriebene LED-Warnleuchte
  base: 'https://www.amazon.de/dp/B0HFGL3YC5',
  // QuickAlert PRO (Spanien) – vernetzte V16-Warnleuchte, homologiert
  pro: 'https://www.amazon.de/dp/B0HFGRRV8D',
  // Allgemeine Kauf-CTAs (Navigation, Abschluss-CTA) – zeigen auf das BASE-Listing.
  // Sobald ein Amazon Brand Store existiert, hier dessen URL eintragen.
  store: 'https://www.amazon.de/dp/B0HFGL3YC5',
}

/** Persoenlicher PartnerNet-Tag, falls keine Umgebungsvariable gesetzt ist. */
const FALLBACK_PARTNER_TAG = ''

/** Optionale Amazon-Attribution-Parameter je Listing (Brand Referral Bonus). */
const ATTRIBUTION: Partial<Record<AmazonProduct, Record<string, string>>> = {}

const PARTNER_TAG_PATTERN = /^[a-z0-9][a-z0-9-]*-2[0-9]$/i

function resolvePartnerTag(): string {
  const raw = (process.env.NEXT_PUBLIC_AMAZON_PARTNER_TAG ?? FALLBACK_PARTNER_TAG).trim()
  return PARTNER_TAG_PATTERN.test(raw) ? raw : ''
}

export const AMAZON_PARTNER_TAG = resolvePartnerTag()

/** true, sobald Links mit Partner-Tag ausgespielt werden (steuert den Pflichthinweis). */
export const HAS_AMAZON_PARTNER_TAG = AMAZON_PARTNER_TAG !== ''

/**
 * rel-Attribut fuer alle Amazon-Links. `sponsored` kennzeichnet
 * provisionierte Links gegenueber Suchmaschinen (Google-Richtlinie).
 */
export const AMAZON_LINK_REL = HAS_AMAZON_PARTNER_TAG
  ? 'sponsored noopener noreferrer'
  : 'noopener noreferrer'

export function amazonUrl(product: AmazonProduct = 'store'): string {
  const url = new URL(AMAZON_LINKS[product])
  const attribution = ATTRIBUTION[product]

  if (attribution && Object.keys(attribution).length > 0) {
    for (const [key, value] of Object.entries(attribution)) url.searchParams.set(key, value)
  } else if (HAS_AMAZON_PARTNER_TAG) {
    url.searchParams.set('tag', AMAZON_PARTNER_TAG)
  }

  return url.toString()
}

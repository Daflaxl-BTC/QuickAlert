/**
 * Zentrale Amazon-Links fuer alle Kauf-CTAs der Landingpage.
 *
 * Aenderungen an den Listings ausschliesslich hier pflegen – die Seiten
 * importieren nur noch `amazonUrl()`.
 *
 * WICHTIG (Brand Referral Bonus): Damit ein Klick von quickalert.eu fuer den
 * BRB angerechnet wird, muessen die URLs Amazon-Attribution-Tags tragen
 * (`?maas=...&ref_=aa_maas&tag=maas`). Ein reiner /dp/<ASIN>-Link wird nicht
 * getrackt. Die Tags werden in der Amazon-Attribution-Konsole je Listing
 * erzeugt und hier eingesetzt.
 */

export type AmazonProduct = 'base' | 'pro' | 'store'

const AMAZON_LINKS: Record<AmazonProduct, string> = {
  // QuickAlert BASE (Deutschland) – batteriebetriebene LED-Warnleuchte
  base: 'https://www.amazon.de/dp/B0HFGL3YC5',
  // QuickAlert PRO (Spanien) – vernetzte LED-Warnleuchte, homologiert
  pro: 'https://www.amazon.de/dp/B0HFGRRV8D',
  // Allgemeine Kauf-CTAs (Navigation, Abschluss-CTA) – zeigen auf das BASE-Listing.
  // Sobald ein Amazon Brand Store existiert, hier dessen URL eintragen.
  store: 'https://www.amazon.de/dp/B0HFGL3YC5',
}

export function amazonUrl(product: AmazonProduct = 'store'): string {
  return AMAZON_LINKS[product]
}

/**
 * Freigegebene Bedienungsanleitungen (Stand 18.06.2026, Notion:
 * „Bedienungsanleitungen freigegeben – BASE-DE, PRO-DE, PRO-ES“).
 *
 * Online-Fassung: Importeur-Adresse durch die c/o-Adresse aus dem Impressum ersetzt
 * (Privatadresse nicht oeffentlich). Gedruckte Fassung bleibt unveraendert.
 *
 * Ablage: public/manuals/<file>. Eine Anleitung erscheint auf /manual erst, wenn die
 * Datei beim Build vorhanden ist. Nie die alte Fassung „QuickAlert V16 Warnleuchte“
 * verwenden (falsche IDIADA-Nummer, 220 km/h, >1 km, IP64, AA fuer BASE).
 */
export type Manual = {
  product: 'base' | 'pro'
  lang: string
  langCode: 'DE' | 'ES' | 'EN'
  file: string
  /** Format-Hinweis fuer die Anzeige */
  format: string
  facts: string
}

export const MANUAL_CATALOG: Manual[] = [
  {
    product: 'base',
    lang: 'Deutsch',
    langCode: 'DE',
    file: '/manuals/QuickAlert-BASE-Bedienungsanleitung-DE.pdf',
    format: 'A4-Faltblatt, PDF',
    facts: 'Modell CH-400-2 · 3× AAA (LR03) · IP54 · weiße Taschenlampe',
  },
  {
    product: 'pro',
    lang: 'Deutsch',
    langCode: 'DE',
    file: '/manuals/QuickAlert-PRO-Bedienungsanleitung-DE.pdf',
    format: 'A4-Faltblatt, PDF',
    facts: 'Modell CH-019 · 3× AA (LR6) · IP54 · IDIADA PC26020115',
  },
  {
    product: 'pro',
    lang: 'Español',
    langCode: 'ES',
    file: '/manuals/QuickAlert-PRO-Manual-ES.pdf',
    format: 'A4-Faltblatt, PDF',
    facts: 'Modelo CH-019 · 3× AA (LR6) · IP54 · IDIADA PC26020115',
  },
]

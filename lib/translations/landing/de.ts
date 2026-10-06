// Texte der Landingpage (Redesign 2026). Produktfakten siehe .cursorrules.
export const landing = {
  nav: {
    how: "So funktioniert's",
    features: 'Technik',
    models: 'Modelle',
    faq: 'Fragen',
    buy: 'Bei Amazon kaufen',
    buyShort: 'Kaufen',
    language: 'Sprache wählen',
    home: 'QuickAlert Startseite',
    backToTop: 'Nach oben',
  },

  hero: {
    status: 'Jetzt bei Amazon erhältlich',
    statusSub: 'BASE & PRO',
    titleA: 'Sichtbar, bevor es',
    titleAccent: 'zu spät',
    // Fuehrendes Leerzeichen ist Absicht (EN endet direkt mit Punkt)
    titleB: ' ist.',
    text: 'Die magnetische LED-Warnleuchte fürs Autodach. Aus dem Fenster greifen, aufsetzen, einschalten – und der Verkehr hinter dir sieht die Gefahr, ohne dass du die Fahrbahn betrittst.',
    ctaPrimary: 'BASE bei Amazon',
    ctaSecondary: 'Modelle vergleichen',
    trust: ['Neodym-Magnetfuß', '360° LED-Ring', 'IP54 wetterfest'],
    imageAlt: 'QuickAlert BASE mit Verpackung und leuchtendem LED-Ring',
    imageAltPro: 'QuickAlert PRO mit automatischer GPS-Standortmeldung',
  },

  marquee: {
    label: 'Gemacht für',
    items: [
      'Pkw mit Stahldach',
      'Transporter & Vans',
      'Wohnmobile',
      'Handschuhfach-Format',
      'Ohne Werkzeug',
      'Ohne App',
      'Standard-Batterien',
      'Nacht, Regen & Nebel',
    ],
  },

  problem: {
    label: 'Das Problem',
    textA: 'Ein Warndreieck aufzustellen heißt: aussteigen und 150 Meter und mehr an der Fahrbahn entlanglaufen – im Dunkeln, bei Regen, neben Verkehr mit Tempo 120.',
    textB: 'QuickAlert dreht das um. Das Warnsignal sitzt dort, wo du bist –',
    textAccent: 'auf dem Dach.',
    statsTitle: 'Die Realität in Zahlen (2024)',
    link: 'Warum das Warndreieck allein nicht reicht',
  },

  steps: {
    label: 'So funktioniert es',
    titleA: 'Drei Handgriffe.',
    titleB: 'Kein Fußweg in die Gefahrenzone.',
    items: [
      {
        title: 'Griffbereit',
        text: 'Klein genug für Handschuh- oder Türfach. Immer da, wenn du es brauchst.',
      },
      {
        title: 'Aufs Dach setzen',
        text: 'Durchs offene Fenster aufs Stahldach – der Neodym-Magnetfuß haftet sofort. Ohne Werkzeug.',
      },
      {
        title: 'Einschalten',
        text: 'Ein Knopfdruck, und der Amber-LED-Ring warnt rundum – auch aus großer Entfernung sichtbar.',
      },
    ],
    note: 'Das Warndreieck bleibt in Deutschland Pflicht. QuickAlert sorgt dafür, dass du gesehen wirst, bevor es steht.',
  },

  features: {
    label: 'Technik',
    titleA: 'Gebaut für den Moment,',
    titleB: 'in dem alles schiefgeht.',
    intro: 'Keine Spielerei, kein Aufbau. Ein robustes Gerät, das im Ernstfall einfach funktioniert.',
    ring: {
      badge: 'Herzstück',
      title: '360° LED-Ring',
      text: 'Amber-Warnlicht in alle Richtungen. Die Lichtparameter erfüllen ECE R65 – bestätigt durch Tests bei IDIADA.',
    },
    magnet: {
      title: 'Neodym-Magnetfuß',
      text: 'Hält sicher auf dem Stahldach. Getestet bei einer Windlast von 180 Pa.',
    },
    weather: {
      title: 'IP54 wetterfest',
      text: 'Geschützt gegen Spritzwasser und Staub. Einsatzbereit von −10 °C bis +50 °C.',
    },
    battery: {
      title: 'Standard-Batterien',
      text: 'Handelsübliche Alkaline-Batterien, bereits inklusive. Keine Ladezeit, kein leerer Akku im Ernstfall.',
    },
    compact: {
      title: 'Handschuhfach-Format',
      text: 'Kompakt, robust, sofort griffbereit. Kein Aufbau, kein Zubehör.',
    },
    pro: {
      badge: 'Nur PRO · Spanien',
      title: 'GPS + eSIM',
      text: 'Meldet den Standort bei Aktivierung automatisch an die DGT 3.0. 12 Jahre Konnektivität inklusive – ohne Vertrag, ohne App.',
    },
  },

  specs: {
    label: 'Im Detail',
    titleA: 'Technik, die im Ernstfall',
    titleB: 'einfach funktioniert.',
    text: 'Geprüft nach europäischen Standards, dokumentiert mit Zertifikaten. Alle Nachweise findest du unten auf dieser Seite.',
    imageAlt: 'QuickAlert BASE – geprüfte Sicherheit',
    rows: [
      { label: 'Lichtquelle', value: '360° LED-Ring', sub: 'Amber' },
      { label: 'Lichtparameter', value: 'ECE R65', sub: 'laut IDIADA-Tests' },
      { label: 'Befestigung', value: 'Neodym-Magnetfuß', sub: 'für Stahlflächen' },
      { label: 'Schutzart', value: 'IP54', sub: 'Spritzwasser & Staub' },
      { label: 'Stromversorgung', value: 'Standard-Batterien', sub: 'Alkaline, inklusive' },
      { label: 'Betriebstemperatur', value: '−10 °C bis +50 °C', sub: 'ganzjährig' },
      { label: 'Windstabilität', value: '180 Pa', sub: 'getestet' },
    ],
  },

  models: {
    label: 'Modelle',
    titleA: 'Zwei Modelle.',
    titleB: 'Ein Ziel: gesehen werden.',
    intro: 'BASE als zusätzliche Absicherung für Deutschland. PRO als vernetzte V16-Warnleuchte für Spanien.',
    priceNote: 'Einmalig · aktueller Preis bei Amazon',
    base: {
      country: 'Deutschland',
      name: 'QuickAlert BASE',
      tagline: 'Die schnelle Absicherung – noch bevor das Warndreieck steht.',
      price: '26,99 €',
      imageAlt: 'QuickAlert BASE Warnleuchte',
      features: [
        '360° Amber-LED-Ring (ECE R65, laut IDIADA-Tests)',
        'Neodym-Magnetfuß – haftet sofort',
        'IP54 Spritzwasser- & Staubschutz',
        'Standard-Batterien inklusive',
        'Kompakt fürs Handschuhfach',
      ],
      cta: 'BASE bei Amazon kaufen',
    },
    pro: {
      badge: 'Vernetzt',
      country: 'Spanien',
      name: 'QuickAlert PRO',
      tagline: 'V16 conectada – ersetzt in Spanien das Warndreieck.',
      price: '39,99 €',
      imageAlt: 'QuickAlert PRO mit Verpackung',
      features: [
        'Alle Funktionen der BASE',
        'Integriertes GPS-Modul',
        'Automatische Meldung an die DGT 3.0',
        '12 Jahre eSIM inklusive',
        'Zertifiziert: IDIADA PC26020115',
      ],
      note: 'GPS-Meldung, eSIM und DGT-Anbindung funktionieren ausschließlich in Spanien.',
      cta: 'PRO bei Amazon kaufen',
    },
  },

  compare: {
    label: 'Vergleich',
    title: 'BASE oder PRO?',
    feature: 'Funktion',
    market: 'Markt',
    price: 'Preis',
    rows: [
      { feature: '360° Amber-LED-Ring', base: true, pro: true },
      { feature: 'Lichtparameter nach ECE R65 (laut IDIADA)', base: true, pro: true },
      { feature: 'Neodym-Magnetfuß', base: true, pro: true },
      { feature: 'IP54 wetterfest', base: true, pro: true },
      { feature: 'Standard-Batterien inklusive', base: true, pro: true },
      { feature: 'V16-Zertifikat Spanien (IDIADA PC26020115)', base: false, pro: true },
      { feature: 'GPS-Standortmeldung an DGT 3.0', base: false, pro: true },
      { feature: '12 Jahre eSIM inklusive', base: false, pro: true },
    ],
  },

  legal: {
    label: 'Rechtslage',
    titleA: 'Klar geregelt.',
    titleB: 'In beiden Ländern.',
    germany: {
      name: 'Deutschland',
      text: 'Das Warndreieck bleibt Pflicht (§ 53a StVZO). QuickAlert BASE ist die zusätzliche Absicherung, die sofort leuchtet – noch bevor du das Dreieck aufstellen kannst.',
    },
    spain: {
      name: 'Spanien',
      text: 'Seit 01.01.2026 ist die vernetzte V16-Warnleuchte Pflicht. QuickAlert PRO ist nach IDIADA PC26020115 zertifiziert und meldet die Panne automatisch an die DGT 3.0.',
    },
    certLink: 'Alle Zertifikate & Nachweise ansehen',
  },

  faq: {
    label: 'Fragen',
    title: 'Was du wahrscheinlich wissen willst.',
    contact: 'Noch etwas offen?',
    contactLink: 'Schreib uns per WhatsApp',
    items: [
      {
        q: 'Ersetzt QuickAlert das Warndreieck?',
        a: 'In Deutschland nicht: Das Warndreieck bleibt Pflicht. QuickAlert BASE ist die zusätzliche Absicherung, die sofort leuchtet – noch bevor das Dreieck steht. In Spanien ersetzt die vernetzte V16-Leuchte seit 01.01.2026 das Warndreieck. Dafür ist QuickAlert PRO gemacht.',
      },
      {
        q: 'Kann ich die BASE in Spanien als V16 nutzen?',
        a: 'Nein. Die BASE hat kein GPS und keine DGT-Anbindung und ist in Spanien nicht als V16 conectada zugelassen. Für Spanien brauchst du die PRO.',
      },
      {
        q: 'Welche Batterien brauche ich?',
        a: 'Handelsübliche Alkaline-Batterien – sie sind im Lieferumfang enthalten. Den genauen Typ findest du in der Bedienungsanleitung. Ersatz bekommst du überall, kein Akku ist im Ernstfall leer.',
      },
      {
        q: 'Hält der Magnet auf jedem Auto?',
        a: 'Der Neodym-Magnetfuß haftet auf Stahl. Auf Dächern aus Aluminium, Kunststoff oder Glas (z. B. Panoramadach) hält er nicht – setz die Leuchte dann auf eine andere Stahlfläche der Karosserie, etwa die Motorhaube.',
      },
      {
        q: 'Braucht die PRO eine App oder einen Vertrag?',
        a: 'Nein. Die eSIM ist für 12 Jahre inklusive. Bei Aktivierung wird der Standort automatisch an die DGT-3.0-Plattform übermittelt – ohne Smartphone, ohne Vertrag.',
      },
      {
        q: 'Wo kann ich QuickAlert kaufen?',
        a: 'Direkt bei Amazon – BASE und PRO. Händler und Flotten erreichen uns per WhatsApp.',
      },
    ],
  },

  gallery: {
    label: 'Produkt im Detail',
    titleA: 'Alles auf einen Blick.',
    titleB: 'So wie auf Amazon.',
    intro: 'Die Produktbilder aus unseren Amazon-Listings – mit kurzer Erklärung zu jedem Detail.',
    tabBase: 'BASE · Deutschland',
    tabPro: 'PRO · Spanien',
    prev: 'Vorheriges Bild',
    next: 'Nächstes Bild',
    show: 'Bild anzeigen',
    buyBase: 'BASE bei Amazon ansehen',
    buyPro: 'PRO bei Amazon ansehen',
    base: [
      { title: 'QuickAlert BASE', text: 'Die Notfall-Warnleuchte mit Verpackung – kompakt, magnetisch und sofort einsatzbereit.' },
      { title: 'Sichtbar, bevor es zu spät ist', text: 'Der Amber-LED-Ring leuchtet rundum. Das Herzstück der BASE – in Deutschland als zusätzliche Absicherung.' },
      { title: 'Geprüfte Sicherheit', text: 'Prüfbericht PC21020060, CE-Kennzeichnung, IP54 und RoHS – unabhängig getestet und sauber dokumentiert.' },
      { title: 'Kompakt. Griffbereit.', text: 'Klein genug für Tür- oder Handschuhfach. Mit starkem Magnetfuß für das Stahldach.' },
      { title: 'In Sekunden einsatzbereit', text: 'Aus der Tür greifen, aufs Dach setzen, einschalten. Kein Aufstellen, kein Fußweg, keine Wartezeit.' },
      { title: 'Warndreieck vs. QuickAlert', text: 'Statt Fußweg in der Gefahrenzone: in Sekunden auf dem Dach und rundum sichtbar. Das Warndreieck bleibt in Deutschland trotzdem Pflicht.' },
      { title: 'Deutsche Marke', text: 'Deutscher Kundenservice, Anleitung auf Deutsch und klar dokumentierte Prüfungen.' },
    ],
    pro: [
      { title: 'QuickAlert PRO', text: 'Die vernetzte V16-Warnleuchte für Spanien – mit Verpackung.' },
      { title: 'Sichtbar, bevor es zu spät ist', text: '360°-LED-Warnlicht mit integriertem GPS und eSIM.' },
      { title: 'Ein Licht. Alle Richtungen.', text: '360°-LED-Lichtband, Ein-Knopf-Bedienung, starker Magnetfuß – GPS und eSIM sind integriert.' },
      { title: 'Geprüfte Sicherheit', text: 'IDIADA PC26020115, zertifiziert nach DGT 3.0. Dazu IP54 und CE-Konformität.' },
      { title: 'Kompakt. Griffbereit.', text: 'Passt in jedes Handschuhfach – immer dabei, wenn es darauf ankommt.' },
      { title: 'In Sekunden einsatzbereit', text: 'Aus der Tür greifen, aufs Dach setzen, einschalten. Kein Aufstellen, kein Fußweg.' },
      { title: 'Meldet die Panne automatisch', text: 'GPS-Standortmeldung an die DGT 3.0 – ohne App, ohne Smartphone. 12 Jahre eSIM inklusive.' },
      { title: 'Ein Knopf. Sofort sichtbar.', text: 'Roter Ein-/Aus-Taster, eingravierte IDIADA-Prüfnummer und QuickAlert-Branding auf der Oberseite.' },
      { title: 'Deutsche Marke', text: 'Deutscher Kundenservice und klar dokumentierte Prüfungen – auch für den spanischen Markt.' },
    ],
  },

  cta: {
    titleA: 'Nicht warten.',
    titleB: 'Sicher sein.',
    text: 'Leg QuickAlert heute ins Handschuhfach – damit du im Ernstfall gesehen wirst.',
    primary: 'Jetzt bei Amazon kaufen',
    secondary: 'Für Händler & Flotten',
  },

  footer: {
    tagline: 'Magnetische LED-Warnleuchte. Sichtbar, bevor es zu spät ist.',
    certificates: 'Zertifikate',
  },
}

export type LandingTranslation = typeof landing

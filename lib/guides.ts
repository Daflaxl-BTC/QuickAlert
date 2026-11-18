/** Ratgeber-Seiten: eine Quelle fuer Hub, "Weitere Ratgeber", Sitemap und llms.txt. */
export type Guide = { path: string; title: string; text: string; updated: string }

export const GUIDES: Guide[] = [
  {
    path: '/v16-warnleuchte',
    title: 'V16-Warnleuchte: Pflicht in Spanien, Regeln in Deutschland',
    text: 'Was eine V16-Leuchte ist, wen die spanische Pflicht betrifft und was in Deutschland gilt.',
    updated: '2026-11-18',
  },
  {
    path: '/warnleuchte-auto',
    title: 'Warnleuchte fürs Auto: Kaufberatung und richtiger Einsatz',
    text: 'Worauf es beim Kauf einer LED-Warnleuchte ankommt und wie du sie bei einer Panne einsetzt.',
    updated: '2026-11-18',
  },
  {
    path: '/warndreieck-abstand',
    title: 'Warndreieck: richtiger Abstand auf Autobahn, Landstraße und innerorts',
    text: 'Faustregeln, Rechtslage nach § 15 StVO und der Leitpfosten-Trick.',
    updated: '2026-11-18',
  },
  {
    path: '/panne-autobahn',
    title: 'Panne auf der Autobahn: richtig verhalten in 6 Schritten',
    text: 'Warnblinker, Warnweste, hinter die Leitplanke, absichern, Hilfe rufen.',
    updated: '2026-11-18',
  },
]

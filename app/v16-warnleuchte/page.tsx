import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { AnswerBox, BulletList, FaqList, GuideShell, ProductCta, Section } from '@/components/seo/GuideShell'
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, productJsonLd } from '@/lib/seo'

const PATH = '/v16-warnleuchte'
const UPDATED = '18.11.2026'
const UPDATED_ISO = '2026-11-18'

const TITLE = 'V16-Warnleuchte: Pflicht in Spanien, Rechtslage in Deutschland'
const DESCRIPTION =
  'Was ist eine V16-Warnleuchte, wo ist sie Pflicht und was gilt in Deutschland? Der Überblick zu V16 conectada, DGT 3.0 und Warndreieck, mit QuickAlert PRO für Spanien.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/landing/amazon/pro-01.jpg', width: 1400, height: 1400, alt: 'QuickAlert PRO V16-Warnleuchte mit Verpackung' }],
  },
}

const FAQ = [
  {
    q: 'Ist die V16-Warnleuchte in Deutschland Pflicht?',
    a: 'Nein. In Deutschland bleibt das Warndreieck vorgeschrieben (§ 53a StVZO). Eine Warnleuchte kann zusätzlich eingesetzt werden, ersetzt das Warndreieck aber nicht.',
  },
  {
    q: 'Brauche ich als Urlauber mit deutschem Auto in Spanien eine V16-Leuchte?',
    a: 'Die Pflicht gilt nach Angaben des ADAC für Fahrzeuge mit spanischer Zulassung. Mit deutschem Kennzeichen reicht weiterhin die in Deutschland vorgeschriebene Ausrüstung. Wer dauerhaft in Spanien fährt oder ein Fahrzeug dort zulässt, braucht eine vernetzte V16-Warnleuchte.',
  },
  {
    q: 'Was bedeutet „V16 conectada“?',
    a: 'Die vernetzte V16-Leuchte übermittelt bei Aktivierung per GPS und Mobilfunk ihren Standort an die Verkehrsplattform DGT 3.0. So werden nachfolgende Fahrer etwa über Navigationsdienste und Verkehrstafeln gewarnt. Seit 01.01.2026 ist in Spanien nur noch diese vernetzte Variante zulässig.',
  },
  {
    q: 'Woran erkenne ich eine zugelassene V16-Warnleuchte?',
    a: 'An der Zertifizierung durch ein anerkanntes Prüflabor mit eindeutiger Prüfnummer, an der Anbindung an DGT 3.0 und an einer inklusiven Mobilfunkverbindung. QuickAlert PRO ist nach IDIADA PC26020115 zertifiziert und bringt 12 Jahre eSIM mit.',
  },
  {
    q: 'Ist QuickAlert BASE eine V16-Warnleuchte?',
    a: 'Nein. QuickAlert BASE hat weder GPS noch DGT-Anbindung und ist keine V16-Leuchte. Sie ist eine magnetische LED-Warnleuchte für Deutschland, die zusätzlich zum Warndreieck sofort Sichtbarkeit schafft.',
  },
] as const

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Startseite', path: '/' },
            { name: 'V16-Warnleuchte', path: PATH },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: TITLE,
            description: DESCRIPTION,
            inLanguage: 'de-DE',
            datePublished: UPDATED_ISO,
            dateModified: UPDATED_ISO,
            mainEntityOfPage: `${SITE_URL}${PATH}`,
            image: `${SITE_URL}/landing/amazon/pro-01.jpg`,
            author: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          productJsonLd('pro'),
          faqJsonLd(FAQ),
        ]}
      />
      <GuideShell
        breadcrumb="V16-Warnleuchte"
        eyebrow="Ratgeber"
        title="V16-Warnleuchte: Was sie kann, wo sie Pflicht ist und was in Deutschland gilt"
        lead="Seit dem 1. Januar 2026 ersetzt in Spanien die vernetzte V16-Warnleuchte das Warndreieck. Hier steht kompakt, was eine V16-Leuchte ausmacht, wen die Pflicht betrifft und welche Regeln in Deutschland gelten."
        updated={UPDATED}
      >
        <AnswerBox>
          Eine <strong>V16-Warnleuchte</strong> ist eine kompakte, magnetische Blinkleuchte in Gelb, die bei einer Panne
          aufs Fahrzeugdach gesetzt wird. Der Fahrer muss dafür nicht an der Fahrbahn entlanglaufen. In{' '}
          <strong>Spanien</strong> ist seit 01.01.2026 die vernetzte Variante (<em>V16 conectada</em>) mit
          GPS-Meldung an die DGT 3.0 Pflicht. In <strong>Deutschland</strong> bleibt das Warndreieck vorgeschrieben;
          eine Warnleuchte ist dort eine zusätzliche Absicherung.
        </AnswerBox>

        <Section title="Was ist eine V16-Warnleuchte?">
          <p>
            Der Name stammt aus der spanischen Fahrzeugordnung, die das Vorwarnsignal unter der Kennung „V-16“ führt.
            Gemeint ist eine batteriebetriebene Leuchte mit gelbem Rundum-Blinklicht, die per Magnetfuß auf dem Dach
            haftet und den nachfolgenden Verkehr frühzeitig warnt.
          </p>
          <p>Gegenüber dem Warndreieck hat sie drei Vorteile:</p>
          <BulletList
            items={[
              <><strong>Kein Fußweg in die Gefahrenzone:</strong> Die Leuchte wird durchs Fenster aufs Dach gesetzt, oft ohne auszusteigen.</>,
              <><strong>Sofort sichtbar:</strong> Ein Knopfdruck genügt, das Licht warnt rundum und auch bei Nacht, Regen oder Nebel.</>,
              <><strong>Vernetzt (nur V16 conectada):</strong> Der Standort wird automatisch an die Verkehrsplattform gemeldet.</>,
            ]}
          />
        </Section>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/landing/amazon/pro-07.jpg"
            alt="QuickAlert PRO V16-Warnleuchte meldet den Pannenort automatisch per GPS an die DGT 3.0"
            width={1400}
            height={1400}
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <Section title="V16 conectada: Pflicht in Spanien seit 2026">
          <p>
            Spanien hat die vernetzte V16-Warnleuchte zum 01.01.2026 verbindlich gemacht. Sie ersetzt dort die
            Warndreiecke. Zulässig ist nur noch die <strong>V16 conectada</strong>: Beim Einschalten übermittelt sie
            per GPS und eingebauter Mobilfunkverbindung ihren Standort an die Plattform <strong>DGT 3.0</strong> der
            spanischen Verkehrsbehörde.
          </p>
          <p>
            Nach Angaben des ADAC gilt die Pflicht für Fahrzeuge mit spanischer Zulassung. Urlauber mit deutschem
            Kennzeichen sind davon nicht erfasst. Wer ein Fahrzeug in Spanien zulässt, dort lebt oder eine Flotte
            betreibt, braucht eine zertifizierte V16 conectada.
          </p>
          <ProductCta
            product="pro"
            market="Für Spanien · V16 conectada"
            name="QuickAlert PRO"
            text="Zertifiziert nach IDIADA PC26020115, automatische GPS-Meldung an die DGT 3.0, 12 Jahre eSIM inklusive, ohne App und ohne Vertrag."
            cta="PRO bei Amazon ansehen"
          />
        </Section>

        <Section title="Und in Deutschland?">
          <p>
            In Deutschland ändert sich nichts an der Ausrüstungspflicht: <strong>Warndreieck und Warnweste</strong>{' '}
            bleiben vorgeschrieben (§ 53a StVZO). Eine V16- oder LED-Warnleuchte ersetzt das Warndreieck nicht. Wer
            darauf verzichtet, riskiert ein Verwarnungsgeld.
          </p>
          <p>
            Sinnvoll ist eine Warnleuchte trotzdem: Sie leuchtet in dem Moment, in dem die Gefahr am größten ist, also
            bevor das Warndreieck in 100 bis 150 Metern Entfernung steht. Für Deutschland gibt es deshalb{' '}
            <strong>QuickAlert BASE</strong>: dieselbe magnetische Bauform mit 360°-LED-Ring, ohne GPS und ohne
            V16-Zulassung, als zusätzliche Absicherung.
          </p>
          <ProductCta
            product="base"
            market="Für Deutschland · Zusätzliche Absicherung"
            name="QuickAlert BASE"
            text="Magnetische LED-Warnleuchte fürs Auto: Lichtparameter nach ECE R65 (laut IDIADA-Tests), IP54, Standard-Batterien inklusive."
            cta="BASE bei Amazon ansehen"
          />
          <p>
            Mehr zur Auswahl und zum richtigen Einsatz steht im Ratgeber{' '}
            <Link href="/warnleuchte-auto" className="font-medium text-[#F5A623] underline underline-offset-4 hover:text-[#FFD080]">
              Warnleuchte fürs Auto
            </Link>
            .
          </p>
        </Section>

        <Section title="Woran du eine zugelassene V16-Warnleuchte erkennst">
          <BulletList
            items={[
              <><strong>Prüfnummer eines anerkannten Labors:</strong> Seriöse Anbieter nennen die Zertifizierung, bei QuickAlert PRO IDIADA PC26020115.</>,
              <><strong>DGT-3.0-Anbindung:</strong> Ohne GPS und Mobilfunk ist eine Leuchte in Spanien keine gültige V16.</>,
              <><strong>Konnektivität inklusive:</strong> Die Datenverbindung sollte ohne Zusatzvertrag enthalten sein. QuickAlert PRO bringt 12 Jahre eSIM mit.</>,
              <><strong>Robuste Bauform:</strong> Stabiler Magnetfuß, Schutz gegen Spritzwasser und Staub, Betrieb bei Kälte und Hitze.</>,
            ]}
          />
        </Section>

        <Section title="QuickAlert BASE oder PRO?">
          <div className="overflow-x-auto rounded-3xl border border-white/[0.08]">
            <table className="w-full text-left text-[14px] sm:text-[15px]">
              <thead className="bg-white/[0.03] text-zinc-400">
                <tr>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-medium">Merkmal</th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-medium">BASE</th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-medium text-[#F5A623]">PRO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {[
                  ['Markt', 'Deutschland', 'Spanien'],
                  ['360° Amber-LED-Ring', 'Ja', 'Ja'],
                  ['Neodym-Magnetfuß, IP54', 'Ja', 'Ja'],
                  ['V16 conectada (IDIADA PC26020115)', 'Nein', 'Ja'],
                  ['GPS-Meldung an DGT 3.0', 'Nein', 'Ja'],
                  ['eSIM inklusive', 'Nein', '12 Jahre'],
                ].map(([label, base, pro]) => (
                  <tr key={label}>
                    <th scope="row" className="px-3 py-3 sm:px-5 font-normal text-zinc-300">{label}</th>
                    <td className="px-3 py-3 sm:px-5 text-zinc-400">{base}</td>
                    <td className="px-3 py-3 sm:px-5 text-white">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Häufige Fragen zur V16-Warnleuchte">
          <FaqList items={FAQ} />
        </Section>
      </GuideShell>
    </>
  )
}

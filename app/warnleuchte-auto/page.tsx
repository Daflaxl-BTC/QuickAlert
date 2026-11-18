import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { AnswerBox, BulletList, FaqList, GuideShell, ProductCta, Section } from '@/components/seo/GuideShell'
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, productJsonLd } from '@/lib/seo'

const PATH = '/warnleuchte-auto'
const UPDATED = '18.11.2026'
const UPDATED_ISO = '2026-11-18'

const TITLE = 'Warnleuchte fürs Auto: magnetische LED-Pannenleuchte'
const DESCRIPTION =
  'LED-Warnleuchte fürs Auto: worauf es beim Kauf ankommt, wie du sie bei einer Panne richtig einsetzt und warum sie das Warndreieck sinnvoll ergänzt. Mit QuickAlert BASE.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/landing/amazon/base-01.jpg', width: 1400, height: 1400, alt: 'QuickAlert BASE LED-Warnleuchte fürs Auto mit Verpackung' }],
  },
}

const FAQ = [
  {
    q: 'Ist eine Warnleuchte fürs Auto in Deutschland erlaubt?',
    a: 'Ja, als zusätzliche Absicherung. Vorgeschrieben bleiben Warndreieck und Warnweste (§ 53a StVZO). Die Warnleuchte ersetzt das Warndreieck nicht, sorgt aber dafür, dass du gesehen wirst, bevor es steht.',
  },
  {
    q: 'Hält die magnetische Warnleuchte auf jedem Autodach?',
    a: 'Der Neodym-Magnetfuß haftet auf Stahl. Auf Dächern aus Aluminium, Kunststoff oder Glas, etwa beim Panoramadach, hält er nicht. Dann eignet sich eine andere Stahlfläche der Karosserie, zum Beispiel die Motorhaube.',
  },
  {
    q: 'Batterie oder Akku: was ist besser?',
    a: 'Für den Notfall Batterien. Ein Akku entlädt sich über Monate im Handschuhfach und ist im Ernstfall oft leer. QuickAlert BASE läuft mit handelsüblichen Alkaline-Batterien, die bereits beiliegen.',
  },
  {
    q: 'Was ist der Unterschied zwischen Warnleuchte und V16-Warnleuchte?',
    a: 'V16 bezeichnet die in Spanien vorgeschriebene, zertifizierte Warnleuchte. Seit 2026 muss sie dort zusätzlich ihren Standort per GPS an die DGT 3.0 melden. Für Deutschland ist das nicht erforderlich. Dort genügt eine LED-Warnleuchte als Ergänzung zum Warndreieck.',
  },
  {
    q: 'Wie lange hält eine LED-Warnleuchte im Einsatz?',
    a: 'Das hängt von Batterie und Blinkmodus ab. Die genauen Angaben für QuickAlert BASE stehen in der Bedienungsanleitung. Tipp: Batterien einmal im Jahr prüfen, zum Beispiel beim Reifenwechsel.',
  },
] as const

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Startseite', path: '/' },
            { name: 'Warnleuchte fürs Auto', path: PATH },
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
            image: `${SITE_URL}/landing/amazon/base-01.jpg`,
            author: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          productJsonLd('base'),
          faqJsonLd(FAQ),
        ]}
      />
      <GuideShell
        breadcrumb="Warnleuchte fürs Auto"
        eyebrow="Kaufberatung"
        title="Warnleuchte fürs Auto: sofort sichtbar, ohne Fußweg in die Gefahrenzone"
        lead="Eine magnetische LED-Warnleuchte sitzt in Sekunden auf dem Dach und warnt den nachfolgenden Verkehr, noch bevor das Warndreieck steht. Worauf es beim Kauf ankommt und wie du sie richtig einsetzt."
        updated={UPDATED}
      >
        <AnswerBox>
          Eine <strong>Warnleuchte fürs Auto</strong> ist eine kompakte LED-Leuchte mit Magnetfuß, die bei einer Panne
          oder einem Unfall aufs Fahrzeugdach gesetzt wird und mit gelbem Blinklicht rundum warnt. In Deutschland
          ergänzt sie das vorgeschriebene Warndreieck: Sie leuchtet sofort, während das Dreieck erst aufgestellt
          werden muss.
        </AnswerBox>

        <Section id="warndreieck" title="Warum das Warndreieck allein nicht reicht">
          <p>
            Ein Warndreieck soll innerorts etwa 50 Meter, auf Landstraßen etwa 100 Meter und auf der Autobahn
            mindestens 150 Meter vor der Gefahrenstelle stehen. Um es aufzustellen, musst du genau diese Strecke an
            der Fahrbahn entlanglaufen, häufig bei Dunkelheit, Regen und Verkehr mit hoher Geschwindigkeit.
          </p>
          <p>
            Eine magnetische Warnleuchte dreht die Reihenfolge um: <strong>Erst sichtbar werden, dann handeln.</strong>{' '}
            Sie sitzt nach wenigen Sekunden auf dem Dach und warnt, während du die Warnweste anziehst, die Insassen
            hinter die Leitplanke bringst und anschließend das Warndreieck aufstellst.
          </p>
        </Section>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/landing/amazon/base-06.jpg"
            alt="QuickAlert BASE LED-Warnleuchte wird in Sekunden magnetisch aufs Autodach gesetzt"
            width={1400}
            height={1400}
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <Section title="Worauf du beim Kauf einer LED-Warnleuchte achten solltest">
          <BulletList
            items={[
              <><strong>Geprüfte Lichtwerte:</strong> Lichtfarbe und Lichtstärke sollten einer anerkannten Norm entsprechen, etwa ECE R65. Bei QuickAlert BASE bestätigen das Tests bei IDIADA.</>,
              <><strong>Starker Magnetfuß:</strong> Neodym-Magnete haften sofort und halten auch bei starkem Fahrtwind. Achte auf eine geprüfte Windlast, bei QuickAlert BASE 180 Pa.</>,
              <><strong>Schutzart:</strong> Mindestens IP54, also Schutz gegen Spritzwasser und Staub.</>,
              <><strong>Batterie statt Akku:</strong> Batterien halten im Handschuhfach über lange Zeit ihre Ladung. Ein Akku ist im Ernstfall oft leer.</>,
              <><strong>Temperaturbereich:</strong> Die Leuchte muss im Winter wie im Sommer funktionieren, zum Beispiel von −10 °C bis +50 °C.</>,
              <><strong>Format:</strong> Klein genug für Handschuh- oder Türfach, damit sie immer griffbereit ist.</>,
              <><strong>Für Spanien:</strong> Wer ein Fahrzeug mit spanischer Zulassung fährt, braucht eine vernetzte V16-Warnleuchte mit GPS.</>,
            ]}
          />
          <ProductCta
            product="base"
            market="Für Deutschland"
            name="QuickAlert BASE"
            text="360° Amber-LED-Ring, Lichtparameter nach ECE R65 (laut IDIADA-Tests), Neodym-Magnetfuß, IP54, Standard-Batterien inklusive."
            cta="BASE bei Amazon kaufen"
          />
        </Section>

        <Section title="So setzt du die Warnleuchte bei einer Panne richtig ein">
          <ol className="space-y-4">
            {[
              ['Warnblinker an, Warnweste anziehen.', 'Noch im Auto, bevor du aussteigst.'],
              ['Warnleuchte aufs Dach setzen und einschalten.', 'Durchs offene Fenster aufs Stahldach. Der Magnet haftet sofort.'],
              ['Insassen in Sicherheit bringen.', 'Auf der Beifahrerseite aussteigen und hinter die Leitplanke gehen.'],
              ['Warndreieck aufstellen.', 'In ausreichendem Abstand, je nach Straße 50 bis mindestens 150 Meter.'],
              ['Pannenhilfe oder Notruf verständigen.', 'Bei Verletzten sofort die 112.'],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623] text-sm font-semibold text-[#0b0c0f]">
                  {i + 1}
                </span>
                <span>
                  <strong>{title}</strong> <span className="text-zinc-400">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Warnleuchte und V16: der Unterschied">
          <p>
            In Spanien heißt die vorgeschriebene Warnleuchte <strong>V16</strong>. Seit 2026 muss sie dort vernetzt
            sein und ihren Standort automatisch an die Verkehrsplattform DGT 3.0 melden. Dafür gibt es{' '}
            <strong>QuickAlert PRO</strong> mit GPS und 12 Jahren eSIM. Alles zur Rechtslage in beiden Ländern steht im
            Ratgeber{' '}
            <Link href="/v16-warnleuchte" className="font-medium text-[#F5A623] underline underline-offset-4 hover:text-[#FFD080]">
              V16-Warnleuchte
            </Link>
            .
          </p>
        </Section>

        <Section title="Häufige Fragen zur Warnleuchte fürs Auto">
          <FaqList items={FAQ} />
        </Section>
      </GuideShell>
    </>
  )
}

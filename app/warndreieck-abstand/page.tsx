import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { AnswerBox, BulletList, FaqList, GuideShell, ProductCta, Section } from '@/components/seo/GuideShell'
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'

const PATH = '/warndreieck-abstand'
const UPDATED = '18.11.2026'

const TITLE = 'Warndreieck Abstand: Autobahn & Landstraße'
const DESCRIPTION =
  'Wie weit muss das Warndreieck stehen? Faustregeln für innerorts, Landstraße und Autobahn, die Rechtslage nach § 15 StVO, der Leitpfosten-Trick und typische Fehler.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/landing/amazon/base-07.jpg', width: 1400, height: 1400, alt: 'Warndreieck im Vergleich zur magnetischen LED-Warnleuchte' }],
  },
}

const FAQ = [
  {
    q: 'Wie weit muss das Warndreieck auf der Autobahn stehen?',
    a: 'Als Faustregel gelten mindestens 150 Meter. Vor Kurven, Kuppen oder bei schlechter Sicht deutlich mehr, damit der nachfolgende Verkehr rechtzeitig reagieren kann. Das Gesetz nennt keinen festen Wert, sondern verlangt eine ausreichende Entfernung (§ 15 StVO).',
  },
  {
    q: 'Wie messe ich 150 Meter ohne Maßband?',
    a: 'Mit den Leitpfosten am Fahrbahnrand: Auf deutschen Straßen stehen sie in der Regel im Abstand von 50 Metern. Drei Leitpfosten entsprechen also etwa 150 Metern.',
  },
  {
    q: 'Was kostet es, wenn ich kein Warndreieck dabeihabe?',
    a: 'Das Mitführen ist nach § 53a StVZO Pflicht. Fehlt das Warndreieck, droht in der Regel ein Verwarnungsgeld von 15 Euro. Wer eine Panne nicht ausreichend absichert, muss mit höheren Beträgen rechnen.',
  },
  {
    q: 'Ersetzt eine Warnleuchte das Warndreieck?',
    a: 'In Deutschland nicht. Eine magnetische Warnleuchte auf dem Dach ist eine zusätzliche Absicherung, die sofort leuchtet, während das Warndreieck erst aufgestellt werden muss.',
  },
] as const

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Startseite', path: '/' },
            { name: 'Ratgeber', path: '/ratgeber' },
            { name: 'Warndreieck Abstand', path: PATH },
          ]),
          articleJsonLd({ path: PATH, title: TITLE, description: DESCRIPTION, image: '/landing/amazon/base-07.jpg' }),
          faqJsonLd(FAQ),
        ]}
      />
      <GuideShell
        path={PATH}
        breadcrumb="Warndreieck Abstand"
        parent={{ name: 'Ratgeber', href: '/ratgeber' }}
        eyebrow="Ratgeber"
        title="Warndreieck: Wie weit muss es stehen?"
        lead="Innerorts, auf der Landstraße und auf der Autobahn gelten unterschiedliche Faustregeln. Hier steht, welcher Abstand sinnvoll ist, was das Gesetz verlangt und wie du die Strecke ohne Maßband abschätzt."
        updated={UPDATED}
      >
        <AnswerBox>
          Faustregel: <strong>innerorts etwa 50 Meter</strong>, <strong>auf der Landstraße etwa 100 Meter</strong>,{' '}
          <strong>auf der Autobahn mindestens 150 Meter</strong> hinter dem Fahrzeug. Vor Kurven, Kuppen, bei Nebel
          oder Dunkelheit mehr. Das Gesetz verlangt eine „ausreichende Entfernung“, bei schnellem Verkehr in etwa
          100 Metern (§ 15 StVO).
        </AnswerBox>

        <Section title="Abstand nach Straßenart">
          <div className="overflow-hidden rounded-3xl border border-white/[0.08]">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-white/[0.03] text-zinc-400">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium sm:px-5">Straße</th>
                  <th scope="col" className="px-4 py-3 font-medium sm:px-5">Faustregel</th>
                  <th scope="col" className="px-4 py-3 font-medium sm:px-5">Leitpfosten</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {[
                  ['Innerorts', 'ca. 50 m', '1'],
                  ['Landstraße', 'ca. 100 m', '2'],
                  ['Autobahn', 'mind. 150 m', '3 oder mehr'],
                ].map(([road, distance, posts]) => (
                  <tr key={road}>
                    <th scope="row" className="px-4 py-3 font-normal text-zinc-300 sm:px-5">{road}</th>
                    <td className="px-4 py-3 text-white sm:px-5">{distance}</td>
                    <td className="px-4 py-3 text-zinc-400 sm:px-5">{posts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Die Werte sind Richtwerte, keine starren Grenzen. Entscheidend ist, dass der nachfolgende Verkehr das
            Hindernis rechtzeitig erkennt. Liegt das Fahrzeug hinter einer Kurve oder Kuppe, gehört das Warndreieck
            vor die Kurve oder Kuppe.
          </p>
        </Section>

        <Section title="Was das Gesetz verlangt">
          <BulletList
            items={[
              <><strong>§ 15 StVO:</strong> Bleibt ein mehrspuriges Fahrzeug liegen und ist es nicht rechtzeitig als Hindernis erkennbar, ist sofort das Warnblinklicht einzuschalten. Danach ist ein Warnzeichen in ausreichender Entfernung aufzustellen, bei schnellem Verkehr in etwa 100 Metern.</>,
              <><strong>§ 53a StVZO:</strong> Warndreieck und Warnweste müssen im Fahrzeug mitgeführt werden. Fehlen sie, droht in der Regel ein Verwarnungsgeld von je 15 Euro.</>,
              <><strong>Absichern ist Pflicht:</strong> Wer eine Panne oder einen Unfall nicht ausreichend absichert, riskiert ein höheres Verwarnungs- oder Bußgeld.</>,
            ]}
          />
        </Section>

        <Section title="So stellst du das Warndreieck sicher auf">
          <ol className="space-y-4">
            {[
              ['Warnblinker an, Warnweste noch im Auto anziehen.', 'Erst dann aussteigen, möglichst auf der Beifahrerseite.'],
              ['Warndreieck aufklappen, bevor du losgehst.', 'Dann musst du an der Fahrbahn nicht hantieren.'],
              ['Hinter der Leitplanke oder am äußersten Rand gehen.', 'Das Dreieck mit der reflektierenden Seite zum Verkehr vor dir hertragen.'],
              ['Leitpfosten zählen.', 'Sie stehen in der Regel alle 50 Meter. Auf der Autobahn mindestens drei.'],
              ['Aufstellen und zügig zurück hinter die Leitplanke.', 'Nicht am Fahrzeug warten.'],
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

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/landing/amazon/base-07.jpg"
            alt="Vergleich Warndreieck und magnetische LED-Warnleuchte QuickAlert BASE auf dem Autodach"
            width={1400}
            height={1400}
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <Section title="Das Problem: die ersten Minuten">
          <p>
            Bis das Warndreieck 150 Meter hinter dem Fahrzeug steht, vergehen schnell zwei bis drei Minuten. Genau in
            dieser Zeit ist die Pannenstelle am schlechtesten gesichert, und du bist zu Fuß an der Fahrbahn unterwegs.
          </p>
          <p>
            Eine <strong>magnetische LED-Warnleuchte</strong> schließt diese Lücke: Sie sitzt nach wenigen Sekunden
            auf dem Dach und warnt rundum, noch bevor du aussteigst. Das Warndreieck stellst du danach trotzdem auf.
          </p>
          <ProductCta
            product="base"
            market="Für Deutschland · Zusätzliche Absicherung"
            name="QuickAlert BASE"
            text="Magnetische LED-Warnleuchte fürs Auto mit 360°-LED-Ring. Sofort sichtbar, noch bevor das Warndreieck steht."
            cta="BASE bei Amazon ansehen"
          />
          <p>
            Weiter im Ratgeber:{' '}
            <Link href="/panne-autobahn" className="font-medium text-[#F5A623] underline underline-offset-4 hover:text-[#FFD080]">
              Panne auf der Autobahn: richtig verhalten
            </Link>
            .
          </p>
        </Section>

        <Section title="Häufige Fragen zum Warndreieck">
          <FaqList items={FAQ} />
        </Section>
      </GuideShell>
    </>
  )
}

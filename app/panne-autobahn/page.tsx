import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { AnswerBox, BulletList, FaqList, GuideShell, ProductCta, Section } from '@/components/seo/GuideShell'
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'

const PATH = '/panne-autobahn'
const UPDATED = '18.11.2026'

const TITLE = 'Panne auf der Autobahn: richtig verhalten'
const DESCRIPTION =
  'Panne auf der Autobahn: Warnblinker, Warnweste, hinter die Leitplanke, Warndreieck und Warnleuchte, Notruf. Die richtige Reihenfolge und die häufigsten Fehler im Überblick.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/landing/amazon/base-06.jpg', width: 1400, height: 1400, alt: 'Warnleuchte bei Panne in drei Schritten aufs Autodach setzen' }],
  },
}

const FAQ = [
  {
    q: 'Darf ich bei einer Panne im Auto sitzen bleiben?',
    a: 'Auf der Autobahn nicht. Im Fahrzeug bist du bei einem Auffahrunfall ungeschützt. Alle Insassen gehören mit Warnweste hinter die Leitplanke, auch bei Regen und Kälte.',
  },
  {
    q: 'Wo finde ich die nächste Notrufsäule?',
    a: 'Die kleinen schwarzen Pfeile auf den Leitpfosten zeigen in Richtung der nächsten Notrufsäule. Die Säulen übermitteln den Standort automatisch. Alternativ den Notruf 112 oder die Pannenhilfe per Handy wählen.',
  },
  {
    q: 'Darf ich auf der Autobahn abgeschleppt werden?',
    a: 'Ja, aber nur bis zur nächsten Ausfahrt. Wer auf der Autobahn abgeschleppt wird, muss sie dort verlassen (§ 15a StVO).',
  },
  {
    q: 'Hilft eine Warnleuchte bei einer Panne auf der Autobahn?',
    a: 'Ja, als zusätzliche Absicherung. Eine magnetische LED-Warnleuchte auf dem Dach warnt sofort, während das Warndreieck erst 150 Meter hinter dem Fahrzeug aufgestellt werden muss. Das Warndreieck bleibt in Deutschland trotzdem Pflicht.',
  },
] as const

const STEPS: [string, string][] = [
  ['Warnblinker einschalten und rechts ranfahren.', 'So weit wie möglich auf den Seitenstreifen, ideal hinter eine Ausfahrt oder in eine Nothaltebucht.'],
  ['Warnweste im Auto anziehen.', 'Bevor jemand aussteigt. Am besten liegt für jeden Insassen eine Weste griffbereit.'],
  ['Warnleuchte aufs Dach setzen.', 'Durchs Fenster, ohne auszusteigen. Sie macht das Fahrzeug sofort rundum sichtbar.'],
  ['Auf der Beifahrerseite aussteigen und hinter die Leitplanke.', 'Alle Insassen, auch Kinder. Haustiere angeleint mitnehmen.'],
  ['Warndreieck aufstellen.', 'Hinter der Leitplanke gehen, mindestens 150 Meter, das sind etwa drei Leitpfosten.'],
  ['Hilfe rufen.', 'Pannenhilfe, Notrufsäule oder bei Verletzten sofort die 112. Hinter der Leitplanke warten.'],
]

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Startseite', path: '/' },
            { name: 'Ratgeber', path: '/ratgeber' },
            { name: 'Panne auf der Autobahn', path: PATH },
          ]),
          articleJsonLd({ path: PATH, title: TITLE, description: DESCRIPTION, image: '/landing/amazon/base-06.jpg' }),
          faqJsonLd(FAQ),
        ]}
      />
      <GuideShell
        path={PATH}
        breadcrumb="Panne auf der Autobahn"
        parent={{ name: 'Ratgeber', href: '/ratgeber' }}
        eyebrow="Ratgeber"
        title="Panne auf der Autobahn: So verhältst du dich richtig"
        lead="Auf der Autobahn zählt jede Sekunde. Mit der richtigen Reihenfolge bist du schnell sichtbar, außerhalb der Gefahrenzone und hast Hilfe gerufen."
        updated={UPDATED}
      >
        <AnswerBox>
          <strong>Warnblinker an</strong>, auf den Seitenstreifen, <strong>Warnweste im Auto anziehen</strong>,
          Warnleuchte aufs Dach, auf der Beifahrerseite aussteigen und <strong>hinter die Leitplanke</strong>. Dann
          das <strong>Warndreieck mindestens 150 Meter</strong> hinter dem Fahrzeug aufstellen und Hilfe rufen.
        </AnswerBox>

        <Section title="Die 6 Schritte bei einer Panne">
          <ol className="space-y-4">
            {STEPS.map(([title, text], i) => (
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
            src="/landing/amazon/base-06.jpg"
            alt="Warnleuchte bei Panne: QuickAlert BASE in drei Schritten aufs Autodach setzen und einschalten"
            width={1400}
            height={1400}
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <Section title="Die häufigsten Fehler">
          <BulletList
            items={[
              <><strong>Im Auto sitzen bleiben:</strong> Bei einem Auffahrunfall ist das Fahrzeug der gefährlichste Ort.</>,
              <><strong>Auf der Fahrerseite aussteigen:</strong> Direkt neben dem fließenden Verkehr.</>,
              <><strong>Warnweste im Kofferraum:</strong> Sie gehört in Griffweite, damit du sie vor dem Aussteigen anziehst.</>,
              <><strong>Warndreieck zu nah:</strong> 20 oder 30 Meter reichen auf der Autobahn nicht. Leitpfosten zählen.</>,
              <><strong>Reparieren an der Fahrbahn:</strong> Auch ein Reifenwechsel auf dem Seitenstreifen ist riskant. Besser die Pannenhilfe rufen.</>,
            ]}
          />
        </Section>

        <Section title="Was ins Auto gehört">
          <BulletList
            items={[
              <><strong>Warndreieck</strong> und <strong>Warnweste</strong>: vorgeschrieben (§ 53a StVZO).</>,
              <><strong>Verbandkasten</strong>: vorgeschrieben, Haltbarkeit regelmäßig prüfen.</>,
              <><strong>Magnetische Warnleuchte</strong>: nicht vorgeschrieben, aber die schnellste Absicherung in den ersten Minuten.</>,
              <><strong>Taschenlampe und Handy-Ladekabel</strong>: für Pannen bei Nacht.</>,
            ]}
          />
          <ProductCta
            product="base"
            market="Für Deutschland · Zusätzliche Absicherung"
            name="QuickAlert BASE"
            text="Warnleuchte fürs Auto für den Pannenfall: 360°-LED-Ring, Neodym-Magnetfuß, Standard-Batterien inklusive."
            cta="BASE bei Amazon ansehen"
          />
          <p>
            Mehr zum richtigen Abstand im Ratgeber{' '}
            <Link href="/warndreieck-abstand" className="font-medium text-[#F5A623] underline underline-offset-4 hover:text-[#FFD080]">
              Warndreieck: richtiger Abstand
            </Link>
            .
          </p>
        </Section>

        <Section title="Häufige Fragen zur Panne auf der Autobahn">
          <FaqList items={FAQ} />
        </Section>
      </GuideShell>
    </>
  )
}

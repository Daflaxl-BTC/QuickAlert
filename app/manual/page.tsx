import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { GuideShell, Section } from '@/components/seo/GuideShell'
import { availableManuals } from '@/lib/manuals.server'
import { breadcrumbJsonLd } from '@/lib/seo'

const WHATSAPP_URL = 'https://wa.me/4915119784023'

export const metadata: Metadata = {
  title: 'Bedienungsanleitung QuickAlert BASE & PRO',
  description:
    'Bedienungsanleitungen für die QuickAlert BASE (Deutsch) und die QuickAlert PRO V16-Warnleuchte (Deutsch, Spanisch) als PDF.',
  alternates: { canonical: '/manual' },
}

const PRODUCTS = {
  base: { name: 'QuickAlert BASE', sub: 'Magnetische LED-Warnleuchte fürs Auto · Deutschland' },
  pro: { name: 'QuickAlert PRO', sub: 'Vernetzte V16-Warnleuchte · Spanien' },
} as const

export default function Page() {
  const manuals = availableManuals()
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Startseite', path: '/' },
          { name: 'Bedienungsanleitung', path: '/manual' },
        ])}
      />
      <GuideShell
        breadcrumb="Bedienungsanleitung"
        eyebrow="Service"
        title="Bedienungsanleitungen"
        lead="Die Anleitungen zu QuickAlert BASE und QuickAlert PRO als PDF. Wähle dein Modell und deine Sprache."
        updated="18.11.2026"
      >
        {(['base', 'pro'] as const).map((product) => (
          <Section key={product} title={PRODUCTS[product].name}>
            <p className="text-zinc-400">{PRODUCTS[product].sub}</p>
            <ul className="grid gap-3">
              {manuals
                .filter((m) => m.product === product)
                .map((m) => (
                  <li key={m.file}>
                    {m.available ? (
                      <a
                        href={m.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#121318] p-5 transition-colors hover:border-[#F5A623]/60"
                      >
                        <span>
                          <span className="block font-semibold text-white">
                            {m.lang} <span className="font-normal text-zinc-500">({m.langCode})</span>
                          </span>
                          <span className="mt-1 block text-sm text-zinc-400">{m.facts} · {m.pages} Seiten</span>
                        </span>
                        <span className="flex-shrink-0 text-sm font-semibold text-[#F5A623]">PDF öffnen</span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-[#0f1014] p-5">
                        <span>
                          <span className="block font-semibold text-zinc-300">
                            {m.lang} <span className="font-normal text-zinc-500">({m.langCode})</span>
                          </span>
                          <span className="mt-1 block text-sm text-zinc-500">{m.facts}</span>
                        </span>
                        <span className="flex-shrink-0 text-sm text-zinc-500">Folgt in Kürze</span>
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </Section>
        ))}

        <Section title="Fragen zur Bedienung?">
          <p>
            Schreib uns per{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[#F5A623] underline underline-offset-4">
              WhatsApp
            </a>{' '}
            oder an{' '}
            <a href="mailto:quickalert@outlook.de" className="font-medium text-[#F5A623] underline underline-offset-4">
              quickalert@outlook.de
            </a>
            . Die gedruckte Anleitung liegt jeder Packung bei.
          </p>
        </Section>
      </GuideShell>
    </>
  )
}

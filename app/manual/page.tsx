import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bedienungsanleitung — QuickAlert',
  description:
    'Bedienungsanleitungen für QuickAlert BASE und PRO in Deutsch, Spanisch und Englisch zum Download.',
  alternates: { canonical: 'https://quickalert.eu/manual' },
}

const manuals = [
  { lang: 'Deutsch', code: 'DE', href: '/compliance/manual-de.pdf' },
  { lang: 'Español', code: 'ES', href: '/compliance/manual-es.pdf' },
  { lang: 'English', code: 'EN', href: '/compliance/manual-en.pdf' },
]

export default function Manual() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <nav className="px-6 sm:px-8 lg:px-12 py-6 border-b border-zinc-200 bg-white">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl font-black tracking-tight">
            <span className="text-zinc-900">Quick</span>
            <span className="text-orange-500">Alert</span>
          </span>
        </Link>
      </nav>

      <section className="px-6 sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
            Bedienungsanleitung
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            QuickAlert — Bedienungsanleitung
          </h1>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Bedienungsanleitungen für QuickAlert BASE und PRO. Bitte wählen Sie Ihre Sprache.
          </p>

          <ul className="space-y-3">
            {manuals.map((m) => (
              <li key={m.code}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl bg-white border border-zinc-200 hover:border-orange-500 transition-colors shadow-sm"
                >
                  <span className="font-semibold text-zinc-900">
                    {m.lang} <span className="text-zinc-500 font-normal">({m.code})</span>
                  </span>
                  <span className="text-orange-500 font-bold">PDF →</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-zinc-500 mt-8">
            Bei Fragen zur Bedienung erreichen Sie uns unter{' '}
            <a href="mailto:QuickAlert@Outlook.de" className="text-orange-500 hover:underline">
              QuickAlert@Outlook.de
            </a>
            .
          </p>

          <div className="mt-12">
            <Link href="/" className="text-orange-500 hover:underline font-semibold">
              ← Zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EU-Konformitätserklärung — QuickAlert BASE',
  description:
    'EU-Konformitätserklärung (Declaration of Conformity) für QuickAlert BASE gemäß den anwendbaren EU-Richtlinien und -Verordnungen.',
  alternates: { canonical: 'https://quickalert.eu/doc/base' },
}

const PDF_HREF = '/compliance/doc-base.pdf'

export default function DocBase() {
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
            Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            EU-Konformitätserklärung — QuickAlert BASE
          </h1>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Diese Seite stellt die EU-Konformitätserklärung (Declaration of Conformity) für QuickAlert BASE
            zum Download bereit. Sie bestätigt die Übereinstimmung des Produkts mit den anwendbaren EU-Richtlinien
            und -Verordnungen.
          </p>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm mb-8">
            <p className="text-sm text-zinc-600 mb-4">
              <strong className="text-zinc-800">Hersteller / verantwortliche Person in der EU:</strong>
              <br />
              Felix Bredl, Einzelunternehmen (QuickAlert), Scharnhorststr. 46, 80992 München, Deutschland
              <br />
              E-Mail: QuickAlert@Outlook.de
            </p>
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold transition-colors"
            >
              PDF öffnen / herunterladen
            </a>
          </div>

          <object data={PDF_HREF} type="application/pdf" className="w-full h-[80vh] rounded-2xl border border-zinc-200 bg-white">
            <p className="p-6 text-sm text-zinc-600">
              Ihr Browser kann das PDF nicht direkt anzeigen.{' '}
              <a href={PDF_HREF} className="text-orange-500 hover:underline">
                Hier herunterladen
              </a>
              .
            </p>
          </object>

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

'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AGB() {
  const router = useRouter()

  const handleGoToOpeningPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between backdrop-blur-md bg-white/90 border-b border-zinc-200">
        <Link href="/" onClick={handleGoToOpeningPage} className="flex items-center gap-2">
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(45 32 32)" />
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(-45 32 32)" />
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(22.5 32 32)" />
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(-22.5 32 32)" />
            <path d="M22 38C22 28 24 22 32 22C40 22 42 28 42 38" fill="#F97316" />
            <rect x="20" y="22" width="6" height="18" rx="1" fill="white" opacity="0.4" />
            <ellipse cx="32" cy="42" rx="16" ry="6" fill="#3F3F46" />
            <ellipse cx="32" cy="40" rx="14" ry="4" fill="#52525B" />
          </svg>
          <span className="text-2xl sm:text-3xl font-black font-poppins tracking-tight">
            <span className="text-zinc-900">Quick</span>
            <span className="text-orange-500">Alert</span>
          </span>
        </Link>
        <Link
          href="/"
          onClick={handleGoToOpeningPage}
          className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Zur Startseite
        </Link>
      </nav>

      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              Rechtliches
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-4 tracking-tight">Allgemeine Geschäftsbedingungen</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <p className="text-zinc-600 mt-4 text-sm">
              Stand: 14.03.2026
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">1. Geltungsbereich</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Diese Bedingungen gelten für die Nutzung der Website quickalert.eu und für die unverbindliche
                  Eintragung in die Vorbestell-/Interessentenliste von QuickAlert.
                </p>
                <p>
                  (2) Betreiber der Website ist Felix Bredl, Einzelunternehmen (QuickAlert), Scharnhorststr. 46, 80992
                  München, Deutschland.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">2. Kein Vertragsschluss über diese Website</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Über diese Website werden aktuell keine Kaufverträge geschlossen. Die Eintragung in die
                  Vorbestellliste ist unverbindlich.
                </p>
                <p>
                  (2) Ein verbindlicher Kaufvertrag kommt ausschließlich über Amazon Marketplace zustande.
                </p>
                <p>
                  (3) Für Bestellungen, Zahlungen, Widerruf, Gewährleistung und Versand auf Amazon gelten die
                  dortigen Vertragsbedingungen und Verbraucherinformationen.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">3. Vorbestellliste und Kommunikation</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Mit der Eintragung in die Vorbestellliste erklären Sie Ihr Interesse an Informationen zur
                  Verfügbarkeit von QuickAlert.
                </p>
                <p>
                  (2) Die Eintragung erfolgt per Double-Opt-In: Erst nach Bestätigung Ihrer E-Mail-Adresse wird Ihr
                  Eintrag aktiv.
                </p>
                <p>
                  (3) Aus der Eintragung entsteht kein Anspruch auf Lieferung, Reservierung oder einen bestimmten
                  Verkaufspreis.
                </p>
                <p>
                  (4) Weitere Informationen zur Verarbeitung Ihrer Daten finden Sie in der Datenschutzerklärung.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">4. Inhalte der Website</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Alle Angaben auf dieser Website erfolgen mit größtmöglicher Sorgfalt, jedoch ohne Gewähr auf
                  Vollständigkeit, Richtigkeit und Aktualität.
                </p>
                <p>
                  (2) Produktinformationen und Verfügbarkeiten können sich ändern.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">5. Haftung</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der
                  Verletzung des Lebens, des Körpers oder der Gesundheit.
                </p>
                <p>
                  (2) Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten
                  (Kardinalpflichten) und begrenzt auf den vertragstypisch vorhersehbaren Schaden.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">6. Datenschutz</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  Es gilt unsere{' '}
                  <Link href="/datenschutz" className="text-orange-500 hover:underline font-semibold">
                    Datenschutzerklärung
                  </Link>
                  . Dort finden Sie alle Informationen zur Verarbeitung personenbezogener Daten.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">7. Verbraucherstreitbeilegung</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">8. Schlussbestimmungen</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts, soweit dem keine zwingenden
                  verbraucherschützenden Vorschriften entgegenstehen.
                </p>
                <p>
                  (2) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
                  unberührt.
                </p>
                <p>
                  (3) Fragen zu diesen Bedingungen können Sie an folgende Kontaktadresse richten:
                </p>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">Felix Bredl, Einzelunternehmen (QuickAlert)</strong><br />
                    Scharnhorststr. 46<br />
                    80992 München, Deutschland<br />
                    E-Mail: felix-bredl@gmx.de<br />
                    Telefon: +49 151 19784023
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-zinc-200 bg-white">
        <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/impressum" className="hover:text-orange-500 transition-colors">
              Impressum
            </Link>
            <span>•</span>
            <Link href="/datenschutz" className="hover:text-orange-500 transition-colors">
              Datenschutz
            </Link>
            <span>•</span>
            <Link href="/agb" className="hover:text-orange-500 transition-colors">
              AGB
            </Link>
          </div>
          <p>© 2026 QuickAlert – Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </main>
  )
}

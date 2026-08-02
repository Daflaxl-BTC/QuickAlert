'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Impressum() {
  const router = useRouter()

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden">
      <Link
        href="/"
        onClick={handleBackClick}
        className="fixed top-40 left-16 z-[60] p-3 rounded-full bg-white/95 backdrop-blur-md border-2 border-zinc-200 hover:border-orange-500 text-zinc-700 hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center min-w-[44px] min-h-[44px]"
        aria-label="Zurück zur Startseite"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between backdrop-blur-md bg-white/90 border-b border-zinc-200">
        <Link href="/" onClick={handleBackClick} className="flex items-center gap-2">
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
          onClick={handleBackClick}
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
            <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-4 tracking-tight">Impressum</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">Angaben gemäß § 5 DDG</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="font-bold text-zinc-900 text-lg">Felix Ventures, Felix Georg Bredl</p>
                <p>
                  c/o Autorenglück #43669
                  <br />
                  Albert-Einstein-Str. 47
                  <br />
                  02977 Hoyerswerda
                  <br />
                  Deutschland
                </p>
                <p>
                  <span className="font-semibold text-zinc-800">Inhaber:</span>
                  <br />
                  Felix Georg Bredl
                </p>
                <p>
                  <span className="font-semibold text-zinc-800">Kontakt:</span>
                  <br />
                  Telefon: +49 151 19784023
                  <br />
                  E-Mail: QuickAlert@Outlook.de
                </p>
                <p>
                  <span className="font-semibold text-zinc-800">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</span>
                  <br />
                  DE461810782
                </p>
                <p>
                  <span className="font-semibold text-zinc-800">LUCID-Verpackungsregister:</span>
                  <br />
                  DE3081127852576
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">
                Verantwortliche Person in der EU (Art. 4 EU-VO 2023/988 — GPSR)
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Felix Ventures, Felix Georg Bredl
                <br />
                c/o Autorenglück #43669
                <br />
                Albert-Einstein-Str. 47
                <br />
                02977 Hoyerswerda
                <br />
                Deutschland
                <br />
                E-Mail: QuickAlert@Outlook.de
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">
                Sicherheits- und Reklamationskontakt (Art. 9 Abs. 7 GPSR)
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Verbraucher können Sicherheitsbedenken, Reklamationen und Beschwerden zu unseren Produkten
                jederzeit über die folgenden Kanäle melden:
              </p>
              <p className="text-zinc-600 leading-relaxed">
                <span className="font-semibold text-zinc-800">E-Mail:</span> QuickAlert@Outlook.de
                <br />
                <span className="font-semibold text-zinc-800">Telefon:</span> +49 151 19784023
                <br />
                <span className="font-semibold text-zinc-800">Postanschrift:</span> Felix Ventures, Felix Georg
                Bredl, c/o Autorenglück #43669, Albert-Einstein-Str. 47, 02977 Hoyerswerda, Deutschland
              </p>
              <p className="text-zinc-600 leading-relaxed mt-4 text-sm">
                Vorfälle, die ein Sicherheitsrisiko begründen können, melden wir gemäß Art. 20 GPSR unverzüglich
                über das EU-Schnellwarnsystem (Safety Gate / Safety Business Gateway).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">Verantwortlich für journalistisch-redaktionelle Inhalte (§ 18 Abs. 2 MStV)</h2>
              <p className="text-zinc-600 leading-relaxed">
                Felix Georg Bredl
                <br />
                c/o Autorenglück #43669
                <br />
                Albert-Einstein-Str. 47
                <br />
                02977 Hoyerswerda
                <br />
                Deutschland
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">Hinweis zur Streitbeilegung</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Hinweis: Die frühere EU-Plattform zur Online-Streitbeilegung (OS-Plattform) wurde eingestellt.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">Haftung für Inhalte und Links</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten
                verantwortlich. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine
                Gewähr.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Inhalte oder Links umgehend entfernen.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">Urheberrecht</h2>
              <p className="text-zinc-600 leading-relaxed">
                Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung
                des jeweiligen Rechteinhabers.
              </p>
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

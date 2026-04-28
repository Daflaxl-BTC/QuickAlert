'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Datenschutz() {
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
            <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-4 tracking-tight">Datenschutzerklärung</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <p className="text-zinc-600 mt-4 text-sm">
              Stand: 28.04.2026
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">1. Verantwortlicher</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="font-bold text-zinc-900 text-lg mb-2">Felix Bredl, Einzelunternehmen (QuickAlert)</p>
                  <p>
                    Scharnhorststr. 46<br />
                    80992 München<br />
                    Deutschland
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold text-zinc-800">Inhaber:</span><br />
                    Felix Bredl
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold text-zinc-800">Kontakt:</span><br />
                    Telefon: +49 151 19784023<br />
                    E-Mail: kontakt@quickalert.eu
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">2. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Bereitstellung der Website und IT-Sicherheit</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                    Beim Aufruf der Website verarbeiten wir technische Daten (z. B. IP-Adresse, Datum/Uhrzeit,
                    Browserdaten, aufgerufene Seite) in Server-Log-Dateien.
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem
                    Betrieb der Website).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Vorbestellung / Interessentenliste (Double-Opt-In)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                    Wenn Sie sich über das Vorbestellformular eintragen, verarbeiten wir die von Ihnen angegebenen
                    Daten (Name, E-Mail-Adresse, gewünschtes Produkt, optionale Nachricht), um Ihre Anfrage zu
                    bearbeiten und den Double-Opt-In-Prozess durchzuführen.
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                    Zur rechtssicheren Dokumentation Ihrer Einwilligung speichern wir zusätzlich den Zeitpunkt der
                    Eintragung, den Zeitpunkt der Bestätigung sowie technische Nachweisdaten (z. B. IP-Adresse und
                    User-Agent).
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO
                    (Nachweis der Einwilligung und Missbrauchsprävention).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">3. Empfänger und Auftragsverarbeiter</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">Hosting:</strong><br />
                    Vercel Inc.<br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA<br />
                    <span className="text-zinc-500">DPF-zertifiziert (EU-US Data Privacy Framework, Adequacy Decision der EU-Kommission vom 10.07.2023).</span>
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">E-Mail-Versand (Double-Opt-In und Benachrichtigungen):</strong><br />
                    Resend, Inc., USA<br />
                    <span className="text-zinc-500">DPF-zertifiziert (EU-US Data Privacy Framework, Adequacy Decision der EU-Kommission vom 10.07.2023).</span>
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">Automatisierung (nur falls konfiguriert):</strong><br />
                    n8n (Webhook-Verarbeitung)
                  </p>
                </div>
                <p className="text-sm">
                  Mit Vercel Inc. und Resend Inc. wurden Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO
                  geschlossen.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">4. Drittlandübermittlung</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Verarbeitung in den USA</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Bei Nutzung der oben genannten Anbieter kann eine Übermittlung personenbezogener Daten in die USA
                    stattfinden. Die Übermittlung erfolgt auf Grundlage geeigneter Garantien gemäß Art. 46 DSGVO
                    (insbesondere EU-Standardvertragsklauseln), soweit kein anderer zulässiger Übermittlungsmechanismus
                    greift.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">5. Speicherdauer</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Server-Logs</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Server-Log-Daten werden in der Regel für maximal 30 Tage gespeichert.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Unbestätigte Vorbestellungen (Double-Opt-In offen)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Daten, die nicht bestätigt werden, löschen wir regelmäßig, spätestens nach 30 Tagen.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Bestätigte Vorbestellungen</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Bestätigte Einträge speichern wir bis zum Widerruf Ihrer Einwilligung oder bis der Zweck entfällt
                    (z. B. Abschluss der Produkteinführung), spätestens jedoch nach 24 Monaten ohne aktive
                    Kundenbeziehung.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">6. Ihre Rechte</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="text-sm">
                  Sie haben insbesondere folgende Rechte: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
                  Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit
                  (Art. 20 DSGVO), Widerspruch (Art. 21 DSGVO) sowie Widerruf erteilter Einwilligungen mit Wirkung
                  für die Zukunft (Art. 7 Abs. 3 DSGVO).
                </p>
                <p className="text-sm">
                  Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben genannten Kontaktdaten.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">7. Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="text-sm">
                  Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig in Bayern:
                </p>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong>
                    <br />
                    Promenade 18
                    <br />
                    91522 Ansbach, Deutschland
                    <br />
                    Telefon: +49 (0) 981 53 1300
                    <br />
                    E-Mail: poststelle@lda.bayern.de
                    <br />
                    Website:{' '}
                    <a
                      href="https://www.lda.bayern.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      www.lda.bayern.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-6">8. Cookies, Local Storage und § 25 TDDDG</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="text-sm">
                  Diese Website verwendet keine Tracking- oder Marketing-Cookies. Es erfolgt keine Nutzung von Google
                  Analytics, Meta Pixel oder vergleichbaren Tracking-Diensten.
                </p>
                <p className="text-sm">
                  Für technisch notwendige Funktionen speichern wir einzelne Werte im Browser (Local Storage), etwa
                  Sprach- und Darstellungspräferenzen sowie den Hinweisstatus des Datenschutz-Banners. Diese
                  Speicherung erfolgt auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG.
                </p>
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

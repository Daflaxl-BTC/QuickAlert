'use client'

import Link from 'next/link'

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden">
      
      {/* Zurück-Pfeil oben links */}
      <Link 
        href="/"
        onClick={(e) => {
          e.preventDefault()
          window.location.href = '/'
          setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
          }, 100)
        }}
        className="fixed top-40 left-16 z-[60] p-3 rounded-full bg-white/95 backdrop-blur-md border-2 border-zinc-200 hover:border-orange-500 text-zinc-700 hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center min-w-[44px] min-h-[44px]"
        aria-label="Zurück zur Startseite"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between backdrop-blur-md bg-white/90 border-b border-zinc-200">
        <Link href="/" className="flex items-center gap-2">
          {/* Warnleuchte Icon */}
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Strahlen */}
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(45 32 32)"/>
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(-45 32 32)"/>
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(22.5 32 32)"/>
            <path d="M32 4V12" stroke="#F97316" strokeWidth="3" strokeLinecap="round" transform="rotate(-22.5 32 32)"/>
            {/* Glaskuppel */}
            <path d="M22 38C22 28 24 22 32 22C40 22 42 28 42 38" fill="#F97316"/>
            <rect x="20" y="22" width="6" height="18" rx="1" fill="white" opacity="0.4"/>
            {/* Basis */}
            <ellipse cx="32" cy="42" rx="16" ry="6" fill="#3F3F46"/>
            <ellipse cx="32" cy="40" rx="14" ry="4" fill="#52525B"/>
          </svg>
          <span className="text-2xl sm:text-3xl font-black font-poppins tracking-tight">
            <span className="text-zinc-900">Quick</span>
            <span className="text-orange-500">Alert</span>
          </span>
        </Link>
        <Link 
          href="/"
          className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Zur Startseite
        </Link>
      </nav>

      {/* Datenschutz Content */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              Rechtliches
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-4 tracking-tight">Datenschutzerklärung</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <p className="text-zinc-600 mt-4 text-sm">
              Stand: 01.02.2026
            </p>
          </div>

          <div className="space-y-8">
            {/* Verantwortlicher */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Verantwortliche Stelle</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="font-bold text-zinc-900 text-lg mb-2">QuickAlert e.U.</p>
                  <p>
                    Scharnhorststr. 46<br />
                    80992 München<br />
                    Deutschland
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold text-zinc-800">Geschäftsführer/Inhaber:</span><br />
                    Felix Bredl
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold text-zinc-800">Kontakt:</span><br />
                    Telefon: +49 151 19784023<br />
                    E-Mail: felix-bredl@gmx.de
                  </p>
                </div>
                <p className="text-sm">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>
            </div>

            {/* Datenschutz auf einen Blick */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Datenschutz auf einen Blick</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Allgemeine Hinweise</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
                  <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cookies und Tracking
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    <strong>Diese Website verwendet keine Cookies oder ähnliche Tracking-Technologien.</strong> Es werden keine personenbezogenen Daten durch Cookies erfasst oder gespeichert. Es erfolgt keine Analyse Ihres Nutzerverhaltens.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosting */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Hosting</h2>
              </div>
              
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="text-sm">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-sm">
                  Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">Hoster:</strong><br />
                    Vercel Inc.<br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA
                  </p>
                  <p className="text-xs text-zinc-500 mt-2">
                    Die Datenübertragung in die USA erfolgt auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
                  </p>
                </div>
                <p className="text-sm">
                  Der Hoster wird die Daten Ihrer Nutzung unserer Website nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </p>
                <p className="text-sm">
                  <strong className="text-zinc-800">IP-Logging:</strong> Beim Aufruf unserer Website werden Ihre IP-Adresse und weitere technische Daten (Browsertyp, Betriebssystem, Uhrzeit des Zugriffs) automatisch in Server-Log-Dateien gespeichert. Diese Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung der Website). Die Log-Dateien werden nach 30 Tagen automatisch gelöscht.
                </p>
              </div>
            </div>

            {/* Allgemeine Hinweise */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Allgemeine Hinweise und Pflichtinformationen</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Rechtsgrundlagen der Datenverarbeitung</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <h3 className="text-lg font-bold text-orange-800 mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)</h3>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    WERDEN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO DURCHGEFÜHRT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Die zuständige Aufsichtsbehörde für Bayern ist:
                  </p>
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <p className="text-sm">
                      <strong className="text-zinc-800">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
                      Promenade 18<br />
                      91522 Ansbach, Deutschland<br />
                      Telefon: +49 (0) 981 53 1300<br />
                      E-Mail: poststelle@lda.bayern.de<br />
                      Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.lda.bayern.de</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Ihre Rechte (Art. 15-22 DSGVO)</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Auskunft (Art. 15 DSGVO)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sie haben das Recht, unentgeltlich Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung zu erhalten.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Berichtigung (Art. 16 DSGVO)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Löschung (Art. 17 DSGVO)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Widerruf (Art. 7 Abs. 3 DSGVO)</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Sie haben das Recht, eine erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt davon unberührt.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Kontaktaufnahme</h2>
              </div>
              
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="text-sm">
                  Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-sm">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                </p>
                <p className="text-sm">
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">Hinweis:</strong> Aktuell verfügt diese Website über kein Kontaktformular. Bei zukünftiger Implementierung werden alle Datenverarbeitungsvorgänge entsprechend dieser Datenschutzerklärung erfolgen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
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

      {/* Footer */}
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
          <p>© 2026 QuickAlert e.U. – Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </main>
  )
}

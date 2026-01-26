import Link from 'next/link'

export default function Impressum() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden">
      
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

      {/* Impressum Content */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              Rechtliches
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-4 tracking-tight">Impressum</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Angaben gemäß § 5 TMG / UGB */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Unternehmen</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p className="font-bold text-zinc-900 text-lg">QuickAlert e.U.</p>
                <p>
                  Scharnhorststr. 46<br />
                  80992 München<br />
                  Deutschland
                </p>
                <p>
                  <span className="font-semibold text-zinc-800">Geschäftsführer/Inhaber:</span><br />
                  Felix Bredl
                </p>
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <p className="text-orange-700 text-sm">
                    <span className="font-bold">Hinweis:</span> Die Firmeneintragung ist aktuell in Vorbereitung. Es erfolgt kein Verkauf vor der Eintragung.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Kontakt</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="tel:+4915119784023" className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center group-hover:border-orange-300 transition-colors">
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Telefon</div>
                    <div className="text-zinc-900 font-semibold">+49 151 19784023</div>
                  </div>
                </a>
                <a href="mailto:felix-bredl@gmx.de" className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center group-hover:border-orange-300 transition-colors">
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">E-Mail</div>
                    <div className="text-zinc-900 font-semibold">felix-bredl@gmx.de</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Verantwortlich für den Inhalt</h2>
              </div>
              <div className="text-zinc-600 leading-relaxed">
                <p>
                  Felix Bredl<br />
                  Scharnhorststr. 46<br />
                  80992 München<br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Haftungsausschluss</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Haftung für Inhalte</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den Bestimmungen des österreichischen Rechts für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Haftung für Links</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-3">Urheberrecht</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>

            {/* Datenschutzerklärung */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">Datenschutzerklärung</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-500 text-white text-sm font-black flex items-center justify-center">1</span>
                    Datenschutz auf einen Blick
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Allgemeine Hinweise</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Datenerfassung auf dieser Website</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        <strong>Wie erfassen wir Ihre Daten?</strong><br />
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-500 text-white text-sm font-black flex items-center justify-center">2</span>
                    Hosting
                  </h3>
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                      Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                    </p>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                      Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-zinc-200 mt-3">
                      <p className="text-zinc-600 text-sm">
                        <strong className="text-zinc-800">Hoster:</strong><br />
                        Vercel Inc.<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, USA
                      </p>
                    </div>
                    <p className="text-zinc-600 text-sm leading-relaxed mt-3">
                      Der Hoster wird die Daten Ihrer Nutzung unserer Website nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-500 text-white text-sm font-black flex items-center justify-center">3</span>
                    Allgemeine Hinweise und Pflichtinformationen
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Datenschutz</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Hinweis zur verantwortlichen Stelle</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                      </p>
                      <div className="p-3 rounded-xl bg-white border border-zinc-200">
                        <p className="text-zinc-600 text-sm">
                          QuickAlert e.U.<br />
                          Scharnhorststr. 46<br />
                          80992 München, Deutschland<br /><br />
                          Telefon: +49 151 19784023<br />
                          E-Mail: felix-bredl@gmx.de
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm leading-relaxed mt-3">
                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Speicherdauer</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Abschnitten dieser Datenschutzerklärung informiert.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                      <h4 className="font-bold text-orange-800 mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
                      <p className="text-orange-700 text-sm leading-relaxed">
                        WERDEN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO DURCHGEFÜHRT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Die zuständige Aufsichtsbehörde für Bayern ist:
                      </p>
                      <div className="p-3 rounded-xl bg-white border border-zinc-200">
                        <p className="text-zinc-600 text-sm">
                          <strong className="text-zinc-800">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
                          Promenade 18<br />
                          91522 Ansbach, Deutschland<br />
                          Telefon: +49 (0) 981 53 1300<br />
                          E-Mail: poststelle@lda.bayern.de<br />
                          Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.lda.bayern.de</a>
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Recht auf Datenübertragbarkeit</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">SSL- bzw. TLS-Verschlüsselung</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Auskunft, Löschung und Berichtigung</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Recht auf Einschränkung der Verarbeitung</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                      </p>
                      <ul className="list-disc list-inside text-zinc-600 text-sm space-y-2 ml-2">
                        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                      </ul>
                      <p className="text-zinc-600 text-sm leading-relaxed mt-3">
                        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-500 text-white text-sm font-black flex items-center justify-center">4</span>
                    Datenerfassung auf dieser Website
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Server-Log-Dateien</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                      </p>
                      <ul className="list-disc list-inside text-zinc-600 text-sm space-y-1 ml-2 mb-3">
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                      </ul>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
                      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Cookies
                      </h4>
                      <p className="text-green-700 text-sm leading-relaxed">
                        Diese Website verwendet keine Cookies oder ähnliche Tracking-Technologien. Es werden keine personenbezogenen Daten durch Cookies erfasst oder gespeichert.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <h4 className="font-bold text-zinc-800 mb-2">Kontaktaufnahme</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                        Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-2">
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                      </p>
                    </div>
                  </div>
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
          © 2026 QuickAlert e.U. – Alle Rechte vorbehalten.
        </div>
      </footer>
    </main>
  )
}

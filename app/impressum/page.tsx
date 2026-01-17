import Link from 'next/link'
import DarkModeToggle from '@/components/DarkModeToggle'
import Image from 'next/image'

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#F5E6D3] text-[#3D2F1F] overflow-x-hidden wood-texture">
      <DarkModeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between backdrop-blur-md bg-[#F5E6D3]/95 border-b-2 border-[#D4B896]/40 wood-texture">
        <Link href="/" className="flex items-center gap-2">
          {/* Warnleuchte Icon */}
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Strahlen */}
            <path d="M32 4V12" stroke="#F5A623" strokeWidth="3" strokeLinecap="round"/>
            <path d="M32 4V12" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" transform="rotate(45 32 32)"/>
            <path d="M32 4V12" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" transform="rotate(-45 32 32)"/>
            <path d="M32 4V12" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" transform="rotate(22.5 32 32)"/>
            <path d="M32 4V12" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" transform="rotate(-22.5 32 32)"/>
            {/* Glaskuppel */}
            <path d="M22 38C22 28 24 22 32 22C40 22 42 28 42 38" fill="#F5A623"/>
            <rect x="20" y="22" width="6" height="18" rx="1" fill="white" opacity="0.4"/>
            {/* Basis */}
            <ellipse cx="32" cy="42" rx="16" ry="6" fill="#4A4A4A"/>
            <ellipse cx="32" cy="40" rx="14" ry="4" fill="#5A5A5A"/>
          </svg>
          <span className="text-2xl sm:text-3xl font-black font-poppins tracking-tight" style={{ filter: 'drop-shadow(0 0 10px rgba(212, 184, 150, 0.6))' }}>
            <span className="text-white">Quick</span>
            <span className="text-[#F5A623]">Alert</span>
          </span>
        </Link>
        <Link 
          href="/"
          className="px-6 py-2.5 rounded-lg bg-[#D4B896] text-[#6B4E3D] font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          style={{boxShadow: '0 0 20px rgba(212, 184, 150, 0.5)'}}
        >
          Zur Startseite
        </Link>
      </nav>

      {/* Impressum Content */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-black text-[#6B4E3D] mb-4">Impressum</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#A0825D] to-[#7A9649]"></div>
          </div>

          <div className="space-y-12 text-[#6B4E3D]/90 leading-relaxed">
            {/* Angaben gemäß § 5 TMG / UGB */}
            <div className="p-8 rounded-2xl bg-[#F5E6D3]/80 border-2 border-[#D4B896]/40 shadow-lg wood-texture">
              <h2 className="text-3xl font-black text-[#6B4E3D] mb-6">Impressum</h2>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>QuickAlert e.U.</strong>
                </p>
                <p>
                  [Ihre Straße und Hausnummer]<br />
                  80331 München<br />
                  Deutschland
                </p>
                <p>
                  <strong>Geschäftsführer/Inhaber:</strong><br />
                  [Ihr Name]
                </p>
                <p>
                  <strong>UID-Nummer:</strong> [Ihre UID-Nummer, falls vorhanden]<br />
                  <strong>Firmenbuchnummer:</strong> [Ihre Firmenbuchnummer, falls eingetragen]
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="p-8 rounded-2xl bg-[#F5E6D3]/80 border-2 border-[#D4B896]/40 shadow-lg wood-texture">
              <h2 className="text-3xl font-black text-[#6B4E3D] mb-6">Kontakt</h2>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>Telefon:</strong> [Ihre Telefonnummer]<br />
                  <strong>E-Mail:</strong> [Ihre E-Mail-Adresse]
                </p>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="p-8 rounded-2xl bg-[#F5E6D3]/80 border-2 border-[#D4B896]/40 shadow-lg wood-texture">
              <h2 className="text-3xl font-black text-[#6B4E3D] mb-6">Verantwortlich für den Inhalt</h2>
              <div className="space-y-4 text-lg">
                <p>
                  [Ihr Name]<br />
                  [Ihre Straße und Hausnummer]<br />
                  80331 München<br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="p-8 rounded-2xl bg-[#F5E6D3]/80 border-2 border-[#D4B896]/40 shadow-lg wood-texture">
              <h2 className="text-3xl font-black text-[#6B4E3D] mb-6">Haftungsausschluss</h2>
              
              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">Haftung für Inhalte</h3>
              <p className="text-lg mb-6">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den Bestimmungen des österreichischen Rechts für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">Haftung für Links</h3>
              <p className="text-lg mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">Urheberrecht</h3>
              <p className="text-lg mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Datenschutzerklärung */}
            <div className="p-8 rounded-2xl bg-[#F5E6D3]/80 border-2 border-[#D4B896]/40 shadow-lg wood-texture">
              <h2 className="text-3xl font-black text-[#6B4E3D] mb-6">Datenschutzerklärung</h2>
              
              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">1. Datenschutz auf einen Blick</h3>
              
              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Allgemeine Hinweise</h4>
              <p className="text-lg mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Datenerfassung auf dieser Website</h4>
              <p className="text-lg mb-6">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="text-lg mb-6">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <p className="text-lg mb-6">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="text-lg mb-6">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">2. Hosting</h3>
              <p className="text-lg mb-6">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="text-lg mb-6">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="text-lg mb-6">
                <strong>Hoster:</strong><br />
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                USA
              </p>
              <p className="text-lg mb-6">
                Der Hoster wird die Daten Ihrer Nutzung unserer Website nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>

              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h3>
              
              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Datenschutz</h4>
              <p className="text-lg mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-lg mb-6">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Hinweis zur verantwortlichen Stelle</h4>
              <p className="text-lg mb-6">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-lg mb-6">
                QuickAlert e.U.<br />
                [Ihre Straße und Hausnummer]<br />
                80331 München<br />
                Deutschland
              </p>
              <p className="text-lg mb-6">
                Telefon: [Ihre Telefonnummer]<br />
                E-Mail: [Ihre E-Mail-Adresse]
              </p>
              <p className="text-lg mb-6">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Speicherdauer</h4>
              <p className="text-lg mb-6">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
              <p className="text-lg mb-6">
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Abschnitten dieser Datenschutzerklärung informiert.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
              <p className="text-lg mb-6">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
              <p className="text-lg mb-6">
                WERDEN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO DURCHGEFÜHRT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p className="text-lg mb-6">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IM ZUSAMMENHANG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
              <p className="text-lg mb-6">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Recht auf Datenübertragbarkeit</h4>
              <p className="text-lg mb-6">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">SSL- bzw. TLS-Verschlüsselung</h4>
              <p className="text-lg mb-6">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="text-lg mb-6">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Auskunft, Löschung und Berichtigung</h4>
              <p className="text-lg mb-6">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Recht auf Einschränkung der Verarbeitung</h4>
              <p className="text-lg mb-6">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc list-inside text-lg mb-6 space-y-2 ml-4">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              </ul>
              <p className="text-lg mb-6">
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
              <p className="text-lg mb-6">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Die zuständige Aufsichtsbehörde für Bayern ist:
              </p>
              <p className="text-lg mb-6">
                <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
                Promenade 18<br />
                91522 Ansbach<br />
                Deutschland<br />
                Telefon: +49 (0) 981 53 1300<br />
                E-Mail: poststelle@lda.bayern.de<br />
                Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline">www.lda.bayern.de</a>
              </p>

              <h3 className="text-2xl font-bold text-[#6B4E3D] mt-6 mb-4">4. Datenerfassung auf dieser Website</h3>
              
              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Server-Log-Dateien</h4>
              <p className="text-lg mb-6">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-lg mb-6 space-y-2 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-lg mb-6">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Cookies</h4>
              <p className="text-lg mb-6">
                Diese Website verwendet keine Cookies oder ähnliche Tracking-Technologien. Es werden keine personenbezogenen Daten durch Cookies erfasst oder gespeichert.
              </p>

              <h4 className="text-xl font-bold text-[#6B4E3D] mt-4 mb-3">Kontaktaufnahme</h4>
              <p className="text-lg mb-6">
                Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-lg mb-6">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
              </p>
              <p className="text-lg mb-6">
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#A0825D] to-[#8B6F47] hover:from-[#8B6F47] hover:to-[#6B4E3D] text-[#F5E6D3] font-bold text-lg transition-all duration-300 shadow-xl"
              style={{boxShadow: '0 0 30px rgba(160, 130, 93, 0.4)'}}
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

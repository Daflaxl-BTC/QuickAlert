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
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between backdrop-blur-md bg-white/90 border-b border-zinc-200">
        <Link href="/" onClick={handleGoToOpeningPage} className="flex items-center gap-2">
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
          onClick={handleGoToOpeningPage}
          className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Zur Startseite
        </Link>
      </nav>

      {/* AGB Content */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              Rechtliches
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-zinc-900 mb-4 tracking-tight">Allgemeine Geschäftsbedingungen</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <p className="text-zinc-600 mt-4 text-sm">
              Stand: 01.02.2026
            </p>
          </div>

          <div className="space-y-8">
            {/* Geltungsbereich */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">1. Geltungsbereich</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Lieferung von Waren, die die QuickAlert e.U. (nachfolgend "Verkäufer") mit Verbrauchern und Unternehmern (nachfolgend "Kunde") abschließt.
                </p>
                <p>
                  (2) Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.
                </p>
                <p>
                  (3) Bei Verkäufen über Amazon Marketplace gelten zusätzlich die Allgemeinen Geschäftsbedingungen von Amazon. Im Falle von Widersprüchen zwischen diesen AGB und den Amazon AGBs haben die Amazon AGBs Vorrang, soweit dies gesetzlich zulässig ist.
                </p>
                <p>
                  (4) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Für Verbraucher mit Wohnsitz in Österreich gilt österreichisches Recht, soweit keine zwingenden Bestimmungen des Verbraucherrechts entgegenstehen.
                </p>
              </div>
            </div>

            {/* Vertragspartner & Vertragsschluss */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">2. Vertragspartner & Vertragsschluss</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Vertragspartner ist die QuickAlert e.U., Scharnhorststr. 46, 80992 München, Deutschland, vertreten durch den Geschäftsführer Felix Bredl.
                </p>
                <p>
                  (2) Die Darstellung der Waren im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Aufforderung zur Abgabe eines Angebots dar.
                </p>
                <p>
                  (3) Bei Verkäufen über Amazon Marketplace kommt der Vertrag durch die Annahme der Bestellung durch den Verkäufer gemäß den Amazon-Richtlinien zustande.
                </p>
                <p>
                  (4) Bei Direktverkäufen (falls zukünftig angeboten) kommt der Vertrag durch die Bestätigung der Bestellung durch den Verkäufer zustande. Der Verkäufer bestätigt den Eingang der Bestellung unverzüglich per E-Mail. Diese Bestätigung stellt noch keine Annahme des Angebots dar.
                </p>
                <p>
                  (5) Der Verkäufer behält sich vor, Bestellungen abzulehnen, wenn die Ware nicht verfügbar ist, wenn der Kunde die Zahlung nicht leistet oder wenn berechtigte Zweifel an der Kreditwürdigkeit des Kunden bestehen.
                </p>
              </div>
            </div>

            {/* Preise & Zahlungsbedingungen */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">3. Preise & Zahlungsbedingungen</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Alle Preise verstehen sich in Euro und enthalten die gesetzliche Umsatzsteuer. Bei Lieferungen nach Deutschland beträgt die Umsatzsteuer 19%, bei Lieferungen nach Österreich 20%.
                </p>
                <p>
                  (2) Die Versandkosten werden bei Amazon-Verkäufen gemäß den Amazon-Richtlinien berechnet. Bei Direktverkäufen werden die Versandkosten gesondert ausgewiesen und sind vom Kunden zusätzlich zu tragen, sofern nicht ausdrücklich etwas anderes vereinbart wurde.
                </p>
                <p>
                  (3) Bei Verkäufen über Amazon Marketplace erfolgt die Zahlung über das Amazon Payment System gemäß den Amazon-Zahlungsbedingungen.
                </p>
                <p>
                  (4) Bei Direktverkäufen (falls zukünftig angeboten) ist die Zahlung per Vorkasse, Kreditkarte oder PayPal möglich. Die Rechnung ist innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu zahlen.
                </p>
                <p>
                  (5) Der Verkäufer behält sich das Eigentum an der Ware bis zur vollständigen Zahlung des Kaufpreises vor.
                </p>
              </div>
            </div>

            {/* Lieferung & Versand */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">4. Lieferung & Versand</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Die Lieferung erfolgt bei Amazon-Verkäufen gemäß den Amazon-Lieferrichtlinien und -fristen.
                </p>
                <p>
                  (2) Bei Direktverkäufen erfolgt die Lieferung innerhalb von 2-5 Werktagen nach Zahlungseingang, sofern nicht anders vereinbart. Die Lieferzeit beginnt mit dem Tag nach Zahlungseingang.
                </p>
                <p>
                  (3) Das Versandrisiko geht mit Übergabe der Ware an den Spediteur oder Versanddienstleister auf den Kunden über. Bei Amazon-Verkäufen gelten die Amazon-Versandbedingungen.
                </p>
                <p>
                  (4) Kommt der Kunde mit der Annahme der Ware in Verzug oder verletzt er seine Mitwirkungspflichten, kann der Verkäufer Schadensersatz verlangen. Der Verkäufer kann in diesem Fall auch eine angemessene Frist zur Annahme setzen und nach Fristablauf vom Vertrag zurücktreten.
                </p>
                <p>
                  (5) Bei unvorhersehbaren Ereignissen, die außerhalb des Einflussbereichs des Verkäufers liegen (z.B. Streik, Naturkatastrophen, Pandemien), kann sich die Lieferzeit entsprechend verlängern. Der Verkäufer wird den Kunden unverzüglich über Verzögerungen informieren.
                </p>
              </div>
            </div>

            {/* Widerrufsrecht */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">5. Widerrufsrecht</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <h3 className="font-bold text-orange-800 mb-3">Widerrufsrecht für Verbraucher</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                  </p>
                  <p className="text-orange-700 text-sm mb-3">
                    Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
                  </p>
                  <p className="text-orange-700 text-sm">
                    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (QuickAlert e.U., Scharnhorststr. 46, 80992 München, Deutschland, E-Mail: felix-bredl@gmx.de, Telefon: +49 151 19784023) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-zinc-800 mb-2">Widerrufsfolgen</h3>
                  <p className="mb-3">
                    Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                  </p>
                  <p className="mb-3">
                    Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
                  </p>
                  <p>
                    Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von 14 Tagen absenden.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Muster-Widerrufsformular</h3>
                  <p className="text-xs text-zinc-600 mb-2">
                    Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-600 font-mono whitespace-pre-line">
{`An: QuickAlert e.U.
Scharnhorststr. 46
80992 München
Deutschland
E-Mail: felix-bredl@gmx.de

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)

Bestellt am (*)/erhalten am (*): _________________

Name des/der Verbraucher(s): _________________

Anschrift des/der Verbraucher(s): _________________

Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): _________________

Datum: _________________

(*) Unzutreffendes streichen.`}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <h3 className="font-bold text-zinc-800 mb-2">Ausschluss des Widerrufsrechts</h3>
                  <p className="text-sm">
                    Das Widerrufsrecht besteht nicht bei Waren, die nach spezifischen Wünschen des Verbrauchers angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind, sowie bei Waren, die auf Grund ihrer Beschaffenheit nicht für eine Rücksendung geeignet sind oder schnell verderben können.
                  </p>
                </div>
              </div>
            </div>

            {/* Gewährleistung & Garantie */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">6. Gewährleistung & Garantie</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Für Mängel der Ware gelten die gesetzlichen Bestimmungen, soweit nachfolgend nichts anderes vereinbart ist.
                </p>
                <p>
                  (2) Die Gewährleistungsfrist beträgt für Verbraucher 2 Jahre ab Lieferung der Ware. Für Unternehmer beträgt die Gewährleistungsfrist 12 Monate ab Lieferung der Ware, es sei denn, es handelt sich um einen Arglist verschwiegenen Mangel.
                </p>
                <p>
                  (3) Der Verkäufer gewährleistet, dass die Ware zum Zeitpunkt der Übergabe die vereinbarte Beschaffenheit hat und frei von Sach- und Rechtsmängeln ist. Die Produkte entsprechen den angegebenen technischen Spezifikationen und Zertifizierungen (z.B. ECE R65, IDIADA PC26020115).
                </p>
                <p>
                  (4) Von der Gewährleistung ausgeschlossen sind Schäden, die auf normale Abnutzung, unsachgemäße Handhabung, unsachgemäße Installation oder Verwendung, mangelnde Wartung oder auf äußere Einflüsse zurückzuführen sind.
                </p>
                <p>
                  (5) Der Verkäufer behält sich vor, nach seiner Wahl die Nacherfüllung durch Nachbesserung oder Ersatzlieferung zu leisten. Gelingt die Nacherfüllung nicht, kann der Kunde nach seiner Wahl vom Vertrag zurücktreten oder den Kaufpreis mindern.
                </p>
              </div>
            </div>

            {/* Haftung */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">7. Haftung</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Der Verkäufer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes.
                </p>
                <p>
                  (2) Bei leichter Fahrlässigkeit haftet der Verkäufer nur bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf (Kardinalpflicht). In diesem Fall ist die Haftung auf die bei Vertragsschluss vorhersehbaren, typischerweise eintretenden Schäden begrenzt.
                </p>
                <p>
                  (3) Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper oder Gesundheit sowie bei arglistigem Verschweigen eines Mangels.
                </p>
                <p>
                  (4) Soweit die Haftung des Verkäufers ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung seiner Arbeitnehmer, Vertreter und Erfüllungsgehilfen.
                </p>
                <p>
                  (5) Der Verkäufer weist darauf hin, dass die QuickAlert-Produkte als zusätzliche Sicherheitsmaßnahme dienen und die gesetzlich vorgeschriebenen Warndreiecke nicht ersetzen, es sei denn, dies ist gesetzlich zulässig (z.B. in Spanien ab 2026). Der Verkäufer haftet nicht für Schäden, die durch unsachgemäße Verwendung oder Nichtbeachtung der Verkehrsregeln entstehen.
                </p>
              </div>
            </div>

            {/* Datenschutz */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">8. Datenschutz</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Der Verkäufer erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden nur im Rahmen der gesetzlichen Bestimmungen.
                </p>
                <p>
                  (2) Ausführliche Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="text-orange-500 hover:underline font-semibold">
                    Datenschutzerklärung
                  </Link>.
                </p>
                <p>
                  (3) Bei Verkäufen über Amazon Marketplace werden personenbezogene Daten gemäß den Amazon-Datenschutzbestimmungen verarbeitet.
                </p>
              </div>
            </div>

            {/* Streitbeilegung */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 1m3-1v6a3 3 0 110 6m-6 0a3 3 0 103-6m3 6h.01M9 16l-3-1m3 1l3-1m-3 1v-6m0 0l-3-1m3 1l3 1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">9. Streitbeilegung</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>{' '}
                  finden. Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p>
                  (2) Für Verbraucher mit Wohnsitz in Deutschland gilt: Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, wenn der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, der Geschäftssitz des Verkäufers in München.
                </p>
                <p>
                  (3) Für Verbraucher mit Wohnsitz in Österreich gilt: Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, wenn der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, der Geschäftssitz des Verkäufers in München oder das zuständige Gericht am Wohnsitz des Verbrauchers in Österreich.
                </p>
                <p>
                  (4) Für Verbraucher gilt: Unabhängig davon können Verbraucher den Verkäufer auch an seinem Geschäftssitz verklagen oder sich an das Gericht am eigenen Wohnsitz wenden.
                </p>
              </div>
            </div>

            {/* Schlussbestimmungen */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-zinc-900">10. Schlussbestimmungen</h2>
              </div>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  (1) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird hierdurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. Die unwirksame Bestimmung soll durch eine wirksame ersetzt werden, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt (Salvatorische Klausel).
                </p>
                <p>
                  (2) Der Verkäufer behält sich vor, diese AGB jederzeit zu ändern, ohne den Kunden hierüber gesondert zu unterrichten. Maßgeblich ist die jeweils auf der Website veröffentlichte Fassung.
                </p>
                <p>
                  (3) Für Fragen zu diesen AGB oder zu Bestellungen können Sie uns jederzeit kontaktieren:
                </p>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm">
                    <strong className="text-zinc-800">QuickAlert e.U.</strong><br />
                    Scharnhorststr. 46<br />
                    80992 München, Deutschland<br />
                    E-Mail: felix-bredl@gmx.de<br />
                    Telefon: +49 151 19784023
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <p className="text-orange-700 text-sm">
                    <span className="font-bold">Hinweis:</span> Diese AGB gelten für alle zukünftigen Verkäufe von QuickAlert-Produkten. Aktuell befindet sich QuickAlert in der Pre-Launch-Phase. Verkäufe erfolgen nach erfolgter Firmeneintragung.
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

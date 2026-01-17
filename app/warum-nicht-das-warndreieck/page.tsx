'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useDarkMode } from '@/components/DarkModeProvider'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function WarumNichtDasWarndreieck() {
  const { darkMode } = useDarkMode()

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a] text-[#e5e5e5]' : 'bg-[#F5E6D3] text-[#3D2F1F] wood-texture'}`}>
      <DarkModeToggle />
      
      {/* Top Info Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#8B6F47]/95 border-[#A0825D]/40'}`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-2">
          <p className={`text-center text-xs sm:text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>
            <span className="font-bold">Pro:</span> EU Zulassung nach IDIADA Real Decreto 2822/1998
          </p>
        </div>
      </div>

      {/* Back Arrow - Top Left */}
      <Link 
        href="/"
        className={`fixed top-[10rem] left-6 z-50 p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#4a4a4a] hover:bg-[#4a4a4a]' : 'bg-[#F5E6D3]/95 border-[#D4B896] hover:bg-[#E8D5C4]'}`}
        style={{boxShadow: darkMode ? '0 0 15px rgba(0, 0, 0, 0.3)' : '0 0 15px rgba(212, 184, 150, 0.3)'}}
      >
        <svg 
          className={`w-6 h-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>

      {/* Navigation */}
      <nav className={`fixed top-[2.5rem] left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between backdrop-blur-md border-b-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#F5E6D3]/95 border-[#D4B896]/40 wood-texture'}`} style={{borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
        <div className="flex items-center gap-3">
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
              <span className={darkMode ? 'text-white' : 'text-white'}>Quick</span>
              <span className="text-[#F5A623]">Alert</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/warum-nicht-das-warndreieck" className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0] underline' : 'text-[#6B4E3D] hover:text-[#A0825D] underline'}`}>WARUM NICHT DAS WARNDREIECK?</Link>
          <Link href="/#features" className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>FEATURES</Link>
          <Link href="/#pricing" className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>PREISE</Link>
          <Link href="/#cta" className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>KONTAKT</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.amazon.de/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-all shadow-lg ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5] hover:bg-[#5a5a5a]' : 'bg-[#D4B896] text-[#6B4E3D]'}`}
            style={darkMode ? {boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'} : {boxShadow: '0 0 20px rgba(212, 184, 150, 0.5)'}}
          >
            JETZT KAUFEN
          </Link>
        </div>
      </nav>

      {/* Content - Light Mode Only */}
      {!darkMode && (
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-40 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black mb-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
              Das Warndreieck-Problem
            </h1>

            <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Das vergessene Risiko: Warum das Warndreieck 2026 ein Sicherheitsrisiko ist
              </h2>
              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Jede Minute 7 Pannen auf deutschen Straßen. Über 3,6 Millionen Mal rückte allein der ADAC 2024 aus – alle 9 Sekunden ein Einsatz. Doch während Autos immer smarter werden, verlassen sich Autofahrer noch auf eine 100 Jahre alte Technologie: das Warndreieck.
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Das Problem mit dem Warndreieck
              </h2>
              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                42.415 Auffahrunfälle ereigneten sich 2024 allein in Deutschland. Viele davon hätten verhindert werden können – durch bessere Absicherung der Unfallstelle.
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Warum scheitert das Warndreieck?
              </h2>

              <div className="space-y-6 mb-8">
                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Zu spät gesehen</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    Auf Autobahnen muss das Warndreieck 150–400 Meter entfernt stehen. Bei 130 km/h bleiben nachfolgenden Fahrern nur 4–6 Sekunden Reaktionszeit – zu wenig bei Nebel, Regen oder Dunkelheit.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Lebensbedrohliches Aufstellen</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    Wer das Dreieck auf der Autobahn platziert, muss aussteigen, 200 Meter zu Fuß gehen – während der Verkehr mit 120+ km/h vorbeibrettert. Jedes Jahr werden Autofahrer dabei verletzt oder getötet.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Vergessen oder falsch platziert</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    OLG Hamm bestätigte: Wer das Warndreieck nicht oder falsch aufstellt, trägt 50% Mithaftung bei Auffahrunfällen – selbst bei berechtigtem Notstopp. Bußgeld: 30 € + Haftung für Folgeschäden.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Unsichtbar bei Wind</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    Warndreiecke kippen um, werden weggeweht oder von LKWs überfahren. Keine 360°-Sichtbarkeit.
                  </p>
                </div>
              </div>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Die Realität: Zahlen, die schockieren
              </h2>

              <div className={`overflow-x-auto mb-8 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                <table className="w-full">
                  <thead>
                    <tr className={`border-b-2 transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]' : 'border-[#D4B896]'}`}>
                      <th className={`text-left p-4 font-black transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Problem</th>
                      <th className={`text-left p-4 font-black transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Statistik 2024</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]/50' : 'border-[#D4B896]/50'}`}>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Pannen pro Tag</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>9.927 (ADAC)</td>
                    </tr>
                    <tr className={`border-b transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]/50' : 'border-[#D4B896]/50'}`}>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Auffahrunfälle</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>42.415</td>
                    </tr>
                    <tr className={`border-b transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]/50' : 'border-[#D4B896]/50'}`}>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Autobahn-Unfälle (NRW)</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>90 tödlich, 4.243 schwer</td>
                    </tr>
                    <tr>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Warndreieck-Pflicht</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>30 € Bußgeld + Haftung</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={`text-lg sm:text-xl leading-relaxed mb-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                3,6 Millionen Pannen – doch wie viele davon wurden nicht richtig abgesichert? Wie viele Auffahrunfälle hätten mit sofortiger 360°-Warnung verhindert werden können?
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                QuickAlert: Die Lösung für 2026
              </h2>

              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Stellen Sie sich vor:<br />
                Sie haben eine Panne auf der Autobahn. Statt auszusteigen und 200 Meter zu laufen, drücken Sie einen Knopf. Sofort leuchtet ein gelber 360°-LED-Ring auf Ihrem Dach – sichtbar aus 1 km Entfernung. Nachfolgende Autos sehen Sie 10 Sekunden früher als mit einem Warndreieck.
              </p>

              {/* BASE Features */}
              <h3 className={`text-2xl font-black mb-4 mt-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                QuickAlert BASE (29 €):
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">ECE R65 zertifiziert – Polizei-Standard</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">50kg Magnet – dach-sicher bis 220 km/h</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">Sofort einsatzbereit – kein gefährliches Aufstellen</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">360° Rundumwarnung – bei Nebel, Regen, Dunkelheit</span>
                  </div>
                </div>
              </div>

              {/* PRO Features */}
              <div className="relative mt-12 mb-8">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4 transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a] border-2 border-[#6a6a6a]' : 'bg-[#F5A623] border-2 border-[#E09000]'}`}>
                  <span className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>POPULÄR</span>
                </div>
                <h3 className={`text-3xl sm:text-4xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                  QuickAlert PRO (49 €):
                </h3>
                <div className="relative">
                  <div className={`absolute -inset-1 rounded-xl blur opacity-50 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-r from-[#6a6a6a] via-[#8a8a8a] to-[#6a6a6a]' : 'bg-gradient-to-r from-[#F5A623] via-[#D4B896] to-[#F5A623]'}`}></div>
                  <div className={`relative p-6 rounded-xl border-4 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border-[#6a6a6a]' : 'bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] border-[#F5A623]'}`} style={{boxShadow: darkMode ? '0 0 40px rgba(106, 106, 106, 0.5)' : '0 0 40px rgba(159, 181, 115, 0.4)'}}>
                    <div className={`flex items-start gap-3 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                      <span className={`text-2xl mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>✅</span>
                      <span className="text-lg sm:text-xl font-bold">PRO: GPS + Cloud-Alarm – Leitstellen werden automatisch informiert (13 Jahre eSIM inklusive)</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={`text-base sm:text-lg leading-relaxed mb-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/80' : 'text-[#6B4E3D]/80'}`}>
                <strong className={darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}>Plus:</strong> Alle Features vom BASE Modell inklusive.
              </p>

              <p className={`text-lg sm:text-xl leading-relaxed mb-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Keine 50% Mithaftung. Keine 30 € Bußgelder. Kein Aussteigen auf der Autobahn.
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Von Polizisten entwickelt – für Ihre Sicherheit
              </h2>

              <p className={`text-lg sm:text-xl leading-relaxed mb-12 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Das Warndreieck stammt aus 1925. Moderne Unfallprävention braucht moderne Technologie.<br /><br />
                <strong className={darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}>QuickAlert – weil Sekunden Leben retten.</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a
                  href="https://www.amazon.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl text-center ${darkMode ? 'bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]' : 'bg-gradient-to-r from-[#A0825D] to-[#8B6F47] hover:from-[#8B6F47] hover:to-[#6B4E3D] text-[#F5E6D3]'}`}
                  style={darkMode ? {boxShadow: '0 0 30px rgba(106, 106, 106, 0.6)'} : {boxShadow: '0 0 30px rgba(212, 184, 150, 0.4)'}}
                >
                  BASE kaufen – 29 €
                </a>
                <a
                  href="https://www.amazon.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl text-center ${darkMode ? 'bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]' : 'bg-[#F5A623] hover:bg-[#FFB84D] text-[#6B4E3D]'}`}
                  style={darkMode ? {boxShadow: '0 0 30px rgba(106, 106, 106, 0.6)'} : {boxShadow: '0 0 30px rgba(159, 181, 115, 0.4)'}}
                >
                  PRO mit GPS – 49 €
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dark Mode Content - Same as Light Mode but different styling */}
      {darkMode && (
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-40 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black mb-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
              Das Warndreieck-Problem
            </h1>

            <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Das vergessene Risiko: Warum das Warndreieck 2026 ein Sicherheitsrisiko ist
              </h2>
              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Jede Minute 7 Pannen auf deutschen Straßen. Über 3,6 Millionen Mal rückte allein der ADAC 2024 aus – alle 9 Sekunden ein Einsatz. Doch während Autos immer smarter werden, verlassen sich Autofahrer noch auf eine 100 Jahre alte Technologie: das Warndreieck.
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Das Problem mit dem Warndreieck
              </h2>
              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                42.415 Auffahrunfälle ereigneten sich 2024 allein in Deutschland. Viele davon hätten verhindert werden können – durch bessere Absicherung der Unfallstelle.
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Warum scheitert das Warndreieck?
              </h2>

              <div className="space-y-6 mb-8">
                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Zu spät gesehen</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    Auf Autobahnen muss das Warndreieck 150–400 Meter entfernt stehen. Bei 130 km/h bleiben nachfolgenden Fahrern nur 4–6 Sekunden Reaktionszeit – zu wenig bei Nebel, Regen oder Dunkelheit.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Lebensbedrohliches Aufstellen</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    Wer das Dreieck auf der Autobahn platziert, muss aussteigen, 200 Meter zu Fuß gehen – während der Verkehr mit 120+ km/h vorbeibrettert. Jedes Jahr werden Autofahrer dabei verletzt oder getötet.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Vergessen oder falsch platziert</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    OLG Hamm bestätigte: Wer das Warndreieck nicht oder falsch aufstellt, trägt 50% Mithaftung bei Auffahrunfällen – selbst bei berechtigtem Notstopp. Bußgeld: 30 € + Haftung für Folgeschäden.
                  </p>
                </div>

                <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                  <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>❌ Unsichtbar bei Wind</h3>
                  <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    Warndreiecke kippen um, werden weggeweht oder von LKWs überfahren. Keine 360°-Sichtbarkeit.
                  </p>
                </div>
              </div>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Die Realität: Zahlen, die schockieren
              </h2>

              <div className={`overflow-x-auto mb-8 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/50 border-[#4a4a4a]' : 'bg-[#E8D5C4]/50 border-[#D4B896]'}`}>
                <table className="w-full">
                  <thead>
                    <tr className={`border-b-2 transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]' : 'border-[#D4B896]'}`}>
                      <th className={`text-left p-4 font-black transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Problem</th>
                      <th className={`text-left p-4 font-black transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Statistik 2024</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]/50' : 'border-[#D4B896]/50'}`}>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Pannen pro Tag</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>9.927 (ADAC)</td>
                    </tr>
                    <tr className={`border-b transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]/50' : 'border-[#D4B896]/50'}`}>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Auffahrunfälle</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>42.415</td>
                    </tr>
                    <tr className={`border-b transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]/50' : 'border-[#D4B896]/50'}`}>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Autobahn-Unfälle (NRW)</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>90 tödlich, 4.243 schwer</td>
                    </tr>
                    <tr>
                      <td className={`p-4 font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Warndreieck-Pflicht</td>
                      <td className={`p-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>30 € Bußgeld + Haftung</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={`text-lg sm:text-xl leading-relaxed mb-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                3,6 Millionen Pannen – doch wie viele davon wurden nicht richtig abgesichert? Wie viele Auffahrunfälle hätten mit sofortiger 360°-Warnung verhindert werden können?
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                QuickAlert: Die Lösung für 2026
              </h2>

              <p className={`text-lg sm:text-xl leading-relaxed mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Stellen Sie sich vor:<br />
                Sie haben eine Panne auf der Autobahn. Statt auszusteigen und 200 Meter zu laufen, drücken Sie einen Knopf. Sofort leuchtet ein gelber 360°-LED-Ring auf Ihrem Dach – sichtbar aus 1 km Entfernung. Nachfolgende Autos sehen Sie 10 Sekunden früher als mit einem Warndreieck.
              </p>

              {/* BASE Features */}
              <h3 className={`text-2xl font-black mb-4 mt-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                QuickAlert BASE (29 €):
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">ECE R65 zertifiziert – Polizei-Standard</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">50kg Magnet – dach-sicher bis 220 km/h</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">Sofort einsatzbereit – kein gefährliches Aufstellen</span>
                  </div>
                </div>
                <div className={`p-4 rounded-xl border-2 transition-colors duration-300 ${darkMode ? 'bg-[#8B6020]/30 border-[#D4A020]' : 'bg-[#E09000]/20 border-[#F5A623]'}`}>
                  <div className={`flex items-start gap-2 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <span className="text-[#F5A623] mt-0.5">✅</span>
                    <span className="text-base font-semibold">360° Rundumwarnung – bei Nebel, Regen, Dunkelheit</span>
                  </div>
                </div>
              </div>

              {/* PRO Features */}
              <div className="relative mt-12 mb-8">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4 transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a] border-2 border-[#6a6a6a]' : 'bg-[#F5A623] border-2 border-[#E09000]'}`}>
                  <span className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>POPULÄR</span>
                </div>
                <h3 className={`text-3xl sm:text-4xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                  QuickAlert PRO (49 €):
                </h3>
                <div className="relative">
                  <div className={`absolute -inset-1 rounded-xl blur opacity-50 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-r from-[#6a6a6a] via-[#8a8a8a] to-[#6a6a6a]' : 'bg-gradient-to-r from-[#F5A623] via-[#D4B896] to-[#F5A623]'}`}></div>
                  <div className={`relative p-6 rounded-xl border-4 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border-[#6a6a6a]' : 'bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] border-[#F5A623]'}`} style={{boxShadow: darkMode ? '0 0 40px rgba(106, 106, 106, 0.5)' : '0 0 40px rgba(159, 181, 115, 0.4)'}}>
                    <div className={`flex items-start gap-3 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                      <span className={`text-2xl mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>✅</span>
                      <span className="text-lg sm:text-xl font-bold">PRO: GPS + Cloud-Alarm – Leitstellen werden automatisch informiert (13 Jahre eSIM inklusive)</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={`text-base sm:text-lg leading-relaxed mb-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/80' : 'text-[#6B4E3D]/80'}`}>
                <strong className={darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}>Plus:</strong> Alle Features vom BASE Modell inklusive.
              </p>

              <p className={`text-lg sm:text-xl leading-relaxed mb-8 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Keine 50% Mithaftung. Keine 30 € Bußgelder. Kein Aussteigen auf der Autobahn.
              </p>

              <h2 className={`text-3xl sm:text-4xl font-black mt-12 mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>
                Von Polizisten entwickelt – für Ihre Sicherheit
              </h2>

              <p className={`text-lg sm:text-xl leading-relaxed mb-12 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                Das Warndreieck stammt aus 1925. Moderne Unfallprävention braucht moderne Technologie.<br /><br />
                <strong className={darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}>QuickAlert – weil Sekunden Leben retten.</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a
                  href="https://www.amazon.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl text-center ${darkMode ? 'bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]' : 'bg-gradient-to-r from-[#A0825D] to-[#8B6F47] hover:from-[#8B6F47] hover:to-[#6B4E3D] text-[#F5E6D3]'}`}
                  style={darkMode ? {boxShadow: '0 0 30px rgba(106, 106, 106, 0.6)'} : {boxShadow: '0 0 30px rgba(212, 184, 150, 0.4)'}}
                >
                  BASE kaufen – 29 €
                </a>
                <a
                  href="https://www.amazon.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl text-center ${darkMode ? 'bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]' : 'bg-[#F5A623] hover:bg-[#FFB84D] text-[#6B4E3D]'}`}
                  style={darkMode ? {boxShadow: '0 0 30px rgba(106, 106, 106, 0.6)'} : {boxShadow: '0 0 30px rgba(159, 181, 115, 0.4)'}}
                >
                  PRO mit GPS – 49 €
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

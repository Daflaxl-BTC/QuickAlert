'use client'

import DarkModeToggle from '@/components/DarkModeToggle'
import { useDarkMode } from '@/components/DarkModeProvider'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (darkMode) {
      e.preventDefault()
      setDarkMode(false)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a] text-[#e5e5e5]' : 'bg-[#F5E6D3] text-[#3D2F1F] wood-texture'}`}>
      {/* Back to Top Arrow - Hidden on mobile, visible on desktop */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 shadow-xl group hover:scale-110 ${darkMode ? 'bg-[#2d2d2d]/80 border-[#4a4a4a] text-[#e5e5e5] hover:bg-[#3d3d3d]' : 'bg-[#F5E6D3]/80 border-[#D4B896] text-[#6B4E3D] hover:bg-[#E8D5C4]'}`}
        style={darkMode ? {boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)'} : {boxShadow: '0 0 20px rgba(212, 184, 150, 0.3)'}}
      >
        <svg className="w-6 h-6 transform rotate-180 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dark Mode Toggle with Warndreieck Link - Mobile optimized */}
      <div className="fixed right-2 sm:right-4 top-20 sm:top-1/2 sm:transform sm:-translate-y-1/2 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
        {/* Warndreieck Link with Arrow - Mobile optimized */}
        <Link 
          href="/warum-nicht-das-warndreieck" 
          className={`group flex items-center gap-1.5 sm:gap-2 rounded-lg backdrop-blur-md border-2 transition-all duration-300 ${darkMode ? 'px-3 py-2 sm:px-6 sm:py-3 bg-[#1a1a1a]/90 border-[#F5A623] hover:bg-[#2d2d2d]' : 'px-3 py-1.5 sm:px-4 sm:py-2 bg-[#F5E6D3]/80 border-[#D4B896] text-[#6B4E3D] hover:bg-[#E8D5C4]'}`}
          style={darkMode ? {boxShadow: '0 0 20px rgba(245, 166, 35, 0.3)'} : {}}
        >
          <span className={`font-bold whitespace-nowrap ${darkMode ? 'text-xs sm:text-base md:text-lg' : 'text-[10px] sm:text-xs md:text-sm font-semibold'}`}>
            {darkMode ? (
              <>
                <span className="text-white">Warum lieber </span>
                <span className="text-white">Quick</span>
                <span className="text-[#F5A623]">Alert</span>
                <span className="text-white"> ?</span>
              </>
            ) : 'WARUM NICHT DAS WARNDREIECK?'}
          </span>
          <svg className={`group-hover:translate-x-1 transition-transform ${darkMode ? 'w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]' : 'w-3 h-3 sm:w-4 sm:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <DarkModeToggle />
      </div>
      
      {/* Top Info Bar - Mobile optimized */}
      <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#8B6F47]/95 border-[#A0825D]/40'}`}>
        <div className="container mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-1.5 sm:py-2">
          <p className={`text-center text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>
            <span className="font-bold">Pro:</span> <span className="hidden sm:inline">EU Zulassung nach IDIADA Real Decreto 2822/1998</span><span className="sm:hidden">EU Zulassung</span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-[2.5rem] left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-between backdrop-blur-md border-b-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#F5E6D3]/95 border-[#D4B896]/40 wood-texture'}`} style={{borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
        {/* Logo Links */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Warnleuchte Icon */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span className="text-xl sm:text-2xl md:text-3xl font-black font-poppins tracking-tight" style={{ filter: 'drop-shadow(0 0 10px rgba(212, 184, 150, 0.6))' }}>
            <span className={darkMode ? 'text-white' : 'text-white'}>Quick</span>
            <span className="text-[#F5A623]">Alert</span>
          </span>
        </div>

        {/* Navigation Links Center */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>FEATURES</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>PREISE</a>
            <a href="#cta" onClick={(e) => handleNavClick(e, 'cta')} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>KONTAKT</a>
          <div className={`flex items-center gap-6 pl-4 border-l transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]' : 'border-[#D4B896]/40'}`}>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className={`text-sm font-semibold transition-colors relative ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>
              BASE
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className={`text-sm font-semibold transition-colors relative inline-block pr-10 ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>
              <span 
                className={`absolute -top-4 right-0 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5]' : 'bg-[#8B6F47] text-[#F5E6D3]'}`}
                style={{
                  transform: 'rotate(12deg)',
                  boxShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(139, 111, 71, 0.4)'
                }}
              >
                Spanien
              </span>
              PRO
            </a>
          </div>
        </div>

        {/* Action Button Right - Mobile optimized */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href="https://www.amazon.de/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5] hover:bg-[#5a5a5a]' : 'bg-[#D4B896] text-[#6B4E3D]'}`}
            style={darkMode ? {boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'} : {boxShadow: '0 0 20px rgba(212, 184, 150, 0.5)'}}
          >
            <span className="hidden sm:inline">JETZT KAUFEN</span>
            <span className="sm:hidden">KAUFEN</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {darkMode ? (
          <>
            {/* Dark Mode: Warndreieck Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{backgroundImage: "url('/Warndreieck Autobahn Personen.jpg')"}}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#2d2d2d]/85 to-[#1a1a1a]/90"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]/95"></div>
            </div>

            {/* Warndreieck Image - Small overlay top right */}
            <div className="absolute top-96 right-8 z-20 w-48 sm:w-64 md:w-80 lg:w-96">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#4a4a4a] shadow-2xl">
                <Image
                  src="/Warndreieck.jpg"
                  alt="Warndreieck"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent"></div>
                {/* Patch to hide watermark */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Light Mode: Original Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{backgroundImage: "url('/Autounfall.png')"}}
            >
              {/* Warm Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B4E3D]/80 via-[#8B6F47]/70 to-[#A0825D]/60"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#6B4E3D]/80"></div>
            </div>
          </>
        )}

        {/* Hero Content - Overlaid to avoid layout shifts - Mobile optimized */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-32 pb-12 sm:pb-20">
          <div className="max-w-4xl">
            {/* Date Badge */}
            <div className="grid place-items-start mb-8">
              <div className={`col-start-1 row-start-1 transition-none ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="relative inline-flex items-center justify-center w-[260px] sm:w-[280px] h-10 sm:h-11 px-8 rounded-full border-2 border-[#4a4a4a] bg-[#2d2d2d]/60 backdrop-blur-md shadow-lg" style={{boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)'}}>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)'}}></div>
                  <span className="w-full text-center text-sm sm:text-base font-black text-[#e5e5e5] tracking-wide">Seit 08.05.1968</span>
                </div>
              </div>
              <div className={`col-start-1 row-start-1 transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="relative inline-flex items-center justify-center w-[260px] sm:w-[280px] h-10 sm:h-11 px-8 rounded-full border-2 border-[#D4B896] bg-[#6B4E3D]/40 backdrop-blur-md shadow-lg" style={{boxShadow: '0 0 20px rgba(212, 184, 150, 0.4)'}}>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" style={{boxShadow: '0 0 10px rgba(159, 181, 115, 0.8)'}}></div>
                  <span className="w-full text-center text-sm sm:text-base font-black text-[#F5E6D3] tracking-wide">NEU 2026</span>
                </div>
              </div>
            </div>

            {/* Main Headline - Mobile optimized */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]">
                <div className="space-y-2 sm:space-y-4">
                  <div className={darkMode ? 'text-red-500' : 'text-[#F5E6D3]'}>
                    {darkMode ? '• gefährlich' : 'Fahre Sicher,'}
                  </div>
                  <div className={darkMode ? 'text-[#9a9a9a]' : 'text-[#F5E6D3]'}>
                    {darkMode ? (
                      '• dunkel'
                    ) : (
                      <>
                        <span className="text-[#F5A623]">helfe</span>
                        <span className="text-[#F5E6D3]"> sicher</span>
                      </>
                    )}
                  </div>
                </div>
              </h1>
            </div>

            {/* Description - Mobile optimized */}
            <div className="grid place-items-start mb-8 sm:mb-12 max-w-2xl">
              <p className={`col-start-1 row-start-1 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed transition-none ${darkMode ? 'opacity-100 text-[#e5e5e5]/80' : 'opacity-0 pointer-events-none'}`}>
                Herkömmliche Warndreiecke: Ein gefährliches Risiko auf der Autobahn.
              </p>
              <p className={`col-start-1 row-start-1 text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100 text-[#F5E6D3]/90'}`}>
                Das weltweit modernste magnetische LED-Warnlicht. Polizei-Qualität mit elegantem Design, das die Nacht erhellt.
              </p>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="grid place-items-start">
              <div className={`col-start-1 row-start-1 flex flex-col sm:flex-row gap-3 sm:gap-4 transition-none ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <a 
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="group relative px-6 py-3 sm:px-10 sm:py-5 rounded-xl bg-[#8b0000] hover:bg-[#a00000] border-2 border-[#ff4444] font-bold text-sm sm:text-lg overflow-hidden transition-all duration-300 text-[#ffffff]"
                  style={{
                    boxShadow: '0 0 30px rgba(139, 0, 0, 0.6)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    Abhilfe finden
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
              <div className={`col-start-1 row-start-1 flex flex-col sm:flex-row gap-3 sm:gap-4 transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <a 
                  href="#pricing"
                  className="group relative px-6 py-3 sm:px-10 sm:py-5 rounded-xl bg-[#6B4E3D]/80 backdrop-blur-sm border-2 border-[#D4B896] font-bold text-sm sm:text-lg overflow-hidden hover:bg-[#D4B896] hover:text-[#6B4E3D] transition-all duration-300 text-[#F5E6D3]"
                  style={{
                    boxShadow: '0 0 30px rgba(212, 184, 150, 0.4)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    QuickAlert finden
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="#features"
                  className="px-6 py-3 sm:px-10 sm:py-5 rounded-xl bg-gradient-to-r from-[#E09000] to-[#CC8000] border-2 border-[#F5A623]/50 font-bold text-sm sm:text-lg hover:scale-105 transition-transform backdrop-blur-sm text-[#F5E6D3]"
                  style={{
                    boxShadow: '0 0 20px rgba(159, 181, 115, 0.4)'
                  }}
                >
                  Für Händler
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Mobile optimized */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 animate-bounce z-20 ${darkMode ? 'bottom-4 sm:bottom-8' : 'bottom-16 sm:bottom-24'}`}>
          <span className={`text-[10px] sm:text-xs font-semibold ${darkMode ? 'text-[#e5e5e5]/70' : 'text-white'}`}>SCROLL</span>
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-[#e5e5e5]/70' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Dark Mode: Warndreieck Content */}
      {darkMode && (
        <section className="relative py-32 overflow-hidden bg-[#1a1a1a]">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-20">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 text-[#e5e5e5]">
                Das Warndreieck-Problem
              </h1>

              <div className="prose prose-lg max-w-none prose-invert">
                <h2 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-[#e5e5e5]">
                  Das vergessene Risiko: Warum das Warndreieck 2026 ein Sicherheitsrisiko ist
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-6 text-[#e5e5e5]/90">
                  Jede Minute 7 Pannen auf deutschen Straßen. Über 3,6 Millionen Mal rückte allein der ADAC 2024 aus – alle 9 Sekunden ein Einsatz. Doch während Autos immer smarter werden, verlassen sich Autofahrer noch auf eine 100 Jahre alte Technologie: das Warndreieck.
                </p>

                <h2 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-[#e5e5e5]">
                  Das Problem mit dem Warndreieck
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-6 text-[#e5e5e5]/90">
                  42.415 Auffahrunfälle ereigneten sich 2024 allein in Deutschland. Viele davon hätten verhindert werden können – durch bessere Absicherung der Unfallstelle.
                </p>

                <h2 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-[#e5e5e5]">
                  Warum scheitert das Warndreieck?
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="p-6 rounded-xl border-2 bg-[#2d2d2d]/50 border-[#4a4a4a]">
                    <h3 className="text-xl font-black mb-3 text-red-400">❌ Zu spät gesehen</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#e5e5e5]/90">
                      Auf Autobahnen muss das Warndreieck 150–400 Meter entfernt stehen. Bei 130 km/h bleiben nachfolgenden Fahrern nur 4–6 Sekunden Reaktionszeit – zu wenig bei Nebel, Regen oder Dunkelheit.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border-2 bg-[#2d2d2d]/50 border-[#4a4a4a]">
                    <h3 className="text-xl font-black mb-3 text-red-400">❌ Lebensbedrohliches Aufstellen</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#e5e5e5]/90">
                      Wer das Dreieck auf der Autobahn platziert, muss aussteigen, 200 Meter zu Fuß gehen – während der Verkehr mit 120+ km/h vorbeibrettert. Jedes Jahr werden Autofahrer dabei verletzt oder getötet.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border-2 bg-[#2d2d2d]/50 border-[#4a4a4a]">
                    <h3 className="text-xl font-black mb-3 text-red-400">❌ Vergessen oder falsch platziert</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#e5e5e5]/90">
                      OLG Hamm bestätigte: Wer das Warndreieck nicht oder falsch aufstellt, trägt 50% Mithaftung bei Auffahrunfällen – selbst bei berechtigtem Notstopp. Bußgeld: 30 € + Haftung für Folgeschäden.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border-2 bg-[#2d2d2d]/50 border-[#4a4a4a]">
                    <h3 className="text-xl font-black mb-3 text-red-400">❌ Unsichtbar bei Wind</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#e5e5e5]/90">
                      Warndreiecke kippen um, werden weggeweht oder von LKWs überfahren. Keine 360°-Sichtbarkeit.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-[#e5e5e5]">
                  Die Realität: Zahlen, die schockieren
                </h2>

                <div className="overflow-x-auto mb-8 rounded-xl border-2 bg-[#2d2d2d]/50 border-[#4a4a4a]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-[#4a4a4a]">
                        <th className="text-left p-4 font-black text-[#e5e5e5]">Problem</th>
                        <th className="text-left p-4 font-black text-[#e5e5e5]">Statistik 2024</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#4a4a4a]/50">
                        <td className="p-4 font-semibold text-[#e5e5e5]">Pannen pro Tag</td>
                        <td className="p-4 text-[#e5e5e5]/90">9.927 (ADAC)</td>
                      </tr>
                      <tr className="border-b border-[#4a4a4a]/50">
                        <td className="p-4 font-semibold text-[#e5e5e5]">Auffahrunfälle</td>
                        <td className="p-4 text-[#e5e5e5]/90">42.415</td>
                      </tr>
                      <tr className="border-b border-[#4a4a4a]/50">
                        <td className="p-4 font-semibold text-[#e5e5e5]">Autobahn-Unfälle (NRW)</td>
                        <td className="p-4 text-[#e5e5e5]/90">90 tödlich, 4.243 schwer</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#e5e5e5]">Warndreieck-Pflicht</td>
                        <td className="p-4 text-[#e5e5e5]/90">30 € Bußgeld + Haftung</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-[#e5e5e5]/90">
                  3,6 Millionen Pannen – doch wie viele davon wurden nicht richtig abgesichert? Wie viele Auffahrunfälle hätten mit sofortiger 360°-Warnung verhindert werden können?
                </p>

                <h2 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-[#e5e5e5]">
                  QuickAlert: Die Lösung für 2026
                </h2>

                <p className="text-lg sm:text-xl leading-relaxed mb-6 text-[#e5e5e5]/90">
                  Stellen Sie sich vor:<br />
                  Sie haben eine Panne auf der Autobahn. Statt auszusteigen und 200 Meter zu laufen, drücken Sie einen Knopf. Sofort leuchtet ein gelber 360°-LED-Ring auf Ihrem Dach – sichtbar aus 1 km Entfernung. Nachfolgende Autos sehen Sie 10 Sekunden früher als mit einem Warndreieck.
                </p>

                {/* BASE Features */}
                <h3 className="text-2xl font-black mb-4 mt-8 text-[#e5e5e5]">
                  QuickAlert BASE (29 €):
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl border-2 bg-[#8B6020]/30 border-[#D4A020]">
                    <div className="flex items-start gap-2 text-[#e5e5e5]/90">
                      <span className="text-[#F5A623] mt-0.5">✅</span>
                      <span className="text-base font-semibold">ECE R65 zertifiziert – Polizei-Standard</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border-2 bg-[#8B6020]/30 border-[#D4A020]">
                    <div className="flex items-start gap-2 text-[#e5e5e5]/90">
                      <span className="text-[#F5A623] mt-0.5">✅</span>
                      <span className="text-base font-semibold">50kg Magnet – dach-sicher bis 220 km/h</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border-2 bg-[#8B6020]/30 border-[#D4A020]">
                    <div className="flex items-start gap-2 text-[#e5e5e5]/90">
                      <span className="text-[#F5A623] mt-0.5">✅</span>
                      <span className="text-base font-semibold">Sofort einsatzbereit – kein gefährliches Aufstellen</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border-2 bg-[#8B6020]/30 border-[#D4A020]">
                    <div className="flex items-start gap-2 text-[#e5e5e5]/90">
                      <span className="text-[#F5A623] mt-0.5">✅</span>
                      <span className="text-base font-semibold">360° Rundumwarnung – bei Nebel, Regen, Dunkelheit</span>
                    </div>
                  </div>
                </div>

                {/* PRO Features */}
                <div className="relative mt-12 mb-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4 bg-[#4a4a4a] border-2 border-[#6a6a6a]">
                    <span className="text-xs font-black uppercase tracking-wider text-[#e5e5e5]">POPULÄR</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black mb-6 text-[#e5e5e5]">
                    QuickAlert PRO (49 €):
                  </h3>
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl blur opacity-50 bg-gradient-to-r from-[#6a6a6a] via-[#8a8a8a] to-[#6a6a6a]"></div>
                    <div className="relative p-6 rounded-xl border-4 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border-[#6a6a6a]" style={{boxShadow: '0 0 40px rgba(106, 106, 106, 0.5)'}}>
                      <div className="flex items-start gap-3 text-[#e5e5e5]">
                        <span className="text-2xl mt-0.5 text-blue-400">✅</span>
                        <span className="text-lg sm:text-xl font-bold">PRO: GPS + Cloud-Alarm – Leitstellen werden automatisch informiert (13 Jahre eSIM inklusive)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-base sm:text-lg leading-relaxed mb-4 text-[#e5e5e5]/80">
                  <strong className="text-[#e5e5e5]">Plus:</strong> Alle Features vom BASE Modell inklusive.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-[#e5e5e5]/90">
                  Keine 50% Mithaftung. Keine 30 € Bußgelder. Kein Aussteigen auf der Autobahn.
                </p>

                <h2 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-[#e5e5e5]">
                  Von Polizisten entwickelt – für Ihre Sicherheit
                </h2>

                <p className="text-lg sm:text-xl leading-relaxed mb-12 text-[#e5e5e5]/90">
                  Das Warndreieck stammt aus 1925. Moderne Unfallprävention braucht moderne Technologie.<br /><br />
                  <strong className="text-[#e5e5e5]">QuickAlert – weil Sekunden Leben retten.</strong>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <a
                    href="https://www.amazon.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl text-center bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]"
                    style={{boxShadow: '0 0 30px rgba(106, 106, 106, 0.6)'}}
                  >
                    BASE kaufen – 29 €
                  </a>
                  <a
                    href="https://www.amazon.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-xl text-center bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]"
                    style={{boxShadow: '0 0 30px rgba(106, 106, 106, 0.6)'}}
                  >
                    PRO mit GPS – 49 €
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features - Completely New Design */}
      {!darkMode && (
      <section id="features" className={`relative py-32 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[#F5E6D3] via-[#E8D5C4] to-[#F5E6D3] wood-texture`}>
        {/* Wood Grain Overlay - only in light mode */}
        {!darkMode && <div className="absolute inset-0 wood-grain opacity-50"></div>}
        {/* Decorative Bamboo Stems */}
        <div className="absolute right-0 top-0 w-40 h-full opacity-25 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 800" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#E09000" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#F5A623" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <rect x="40" y="0" width="20" height="800" fill="url(#bambooGrad)"/>
            <rect x="45" y="100" width="10" height="80" fill="#E09000" opacity="0.6"/>
            <rect x="45" y="220" width="10" height="80" fill="#E09000" opacity="0.6"/>
            <rect x="45" y="340" width="10" height="80" fill="#E09000" opacity="0.6"/>
            <rect x="45" y="460" width="10" height="80" fill="#E09000" opacity="0.6"/>
            <rect x="45" y="580" width="10" height="80" fill="#E09000" opacity="0.6"/>
            <rect x="45" y="700" width="10" height="80" fill="#E09000" opacity="0.6"/>
            <line x1="40" y1="0" x2="50" y2="100" stroke="#CC8000" strokeWidth="2" opacity="0.4"/>
            <line x1="60" y1="0" x2="50" y2="100" stroke="#CC8000" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4B896]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        {/* Decorative Wood Boards */}
        <div className="absolute left-0 top-0 w-full h-3 bg-gradient-to-r from-transparent via-[#A0825D]/50 to-transparent"></div>
        <div className="absolute left-0 top-12 w-full h-1 bg-gradient-to-r from-transparent via-[#8B6F47]/40 to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-full h-3 bg-gradient-to-r from-transparent via-[#A0825D]/50 to-transparent"></div>
        <div className="absolute left-0 bottom-12 w-full h-1 bg-gradient-to-r from-transparent via-[#8B6F47]/40 to-transparent"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className={`inline-block px-6 py-2 rounded-full border mb-6 transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a]/30 border-[#6a6a6a]/50' : 'bg-[#D4B896]/30 border-[#A0825D]/50'}`}>
              <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Warum QuickAlert?</span>
            </div>
            <h2 className={`text-6xl sm:text-7xl md:text-8xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'bg-gradient-to-r from-[#6B4E3D] via-[#A0825D] to-[#6B4E3D] bg-clip-text text-transparent'}`}>
              Technologie die zählt
            </h2>
          </div>
          
          {/* Features in Zigzag Layout */}
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#D4B896]/30 to-transparent rounded-3xl blur-2xl"></div>
                  <div className={`relative backdrop-blur-xl rounded-3xl p-12 border-2 transition-all duration-500 shadow-xl ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d]/95 to-[#1a1a1a]/95 border-[#4a4a4a]/60 hover:border-[#6a6a6a]' : 'bg-gradient-to-br from-[#F5E6D3]/95 to-[#E8D5C4]/95 border-[#D4B896]/40 hover:border-[#A0825D]/60 wood-texture'}`}>
                    {!darkMode && <div className="absolute inset-0 wood-grain opacity-20 rounded-3xl"></div>}
                    <div className="relative z-10">
                      <div className="text-7xl mb-6">🧲</div>
                      <h3 className={`text-5xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Fester Halt</h3>
                      <p className={`text-xl leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/80'}`}>
                        Dach-sicher bis 220 km/h – hält auch bei hohen Geschwindigkeiten. Der stabile Magnet sorgt für maximale Sicherheit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[#D4B896]/30 to-[#C9A88F]/20 rounded-3xl border-2 border-[#A0825D]/40 flex items-center justify-center shadow-xl wood-texture relative">
                  <div className="absolute inset-0 wood-grain opacity-25 rounded-3xl"></div>
                  <div className="text-9xl relative z-10">🧲</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[#F5A623]/30 to-[#FFB84D]/20 rounded-3xl border-2 border-[#E09000]/40 flex items-center justify-center shadow-xl bamboo-texture bamboo-segments relative">
                  <div className="absolute inset-0 opacity-30"></div>
                  <div className="text-9xl relative z-10">🔋</div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#F5A623]/30 to-transparent rounded-3xl blur-2xl"></div>
                  <div className={`relative backdrop-blur-xl rounded-3xl p-12 border-2 transition-all duration-500 shadow-xl ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d]/95 to-[#1a1a1a]/95 border-[#4a4a4a]/60 hover:border-[#6a6a6a]' : 'bg-gradient-to-br from-[#F5E6D3]/95 to-[#E8D5C4]/95 border-[#F5A623]/40 hover:border-[#E09000]/60 bamboo-texture bamboo-segments'}`}>
                    {!darkMode && <div className="absolute inset-0 opacity-20 rounded-3xl"></div>}
                    <div className="relative z-10">
                      <div className="text-7xl mb-6">🔋</div>
                      <h3 className={`text-5xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#B87000]'}`}>30+ Min Akku</h3>
                      <div className={`space-y-4 text-xl leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/80'}`}>
                        <p>
                          USB-C Schnellladung – schnell einsatzbereit. Lange Laufzeit für zuverlässigen Schutz im Ernstfall.
                        </p>
                        <p>
                          Ein USB-C Ladekabel wird mitgeliefert. Die Warnleuchte kann in jedem Auto mit USB-C und USB-A Anschluss sowie mit einem Zigarettenanzünder-Adapter aufgeladen werden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - PRO */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#D4B896]/40 to-[#F5A623]/30 rounded-3xl blur-2xl"></div>
                  <div className={`relative backdrop-blur-xl rounded-3xl p-12 border-4 transition-all duration-500 shadow-2xl ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d]/95 via-[#1a1a1a]/95 to-[#2d2d2d]/95 border-[#6a6a6a]/60 hover:border-[#8a8a8a]' : 'bg-gradient-to-br from-[#6B4E3D]/95 via-[#B87000]/95 to-[#6B4E3D]/95 border-[#D4B896]/60 hover:border-[#D4B896]'}`} style={{boxShadow: darkMode ? '0 0 60px rgba(106, 106, 106, 0.5)' : '0 0 60px rgba(212, 184, 150, 0.4)'}}>
                    <div className="absolute -top-4 -right-4">
                      <span className={`px-6 py-2 rounded-full text-sm font-black shadow-2xl transition-colors duration-300 ${darkMode ? 'bg-[#6a6a6a] text-[#e5e5e5]' : 'bg-[#F5A623] text-[#6B4E3D]'}`} style={{boxShadow: darkMode ? '0 0 20px rgba(106, 106, 106, 0.7)' : '0 0 20px rgba(159, 181, 115, 0.7)'}}>
                        PRO
                      </span>
                    </div>
                    <div className="text-7xl mb-6">📡</div>
                    <h3 className={`text-5xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>GPS + Cloud</h3>
                    <p className={`text-xl leading-relaxed transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#F5E6D3]/90'}`}>
                      13 Jahre eSIM inklusive – immer erreichbar. Vernetzt, intelligent, zukunftssicher.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[#F5A623]/30 to-[#D4B896]/20 rounded-3xl border-2 border-[#D4B896]/50 flex items-center justify-center shadow-xl bamboo-texture bamboo-segments relative" style={{boxShadow: '0 0 40px rgba(212, 184, 150, 0.3)'}}>
                  <div className="absolute inset-0 opacity-25"></div>
                  <div className="text-9xl relative z-10">📡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Problem Section - New Creative Design */}
      {!darkMode && (
      <section className={`relative py-32 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[#E8D5C4] to-[#D4B896] wood-texture`}>
        {/* Wood Grain Overlay - only in light mode */}
        {!darkMode && <div className="absolute inset-0 wood-grain opacity-50"></div>}
        {/* Diagonal Split Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/30 via-[#D4B896] to-[#E8D5C4]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#A0825D]/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6">
                <span className="text-[#6B4E3D]">Das Problem</span>
                <span className="block text-[#8B6F47] mt-2">mit alten Lösungen</span>
              </h2>
            </div>

            {/* Split Layout with Images and Text */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Images */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-[#8B6F47]/30 rounded-3xl blur-xl group-hover:bg-[#8B6F47]/40 transition-all"></div>
                  <div className="relative rounded-3xl overflow-hidden border-2 border-[#A0825D]/40 shadow-2xl">
                    <div 
                      className="aspect-[4/3] bg-cover bg-center"
                      style={{backgroundImage: "url('/Warndreieck.jpg')"}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#6B4E3D]/80 via-[#8B6F47]/40 to-transparent"></div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-[#8B6F47]/30 rounded-3xl blur-xl group-hover:bg-[#8B6F47]/40 transition-all"></div>
                  <div className="relative rounded-3xl overflow-hidden border-2 border-[#A0825D]/40 shadow-2xl">
                    <div 
                      className="aspect-[4/3] bg-cover bg-center"
                      style={{backgroundImage: "url('/Warndreieck Autobahn Personen.jpg')"}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#6B4E3D]/80 via-[#8B6F47]/40 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content with Title */}
              <div className="space-y-8">
                <h3 className="text-4xl sm:text-5xl font-black text-[#8B6F47] mb-6">Gefährliche Realität</h3>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B6F47] to-[#A0825D] rounded-full"></div>
                  <div className="pl-8">
                    <div className="space-y-6 text-lg text-[#6B4E3D]/90 leading-relaxed">
                      <p>
                        <span className="font-bold text-[#6B4E3D]">Rechtliche Regelung:</span> "Bei einem Verkehrsunfall oder einer Panne ist das Warndreieck tragbar und standsicher aufzustellen, sodass es aus ausreichender Entfernung erkennbar ist."
                      </p>
                      <p className="text-xl">
                        Eine <span className="font-black text-[#8B6F47]">ausreichende Entfernung</span> bedeutet oftmals <span className="font-black text-[#8B6F47]">einige hundert Meter</span> – besonders auf Autobahnen eine lebensgefährliche Strecke zu Fuß!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Pricing - Completely Redesigned */}
      {!darkMode && (
      <section id="pricing" className={`relative py-32 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[#F5E6D3] via-[#E8D5C4] to-[#F5E6D3] wood-texture`}>
        {/* Wood Grain Overlay - only in light mode */}
        {!darkMode && <div className="absolute inset-0 wood-grain opacity-50"></div>}
        {/* Decorative Bamboo Stems on Left */}
        <div className="absolute left-0 top-1/4 w-32 h-3/4 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 80 600" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="bambooGradLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0.9"/>
                <stop offset="50%" stopColor="#E09000" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#F5A623" stopOpacity="0.9"/>
              </linearGradient>
            </defs>
            <rect x="30" y="0" width="16" height="600" fill="url(#bambooGradLeft)"/>
            <rect x="35" y="50" width="6" height="70" fill="#E09000" opacity="0.7"/>
            <rect x="35" y="150" width="6" height="70" fill="#E09000" opacity="0.7"/>
            <rect x="35" y="250" width="6" height="70" fill="#E09000" opacity="0.7"/>
            <rect x="35" y="350" width="6" height="70" fill="#E09000" opacity="0.7"/>
            <rect x="35" y="450" width="6" height="70" fill="#E09000" opacity="0.7"/>
            <rect x="35" y="550" width="6" height="50" fill="#E09000" opacity="0.7"/>
          </svg>
        </div>
        {/* Decorative Wood Boards */}
        <div className="absolute left-0 top-0 w-full h-3 bg-gradient-to-r from-[#A0825D]/60 via-[#8B6F47]/50 to-[#A0825D]/60"></div>
        <div className="absolute left-0 top-16 w-full h-1 bg-gradient-to-r from-transparent via-[#8B6F47]/50 to-transparent"></div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4B896]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-6xl sm:text-7xl md:text-8xl font-black mb-6 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : ''}`}>
              <span className={darkMode ? '' : 'bg-gradient-to-r from-[#6B4E3D] via-[#A0825D] to-[#6B4E3D] bg-clip-text text-transparent'}>
                Wähle dein QuickAlert
              </span>
            </h2>
          </div>
          
          {/* Pricing Cards - Side by Side with Product Images */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* BASE */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A0825D] to-[#8B6F47] rounded-3xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className={`relative backdrop-blur-xl rounded-3xl p-10 border-2 transition-all duration-500 shadow-xl ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d]/95 to-[#1a1a1a]/95 border-[#4a4a4a]/60 hover:border-[#6a6a6a]' : 'bg-gradient-to-br from-[#F5E6D3]/95 to-[#E8D5C4]/95 border-[#D4B896]/60 hover:border-[#A0825D] wood-texture'}`}>
                {!darkMode && <div className="absolute inset-0 wood-grain opacity-30 rounded-3xl"></div>}
                <div className="text-center mb-8 relative z-10">
                  <h3 className={`text-4xl font-black mb-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>BASE</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`text-7xl font-black transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#A0825D]'}`}>29€</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="mb-10 flex items-center justify-center py-8">
                  <div className="relative w-full max-w-xs mx-auto">
                    <div className="relative z-10" style={{ filter: 'drop-shadow(0 10px 30px rgba(107, 78, 61, 0.3))' }}>
                      <div 
                        className="aspect-square bg-contain bg-center bg-no-repeat relative"
                        style={{
                          backgroundImage: "url('/Warnleuchte erzeugt.jpg')",
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                        }}
                      >
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex items-center gap-4 text-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a]/50' : 'bg-[#D4B896]/40'}`}>
                      <span className={`text-xl transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>✓</span>
                    </div>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>ECE R65 LED-Ring</span>
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a]/50' : 'bg-[#D4B896]/40'}`}>
                      <span className={`text-xl transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>✓</span>
                    </div>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Fester Halt</span>
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a]/50' : 'bg-[#D4B896]/40'}`}>
                      <span className={`text-xl transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>✓</span>
                    </div>
                    <span className={`transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>IP65 Akku</span>
                  </li>
                </ul>
                <a 
                  href="https://www.amazon.de/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-10 w-full py-5 px-6 rounded-xl text-xl font-black transition-all duration-300 shadow-2xl text-center block ${darkMode ? 'bg-gradient-to-r from-[#6a6a6a] to-[#4a4a4a] hover:from-[#4a4a4a] hover:to-[#2d2d2d] text-[#e5e5e5]' : 'bg-gradient-to-r from-[#A0825D] to-[#8B6F47] hover:from-[#8B6F47] hover:to-[#6B4E3D] text-[#F5E6D3]'}`}
                >
                  BASE kaufen
                </a>
              </div>
            </div>
            
            {/* PRO */}
            <div className="relative group">
              <div className={`absolute -inset-1 rounded-3xl blur opacity-50 group-hover:opacity-70 transition animate-pulse ${darkMode ? 'bg-gradient-to-r from-[#6a6a6a] via-[#8a8a8a] to-[#6a6a6a]' : 'bg-gradient-to-br from-[#D4B896]/40 to-[#F5A623]/30'}`}></div>
              <div className={`relative backdrop-blur-xl rounded-3xl p-10 border-4 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl ${darkMode ? 'bg-gradient-to-br from-[#2d2d2d]/95 via-[#1a1a1a]/95 to-[#2d2d2d]/95 border-[#6a6a6a]/60 hover:border-[#8a8a8a]' : 'bg-gradient-to-br from-[#6B4E3D]/95 via-[#B87000]/95 to-[#6B4E3D]/95 border-[#D4B896]/60 hover:border-[#D4B896]'}`} style={{boxShadow: darkMode ? '0 0 60px rgba(106, 106, 106, 0.5)' : '0 0 60px rgba(212, 184, 150, 0.4)'}}>
                <div className="absolute inset-0 opacity-10 rounded-3xl"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <span className={`px-8 py-3 rounded-full text-sm font-black shadow-2xl transition-colors duration-300 ${darkMode ? 'bg-[#6a6a6a] text-[#e5e5e5]' : 'bg-[#F5A623] text-[#6B4E3D]'}`} style={{boxShadow: darkMode ? '0 0 20px rgba(106, 106, 106, 0.7)' : '0 0 20px rgba(159, 181, 115, 0.7)'}}>
                    POPULÄR
                  </span>
                </div>
                <div className="text-center mb-8 mt-6 relative z-10">
                  <h3 className={`text-4xl font-black mb-4 transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>PRO</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className={`text-7xl font-black transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>49€</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="mb-10 flex items-center justify-center py-8">
                  <div className="relative w-full max-w-xs mx-auto">
                    <div className="relative z-10" style={{ filter: 'drop-shadow(0 10px 30px rgba(107, 78, 61, 0.3))' }}>
                      <div 
                        className="aspect-square bg-contain bg-center bg-no-repeat relative"
                        style={{
                          backgroundImage: "url('/Warnleuchte erzeugt.jpg')",
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                        }}
                      >
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex items-center gap-4 text-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${darkMode ? 'bg-[#6a6a6a]/50' : 'bg-[#E09000]/70'}`} style={{boxShadow: darkMode ? '0 0 15px rgba(106, 106, 106, 0.5)' : '0 0 15px rgba(122, 150, 73, 0.5)'}}>
                      <span className={`text-xl font-bold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>✓</span>
                    </div>
                    <span className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>Alles vom BASE</span>
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${darkMode ? 'bg-[#6a6a6a]/50' : 'bg-[#E09000]/70'}`} style={{boxShadow: darkMode ? '0 0 15px rgba(106, 106, 106, 0.5)' : '0 0 15px rgba(122, 150, 73, 0.5)'}}>
                      <span className={`text-xl font-bold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>✓</span>
                    </div>
                    <span className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>GPS + Cloud-Alarm</span>
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${darkMode ? 'bg-[#6a6a6a]/50' : 'bg-[#E09000]/70'}`} style={{boxShadow: darkMode ? '0 0 15px rgba(106, 106, 106, 0.5)' : '0 0 15px rgba(122, 150, 73, 0.5)'}}>
                      <span className={`text-xl font-bold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>✓</span>
                    </div>
                    <span className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>13 Jahre eSIM</span>
                  </li>
                </ul>
                <a 
                  href="https://www.amazon.de/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-10 w-full py-5 px-6 rounded-xl text-xl font-black transition-all duration-300 shadow-2xl text-center block ${darkMode ? 'bg-[#6a6a6a] hover:bg-[#8a8a8a] text-[#e5e5e5]' : 'bg-[#E09000] hover:bg-[#CC8000] text-[#F5E6D3]'}`} 
                  style={{boxShadow: darkMode ? '0 0 40px rgba(106, 106, 106, 0.7)' : '0 0 40px rgba(122, 150, 73, 0.7)'}}
                >
                  PRO kaufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Zulassung Section */}
      {!darkMode && (
      <section className={`relative py-32 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[#E8D5C4] to-[#D4B896] wood-texture`}>
        {/* Wood Grain Overlay - only in light mode */}
        {!darkMode && <div className="absolute inset-0 wood-grain opacity-50"></div>}

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6">
                <span className={`${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Zulassung &</span>
                <span className={`block mt-2 ${darkMode ? 'text-[#a0a0a0]' : 'text-[#8B6F47]'}`}>Rechtliche Situation</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Deutschland Card */}
              <div className={`relative backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 shadow-xl overflow-visible transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#4a4a4a]/60' : 'bg-gradient-to-br from-[#F5E6D3]/95 to-[#E8D5C4]/95 border-[#D4B896]/60 wood-texture'}`}>
                {!darkMode && <div className="absolute inset-0 rounded-3xl wood-grain opacity-30"></div>}

                {/* Schräges Deutschland Banner oben rechts */}
                <div className="absolute -top-2 right-8 z-20">
                  <div
                    className={`px-10 py-2 text-xs sm:text-sm font-black uppercase tracking-wider relative ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5]' : 'bg-[#8B6F47] text-[#F5E6D3]'}`}
                    style={{
                      transform: 'rotate(12deg)',
                      boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.6)' : '0 4px 12px rgba(139, 111, 71, 0.6)',
                    }}
                  >
                    <span className="relative z-10">Deutschland</span>
                    {/* Schräge Ecken */}
                    <div className={`absolute -left-3 top-0 bottom-0 w-3 ${darkMode ? 'bg-[#4a4a4a]' : 'bg-[#8B6F47]'}`} style={{ transform: 'skewY(-12deg)' }}></div>
                    <div className={`absolute -right-3 top-0 bottom-0 w-3 ${darkMode ? 'bg-[#4a4a4a]' : 'bg-[#8B6F47]'}`} style={{ transform: 'skewY(12deg)' }}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h2 className={`text-4xl sm:text-5xl font-black mb-8 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Rechtliche Situation</h2>

                  <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <p>
                      In Deutschland ist die V16-Warnleuchte (z. B. IDIADA PC21020060) nicht gesetzlich vorgeschrieben, sondern nur als zusätzliche Sicherheitsmaßnahme zulässig.
                    </p>

                    <p>
                      Das Warndreieck bleibt Pflicht gemäß § 53a StVZO – es muss bei Pannen oder Unfällen aufgestellt werden.
                    </p>

                    <p>
                      Die V16-Leuchte ersetzt es nicht, sondern ergänzt es für bessere Sichtbarkeit (bis 1 km, 360°).
                    </p>

                    <p className="font-semibold">
                      Eine Pflicht wie in Spanien wäre in den nächsten Jahren vorstellbar.
                    </p>

                    <p className="font-semibold">
                      Einfach kaufen und mitführen – ideal für mehr Sicherheit auf deutschen Straßen!
                    </p>
                  </div>
                </div>
              </div>

              {/* Spanien Card */}
              <div className={`relative backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 shadow-xl overflow-visible transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#4a4a4a]/60' : 'bg-gradient-to-br from-[#F5E6D3]/95 to-[#E8D5C4]/95 border-[#D4B896]/60 wood-texture'}`}>
                {!darkMode && <div className="absolute inset-0 rounded-3xl wood-grain opacity-30"></div>}

                {/* Schräges Spanien Banner oben rechts */}
                <div className="absolute -top-2 right-8 z-20">
                  <div
                    className={`px-10 py-2 text-xs sm:text-sm font-black uppercase tracking-wider relative ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5]' : 'bg-[#8B6F47] text-[#F5E6D3]'}`}
                    style={{
                      transform: 'rotate(12deg)',
                      boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.6)' : '0 4px 12px rgba(139, 111, 71, 0.6)',
                    }}
                  >
                    <span className="relative z-10">Spanien</span>
                    {/* Schräge Ecken */}
                    <div className={`absolute -left-3 top-0 bottom-0 w-3 ${darkMode ? 'bg-[#4a4a4a]' : 'bg-[#8B6F47]'}`} style={{ transform: 'skewY(-12deg)' }}></div>
                    <div className={`absolute -right-3 top-0 bottom-0 w-3 ${darkMode ? 'bg-[#4a4a4a]' : 'bg-[#8B6F47]'}`} style={{ transform: 'skewY(12deg)' }}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h2 className={`text-4xl sm:text-5xl font-black mb-8 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#6B4E3D]'}`}>Zulassung nach IDIADA</h2>

                  <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-[#e5e5e5]/90' : 'text-[#6B4E3D]/90'}`}>
                    <p>
                      Mit der IDIADA-Zulassung ist diese Warnleuchte offiziell als „V16 Dispositivo de preseñalización de peligro" zugelassen.
                    </p>

                    <p>
                      Sie ist somit rechtlich anerkannt als Ersatz oder Ergänzung zum Warndreieck und darf im Fahrzeug geführt werden, um im Notfall die Sicherheit zu erhöhen. Eine Mitführpflicht besteht seit dem 01.01.2026. Die geprüfte Warnleuchte erfüllt alle Anforderungen des Real Decreto 2822/1998, Anhang XI, V-16 („Dispositivos de preseñalización de peligro") und entspricht somit den gesetzlichen Vorgaben für den Straßenverkehr in Spanien und der EU.
                    </p>

                    <p>
                      Die aufgedruckte Prüfnummer IDIADA PC21020060 auf dem Produkt garantiert die Echtheit und Rückverfolgbarkeit des geprüften Modells.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* CTA - New Creative Design */}
      {!darkMode && (
      <section id="cta" className={`relative py-32 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[#E8D5C4] via-[#D4B896] to-[#E8D5C4] wood-texture`}>
        {/* Wood Grain Overlay - only in light mode */}
        {!darkMode && <div className="absolute inset-0 wood-grain opacity-50"></div>}
        {/* Bamboo Accent */}
        <div className="absolute right-0 top-0 w-40 h-full opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 800" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="bambooGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#E09000" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#F5A623" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <rect x="20" y="0" width="24" height="800" fill="url(#bambooGradRight)"/>
            <rect x="28" y="80" width="8" height="90" fill="#E09000" opacity="0.6"/>
            <rect x="28" y="200" width="8" height="90" fill="#E09000" opacity="0.6"/>
            <rect x="28" y="320" width="8" height="90" fill="#E09000" opacity="0.6"/>
            <rect x="28" y="440" width="8" height="90" fill="#E09000" opacity="0.6"/>
            <rect x="28" y="560" width="8" height="90" fill="#E09000" opacity="0.6"/>
            <rect x="28" y="680" width="8" height="90" fill="#E09000" opacity="0.6"/>
          </svg>
        </div>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/20 via-[#A0825D]/20 to-[#E8D5C4]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,184,150,0.15),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 rounded-full bg-[#D4B896]/30 border border-[#A0825D]/50 mb-8">
              <span className="text-[#6B4E3D] text-sm font-bold uppercase tracking-wider">Jetzt starten</span>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 bg-gradient-to-r from-[#6B4E3D] via-[#A0825D] to-[#6B4E3D] bg-clip-text text-transparent">
              Bereit für QuickAlert?
            </h2>
            <p className="text-2xl sm:text-3xl text-[#6B4E3D]/80 mb-16 leading-relaxed">
              Vorbestellung in Kürze
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="group relative px-12 py-6 rounded-xl bg-[#F5A623] hover:bg-[#FFB84D] text-[#6B4E3D] text-xl font-black transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-2xl"
                style={{boxShadow: '0 0 50px rgba(159, 181, 115, 0.7)'}}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Samples bestellen
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <a 
                href="#features" 
                className="px-12 py-6 rounded-xl bg-transparent border-2 border-[#6B4E3D]/40 hover:border-[#6B4E3D] hover:bg-[#6B4E3D]/10 text-[#6B4E3D] text-xl font-bold transition-all duration-300 backdrop-blur-sm"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className={`relative py-12 border-t-2 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] border-[#4a4a4a]' : 'bg-gradient-to-b from-[#E8D5C4] to-[#D4B896] border-[#A0825D]/40 wood-texture'}`}>
        {!darkMode && <div className="absolute inset-0 wood-grain opacity-30"></div>}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {/* Warnleuchte Icon */}
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-xl sm:text-2xl font-black font-poppins tracking-tight" style={{ filter: 'drop-shadow(0 0 10px rgba(212, 184, 150, 0.6))' }}>
                <span className={darkMode ? 'text-white' : 'text-white'}>Quick</span>
                <span className="text-[#F5A623]">Alert</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <Link 
                href="/impressum"
                className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}
              >
                Impressum & Datenschutz
              </Link>
              <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-[#9a9a9a]' : 'text-[#6B4E3D]/60'}`}>© 2026 QuickAlert. Alle Rechte vorbehalten.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

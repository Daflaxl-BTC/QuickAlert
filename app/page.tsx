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

      {/* Dark Mode Toggle + Warndreieck Button - Rechts, weiter unten auf Mobile */}
      <div className="fixed right-3 sm:right-4 top-[58%] sm:top-1/2 transform -translate-y-1/2 z-50 flex flex-row items-center gap-2 sm:gap-3">
        {/* Warndreieck/QuickAlert Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setDarkMode(!darkMode)
          }}
          className={`group flex items-center gap-1.5 sm:gap-2 rounded-lg backdrop-blur-md border-2 transition-all duration-300 cursor-pointer
            ${darkMode 
              ? 'px-3 py-2 sm:px-5 sm:py-2.5 bg-[#1a1a1a]/90 border-[#F5A623] hover:bg-[#2d2d2d]' 
              : 'px-2 py-1.5 sm:px-4 sm:py-2 bg-[#F5E6D3]/90 border-[#D4B896] text-[#6B4E3D] hover:bg-[#E8D5C4]'}`}
          style={darkMode ? {boxShadow: '0 0 20px rgba(245, 166, 35, 0.3)'} : {boxShadow: '0 0 15px rgba(212, 184, 150, 0.3)'}}
        >
          <span className={`font-bold whitespace-nowrap ${darkMode ? 'text-[10px] sm:text-sm md:text-base' : 'text-[8px] sm:text-xs'}`}>
            {darkMode ? (
              <>
                <span className="text-white">Warum lieber </span>
                <span className="text-white">Quick</span>
                <span className="text-[#F5A623]">Alert</span>
                <span className="text-white"> ?</span>
              </>
            ) : 'WARUM NICHT DAS WARNDREIECK?'}
          </span>
          <svg className={`group-hover:translate-x-1 transition-transform ${darkMode ? 'w-3 h-3 sm:w-4 sm:h-4 text-[#F5A623]' : 'w-2.5 h-2.5 sm:w-3 sm:h-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <DarkModeToggle />
      </div>
      
      {/* Top Info Bar - Mobile optimized - IDENTISCH für beide Modi */}
      <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#8B6F47]/95 border-[#A0825D]/40'}`}>
        <div className="container mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-0.5 sm:py-1">
          <p className={`text-center text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>
            <span className="font-bold">Pro:</span> EU Zulassung nach IDIADA Real Decreto 2822/1998
          </p>
        </div>
      </div>

      {/* Navigation - IDENTISCH für beide Modi */}
      <nav className={`fixed top-[1.25rem] sm:top-[1.75rem] md:top-[2.25rem] left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-1.5 sm:py-2 md:py-3 lg:py-4 flex items-center justify-between backdrop-blur-md border-b-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#F5E6D3]/95 border-[#D4B896]/40 wood-texture'}`}>
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
      <section className="relative min-h-screen flex items-start overflow-hidden">
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

            {/* Warndreieck Image - Centered between buttons and next section - Mobile optimized */}
            <div className="absolute top-[75vh] sm:top-96 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:right-8 z-20 w-48 sm:w-64 md:w-80 lg:w-96">
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
            {/* Light Mode: Original Background - Warm beige/weiß */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{backgroundImage: "url('/Autounfall.png')"}}
            >
              {/* Warmes beige/weißes Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/60 via-[#C9956C]/50 to-[#D4A574]/40"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#C9956C]/60"></div>
            </div>
          </>
        )}

        {/* Hero Content - Overlaid to avoid layout shifts - Gleiche Größe für beide Modi */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-24 sm:pb-28 md:pb-32 pt-28 sm:pt-32 md:pt-36 lg:pt-40">
          <div className="max-w-4xl">
            {/* Date Badge - Mobile optimized */}
            <div className="grid place-items-start mb-4 sm:mb-5 md:mb-6">
              <div className={`col-start-1 row-start-1 transition-none ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="relative inline-flex items-center justify-center w-[220px] sm:w-[280px] md:w-[300px] h-9 sm:h-11 md:h-12 px-4 sm:px-8 rounded-full border-2 border-[#4a4a4a] bg-[#2d2d2d]/60 backdrop-blur-md shadow-lg" style={{boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)'}}>
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 animate-pulse" style={{boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)'}}></div>
                  <span className="w-full text-center text-sm sm:text-base md:text-lg font-black text-[#e5e5e5] tracking-wide">Seit 08.05.1968</span>
                </div>
              </div>
              <div className={`col-start-1 row-start-1 transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="relative inline-flex items-center justify-center w-[220px] sm:w-[280px] md:w-[300px] h-9 sm:h-11 md:h-12 px-4 sm:px-8 rounded-full border-2 border-[#D4B896] bg-[#6B4E3D]/40 backdrop-blur-md shadow-lg" style={{boxShadow: '0 0 20px rgba(212, 184, 150, 0.4)'}}>
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F5A623] animate-pulse" style={{boxShadow: '0 0 10px rgba(159, 181, 115, 0.8)'}}></div>
                  <span className="w-full text-center text-sm sm:text-base md:text-lg font-black text-[#F5E6D3] tracking-wide">NEU 2026</span>
                </div>
              </div>
            </div>

            {/* Main Headline - GRÖSSERE TEXTE - Grid für gleiche Höhe */}
            <div className="grid place-items-start mb-3 sm:mb-5 md:mb-6">
              {/* Dark Mode Headline */}
              <h1 className={`col-start-1 row-start-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] sm:leading-[0.9] transition-none ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  <div className="text-red-500 drop-shadow-lg">gefährlich</div>
                  <div className="text-[#9a9a9a] drop-shadow-lg">dunkel</div>
                </div>
              </h1>
              {/* Light Mode Headline */}
              <h1 className={`col-start-1 row-start-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] sm:leading-[0.9] transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  <div className="text-[#F5E6D3] drop-shadow-lg">Fahre sicher,</div>
                  <div className="text-[#F5E6D3] drop-shadow-lg">
                    <span className="text-[#F5A623] drop-shadow-lg">helfe</span>
                    <span className="text-[#F5E6D3] drop-shadow-lg"> sicher</span>
                  </div>
                </div>
              </h1>
            </div>

            {/* Description - Mobile optimized - GRÖSSERE TEXTE */}
            <div className="grid place-items-start mb-3 sm:mb-4 md:mb-6 max-w-2xl">
              <p className={`col-start-1 row-start-1 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed transition-none drop-shadow-md ${darkMode ? 'opacity-100 text-[#e5e5e5]/90' : 'opacity-0 pointer-events-none'}`}>
                Herkömmliche Warndreiecke: Ein gefährliches Risiko auf der Autobahn.
              </p>
              <p className={`col-start-1 row-start-1 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed transition-none drop-shadow-md ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100 text-[#F5E6D3]/95'}`}>
                Das weltweit modernste magnetische LED-Warnlicht. Polizei-Qualität mit elegantem Design, das die Nacht erhellt.
              </p>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="grid place-items-start">
              {/* Dark Mode Buttons */}
              <div className={`col-start-1 row-start-1 flex flex-col gap-2.5 sm:gap-3 md:gap-4 transition-none w-full ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <a 
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="group relative w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-5 rounded-xl bg-[#8b0000] hover:bg-[#a00000] border-2 border-[#ff4444] font-bold text-sm sm:text-lg overflow-hidden transition-all duration-300 text-[#ffffff] text-center"
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
              {/* Light Mode Buttons */}
              <div className={`col-start-1 row-start-1 flex flex-col items-start gap-2 sm:gap-2.5 md:gap-3 transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <a 
                  href="#pricing"
                  className="group relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#6B4E3D]/80 backdrop-blur-sm border-2 border-[#D4B896] font-bold text-sm sm:text-base overflow-hidden hover:bg-[#D4B896] hover:text-[#6B4E3D] transition-all duration-300 text-[#F5E6D3]"
                  style={{
                    boxShadow: '0 0 30px rgba(212, 184, 150, 0.4)'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    QuickAlert finden
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="#features"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-[#E09000] to-[#CC8000] border-2 border-[#F5A623]/50 font-bold text-sm sm:text-base hover:scale-105 transition-transform backdrop-blur-sm text-[#F5E6D3]"
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

        {/* Scroll Indicator - Fixed am unteren Rand, mittig zentriert */}
        <div className={`fixed left-0 right-0 bottom-6 sm:bottom-8 flex flex-col items-center gap-1 sm:gap-2 animate-bounce z-20 pointer-events-none`}>
          <span className={`text-[10px] sm:text-xs font-semibold ${darkMode ? 'text-[#e5e5e5]/70' : 'text-white drop-shadow-lg'}`}>SCROLL</span>
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-[#e5e5e5]/70' : 'text-white drop-shadow-lg'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Unified Modern Content for both Light and Dark Mode */}
      
      {/* Features Section - Tech Grid */}
      <section id="features" className={`py-24 sm:py-32 transition-colors duration-300 ${darkMode ? 'bg-[#0f172a]' : 'bg-slate-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`}>
              Innovation
                </h2>
            <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Technologie, die Leben rettet.
            </h3>
            <p className={`text-lg sm:text-xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Das Warndreieck war gestern. QuickAlert ist die intelligente Evolution der Unfallabsicherung.
                    </p>
                  </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 - Magnet */}
            <div className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-[#1e293b] border-slate-700 hover:border-amber-500/50 hover:shadow-amber-500/10' : 'bg-white border-slate-200 hover:border-amber-400/50 hover:shadow-amber-500/10 shadow-lg'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors ${darkMode ? 'bg-slate-800 text-amber-500' : 'bg-amber-50 text-amber-600'}`}>
                🧲
                  </div>
              <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Fester Halt
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Neodym-Magnetsystem, getestet bis 220 km/h. Hält bombenfest auf jedem Stahldach – auch bei Sturm und vorbeifahrenden LKWs.
                    </p>
                  </div>

            {/* Feature 2 - Battery */}
            <div className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-[#1e293b] border-slate-700 hover:border-amber-500/50 hover:shadow-amber-500/10' : 'bg-white border-slate-200 hover:border-amber-400/50 hover:shadow-amber-500/10 shadow-lg'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors ${darkMode ? 'bg-slate-800 text-amber-500' : 'bg-amber-50 text-amber-600'}`}>
                🔋
                  </div>
              <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                30+ Min Power
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Hochleistungs-Akku mit USB-C Schnellladung. Immer einsatzbereit für maximale Sicherheit, wenn es darauf ankommt.
              </p>
                </div>

            {/* Feature 3 - GPS (Pro) */}
            <div className={`group p-8 rounded-3xl border-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-[#1e293b] border-amber-500/30 hover:border-amber-500 hover:shadow-amber-500/20' : 'bg-white border-amber-200 hover:border-amber-500 hover:shadow-amber-500/20 shadow-lg'}`}>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${darkMode ? 'bg-amber-500 text-black' : 'bg-amber-100 text-amber-700'}`}>
                  PRO
                </span>
                  </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors ${darkMode ? 'bg-slate-800 text-amber-500' : 'bg-amber-50 text-amber-600'}`}>
                📡
                      </div>
              <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                GPS + Cloud
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Vernetzte Sicherheit. Sendet automatisch Standortdaten an die Cloud. Inklusive 13 Jahre eSIM-Konnektivität.
              </p>
              </div>
            </div>
          </div>
        </section>

      {/* Problem Section - Reality Check */}
      <section className={`py-24 sm:py-32 relative overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-red-500' : 'text-red-600'}`}>
                Das Problem
            </h2>
              <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Alte Lösungen versagen.
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${darkMode ? 'bg-red-500/10 text-red-500' : 'bg-red-50 text-red-600'}`}>
                    1
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Gefährliches Aufstellen</h4>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Um ein Warndreieck korrekt aufzustellen, müssen Sie 200-400m auf der Autobahn laufen. Lebensgefahr durch vorbeirasenden Verkehr.
                    </p>
              </div>
            </div>

                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${darkMode ? 'bg-red-500/10 text-red-500' : 'bg-red-50 text-red-600'}`}>
                    2
              </div>
              <div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Schlechte Sichtbarkeit</h4>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Warndreiecke sind passiv. Bei Nebel, Regen oder Dunkelheit werden sie oft zu spät gesehen. 42.415 Auffahrunfälle allein 2024.
                    </p>
              </div>
            </div>

                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${darkMode ? 'bg-red-500/10 text-red-500' : 'bg-red-50 text-red-600'}`}>
                    3
                    </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Rechtliche Falle</h4>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Falsch aufgestellt? 30€ Bußgeld und bis zu 50% Mithaftung bei Folgeunfällen.
                    </p>
                  </div>
                </div>
              </div>
                </div>

                <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-2xl`}></div>
              <div className={`relative rounded-[2rem] overflow-hidden shadow-2xl border ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <Image
                  src="/Warndreieck.jpg"
                  alt="Gefährliches Warndreieck"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-8 ${darkMode ? 'bg-slate-900/90' : 'bg-white/95'} backdrop-blur-sm border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">⚠️</span>
                    <div>
                      <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Veraltete Technik</div>
                      <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Stand 1968</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-24 sm:py-32 ${darkMode ? 'bg-[#0f172a]' : 'bg-slate-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`}>
              Modelle
            </h2>
            <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Wähle deine Sicherheit.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* BASE Model */}
            <div className={`relative p-8 sm:p-12 rounded-[2rem] border transition-all ${darkMode ? 'bg-[#1e293b] border-slate-700' : 'bg-white border-slate-200 shadow-xl'}`}>
              <div className="mb-8">
                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>QuickAlert BASE</h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>29€</span>
                  <span className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ einmalig</span>
                  </div>
                </div>

              <ul className="space-y-4 mb-10">
                {[
                  'ECE R65 zertifizierter LED-Ring',
                  'Magnet-Halterung (220 km/h)',
                  'IP65 Wasserdicht & Staubfest',
                  'USB-C Wiederaufladbar',
                  'Kompaktes Handschuhfach-Design'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-700'}`}>✓</div>
                    <span className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
                </ul>

                <a 
                  href="https://www.amazon.de/" 
                  target="_blank"
                  rel="noopener noreferrer"
                className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all ${darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
                >
                BASE Kaufen
                </a>
            </div>
            
            {/* PRO Model */}
            <div className={`relative p-8 sm:p-12 rounded-[2rem] border-2 transition-all ${darkMode ? 'bg-[#1e293b] border-amber-500 shadow-[0_0_40px_rgba(245,166,35,0.1)]' : 'bg-white border-amber-400 shadow-[0_0_40px_rgba(245,166,35,0.15)]'}`}>
              <div className="absolute top-0 right-0 p-6">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${darkMode ? 'bg-amber-500 text-black' : 'bg-amber-100 text-amber-700'}`}>
                  Bestseller
                  </span>
                </div>
              
              <div className="mb-8">
                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>QuickAlert PRO</h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${darkMode ? 'text-amber-500' : 'text-amber-600'}`}>49€</span>
                  <span className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ einmalig</span>
                  </div>
                </div>

              <ul className="space-y-4 mb-10">
                {[
                  'Alle Features vom BASE Modell',
                  'Integriertes GPS-Modul',
                  'Automatische Cloud-Alarmierung',
                  '13 Jahre eSIM inklusive',
                  'Leitstellen-Anbindung (optional)'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-amber-500 text-black' : 'bg-amber-100 text-amber-700'}`}>✓</div>
                    <span className={`${darkMode ? 'text-slate-200' : 'text-slate-700'} font-medium`}>{feature}</span>
                  </li>
                ))}
                </ul>

                <a 
                  href="https://www.amazon.de/" 
                  target="_blank"
                  rel="noopener noreferrer"
                className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all shadow-lg ${darkMode ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20' : 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20'}`}
                >
                PRO Kaufen
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className={`py-24 sm:py-32 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`}>
                Rechtssicherheit
              </h2>
              <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Offiziell zugelassen.
              </h3>
              <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Geprüft und zertifiziert nach den strengsten europäischen Standards. Eine Investition in Sicherheit, die anerkannt wird.
              </p>
              
              <div className="space-y-6">
                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#1e293b] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className={`text-lg font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <span className="text-2xl">🇩🇪</span> Deutschland
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Zulässig als zusätzliche Sicherheitsmaßnahme. Ergänzt das Warndreieck (§ 53a StVZO) optimal. Empfohlen für maximale Sichtbarkeit.
                  </p>
                </div>
                
                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#1e293b] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className={`text-lg font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <span className="text-2xl">🇪🇸</span> Spanien
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Offiziell zugelassen (V16 IDIADA PC21020060). Ersetzt das Warndreieck vollständig. Pflicht ab 2026.
                    </p>
                  </div>
                </div>
              </div>

            <div className="relative flex justify-center">
              <div className={`absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full`}></div>
              <div className={`relative w-full max-w-md aspect-[3/4] rounded-2xl border-8 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center ${darkMode ? 'bg-[#1e293b] border-slate-800' : 'bg-white border-slate-100'}`}>
                <div className="w-24 h-24 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  </div>
                <h4 className={`text-2xl font-black mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>IDIADA Zertifiziert</h4>
                <div className={`font-mono text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>No. PC21020060</div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Dieses Produkt erfüllt alle Anforderungen des Real Decreto 2822/1998 für V-16 Warnleuchten.
                </p>
                <div className="mt-8 pt-8 border-t border-dashed w-full border-slate-300/30">
                  <span className="text-xs uppercase tracking-widest text-slate-400">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-amber-500">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight">
            Nicht warten. <br/>Sicher sein.
            </h2>
          <p className="text-xl sm:text-2xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Rüsten Sie Ihr Fahrzeug jetzt auf den Sicherheitsstandard von morgen auf.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.amazon.de/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-amber-600 rounded-xl font-black text-lg shadow-xl hover:bg-slate-50 hover:scale-105 transition-all"
            >
              Jetzt Bestellen
            </a>
              <a 
                href="#features" 
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Mehr erfahren
              </a>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/30">
                Q
              </div>
              <span className={`text-xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Quick<span className="text-amber-500">Alert</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/impressum" className={`text-sm font-medium hover:text-amber-500 transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Impressum
              </Link>
              <Link href="/datenschutz" className={`text-sm font-medium hover:text-amber-500 transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Datenschutz
              </Link>
              <span className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
                © 2026 QuickAlert
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

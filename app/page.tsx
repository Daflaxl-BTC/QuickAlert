'use client'

import DarkModeToggle from '@/components/DarkModeToggle'
import LanguageSelector from '@/components/LanguageSelector'
import { useDarkMode } from '@/components/DarkModeProvider'
import { useTranslation } from '@/lib/translations/useTranslation'
import { useLanguage } from '@/components/LanguageProvider'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import PreOrderForm from '@/components/PreOrderForm'

export default function Home() {
  const pathname = usePathname()
  const { darkMode, setDarkMode } = useDarkMode()
  const t = useTranslation()
  const { language } = useLanguage()
  const darkBadgeRef = useRef<HTMLDivElement>(null)
  const lightBadgeRef = useRef<HTMLDivElement>(null)
  const darkHeadlineRef = useRef<HTMLHeadingElement>(null)
  const lightHeadlineRef = useRef<HTMLHeadingElement>(null)
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

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

      // URL-Parameter für Fehler prüfen (nur für allgemeine Fehler, keine Token-Fehler mehr)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('error')) {
      const errorType = params.get('error')
      let message = t.preorder.form.error
      // Token-Fehler werden nicht mehr angezeigt, da kein Double Opt-In mehr
      setNotification({ type: 'error', message })
      window.history.replaceState({}, '', window.location.pathname)
      setTimeout(() => setNotification(null), 5000)
    }
  }, [t])

  // Scroll-Handler für Scroll-Indikator - nur im Hero-Bereich anzeigen
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section:first-of-type')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        // Zeige Scroll-Indikator nur, wenn Hero-Section noch sichtbar ist
        setShowScrollIndicator(heroBottom > window.innerHeight * 0.3)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // #region agent log
  useEffect(() => {
    const measureBadgeToHeadline = () => {
      if (darkBadgeRef.current && lightBadgeRef.current && darkHeadlineRef.current && lightHeadlineRef.current) {
        const darkBadgeRect = darkBadgeRef.current.getBoundingClientRect()
        const lightBadgeRect = lightBadgeRef.current.getBoundingClientRect()
        const darkHeadlineRect = darkHeadlineRef.current.getBoundingClientRect()
        const lightHeadlineRect = lightHeadlineRef.current.getBoundingClientRect()
        
        // Messung der tatsächlichen Text-Position (erste Text-Zeile)
        const darkFirstTextLine = darkHeadlineRef.current.querySelector('div > div:first-child')
        const lightFirstTextLine = lightHeadlineRef.current.querySelector('div > div:first-child')
        const darkFirstTextRect = darkFirstTextLine?.getBoundingClientRect()
        const lightFirstTextRect = lightFirstTextLine?.getBoundingClientRect()
        
        const darkBadgeBottom = darkBadgeRect.bottom
        const lightBadgeBottom = lightBadgeRect.bottom
        const darkHeadlineTop = darkHeadlineRect.top
        const lightHeadlineTop = lightHeadlineRect.top
        const darkTextTop = darkFirstTextRect?.top ?? darkHeadlineTop
        const lightTextTop = lightFirstTextRect?.top ?? lightHeadlineTop
        
        const darkGap = darkHeadlineTop - darkBadgeBottom
        const lightGap = lightHeadlineTop - lightBadgeBottom
        const darkTextGap = darkTextTop - darkBadgeBottom
        const lightTextGap = lightTextTop - lightBadgeBottom
        
      }
    }

    measureBadgeToHeadline()
    const timeoutId = setTimeout(measureBadgeToHeadline, 50)
    const timeoutId2 = setTimeout(measureBadgeToHeadline, 150)
    const timeoutId3 = setTimeout(measureBadgeToHeadline, 300)
    window.addEventListener('resize', measureBadgeToHeadline)
    
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
      clearTimeout(timeoutId3)
      window.removeEventListener('resize', measureBadgeToHeadline)
    }
  }, [darkMode])
  // #endregion

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a] text-[#e5e5e5]' : 'bg-white text-[#3D2F1F]'}`}>
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

      {/* Language Selector - Oben rechts, gestaffelt nach unten */}
      <div className="fixed right-2 sm:right-3 md:right-4 top-28 sm:top-32 md:top-36 z-50">
        <LanguageSelector />
      </div>

      {/* Dark Mode Toggle + Warndreieck Button - Rechts, weiter unten auf Mobile */}
      <div className="fixed right-2 sm:right-3 md:right-4 top-[58%] sm:top-1/2 transform -translate-y-1/2 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3">
        {/* Warndreieck/QuickAlert Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setDarkMode(!darkMode)
          }}
          className={`group flex items-center gap-1.5 sm:gap-2 rounded-lg backdrop-blur-md border-2 transition-all duration-300 cursor-pointer min-h-[44px] active:scale-95
            ${darkMode 
              ? 'px-3 py-2 sm:px-4 md:px-5 sm:py-2.5 bg-[#1a1a1a]/90 border-[#F5A623] hover:bg-[#2d2d2d]' 
              : 'px-2.5 py-2 sm:px-4 sm:py-2 bg-[#F5E6D3]/90 border-[#D4B896] text-[#6B4E3D] hover:bg-[#E8D5C4]'}`}
          style={darkMode ? {boxShadow: '0 0 20px rgba(245, 166, 35, 0.3)'} : {boxShadow: '0 0 15px rgba(212, 184, 150, 0.3)'}}
        >
          <span className={`font-bold whitespace-nowrap ${darkMode ? 'text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base' : 'text-[8px] xs:text-[9px] sm:text-xs'}`}>
            {darkMode ? (
              <>
                <span className="hidden sm:inline text-white">{t.hero.warndreieckButton.dark.prefix}</span>
                <span className="text-white">{t.hero.warndreieckButton.dark.quick}</span>
                <span className="text-[#F5A623]">{t.hero.warndreieckButton.dark.alert}</span>
                <span className="text-white">{t.hero.warndreieckButton.dark.suffix}</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">{t.hero.warndreieckButton.light.prefix}</span>
                <span>{t.hero.warndreieckButton.light.suffix}</span>
              </>
            )}
          </span>
          <svg className={`group-hover:translate-x-1 transition-transform flex-shrink-0 ${darkMode ? 'w-3 h-3 sm:w-4 sm:h-4 text-[#F5A623]' : 'w-2.5 h-2.5 sm:w-3 sm:h-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <DarkModeToggle />
      </div>
      
      {/* Top Info Bar - Mobile optimized - IDENTISCH für beide Modi */}
      <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-[#8B6F47]/95 border-[#A0825D]/40'}`}>
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-12 py-1 sm:py-1.5">
          <div className="flex items-center justify-between gap-2">
            <p className={`text-center flex-1 text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 leading-tight ${darkMode ? 'text-[#e5e5e5]' : 'text-[#F5E6D3]'}`}>
              <span className="font-bold">{t.topBar.pro}</span>
              <span className="hidden sm:inline"> {t.topBar.euApproval}</span>
              <span className="sm:hidden"> {t.topBar.euApprovalShort}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation - IDENTISCH für beide Modi */}
      <nav className={`fixed top-[1.25rem] sm:top-[1.75rem] md:top-[2.25rem] left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between backdrop-blur-md border-b-2 transition-colors duration-300 ${darkMode ? 'bg-[#2d2d2d]/95 border-[#1a1a1a]' : 'bg-white/95 border-[#D4B896]/40'}`}>
        {/* Logo Links - immer zur Opening Page (Startseite oben) */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="group flex items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-105 transition-all duration-300 min-h-[44px]"
        >
          <div className="relative">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0 drop-shadow-lg group-hover:drop-shadow-xl transition-all" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))' }}>
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
          </div>
          <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black font-poppins tracking-tight ${
            darkMode 
              ? 'text-white drop-shadow-lg' 
              : 'text-zinc-900 drop-shadow-md'
          }`} style={darkMode ? { filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))' } : { filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))' }}>
            <span className={darkMode ? 'text-white' : 'text-zinc-900'}>Quick</span>
            <span className="text-[#F5A623] drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 166, 35, 0.6))' }}>Alert</span>
          </span>
        </Link>

        {/* Navigation Links Center */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>{t.nav.features}</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>{t.nav.pricing}</a>
            <a href="https://wa.me/4915119784023" target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold transition-colors ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>{t.nav.contact}</a>
          <div className={`flex items-center gap-6 pl-4 border-l transition-colors duration-300 ${darkMode ? 'border-[#4a4a4a]' : 'border-[#D4B896]/40'}`}>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className={`text-sm font-semibold transition-colors relative ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>
              {t.nav.base}
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className={`text-sm font-semibold transition-colors relative inline-block pr-10 ${darkMode ? 'text-[#e5e5e5] hover:text-[#b0b0b0]' : 'text-[#6B4E3D] hover:text-[#A0825D]'}`}>
              <span 
                className={`absolute -top-4 right-0 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5]' : 'bg-[#8B6F47] text-[#F5E6D3]'}`}
                style={{
                  transform: 'rotate(12deg)',
                  boxShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(139, 111, 71, 0.4)'
                }}
              >
                {t.nav.spain}
              </span>
              {t.nav.pro}
            </a>
          </div>
        </div>

        {/* Action Button Right - Mobile optimized */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Instagram Link - Links neben JETZT KAUFEN */}
          <a
            href="https://www.instagram.com/quickalert_germany?igsh=MTh4ZnJiZHV1a2l3dA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 sm:p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:scale-110 active:scale-95 transition-all flex-shrink-0 ${darkMode ? 'bg-transparent hover:bg-white/10' : 'bg-transparent hover:bg-[#6B4E3D]/10'}`}
            aria-label={t.nav.instagramAria}
          >
            <svg 
              className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-white hover:text-orange-500' : 'text-[#6B4E3D] hover:text-orange-600'}`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://www.amazon.de/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2.5 sm:px-6 sm:py-3 min-h-[44px] flex items-center justify-center rounded-lg font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-lg ${darkMode ? 'bg-[#4a4a4a] text-[#e5e5e5] hover:bg-[#5a5a5a]' : 'bg-[#D4B896] text-[#6B4E3D]'}`}
            style={darkMode ? {boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'} : {boxShadow: '0 0 20px rgba(212, 184, 150, 0.5)'}}
          >
            <span className="hidden sm:inline">{t.nav.buyNow}</span>
            <span className="sm:hidden">{t.nav.buyNowShort}</span>
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
              style={{
                backgroundImage: "url('/Warndreieck Autobahn Personen.jpg')",
                backgroundSize: 'cover',
                height: '100vh',
                minHeight: '100vh'
              }}
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
              style={{
                backgroundImage: "url('/Autounfall.png')",
                backgroundSize: 'cover',
                height: '100vh',
                minHeight: '100vh'
              }}
            >
              {/* Warmes beige/weißes Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/60 via-[#C9956C]/50 to-[#D4A574]/40"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#C9956C]/60"></div>
            </div>
          </>
        )}

        {/* Hero Content - Overlaid to avoid layout shifts - Gleiche Größe für beide Modi */}
        <div className="relative z-10 container mx-auto px-4 sm:px-5 md:px-6 lg:px-12 pb-20 sm:pb-24 md:pb-28 lg:pb-32 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
          <div className="max-w-4xl">
            {/* Date Badge - Mobile optimized */}
            <div className="grid place-items-start mb-4 sm:mb-5 md:mb-6">
              <div ref={darkBadgeRef} className={`col-start-1 row-start-1 transition-none ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="relative inline-flex items-center justify-center w-[220px] sm:w-[280px] md:w-[300px] h-9 sm:h-11 md:h-12 px-4 sm:px-8 rounded-full border-2 border-[#4a4a4a] bg-[#2d2d2d]/60 backdrop-blur-md shadow-lg" style={{boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)'}}>
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 animate-pulse" style={{boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)'}}></div>
                  <span className="w-full text-center text-sm sm:text-base md:text-lg font-black text-[#e5e5e5] tracking-wide">{t.hero.dateBadgeDark}</span>
                </div>
              </div>
              <div ref={lightBadgeRef} className={`col-start-1 row-start-1 transition-none ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="relative inline-flex items-center justify-center w-[220px] sm:w-[280px] md:w-[300px] h-9 sm:h-11 md:h-12 px-4 sm:px-8 rounded-full border-2 border-[#D4B896] bg-[#6B4E3D]/40 backdrop-blur-md shadow-lg" style={{boxShadow: '0 0 20px rgba(212, 184, 150, 0.4)'}}>
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F5A623] animate-pulse" style={{boxShadow: '0 0 10px rgba(159, 181, 115, 0.8)'}}></div>
                  <span className="w-full text-center text-sm sm:text-base md:text-lg font-black text-[#F5E6D3] tracking-wide">{t.hero.dateBadgeLight}</span>
                </div>
              </div>
            </div>

            {/* Main Headline - GRÖSSERE TEXTE - Perfekte Überlagerung für flüssigen Wechsel */}
            <div className="relative mb-1 sm:mb-2 md:mb-3">
              {/* Light Mode Headline - Bestimmt die Container-Höhe */}
              <h1 ref={lightHeadlineRef} className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] sm:leading-[0.9] transition-opacity duration-200 ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  <div className="text-[#F5E6D3] drop-shadow-lg">{t.hero.headlineLight.line1}</div>
                  <div className="text-[#F5E6D3] drop-shadow-lg">
                    <span className="text-[#F5A623] drop-shadow-lg">{t.hero.headlineLight.help}</span>
                    <span className="text-[#F5E6D3] drop-shadow-lg"> {t.hero.headlineLight.line2.split(' ')[1]}</span>
                  </div>
                </div>
              </h1>
              {/* Dark Mode Headline - Absolut über der Light Mode Überschrift, leicht nach unten verschoben für perfekte Ausrichtung */}
              <h1 ref={darkHeadlineRef} className={`absolute top-1 left-0 right-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] sm:leading-[0.9] transition-opacity duration-200 ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  <div className="text-red-500 drop-shadow-lg">{t.hero.headlineDark.line1}</div>
                  <div className="text-[#9a9a9a] drop-shadow-lg">{t.hero.headlineDark.line2}</div>
                </div>
              </h1>
            </div>

            {/* Description - Mobile optimized - GRÖSSERE TEXTE */}
            <div className="grid place-items-start mb-3 sm:mb-4 md:mb-6 max-w-2xl">
              <p className={`col-start-1 row-start-1 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed transition-none drop-shadow-md ${darkMode ? 'opacity-100 text-[#e5e5e5]/90' : 'opacity-0 pointer-events-none'}`}>
                {t.hero.descriptionDark}
              </p>
              <p className={`col-start-1 row-start-1 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed transition-none drop-shadow-md ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100 text-[#F5E6D3]/95'}`}>
                {t.hero.descriptionLight}
              </p>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="grid place-items-start">
              {/* Dark Mode Buttons */}
              <div className={`col-start-1 row-start-1 flex flex-col gap-2.5 sm:gap-3 md:gap-4 transition-none w-full ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <a 
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="group relative w-full sm:w-auto px-6 py-3.5 sm:px-10 sm:py-5 min-h-[48px] sm:min-h-[56px] flex items-center justify-center rounded-xl bg-[#8b0000] hover:bg-[#a00000] active:bg-[#700000] border-2 border-[#ff4444] font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 text-[#ffffff] text-center"
                  style={{
                    boxShadow: '0 0 30px rgba(139, 0, 0, 0.6)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    {t.hero.ctaDark}
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
                  className="group relative px-5 py-3 sm:px-6 sm:py-3.5 min-h-[48px] sm:min-h-[52px] flex items-center justify-center rounded-xl bg-[#6B4E3D]/80 backdrop-blur-sm border-2 border-[#D4B896] font-bold text-sm sm:text-base overflow-hidden hover:bg-[#D4B896] hover:text-[#6B4E3D] active:bg-[#5a4230] transition-all duration-300 text-[#F5E6D3]"
                  style={{
                    boxShadow: '0 0 30px rgba(212, 184, 150, 0.4)'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.ctaLight}
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="https://wa.me/4915119784023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-[#E09000] to-[#CC8000] border-2 border-[#F5A623]/50 font-bold text-sm sm:text-base hover:scale-105 transition-transform backdrop-blur-sm text-[#F5E6D3]"
                  style={{
                    boxShadow: '0 0 20px rgba(159, 181, 115, 0.4)'
                  }}
                >
                  {t.hero.ctaDealer}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Integriert in Hero-Section, höher platziert */}
        {showScrollIndicator && (
          <div 
            className={`absolute left-0 right-0 flex flex-col items-center gap-1 sm:gap-2 animate-bounce pointer-events-none transition-opacity duration-300 z-20 ${
              language === 'es' 
                ? 'bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32' 
                : 'bottom-2 sm:bottom-4 md:bottom-6'
            }`}
          >
            <span className={`text-[10px] sm:text-xs font-semibold ${darkMode ? 'text-[#e5e5e5]/70' : 'text-white drop-shadow-lg'}`}>{t.hero.scroll}</span>
            <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-[#e5e5e5]/70' : 'text-white drop-shadow-lg'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </section>

      {/* Dark Mode Content - Story Telling Redesigned */}
      {darkMode && (
        <div className="bg-black text-zinc-300">
          {/* Story Intro Section */}
          <section className="py-24 sm:py-32 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
             <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
                 <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-12 text-white leading-tight">
                   {t.darkMode.storyTitle.split('-').map((part, i) => (
                     <span key={i}>
                       {part}
                       {i < t.darkMode.storyTitle.split('-').length - 1 && <><br/></>}
                     </span>
                   ))}
              </h1>

                 <div className="prose prose-xl prose-invert max-w-none">
                   <h2 className="text-3xl sm:text-4xl font-black text-orange-500 mb-8">
                  {t.darkMode.storySubtitle}
                </h2>
                   <p className="text-xl leading-relaxed text-zinc-300 mb-8">
                  {t.darkMode.storyIntro}
                </p>
                 </div>
               </div>
             </div>
          </section>

          {/* Statistics Grid */}
          <section className="py-16 bg-zinc-900/50 border-y border-zinc-800">
            <div className="container mx-auto px-6 lg:px-12">
               <div className="max-w-4xl mx-auto">
                 <h3 className="text-2xl font-bold text-white mb-10">{t.darkMode.statsTitle}</h3>
                 <div className="grid sm:grid-cols-2 gap-6">
                   <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                     <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-2">{t.darkMode.stats.breakdowns.label}</div>
                     <div className="text-4xl font-black text-white">{t.darkMode.stats.breakdowns.value}</div>
                     <div className="text-zinc-500 text-xs mt-2">{t.darkMode.stats.breakdowns.source}</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                     <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-2">{t.darkMode.stats.rearEnd.label}</div>
                     <div className="text-4xl font-black text-red-500">{t.darkMode.stats.rearEnd.value}</div>
                     <div className="text-zinc-500 text-xs mt-2">{t.darkMode.stats.rearEnd.source}</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                     <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-2">{t.darkMode.stats.highway.label}</div>
                     <div className="text-4xl font-black text-white">{t.darkMode.stats.highway.value}</div>
                     <div className="text-zinc-500 text-xs mt-2">{t.darkMode.stats.highway.source}</div>
                   </div>
                   <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                     <div className="text-zinc-500 text-sm font-bold tracking-wider mb-2">{t.darkMode.stats.fine.label}</div>
                     <div className="text-4xl font-black text-white">{t.darkMode.stats.fine.value}</div>
                     <div className="text-zinc-500 text-xs mt-2">{t.darkMode.stats.fine.source}</div>
                   </div>
                 </div>
               </div>
            </div>
          </section>

          {/* Problems Section */}
          <section className="py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-12">
                  {t.darkMode.problemsTitle}
                </h2>

                <div className="grid gap-6">
                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors group">
                    <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400">{t.darkMode.problems.tooLate.title}</h3>
                    <p className="text-lg text-zinc-400">
                      {t.darkMode.problems.tooLate.text}
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors group">
                    <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400">{t.darkMode.problems.dangerous.title}</h3>
                    <p className="text-lg text-zinc-400">
                      {t.darkMode.problems.dangerous.text}
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors group">
                    <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400">{t.darkMode.problems.forgotten.title}</h3>
                    <p className="text-lg text-zinc-400">
                      {t.darkMode.problems.forgotten.text}
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors group">
                    <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400">{t.darkMode.problems.wind.title}</h3>
                    <p className="text-lg text-zinc-400">
                      {t.darkMode.problems.wind.text}
                    </p>
                  </div>
                </div>
                </div>
            </div>
          </section>

          {/* Solution & Features */}
          <section className="py-24 sm:py-32 bg-zinc-900 border-t border-zinc-800">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
                  {t.darkMode.solutionTitle}
                </h2>
                <p className="text-xl leading-relaxed text-zinc-300 mb-16">
                  {t.darkMode.solutionText}
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section - Dark Mode - Identisch zum Light Mode */}
          <section id="pricing" className={`py-24 sm:py-32 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-orange-500' : 'text-orange-600'}`}>
                  {t.pricing.label}
                </h2>
                <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {t.pricing.title}
                </h3>
              </div>

              {/* Pricing Cards Dark Mode - Identisch zum Light Mode */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                  {/* BASE Model */}
                  <div className={`relative p-8 sm:p-12 rounded-[2.5rem] border transition-all duration-300 overflow-hidden ${darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 shadow-xl shadow-zinc-900/50' : 'bg-white border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl'}`}>
                    {/* Deutschland Banner */}
                    <div className="absolute -right-8 top-6 rotate-45 z-10">
                      <div className={`px-10 py-1.5 text-xs font-black tracking-wider shadow-lg ${darkMode ? 'bg-zinc-700 text-white' : 'bg-zinc-600 text-white'}`}>
                        {t.pricing.base.country}
                      </div>
                    </div>
                    {/* Verpackungsbild */}
                    <div className="mb-6 -mx-8 sm:-mx-12 -mt-8 sm:-mt-12">
                      <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-zinc-800 to-zinc-900">
                        <Image
                          src="/Verpackungen/base.jpg"
                          alt="QuickAlert Verpackung"
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: 'center center'
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-8">
                      <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{t.pricing.base.name}</h4>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-5xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{t.pricing.base.price}</span>
                        <span className={`text-lg font-medium ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>{t.pricing.base.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {t.pricing.base.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-600'}`}>✓</div>
                          <span className={`${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="#preorder"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById('preorder')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className={`block w-full py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'}`}
                    >
                      {t.pricing.base.cta}
                    </a>
                  </div>
                  
                  {/* PRO Model */}
                  <div className={`relative p-8 sm:p-12 rounded-[2.5rem] border-2 transition-all duration-300 transform md:-translate-y-4 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-orange-950/50 via-zinc-900 to-orange-950/30 border-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,0.3)]' : 'bg-gradient-to-br from-orange-50 via-white to-orange-50 border-orange-500 shadow-2xl shadow-orange-500/20'}`}>
                    {/* Spanien Banner */}
                    <div className="absolute -right-8 top-6 rotate-45 z-10">
                      <div className="px-10 py-1.5 text-xs font-black tracking-wider shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        {t.pricing.pro.country}
                      </div>
                    </div>
                    {/* Verpackungsbild */}
                    <div className="mb-6 -mx-8 sm:-mx-12 -mt-8 sm:-mt-12">
                      <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-orange-900/40 to-orange-800/30 border-b-2 border-orange-700/50">
                        <Image
                          src="/3D-PRO.jpg"
                          alt="QuickAlert PRO Verpackung"
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: 'center center'
                          }}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-orange-600'}`}>{t.pricing.pro.name}</h4>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>{t.pricing.pro.price}</span>
                        <span className={`text-lg font-medium ${darkMode ? 'text-zinc-400' : 'text-orange-600'}`}>{t.pricing.pro.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {t.pricing.pro.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm`}>✓</div>
                          <span className={`${darkMode ? 'text-zinc-200' : 'text-zinc-800'} font-bold`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="#preorder"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById('preorder')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className={`block w-full py-4 px-6 rounded-2xl font-black text-center text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] bg-gradient-to-r from-orange-500 to-orange-600 text-white`}
                    >
                      {t.pricing.base.cta}
                    </a>
                  </div>
                </div>

              <div className="mt-16 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">{t.darkMode.recommended.title}</h3>
                <p className="text-lg text-zinc-400 mb-6">
                  {t.darkMode.recommended.subtitle}
                </p>
                <p className="text-xl font-bold text-white">
                  {t.darkMode.recommended.conclusion}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Light Mode Content - Tech Grid (Existing New Design) */}
      {!darkMode && (
      <>
      {/* Features Section - Tech Grid */}
      <section id="features" className={`py-24 sm:py-32 bg-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-orange-500' : 'text-orange-600'}`}>
              {t.features.label}
            </h2>
            <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
              {t.features.title}
            </h3>
            <p className={`text-lg sm:text-xl leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {t.features.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 - Magnet */}
            <div className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 hover:shadow-orange-500/10' : 'bg-white border-zinc-200 hover:border-orange-500/30 hover:shadow-orange-500/10 shadow-lg shadow-zinc-200/50'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform group-hover:scale-110 duration-300 ${darkMode ? 'bg-zinc-800 text-orange-500 shadow-inner' : 'bg-orange-50 text-orange-600'}`}>
                🧲
              </div>
              <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                {t.features.items.magnet.title}
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.features.items.magnet.description}
              </p>
            </div>

            {/* Feature 2 - Battery */}
            <div className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 hover:shadow-orange-500/10' : 'bg-white border-zinc-200 hover:border-orange-500/30 hover:shadow-orange-500/10 shadow-lg shadow-zinc-200/50'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform group-hover:scale-110 duration-300 ${darkMode ? 'bg-zinc-800 text-orange-500 shadow-inner' : 'bg-orange-50 text-orange-600'}`}>
                🔋
                </div>
              <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                {t.features.items.battery.title}
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.features.items.battery.description}
              </p>
            </div>

            {/* Feature 3 - GPS (Pro) */}
            <div className={`group p-8 rounded-3xl border-2 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-zinc-900/80 border-orange-500/30 hover:border-orange-500 hover:shadow-orange-500/20' : 'bg-white border-orange-100 hover:border-orange-500 hover:shadow-orange-500/20 shadow-lg shadow-orange-100'}`}>
              <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${darkMode ? 'bg-orange-500 text-black' : 'bg-orange-100 text-orange-700'}`}>
                        {t.features.items.gps.badge}
                      </span>
                    </div>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform group-hover:scale-110 duration-300 ${darkMode ? 'bg-zinc-800 text-orange-500 shadow-inner' : 'bg-orange-50 text-orange-600'}`}>
                📡
              </div>
              <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                {t.features.items.gps.title}
              </h4>
              <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.features.items.gps.description}
              </p>
            </div>
          </div>

          {/* Bedienungsanleitung Download */}
          <div className="max-w-2xl mx-auto mt-12">
            <a 
              href="/QuickAlert/QuickAlert_V16_Bedienungsanleitung.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-200 border border-zinc-300 text-zinc-700 font-bold shadow-lg shadow-zinc-200/50 hover:shadow-xl hover:bg-zinc-300 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{t.features.manual}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section - Reality Check */}
      <section className={`py-24 sm:py-32 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-black' : 'bg-white'}`}>
        {/* Background Pattern */}
        {darkMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${darkMode ? 'bg-zinc-900/70 border-zinc-800/80' : 'bg-white border-zinc-200'} rounded-3xl p-8 sm:p-10 shadow-xl`}>
              <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-red-500' : 'text-red-600'}`}>
                {t.problem.label}
              </h2>
              <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-8 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                {t.problem.title}
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border transition-all ${darkMode ? 'bg-red-500/10 text-red-500 border-red-500/20 group-hover:bg-red-500 group-hover:text-white' : 'bg-orange-500/10 text-orange-500 border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white'}`}>
                    1
                    </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{t.problem.items.dangerous.title}</h4>
                    <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {t.problem.items.dangerous.text}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border transition-all ${darkMode ? 'bg-red-500/10 text-red-500 border-red-500/20 group-hover:bg-red-500 group-hover:text-white' : 'bg-orange-500/10 text-orange-500 border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white'}`}>
                    2
                    </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{t.problem.items.visibility.title}</h4>
                    <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {t.problem.items.visibility.text}
                    </p>
                </div>
              </div>

                <div className="flex gap-5 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border transition-all ${darkMode ? 'bg-red-500/10 text-red-500 border-red-500/20 group-hover:bg-red-500 group-hover:text-white' : 'bg-orange-500/10 text-orange-500 border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white'}`}>
                    3
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{t.problem.items.legal.title}</h4>
                    <p className={`leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {t.problem.items.legal.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className={`absolute inset-0 rounded-[2rem] transform rotate-3 scale-105 blur-3xl ${darkMode ? 'bg-red-500/20' : 'bg-orange-500/10'}`}></div>
              <div className={`relative rounded-[2rem] overflow-hidden shadow-2xl border ${darkMode ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'} group`}>
                <Image
                  src="/Warndreieck.jpg"
                  alt={t.problem.imageAlt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-red-900/50">
                      ⚠️
            </div>
                    <div>
                      <div className="font-bold text-white text-lg">{t.problem.imageCaption}</div>
                      <div className="text-sm text-red-400 font-mono">{t.problem.imageYear}</div>
          </div>
        </div>
        </div>
        </div>
          </div>
                  </div>
                </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-24 sm:py-32 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-orange-500' : 'text-orange-600'}`}>
              {t.pricing.label}
            </h2>
            <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
              {t.pricing.title}
            </h3>
                      </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            {/* BASE Model */}
            <div className={`relative p-8 sm:p-12 rounded-[2.5rem] border transition-all duration-300 overflow-hidden ${darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl'}`}>
              {/* Deutschland Banner */}
              <div className="absolute -right-8 top-6 rotate-45 z-10">
                <div className={`px-10 py-1.5 text-xs font-black tracking-wider shadow-lg ${darkMode ? 'bg-zinc-700 text-white' : 'bg-zinc-600 text-white'}`}>
                  {t.pricing.base.country}
                    </div>
                  </div>
              {/* Verpackungsbild */}
              <div className="mb-6 -mx-8 sm:-mx-12 -mt-8 sm:-mt-12">
                <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-zinc-100 to-zinc-200">
                  <Image
                    src="/Verpackungen/base.jpg"
                    alt="QuickAlert Verpackung"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center center'
                    }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{t.pricing.base.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{t.pricing.base.price}</span>
                  <span className={`text-lg font-medium ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}> {t.pricing.base.period}</span>
                </div>
                    </div>

              <ul className="space-y-4 mb-10">
                {t.pricing.base.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-600'}`}>✓</div>
                    <span className={`${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>{feature}</span>
                  </li>
                ))}
                </ul>

                <a 
                  href="#preorder"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('preorder')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                className={`block w-full py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'}`}
                >
                {t.pricing.base.cta}
                </a>
            </div>
            
            {/* PRO Model */}
            <div className={`relative p-8 sm:p-12 rounded-[2.5rem] border-2 transition-all duration-300 transform md:-translate-y-4 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-orange-950/50 via-zinc-900 to-orange-950/30 border-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,0.3)]' : 'bg-gradient-to-br from-orange-50 via-white to-orange-50 border-orange-500 shadow-2xl shadow-orange-500/20'}`}>
              {/* Spanien Banner */}
              <div className="absolute -right-8 top-6 rotate-45 z-10">
                <div className="px-10 py-1.5 text-xs font-black tracking-wider shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  {t.pricing.pro.country}
                </div>
              </div>

              {/* Verpackungsbild */}
              <div className="mb-6 -mx-8 sm:-mx-12 -mt-8 sm:-mt-12">
                <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-orange-100 to-orange-200 border-b-2 border-orange-300">
                  <Image
                    src="/3D-PRO.jpg"
                    alt="QuickAlert PRO Verpackung"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center center'
                    }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-orange-600'}`}>{t.pricing.pro.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>{t.pricing.pro.price}</span>
                  <span className={`text-lg font-medium ${darkMode ? 'text-zinc-400' : 'text-orange-600'}`}> {t.pricing.pro.period}</span>
                  </div>
                </div>

              <ul className="space-y-4 mb-10">
                {t.pricing.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm`}>✓</div>
                    <span className={`${darkMode ? 'text-zinc-200' : 'text-zinc-800'} font-bold`}>{feature}</span>
                  </li>
                ))}
                </ul>

                <a 
                  href="#preorder"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('preorder')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                className={`block w-full py-4 px-6 rounded-2xl font-black text-center text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] bg-gradient-to-r from-orange-500 to-orange-600 text-white`}
                >
                {t.pricing.base.cta}
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - BASE vs PRO */}
      <section className="py-24 sm:py-32 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{t.comparison.title}</h2>
            </div>

            <div className="rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-5 px-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.comparison.feature}</th>
                      <th className="py-5 px-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 text-center w-40 sm:w-48">{t.nav.base}</th>
                      <th className="py-5 px-6 text-center w-40 sm:w-48 bg-gradient-to-b from-orange-500/20 to-transparent">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">{t.nav.pro} ★</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.comparison.features.map((feature, i) => {
                      // Erst gemeinsame Features (0–3), dann nur PRO (4–7)
                      const hasBase = i < 4
                      const hasPro = true
                      return (
                        <tr key={i} className={`border-b border-zinc-800/60 transition-colors hover:bg-zinc-900/50 ${i === t.comparison.features.length - 1 ? 'border-b-0' : ''}`}>
                          <td className="py-4 px-6 text-sm text-zinc-300 font-medium">{feature}</td>
                          <td className="py-4 px-6 text-center">
                            {hasBase ? (
                              <span className="text-green-400 text-lg">✓</span>
                            ) : (
                              <span className="text-zinc-600">—</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center bg-orange-500/[0.04]">
                            {hasPro ? (
                              <span className="text-green-400 text-lg">✓</span>
                            ) : (
                              <span className="text-zinc-600">—</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                    <tr className="border-t-2 border-zinc-700 bg-zinc-900/50">
                      <td className="py-5 px-6 text-sm font-bold text-zinc-300">{t.comparison.price}</td>
                      <td className="py-5 px-6 text-center">
                        <span className="text-2xl font-black text-white">{t.pricing.base.price}</span>
                      </td>
                      <td className="py-5 px-6 text-center bg-orange-500/[0.04]">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">{t.pricing.pro.price}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className={`py-24 sm:py-32 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-orange-500' : 'text-orange-600'}`}>
                {t.legal.label}
              </h2>
              <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                {t.legal.title}
              </h3>
              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.legal.description}
              </p>
              
              <div className="space-y-6">
                <div className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-lg'}`}>
                  <h4 className={`text-lg font-bold mb-2 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                    <span className="text-2xl shadow-sm rounded-full bg-white/10 p-1">🇩🇪</span> {t.legal.countries.germany.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {t.legal.countries.germany.description}
                  </p>
                </div>
                
                <div className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-lg'}`}>
                  <h4 className={`text-lg font-bold mb-2 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                    <span className="text-2xl shadow-sm rounded-full bg-white/10 p-1">🇪🇸</span> {t.legal.countries.spain.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {t.legal.countries.spain.description}
                    </p>
                  </div>
                </div>
              </div>

            <div className="relative flex justify-center">
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 blur-[100px] rounded-full`}></div>
              <div className={`relative w-full max-w-md aspect-[3/4] rounded-[2rem] border-8 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center bg-white ${darkMode ? 'border-zinc-800' : 'border-zinc-50'}`}>
                {/* Certificate Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-8 shadow-xl shadow-orange-500/30 text-white">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  </div>
                <h4 className="text-3xl font-black mb-2 text-zinc-900">IDIADA</h4>
                <div className="font-mono text-sm mb-8 text-zinc-500 bg-zinc-100 px-4 py-1 rounded-full">{t.legal.certificate.number}</div>
                <p className="text-sm leading-relaxed text-zinc-600 mb-8 max-w-xs mx-auto">
                  {t.legal.certificate.description}
                </p>
                <div className="w-full border-t-2 border-dashed border-zinc-200 pt-6 mt-auto">
                  <div className="flex justify-between items-center px-4">
                    <div className="text-xs text-zinc-400 uppercase tracking-wider">{t.legal.certificate.status}</div>
                    <div className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      {t.legal.certificate.approved}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-lg">
            {t.cta.title.split('. ').map((part, i) => (
              <span key={i}>
                {part}
                {i < t.cta.title.split('. ').length - 1 && <><br/></>}
              </span>
            ))}
            </h2>
          <p className="text-xl sm:text-2xl text-orange-100 mb-12 max-w-2xl mx-auto font-medium">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#preorder"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('preorder')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-10 py-5 bg-white text-orange-600 rounded-2xl font-black text-lg shadow-2xl hover:bg-zinc-50 hover:scale-105 transition-all duration-300"
            >
              {t.cta.cta1}
            </a>
              <a 
                href="#features" 
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                {t.cta.cta2}
              </a>
          </div>
        </div>
      </section>

      </>
      )}

      {/* Pre-Order Section */}
      <section id="preorder" className={`py-24 sm:py-32 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Notification Banner */}
            {notification && (
              <div
                className={`mb-8 p-4 rounded-2xl border-2 ${
                  notification.type === 'success'
                    ? darkMode
                      ? 'bg-green-900/20 border-green-500/50'
                      : 'bg-green-50 border-green-200'
                    : darkMode
                    ? 'bg-red-900/20 border-red-500/50'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {notification.type === 'success' ? (
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <p className={`text-sm font-medium ${notification.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                    {notification.message}
                  </p>
                  <button
                    onClick={() => setNotification(null)}
                    className="ml-auto text-zinc-500 hover:text-zinc-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="text-center mb-12">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                {t.preorder.badge}
              </span>
              <h2 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                {t.preorder.title}
              </h2>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.preorder.description}
              </p>
            </div>

            <div className={`p-8 sm:p-12 rounded-3xl border ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-xl shadow-zinc-200/50'}`}>
              <PreOrderForm />
            </div>

            <div className="mt-8 text-center">
              <p className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {t.preorder.privacy}{' '}
                <Link href="/datenschutz" className="text-orange-500 hover:underline">
                  {t.preorder.privacyLink}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className={`py-8 sm:py-10 md:py-12 border-t ${darkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200'}`}>
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Warnleuchte Icon - identisch zum Header */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className={`text-xl sm:text-2xl font-black font-poppins tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                <span className={darkMode ? 'text-white' : 'text-zinc-900'}>Quick</span>
                <span className="text-orange-500">Alert</span>
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 text-center">
              <Link href="/impressum" className={`text-sm font-medium hover:text-orange-500 transition-colors ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.footer.links.impressum}
              </Link>
              <Link href="/datenschutz" className={`text-sm font-medium hover:text-orange-500 transition-colors ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.footer.links.privacy}
              </Link>
              <Link href="/agb" className={`text-sm font-medium hover:text-orange-500 transition-colors ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {t.footer.links.terms}
              </Link>
              <a 
                href="/QuickAlert/QuickAlert_V16_Bedienungsanleitung.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium hover:text-orange-500 transition-colors ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
              >
                {t.footer.links.manual}
              </a>
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/quickalert_germany?igsh=MTh4ZnJiZHV1a2l3dA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-medium hover:text-orange-500 transition-colors ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
                aria-label={t.nav.instagramAria}
              >
                <svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="hidden sm:inline">{t.footer.links.instagram}</span>
              </a>
              <span className={`text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {t.footer.copyright}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

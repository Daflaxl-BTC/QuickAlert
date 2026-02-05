'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'de' | 'en' | 'es'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
    } else {
      // Browser-Sprache erkennen
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'en' || browserLang === 'es') {
        setLanguageState(browserLang)
        document.documentElement.lang = browserLang
      } else {
        setLanguageState('de')
        document.documentElement.lang = 'de'
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

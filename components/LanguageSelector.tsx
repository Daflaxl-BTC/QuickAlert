'use client'

import { useLanguage } from './LanguageProvider'
import { useDarkMode } from './DarkModeProvider'

const languages = [
  { code: 'de' as const, name: 'Deutsch' },
  { code: 'en' as const, name: 'English' },
  { code: 'es' as const, name: 'Español' },
]

// Flaggen-Icons als SVG
const FlagIcon = ({ code, className }: { code: 'de' | 'en' | 'es', className?: string }) => {
  switch (code) {
    case 'de':
      return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M0 0h640v160H0z"/>
          <path fill="#DD0000" d="M0 160h640v160H0z"/>
          <path fill="#FFCE00" d="M0 320h640v160H0z"/>
        </svg>
      )
    case 'en':
      return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          {/* Blauer Hintergrund */}
          <rect fill="#012169" width="640" height="480"/>
          {/* Weiße diagonale Linien */}
          <path fill="#FFF" d="M0 0l640 480M640 0L0 480" stroke="#FFF" strokeWidth="96" strokeLinecap="square"/>
          {/* Rote diagonale Linien */}
          <path fill="#C8102E" d="M0 0l640 480M640 0L0 480" stroke="#C8102E" strokeWidth="64" strokeLinecap="square"/>
          {/* Weißes Kreuz (vertikal) */}
          <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
          {/* Weißes Kreuz (horizontal) */}
          <path fill="#FFF" d="M0 160h640v160H0z"/>
          {/* Rotes Kreuz (vertikal) */}
          <path fill="#C8102E" d="M256 0h128v480H256z"/>
          {/* Rotes Kreuz (horizontal) */}
          <path fill="#C8102E" d="M0 213.3h640v53.4H0z"/>
        </svg>
      )
    case 'es':
      return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#AA151B" d="M0 0h640v480H0z"/>
          <path fill="#F1BF00" d="M0 120h640v240H0z"/>
        </svg>
      )
  }
}

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const { darkMode } = useDarkMode()

  return (
    <div className="flex flex-col gap-2 sm:gap-3 items-end">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full
            flex items-center justify-center
            transition-all duration-300
            border-2
            hover:scale-110
            active:scale-95
            shadow-lg
            backdrop-blur-md
            overflow-hidden
            ${
              language === lang.code
                ? darkMode
                  ? 'border-[#F5A623] shadow-[0_0_20px_rgba(245,166,35,0.4)] ring-2 ring-[#F5A623]/50'
                  : 'border-[#D4B896] shadow-[0_0_20px_rgba(212,184,150,0.4)] ring-2 ring-[#D4B896]/50'
                : darkMode
                ? 'bg-[#2d2d2d]/60 border-[#4a4a4a] hover:bg-[#3d3d3d] hover:border-[#5a5a5a]'
                : 'bg-white/80 border-[#D4B896]/60 hover:bg-white hover:border-[#D4B896]'
            }
          `}
          aria-label={`Switch to ${lang.name}`}
          title={lang.name}
        >
          <FlagIcon 
            code={lang.code} 
            className={`w-full h-full ${language === lang.code ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
          />
        </button>
      ))}
    </div>
  )
}

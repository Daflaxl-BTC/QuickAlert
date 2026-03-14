'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/translations/useTranslation'

export default function CookieBanner() {
  const t = useTranslation()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('consent_given')
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true)
      }, 500)
    }
  }, [])

  const handleAcknowledge = () => {
    localStorage.setItem('consent_given', 'acknowledged')
    localStorage.setItem('consent_timestamp', new Date().toISOString())
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 bg-white border-t-2 border-orange-500 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="text-lg font-bold text-zinc-900">{t.cookies.title}</h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed mb-2">
              {t.cookies.description}
            </p>
            <p className="text-xs text-zinc-500">
              {t.cookies.privacy}{' '}
              <a href="/datenschutz" className="text-orange-500 hover:underline font-semibold">
                {t.cookies.privacyLink}
              </a>.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <button
              onClick={handleAcknowledge}
              className="px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto"
            >
              {t.cookies.acknowledge}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

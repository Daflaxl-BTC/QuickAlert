'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/translations/useTranslation'

export default function CookieBanner() {
  const t = useTranslation()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Prüfe ob bereits eine Einwilligung erteilt wurde
    const consent = localStorage.getItem('consent_given')
    if (!consent) {
      // Zeige Banner nach kurzer Verzögerung für bessere UX
      setTimeout(() => {
        setShowBanner(true)
      }, 500)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('consent_given', 'true')
    localStorage.setItem('consent_timestamp', new Date().toISOString())
    setShowBanner(false)
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('consent_given', 'essential')
    localStorage.setItem('consent_timestamp', new Date().toISOString())
    setShowBanner(false)
  }

  const handleOpenSettings = () => {
    setShowSettings(true)
  }

  const handleCloseSettings = () => {
    setShowSettings(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      {/* Cookie Banner */}
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
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={handleAcceptEssential}
                className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-sm transition-all duration-300 whitespace-nowrap"
              >
                {t.cookies.essential}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {t.cookies.acceptAll}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal (erweiterbar für zukünftige Cookie-Kategorien) */}
      {showSettings && (
        <div className="fixed inset-0 z-[101] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-zinc-900">{t.cookies.settings.title}</h2>
              <button
                onClick={handleCloseSettings}
                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-green-800">{t.cookies.settings.essential.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">{t.cookies.settings.essential.badge}</span>
                </div>
                <p className="text-sm text-green-700">
                  {t.cookies.settings.essential.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-zinc-800">{t.cookies.settings.analytics.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-zinc-300 text-zinc-600 text-xs font-bold">{t.cookies.settings.analytics.badge}</span>
                </div>
                <p className="text-sm text-zinc-600">
                  {t.cookies.settings.analytics.description}
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleCloseSettings}
                className="flex-1 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold transition-all duration-300"
              >
                {t.cookies.settings.close}
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-300 shadow-lg"
              >
                {t.cookies.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

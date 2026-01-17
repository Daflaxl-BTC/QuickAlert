'use client'

import { useDarkMode } from '@/components/DarkModeProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function WarumNichtDasWarndreieck() {
  const { setDarkMode } = useDarkMode()
  const router = useRouter()

  // Automatisch zur Hauptseite mit Dark Mode weiterleiten
  useEffect(() => {
    setDarkMode(true)
    router.push('/')
  }, [setDarkMode, router])

  // Loading State während Weiterleitung
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F5A623] mx-auto mb-4"></div>
        <p className="text-[#e5e5e5]">Weiterleitung...</p>
      </div>
    </main>
  )
}

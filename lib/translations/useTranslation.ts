'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { getTranslation } from './index'

export function useTranslation() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  return t
}

import { de } from './de'
import { en } from './en'
import { es } from './es'

export type TranslationKeys = typeof de

export const translations = {
  de,
  en,
  es,
} as const

export function getTranslation(lang: 'de' | 'en' | 'es'): TranslationKeys {
  return translations[lang]
}

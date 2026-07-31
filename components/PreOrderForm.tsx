'use client'

import { useState } from 'react'
import { useDarkMode } from '@/components/DarkModeProvider'
import { useTranslation } from '@/lib/translations/useTranslation'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  product?: string
  privacyAccepted?: string
  general?: string
}

export default function PreOrderForm() {
  const { darkMode } = useDarkMode()
  const t = useTranslation()
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: 'BASE' as 'BASE' | 'PRO' | 'BOTH',
    message: '',
    privacyAccepted: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setFormState('loading')

    try {
      const response = await fetch('/api/preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.details) {
          // Validierungsfehler
          const newErrors: FormErrors = {}
          data.details.forEach((error: { path: string[]; message: string }) => {
            const field = error.path[0]
            if (field === 'privacyAccepted') {
              newErrors.privacyAccepted = error.message
            } else {
              newErrors[field as keyof FormErrors] = error.message
            }
          })
          setErrors(newErrors)
          setFormState('error')
        } else {
          setErrors({ general: data.error || t.preorder.form.error })
          setFormState('error')
        }
        return
      }

      setFormState('success')
      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        product: 'BASE',
        message: '',
        privacyAccepted: false,
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : t.preorder.form.networkError
      setErrors({ 
        general: t.preorder.form.errorMessage.replace('{error}', errorMessage)
      })
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className={`p-8 rounded-3xl border-2 ${darkMode ? 'bg-green-900/20 border-green-500/50' : 'bg-green-50 border-green-200'}`}>
        <div className="text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${darkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            {t.preorder.form.success.title}
          </h3>
          <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {t.preorder.form.success.message}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
          {t.preorder.form.name} <span className="text-red-500">{t.preorder.form.required}</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border transition-colors ${
            errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : darkMode
              ? 'bg-zinc-800 border-zinc-700 text-white focus:border-orange-500 focus:ring-orange-500'
              : 'bg-white border-zinc-300 text-zinc-900 focus:border-orange-500 focus:ring-orange-500'
          } focus:outline-none focus:ring-2`}
          required
          disabled={formState === 'loading'}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* E-Mail */}
      <div>
        <label htmlFor="email" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
          {t.preorder.form.email} <span className="text-red-500">{t.preorder.form.required}</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border transition-colors ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : darkMode
              ? 'bg-zinc-800 border-zinc-700 text-white focus:border-orange-500 focus:ring-orange-500'
              : 'bg-white border-zinc-300 text-zinc-900 focus:border-orange-500 focus:ring-orange-500'
          } focus:outline-none focus:ring-2`}
          required
          disabled={formState === 'loading'}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Produktauswahl */}
      <div>
        <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
          {t.preorder.form.product} <span className="text-red-500">{t.preorder.form.required}</span>
        </label>
        <div className="grid sm:grid-cols-3 gap-3">
          {(['BASE', 'PRO', 'BOTH'] as const).map((product) => (
            <button
              key={product}
              type="button"
              onClick={() => setFormData({ ...formData, product })}
              disabled={formState === 'loading'}
              className={`px-4 py-3 rounded-xl border-2 font-bold transition-all ${
                formData.product === product
                  ? darkMode
                    ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : darkMode
                  ? 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-orange-500/50'
                  : 'bg-white border-zinc-300 text-zinc-700 hover:border-orange-500/50'
              }`}
            >
              {product === 'BASE' ? t.preorder.form.products.base : product === 'PRO' ? t.preorder.form.products.pro : t.preorder.form.products.both}
            </button>
          ))}
        </div>
        {errors.product && <p className="mt-1 text-sm text-red-500">{errors.product}</p>}
      </div>

      {/* Nachricht (optional) */}
      <div>
        <label htmlFor="message" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
          {t.preorder.form.message}
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
            darkMode
              ? 'bg-zinc-800 border-zinc-700 text-white focus:border-orange-500 focus:ring-orange-500'
              : 'bg-white border-zinc-300 text-zinc-900 focus:border-orange-500 focus:ring-orange-500'
          } focus:outline-none focus:ring-2`}
          disabled={formState === 'loading'}
        />
      </div>

      {/* Datenschutz-Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-zinc-300 text-orange-500 focus:ring-orange-500 focus:ring-2"
            disabled={formState === 'loading'}
            required
          />
          <span className={`text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {t.preorder.form.privacy}{' '}
            <a href="/datenschutz" className="text-orange-500 hover:underline font-semibold">
              {t.preorder.form.privacyLink}
            </a>{' '}
            {t.preorder.form.privacySuffix} <span className="text-red-500">{t.preorder.form.required}</span>
          </span>
        </label>
        {errors.privacyAccepted && <p className="mt-1 text-sm text-red-500">{errors.privacyAccepted}</p>}
      </div>

      {/* Allgemeine Fehler */}
      {errors.general && (
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-red-900/20 border-red-500/50' : 'bg-red-50 border-red-200'} border`}>
          <p className="text-sm text-red-600">{errors.general}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState === 'loading'}
        className={`qa-btn w-full py-4 px-6 text-lg ${
          formState === 'loading'
            ? 'bg-zinc-400 text-white cursor-not-allowed'
            : 'bg-orange-500 text-white [--qa-btn-fill:#0b0d0f]'
        }`}
      >
        {formState === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t.preorder.form.submitting}
          </span>
        ) : (
          t.preorder.form.submit
        )}
      </button>
    </form>
  )
}

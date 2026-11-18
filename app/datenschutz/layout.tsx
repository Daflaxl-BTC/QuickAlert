import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Website quickalert.eu.',
  alternates: { canonical: '/datenschutz' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen von QuickAlert.',
  alternates: { canonical: '/agb' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

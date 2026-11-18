import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von QuickAlert (Felix Ventures).',
  alternates: { canonical: '/impressum' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

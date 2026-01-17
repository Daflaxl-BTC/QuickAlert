import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import DarkModeProvider from '@/components/DarkModeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QuickAlert - Magnetisches LED Warnlicht für Ihr Fahrzeug',
  description: 'Das moderne magnetische gelbe LED Warnlicht für maximale Sicherheit. Einfach zu montieren, wetterfest und zuverlässig. BASE und PRO Versionen verfügbar.',
  keywords: 'LED Warnlicht, magnetisches Warnlicht, Auto Warnlicht, Pannenlicht, Sicherheitslicht, QuickAlert',
  authors: [{ name: 'QuickAlert' }],
  openGraph: {
    title: 'QuickAlert - Magnetisches LED Warnlicht',
    description: 'Das moderne magnetische gelbe LED Warnlicht für maximale Sicherheit',
    type: 'website',
    locale: 'de_DE',
    siteName: 'QuickAlert',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickAlert - Magnetisches LED Warnlicht',
    description: 'Das moderne magnetische gelbe LED Warnlicht für maximale Sicherheit',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
}

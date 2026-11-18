import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import DarkModeProvider from '@/components/DarkModeProvider'
import LanguageProvider from '@/components/LanguageProvider'
import CookieBanner from '@/components/CookieBanner'
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'QuickAlert – Magnetische LED-Warnleuchte fürs Auto',
    template: '%s | QuickAlert',
  },
  description:
    'Magnetische LED-Warnleuchte fürs Auto: aufs Dach setzen, einschalten, gesehen werden. QuickAlert BASE für Deutschland, QuickAlert PRO als vernetzte V16-Warnleuchte für Spanien.',
  keywords: [
    'Warnleuchte Auto',
    'LED Warnleuchte',
    'magnetische Warnleuchte',
    'Pannenleuchte',
    'V16 Warnleuchte',
    'V16 Warnleuchte Spanien',
    'V16 conectada',
    'Warnblinkleuchte Auto',
    'QuickAlert',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  // Bewusst KEIN globaler canonical: er wuerde sich auf alle Unterseiten vererben
  // und sie als Dublette der Startseite markieren. Jede Seite setzt ihren eigenen.
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['es_ES', 'en_GB'],
    siteName: SITE_NAME,
    title: 'QuickAlert – Magnetische LED-Warnleuchte fürs Auto',
    description:
      'Aufs Dach setzen, einschalten, gesehen werden. BASE für Deutschland, PRO als vernetzte V16-Warnleuchte für Spanien.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickAlert – Magnetische LED-Warnleuchte fürs Auto',
    description:
      'Aufs Dach setzen, einschalten, gesehen werden. BASE für Deutschland, PRO als vernetzte V16-Warnleuchte für Spanien.',
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <LanguageProvider>
          <DarkModeProvider>
            {children}
            <CookieBanner />
          </DarkModeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

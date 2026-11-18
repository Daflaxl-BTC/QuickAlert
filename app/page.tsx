import type { Metadata } from 'next'
import HomePage from '@/components/landing/HomePage'
import JsonLd from '@/components/JsonLd'
import { landing } from '@/lib/translations/landing/de'
import { faqJsonLd, organizationJsonLd, productJsonLd, websiteJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    absolute: 'QuickAlert – Magnetische LED-Warnleuchte fürs Auto & V16-Warnleuchte für Spanien',
  },
  description:
    'Warnleuchte fürs Auto: QuickAlert BASE haftet per Magnet auf dem Dach und warnt mit 360°-LED-Ring, noch bevor das Warndreieck steht. QuickAlert PRO ist die vernetzte V16-Warnleuchte für Spanien (IDIADA, DGT 3.0). Jetzt bei Amazon.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          productJsonLd('base'),
          productJsonLd('pro'),
          faqJsonLd(landing.faq.items),
        ]}
      />
      <HomePage />
    </>
  )
}

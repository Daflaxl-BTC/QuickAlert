import type { Metadata } from 'next'
import HomePage from '@/components/landing/HomePage'
import JsonLd from '@/components/JsonLd'
import { landing } from '@/lib/translations/landing/de'
import { faqJsonLd, organizationJsonLd, productJsonLd, websiteJsonLd } from '@/lib/seo'
import { videoJsonLd } from '@/lib/videos'
import { availableVideos } from '@/lib/videos.server'

export const metadata: Metadata = {
  title: {
    absolute: 'Warnleuchte Auto: magnetische LED-Warnleuchte | QuickAlert',
  },
  description:
    'Magnetische LED-Warnleuchte fürs Auto: aufs Dach, einschalten, gesehen werden, bevor das Warndreieck steht. Dazu die V16-Warnleuchte für Spanien.',
  alternates: { canonical: '/' },
}

export default function Page() {
  const videos = availableVideos()
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          productJsonLd('base'),
          productJsonLd('pro'),
          faqJsonLd(landing.faq.items),
          ...videos.map(videoJsonLd),
        ]}
      />
      <HomePage videos={videos} />
    </>
  )
}

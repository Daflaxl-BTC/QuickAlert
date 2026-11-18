import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { GuideShell } from '@/components/seo/GuideShell'
import { GUIDES } from '@/lib/guides'
import { OG_IMAGE, SITE_URL, breadcrumbJsonLd } from '@/lib/seo'

const PATH = '/ratgeber'
const TITLE = 'Ratgeber: Warnleuchte, V16, Warndreieck und Panne'
const DESCRIPTION =
  'Ratgeber von QuickAlert: V16-Warnleuchte und Rechtslage, Kaufberatung LED-Warnleuchte fürs Auto, richtiger Abstand des Warndreiecks und Verhalten bei einer Panne auf der Autobahn.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Startseite', path: '/' },
            { name: 'Ratgeber', path: PATH },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: TITLE,
            description: DESCRIPTION,
            url: `${SITE_URL}${PATH}`,
            inLanguage: 'de-DE',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: GUIDES.map((g, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE_URL}${g.path}`,
                name: g.title,
              })),
            },
          },
        ]}
      />
      <GuideShell
        breadcrumb="Ratgeber"
        eyebrow="Ratgeber"
        title="Wissen für den Ernstfall"
        lead="Rechtslage, richtiges Verhalten bei einer Panne und worauf es bei einer Warnleuchte fürs Auto ankommt. Kompakt erklärt, mit Quellenangaben zu den Vorschriften."
        updated="18.11.2026"
      >
        <ul className="grid gap-4">
          {GUIDES.map((g) => (
            <li key={g.path}>
              <Link
                href={g.path}
                className="block rounded-3xl border border-white/[0.08] bg-[#111216] p-6 transition-colors hover:border-[#F5A623]/50 sm:p-7"
              >
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">{g.title}</h2>
                <p className="mt-2 leading-relaxed text-zinc-400">{g.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#F5A623]">Weiterlesen →</span>
              </Link>
            </li>
          ))}
        </ul>
      </GuideShell>
    </>
  )
}

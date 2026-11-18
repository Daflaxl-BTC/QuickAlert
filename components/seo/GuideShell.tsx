import Link from 'next/link'
import type { ReactNode } from 'react'
import { AMAZON_LINK_REL, HAS_AMAZON_PARTNER_TAG, amazonUrl } from '@/lib/amazon'
import type { AmazonProduct } from '@/lib/amazon'

/* Gemeinsames Geruest fuer statische Ratgeber-/Keyword-Seiten (Server Components). */

function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg className="h-7 w-7 flex-shrink-0" viewBox="0 0 64 64" fill="none" aria-hidden>
        <path d="M32 4V12" stroke="#F5A623" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M32 4V12" stroke="#F5A623" strokeWidth="3.5" strokeLinecap="round" transform="rotate(40 32 32)" />
        <path d="M32 4V12" stroke="#F5A623" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 32 32)" />
        <path d="M20 40c0-11 4-17 12-17s12 6 12 17" fill="#F5A623" />
        <rect x="14" y="40" width="36" height="7" rx="3.5" fill="currentColor" />
      </svg>
      <span className="font-poppins text-lg font-bold tracking-[-0.02em]">
        Quick<span className="text-[#F5A623]">Alert</span>
      </span>
    </span>
  )
}

export function GuideShell({
  breadcrumb,
  eyebrow,
  title,
  lead,
  updated,
  children,
}: {
  breadcrumb: string
  eyebrow: string
  title: string
  lead: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0b0c0f] text-zinc-100 antialiased">
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white transition-opacity hover:opacity-80" aria-label="QuickAlert Startseite">
            <Logo />
          </Link>
          <a
            href={amazonUrl('store')}
            target="_blank"
            rel={AMAZON_LINK_REL}
            className="inline-flex min-h-[40px] items-center rounded-full bg-[#F5A623] px-5 text-sm font-semibold text-[#0b0c0f] transition-colors hover:bg-white"
          >
            Bei Amazon kaufen
          </a>
        </div>
      </header>

      <article className="mx-auto w-full max-w-3xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <nav aria-label="Brotkrumen" className="mb-8 text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white">Startseite</Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-zinc-300">{breadcrumb}</li>
          </ol>
        </nav>

        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
          {eyebrow}
        </p>
        <h1 className="text-[clamp(34px,5.4vw,56px)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">{lead}</p>
        <p className="mt-4 text-xs text-zinc-600">Stand: {updated}</p>

        <div className="mt-12 space-y-14">{children}</div>
      </article>

      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 text-sm text-zinc-500 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-white">Startseite</Link>
            <Link href="/v16-warnleuchte" className="hover:text-white">Ratgeber: V16-Warnleuchte</Link>
            <Link href="/warnleuchte-auto" className="hover:text-white">Warnleuchte fürs Auto</Link>
            <Link href="/manual" className="hover:text-white">Bedienungsanleitung</Link>
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </nav>
          <p className="text-xs text-zinc-600">© 2026 QuickAlert</p>
          {HAS_AMAZON_PARTNER_TAG && (
            <p className="text-xs text-zinc-600">Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.</p>
          )}
        </div>
      </footer>
    </main>
  )
}

export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-[clamp(24px,3.2vw,34px)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">{title}</h2>
      <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-zinc-300 [&_strong]:font-semibold [&_strong]:text-white">
        {children}
      </div>
    </section>
  )
}

export function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-[#F5A623]/30 bg-[#F5A623]/[0.06] p-6 text-[17px] leading-relaxed text-zinc-200 sm:p-7">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5A623]">Kurz erklärt</p>
      {children}
    </div>
  )
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5A623]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ProductCta({
  product,
  name,
  market,
  text,
  cta,
}: {
  product: AmazonProduct
  name: string
  market: string
  text: string
  cta: string
}) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#121318] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{market}</p>
        <p className="mt-1 text-xl font-semibold text-white">{name}</p>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-zinc-400">{text}</p>
      </div>
      <a
        href={amazonUrl(product)}
        target="_blank"
        rel={AMAZON_LINK_REL}
        className="inline-flex min-h-[48px] flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623] px-6 text-sm font-semibold text-[#0b0c0f] transition-colors hover:bg-white"
      >
        {cta}
      </a>
    </div>
  )
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/[0.08] rounded-3xl border border-white/[0.08] bg-[#0f1014]">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
            <h3>{item.q}</h3>
            <span className="text-[#F5A623] transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 text-[16px] leading-relaxed text-zinc-400">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

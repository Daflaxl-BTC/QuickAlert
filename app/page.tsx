'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Reveal from '@/components/Reveal'
import ScrollProgress from '@/components/ScrollProgress'
import { useLanguage } from '@/components/LanguageProvider'
import type { Language } from '@/components/LanguageProvider'
import { useTranslation } from '@/lib/translations/useTranslation'
import { amazonUrl } from '@/lib/amazon'
import {
  BatteryIcon,
  BoxIcon,
  CheckIcon,
  DropletIcon,
  LightRingIcon,
  MagnetIcon,
  SatelliteIcon,
} from '@/components/QaIcons'

const WHATSAPP_URL = 'https://wa.me/4915119784023'
const INSTAGRAM_URL = 'https://www.instagram.com/quickalert_germany?igsh=MTh4ZnJiZHV1a2l3dA%3D%3D&utm_source=qr'
const MANUAL_URL = '/QuickAlert/QuickAlert_V16_Bedienungsanleitung.pdf'
const LANGUAGES: Language[] = ['de', 'en', 'es']

/* ---------- kleine Bausteine ---------- */

function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p
      className={`mb-5 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase ${
        tone === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623] qa-beacon" />
      {children}
    </p>
  )
}

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={`qa-btn-arrow ${className}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
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

/* ---------- Seite ---------- */

export default function Home() {
  const t = useTranslation()
  const l = t.landing
  const { language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  const sortedCertificates = [...t.legal.certificates].sort((a, b) => {
    const orderDiff = (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER)
    if (orderDiff !== 0) return orderDiff
    return a.name.localeCompare(b.name, language)
  })
  const baseCertificates = sortedCertificates.filter((c) => c.productScope === 'base' || c.productScope === 'both')
  const proCertificates = sortedCertificates.filter((c) => c.productScope === 'pro' || c.productScope === 'both')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const stats = [t.darkMode.stats.breakdowns, t.darkMode.stats.rearEnd, t.darkMode.stats.highway, t.darkMode.stats.fine]

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0b0c0f] text-zinc-100 antialiased">
      <ScrollProgress />

      {/* ---------- Navigation ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <Container>
          <nav className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-[#121318]/75 py-2 pl-4 pr-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:pl-5">
            <Link
              href="/"
              aria-label={l.nav.home}
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-white transition-opacity hover:opacity-80"
            >
              <Logo />
            </Link>

            <div className="hidden items-center gap-7 whitespace-nowrap lg:flex">
              <a href="#how" className="qa-link text-sm text-zinc-300 hover:text-white">{l.nav.how}</a>
              <a href="#features" className="qa-link text-sm text-zinc-300 hover:text-white">{l.nav.features}</a>
              <a href="#pricing" className="qa-link text-sm text-zinc-300 hover:text-white">{l.nav.models}</a>
              <a href="#faq" className="qa-link text-sm text-zinc-300 hover:text-white">{l.nav.faq}</a>
            </div>

            <div className="flex items-center gap-2">
              <div role="group" aria-label={l.nav.language} className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5">
                {LANGUAGES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    aria-pressed={language === code}
                    className={`min-h-[32px] min-w-[32px] rounded-full px-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                      language === code ? 'bg-white text-[#0b0c0f]' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
              <a
                href={amazonUrl('store')}
                target="_blank"
                rel="noopener noreferrer"
                className="qa-btn min-h-[40px] !rounded-full bg-[#F5A623] px-4 text-sm font-semibold text-[#0b0c0f] shadow-[0_8px_30px_-6px_rgba(245,166,35,0.55)] [--qa-btn-fill:#ffffff] sm:px-5"
              >
                <span className="hidden whitespace-nowrap sm:inline">{l.nav.buy}</span>
                <span className="sm:hidden">{l.nav.buyShort}</span>
              </a>
            </div>
          </nav>
        </Container>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-[100svh] lg:pb-24 lg:pt-40">
        <div className="qa-darkgrid absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute right-[-20%] top-[10%] -z-10 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.28)_0%,rgba(245,166,35,0.08)_40%,transparent_70%)] qa-glow-pulse lg:right-[-6%]"
          aria-hidden
        />

        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div>
            <div className="qa-enter mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2.5 pr-3.5 text-xs backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A623] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F5A623]" />
              </span>
              <span className="font-medium text-zinc-200">{l.hero.status}</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400">{l.hero.statusSub}</span>
            </div>

            <h1
              className="qa-enter text-[clamp(44px,7.4vw,92px)] font-semibold leading-[0.98] tracking-[-0.045em] text-white"
              style={{ '--qa-delay': '90ms' } as React.CSSProperties}
            >
              {l.hero.titleA}{' '}
              <span className="bg-gradient-to-br from-[#FFD080] via-[#F5A623] to-[#E08600] bg-clip-text text-transparent">
                {l.hero.titleAccent}
              </span>
              {l.hero.titleB}
            </h1>

            <p
              className="qa-enter mt-7 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
              style={{ '--qa-delay': '180ms' } as React.CSSProperties}
            >
              {l.hero.text}
            </p>

            <div className="qa-enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ '--qa-delay': '270ms' } as React.CSSProperties}>
              <a
                href={amazonUrl('base')}
                target="_blank"
                rel="noopener noreferrer"
                className="qa-btn min-h-[54px] !rounded-full bg-[#F5A623] px-7 text-base font-semibold text-[#0b0c0f] shadow-[0_14px_40px_-10px_rgba(245,166,35,0.65)] [--qa-btn-fill:#ffffff]"
              >
                {l.hero.ctaPrimary}
                <span className="font-normal opacity-70">· {l.models.base.price}</span>
                <ArrowIcon />
              </a>
              <a
                href="#pricing"
                className="qa-btn min-h-[54px] !rounded-full border border-white/15 bg-white/[0.03] px-7 text-base font-medium text-white [--qa-btn-fill:#ffffff] hover:text-[#0b0c0f]"
              >
                {l.hero.ctaSecondary}
              </a>
            </div>

            <ul className="qa-enter mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400" style={{ '--qa-delay': '360ms' } as React.CSSProperties}>
              {l.hero.trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#F5A623]/15 text-[#F5A623] [&_svg]:h-2.5 [&_svg]:w-2.5">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Produktbuehne */}
          <div className="qa-enter relative mx-auto w-full max-w-[640px]" style={{ '--qa-delay': '200ms' } as React.CSSProperties}>
            <div className="relative aspect-square">
              <div className="absolute inset-[-4%] rounded-full border border-white/[0.06]" aria-hidden />
              <div className="absolute inset-[8%] rounded-full border border-dashed border-white/[0.07] qa-spin-slow" aria-hidden />
              <div className="absolute inset-[12%] rounded-full bg-[#F5A623]/20 blur-[90px] qa-glow-pulse" aria-hidden />

              {/* Hinteres Bild: PRO */}
              <div className="absolute right-0 top-0 w-[64%] rotate-[6deg] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                <Image
                  src="/landing/amazon/pro-07.jpg"
                  alt={l.hero.imageAltPro}
                  width={1400}
                  height={1400}
                  sizes="(min-width: 1024px) 380px, 60vw"
                  className="h-auto w-full"
                />
              </div>

              {/* Vorderes Bild: BASE */}
              <div className="qa-float absolute bottom-0 left-0 w-[74%]">
                <div className="-rotate-[3deg] overflow-hidden rounded-[28px] border border-white/15 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(245,166,35,0.35)]">
                  <Image
                    src="/landing/amazon/base-09.jpg"
                    alt={l.hero.imageAlt}
                    width={1400}
                    height={1400}
                    priority
                    sizes="(min-width: 1024px) 460px, 70vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Laufband ---------- */}
      <section className="border-y border-white/[0.06] bg-[#0e0f13] py-5" aria-label={l.marquee.label}>
        <div className="flex items-center gap-6">
          <p className="hidden flex-shrink-0 pl-8 text-eyebrow font-semibold uppercase text-zinc-500 md:block">{l.marquee.label}</p>
          <div className="qa-marquee-mask relative flex-1 overflow-hidden">
            <div className="qa-marquee flex w-max gap-10 pr-10">
              {[...l.marquee.items, ...l.marquee.items].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-3 whitespace-nowrap text-sm text-zinc-300" aria-hidden={i >= l.marquee.items.length}>
                  <span className="h-1 w-1 rounded-full bg-[#F5A623]/70" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <Eyebrow>{l.problem.label}</Eyebrow>
            <p className="text-[clamp(26px,3.4vw,42px)] font-medium leading-[1.2] tracking-[-0.025em] text-zinc-500">
              {l.problem.textA}{' '}
              <span className="text-white">
                {l.problem.textB} <span className="text-[#F5A623]">{l.problem.textAccent}</span>
              </span>
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-16">
            <p className="mb-5 text-sm text-zinc-500">{l.problem.statsTitle}</p>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0f1014] p-6 sm:p-8">
                  <p className="qa-num text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-zinc-300">{stat.label}</p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.source}</p>
                </div>
              ))}
            </div>
            <Link href="/warum-nicht-das-warndreieck" className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#F5A623] hover:text-[#FFD080]">
              {l.problem.link}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ---------- So funktioniert es ---------- */}
      <section id="how" className="relative scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-32">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(245,166,35,0.12),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <Reveal className="mb-14 max-w-3xl">
            <Eyebrow>{l.steps.label}</Eyebrow>
            <h2 className="text-[clamp(32px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
              {l.steps.titleA}
              <br />
              <span className="text-zinc-500">{l.steps.titleB}</span>
            </h2>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <ol className="relative space-y-9 border-l border-white/10 pl-8">
                {l.steps.items.map((step, i) => (
                  <Reveal as="li" key={step.title} delay={i * 110} className="relative">
                    <span className="absolute -left-[49px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A623] text-sm font-bold text-[#0b0c0f] shadow-[0_0_30px_-4px_rgba(245,166,35,0.7)]">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{step.title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-zinc-400">{step.text}</p>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={300}>
                <p className="mt-10 max-w-md border-l-2 border-[#F5A623] pl-4 text-sm leading-relaxed text-zinc-400">{l.steps.note}</p>
              </Reveal>
            </div>

            <Reveal delay={120} className="relative">
              <div className="absolute inset-[8%] rounded-full bg-[#F5A623]/15 blur-[90px]" aria-hidden />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
                <Image
                  src="/landing/amazon/base-06.jpg"
                  alt={l.gallery.base[4].title}
                  width={1400}
                  height={1400}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Technik (Bento, hell) ---------- */}
      <section id="features" className="scroll-mt-24 bg-[#f3eee4] py-24 text-[#16171b] sm:py-32">
        <Container>
          <div className="mb-14 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <Reveal>
              <Eyebrow tone="light">{l.features.label}</Eyebrow>
              <h2 className="text-[clamp(32px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.04em]">
                {l.features.titleA}
                <br />
                {l.features.titleB}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-md text-lg leading-relaxed text-zinc-600 lg:ml-auto">{l.features.intro}</p>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-6">
            {/* LED-Ring: grosse dunkle Karte */}
            <Reveal className="qa-card relative overflow-hidden rounded-[28px] bg-[#0b0c0f] text-white md:col-span-4 md:row-span-2">
              <div className="grid h-full md:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623]/15 px-3 py-1 text-xs font-semibold text-[#F5A623]">
                      <span className="[&_svg]:h-3.5 [&_svg]:w-3.5"><LightRingIcon /></span>
                      {l.features.ring.badge}
                    </span>
                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">{l.features.ring.title}</h3>
                    <p className="mt-3 max-w-sm leading-relaxed text-zinc-400">{l.features.ring.text}</p>
                  </div>
                  <p className="qa-num mt-10 text-6xl font-semibold tracking-[-0.05em] text-[#F5A623]">360°</p>
                </div>
                {/* Abstrakte Lichtwellen statt Produktfoto */}
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden" aria-hidden>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,166,35,0.22),transparent_62%)]" />
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="qa-ripple absolute h-24 w-24 rounded-full border-2 border-[#F5A623]/70"
                      style={{ animationDelay: `${i * 1.1}s` }}
                    />
                  ))}
                  <span className="relative h-20 w-20 rounded-full bg-[radial-gradient(circle,#FFE3A3_0%,#F5A623_45%,#E08600_100%)] shadow-[0_0_60px_10px_rgba(245,166,35,0.55)] qa-glow-pulse" />
                </div>
              </div>
            </Reveal>

            <FeatureCard icon={<MagnetIcon />} title={l.features.magnet.title} text={l.features.magnet.text} className="md:col-span-2" delay={80} />
            <FeatureCard icon={<DropletIcon />} title={l.features.weather.title} text={l.features.weather.text} className="md:col-span-2" delay={140} />
            <FeatureCard icon={<BatteryIcon />} title={l.features.battery.title} text={l.features.battery.text} className="md:col-span-2" delay={80} />
            <FeatureCard icon={<BoxIcon />} title={l.features.compact.title} text={l.features.compact.text} className="md:col-span-2" delay={140} />

            <Reveal delay={200} className="qa-card relative overflow-hidden rounded-[28px] border border-[#F5A623]/40 bg-gradient-to-br from-[#fff4df] to-[#fde8c4] p-7 md:col-span-2">
              <span className="inline-flex rounded-full bg-[#0b0c0f] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F5A623]">
                {l.features.pro.badge}
              </span>
              <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5A623] text-[#0b0c0f] [&_svg]:h-6 [&_svg]:w-6">
                <SatelliteIcon />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{l.features.pro.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-700">{l.features.pro.text}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Galerie: Amazon-Listing-Bilder mit Erklaerung ---------- */}
      <ProductGallery />

      {/* ---------- Im Detail / Spezifikationen ---------- */}
      <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute inset-[10%] rounded-full bg-[#F5A623]/15 blur-[90px]" aria-hidden />
            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0f1015]">
              <Image
                src="/landing/amazon/base-04.jpg"
                alt={l.specs.imageAlt}
                width={1400}
                height={1400}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>{l.specs.label}</Eyebrow>
            <h2 className="text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.06] tracking-[-0.035em] text-white">
              {l.specs.titleA}
              <br />
              <span className="text-zinc-500">{l.specs.titleB}</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-zinc-400">{l.specs.text}</p>

            <dl className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {l.specs.rows.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-sm text-zinc-500">{row.label}</dt>
                  <dd className="text-right">
                    <span className="font-medium text-white">{row.value}</span>
                    <span className="block text-xs text-zinc-500">{row.sub}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={MANUAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white"
            >
              <svg className="h-4 w-4 text-[#F5A623]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" />
              </svg>
              {t.features.manual}
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Modelle & Preise (hell) ---------- */}
      <section id="pricing" className="scroll-mt-24 bg-[#f7f4ee] py-24 text-[#16171b] sm:py-32">
        <Container>
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow tone="light">{l.models.label}</Eyebrow>
            <h2 className="text-[clamp(32px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.04em]">
              {l.models.titleA}
              <br />
              <span className="text-zinc-400">{l.models.titleB}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">{l.models.intro}</p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* BASE */}
            <Reveal className="qa-card flex flex-col overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_30px_60px_-30px_rgba(22,23,27,0.25)]">
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image src="/landing/amazon/base-01.jpg" alt={l.models.base.imageAlt} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#16171b] backdrop-blur">
                  {l.models.base.country}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{l.models.base.name}</h3>
                <p className="mt-1 text-zinc-600">{l.models.base.tagline}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="qa-num text-5xl font-semibold tracking-[-0.04em]">{l.models.base.price}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">{l.models.priceNote}</p>
                <ul className="mb-8 mt-7 space-y-3">
                  {l.models.base.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-zinc-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 [&_svg]:h-3 [&_svg]:w-3">
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={amazonUrl('base')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qa-btn mt-auto min-h-[54px] !rounded-full bg-[#16171b] px-6 text-base font-semibold text-white [--qa-btn-fill:#F5A623] hover:text-[#16171b]"
                >
                  {l.models.base.cta}
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>

            {/* PRO */}
            <Reveal delay={110} className="qa-card relative flex flex-col overflow-hidden rounded-[32px] bg-[#0b0c0f] text-white shadow-[0_30px_70px_-25px_rgba(245,166,35,0.45)] ring-1 ring-[#F5A623]/50">
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image src="/landing/amazon/pro-01.jpg" alt={l.models.pro.imageAlt} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-[#F5A623] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0b0c0f]">
                  {l.models.pro.country}
                </span>
                <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {l.models.pro.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{l.models.pro.name}</h3>
                <p className="mt-1 text-zinc-400">{l.models.pro.tagline}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="qa-num text-5xl font-semibold tracking-[-0.04em]">{l.models.pro.price}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">{l.models.priceNote}</p>
                <ul className="mb-6 mt-7 space-y-3">
                  {l.models.pro.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-zinc-200">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F5A623] text-[#0b0c0f] [&_svg]:h-3 [&_svg]:w-3">
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mb-8 text-xs leading-relaxed text-zinc-500">{l.models.pro.note}</p>
                <a
                  href={amazonUrl('pro')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qa-btn mt-auto min-h-[54px] !rounded-full bg-[#F5A623] px-6 text-base font-semibold text-[#0b0c0f] [--qa-btn-fill:#ffffff]"
                >
                  {l.models.pro.cta}
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Vergleich ---------- */}
      <section id="vergleich" className="scroll-mt-24 py-24 sm:py-32">
        <Container className="max-w-[960px]">
          <Reveal className="mb-10">
            <Eyebrow>{l.compare.label}</Eyebrow>
            <h2 className="text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.06] tracking-[-0.035em] text-white">{l.compare.title}</h2>
          </Reveal>

          <Reveal delay={90} className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0f1014]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th scope="col" className="px-4 py-5 text-eyebrow font-semibold uppercase text-zinc-500 sm:px-6">{l.compare.feature}</th>
                    <th scope="col" className="w-[72px] px-2 py-5 text-center text-eyebrow sm:px-4 font-semibold uppercase text-zinc-300 sm:w-40">BASE</th>
                    <th scope="col" className="w-[72px] bg-[#F5A623]/[0.06] px-2 sm:px-4 py-5 text-center text-eyebrow font-semibold uppercase text-[#F5A623] sm:w-40">PRO</th>
                  </tr>
                </thead>
                <tbody>
                  {l.compare.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.06] transition-colors hover:bg-white/[0.02]">
                      <th scope="row" className="px-4 py-4 text-sm font-normal text-zinc-300 sm:px-6">{row.feature}</th>
                      <td className="px-2 py-4 text-center sm:px-4"><CompareMark on={row.base} /></td>
                      <td className="bg-[#F5A623]/[0.04] px-2 py-4 text-center sm:px-4"><CompareMark on={row.pro} /></td>
                    </tr>
                  ))}
                  <tr className="border-b border-white/[0.06]">
                    <th scope="row" className="px-4 py-4 text-sm font-normal text-zinc-500 sm:px-6">{l.compare.market}</th>
                    <td className="px-4 py-4 text-center text-xs text-zinc-300 sm:text-sm">{l.models.base.country}</td>
                    <td className="bg-[#F5A623]/[0.04] px-4 py-4 text-center text-xs text-zinc-300 sm:text-sm">{l.models.pro.country}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-5 text-sm font-normal text-zinc-500 sm:px-6">{l.compare.price}</th>
                    <td className="px-4 py-5 text-center">
                      <a href={amazonUrl('base')} target="_blank" rel="noopener noreferrer" className="qa-num text-base font-semibold sm:text-xl text-white underline-offset-4 hover:underline">
                        {l.models.base.price}
                      </a>
                    </td>
                    <td className="bg-[#F5A623]/[0.04] px-4 py-5 text-center">
                      <a href={amazonUrl('pro')} target="_blank" rel="noopener noreferrer" className="qa-num text-base font-semibold sm:text-xl text-[#F5A623] underline-offset-4 hover:underline">
                        {l.models.pro.price}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Rechtslage ---------- */}
      <section className="border-t border-white/[0.06] py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{l.legal.label}</Eyebrow>
            <h2 className="text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.06] tracking-[-0.035em] text-white">
              {l.legal.titleA}
              <br />
              <span className="text-zinc-500">{l.legal.titleB}</span>
            </h2>
            <a href="#zertifikate" className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-[#F5A623] hover:text-white">
              {l.legal.certLink}
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-5-5 5 5 5-5" />
              </svg>
            </a>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { flag: '🇩🇪', ...l.legal.germany },
              { flag: '🇪🇸', ...l.legal.spain },
            ].map((country, i) => (
              <Reveal key={country.name} delay={i * 100} className="qa-card rounded-[28px] border border-white/[0.08] bg-[#111216] p-7 hover:border-white/20">
                <p className="text-3xl" aria-hidden>{country.flag}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{country.name}</h3>
                <p className="mt-2 leading-relaxed text-zinc-400">{country.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- FAQ (hell) ---------- */}
      <section id="faq" className="scroll-mt-24 bg-[#f3eee4] py-24 text-[#16171b] sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">{l.faq.label}</Eyebrow>
            <h2 className="text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.06] tracking-[-0.035em]">{l.faq.title}</h2>
            <p className="mt-6 text-zinc-600">
              {l.faq.contact}{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[#16171b] underline decoration-[#F5A623] decoration-2 underline-offset-4 hover:text-[#E08600]">
                {l.faq.contactLink}
              </a>
            </p>
          </Reveal>
          <Reveal delay={100} className="divide-y divide-zinc-300/70 border-y border-zinc-300/70">
            {l.faq.items.map((item, i) => (
              <details key={item.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-zinc-300 transition-transform duration-300 group-open:rotate-45 group-open:border-[#F5A623] group-open:bg-[#F5A623]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-zinc-600">{item.a}</p>
              </details>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------- Abschluss-CTA ---------- */}
      <section className="relative isolate overflow-hidden py-28 sm:py-36">
        <div className="qa-darkgrid absolute inset-0 -z-10" aria-hidden />
        <div
          className="absolute inset-0 -z-10 m-auto h-[620px] w-[620px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.3),transparent_65%)] qa-glow-pulse"
          aria-hidden
        />
        <Container className="text-center">
          <Reveal>
            <h2 className="text-[clamp(44px,7vw,88px)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
              {l.cta.titleA}
              <br />
              <span className="bg-gradient-to-br from-[#FFD080] via-[#F5A623] to-[#E08600] bg-clip-text text-transparent">{l.cta.titleB}</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-7 max-w-xl text-lg text-zinc-400 sm:text-xl">{l.cta.text}</p>
          </Reveal>
          <Reveal delay={180} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={amazonUrl('store')}
              target="_blank"
              rel="noopener noreferrer"
              className="qa-btn min-h-[56px] !rounded-full bg-[#F5A623] px-8 text-base font-semibold text-[#0b0c0f] shadow-[0_14px_40px_-10px_rgba(245,166,35,0.65)] [--qa-btn-fill:#ffffff]"
            >
              {l.cta.primary}
              <ArrowIcon />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="qa-btn min-h-[56px] !rounded-full border border-white/15 bg-white/[0.03] px-8 text-base font-medium text-white [--qa-btn-fill:#ffffff] hover:text-[#0b0c0f]"
            >
              {l.cta.secondary}
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Zertifikate ---------- */}
      <section id="zertifikate" className="scroll-mt-24 border-t border-white/[0.06] py-10">
        <Container className="max-w-5xl">
          <details className="group rounded-2xl border border-white/[0.08] bg-[#0f1014]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-eyebrow font-semibold uppercase text-zinc-400 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
              <span>{t.legal.certificatesSection.toggle}</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="grid gap-4 px-5 pb-5 md:grid-cols-2">
              {[
                { title: t.legal.certificatesSection.baseTitle, list: baseCertificates, key: 'base' },
                { title: t.legal.certificatesSection.proTitle, list: proCertificates, key: 'pro' },
              ].map((group) => (
                <div key={group.key} className="rounded-xl border border-white/[0.08] bg-[#0b0c0f] p-4">
                  <h3 className="mb-3 text-sm font-semibold text-zinc-100">{group.title}</h3>
                  {group.list.length === 0 ? (
                    <p className="text-xs text-zinc-500">{t.legal.certificatesSection.empty}</p>
                  ) : (
                    <div className="space-y-3">
                      {group.list.map((certificate) => (
                        <div key={`${group.key}-${certificate.name}`} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <p className="text-sm font-semibold text-zinc-100">{certificate.name}</p>
                          <p className="mt-1 font-mono text-xs text-zinc-500">{certificate.number}</p>
                          <p className="mt-2 text-xs leading-relaxed text-zinc-400">{certificate.description}</p>
                          <a
                            href={certificate.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex text-xs font-semibold text-[#F5A623] underline underline-offset-2 hover:text-[#FFD080]"
                          >
                            {t.legal.certificatesSection.fileLabel}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </details>
        </Container>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-white/[0.06] pt-12" style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))' }}>
        <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="text-white"><Logo /></span>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{l.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
            <a href="#zertifikate" className="qa-link hover:text-white">{l.footer.certificates}</a>
            <Link href="/impressum" className="qa-link hover:text-white">{t.footer.links.impressum}</Link>
            <Link href="/datenschutz" className="qa-link hover:text-white">{t.footer.links.privacy}</Link>
            <Link href="/agb" className="qa-link hover:text-white">{t.footer.links.terms}</Link>
            <a href={MANUAL_URL} target="_blank" rel="noopener noreferrer" className="qa-link hover:text-white">{t.footer.links.manual}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.nav.instagramAria} className="qa-link hover:text-white">
              {t.footer.links.instagram}
            </a>
          </nav>
        </Container>
        <Container className="mt-10 border-t border-white/[0.06] pt-6">
          <p className="text-xs text-zinc-600">{t.footer.copyright}</p>
        </Container>
      </footer>

      {/* Nach oben */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={l.nav.backToTop}
        className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#121318]/80 text-zinc-300 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-[#F5A623] hover:text-white ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m-6 6 6-6 6 6" />
        </svg>
      </button>
    </main>
  )
}

// Reihenfolge muss zu landing.gallery.base / .pro passen.
// BASE 03 + 08 bewusst nicht dabei: enthalten "sichtbar bis 1 km" (kein Beleg, siehe .cursorrules).
const GALLERY_IMAGES = {
  base: ['base-01', 'base-02', 'base-04', 'base-05', 'base-06', 'base-07', 'base-09'],
  pro: ['pro-01', 'pro-02', 'pro-03', 'pro-04', 'pro-05', 'pro-06', 'pro-07', 'pro-08', 'pro-09'],
} as const

type GalleryModel = keyof typeof GALLERY_IMAGES

function ProductGallery() {
  const g = useTranslation().landing.gallery
  const [model, setModel] = useState<GalleryModel>('base')
  const [index, setIndex] = useState(0)

  const images = GALLERY_IMAGES[model]
  const captions = g[model]
  const count = images.length
  const current = captions[index]
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)
  const switchModel = (next: GalleryModel) => {
    setModel(next)
    setIndex(0)
  }

  return (
    <section id="galerie" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="qa-darkgrid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <Container>
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>{g.label}</Eyebrow>
            <h2 className="text-[clamp(32px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
              {g.titleA}
              <br />
              <span className="text-zinc-500">{g.titleB}</span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-zinc-400">{g.intro}</p>
          </Reveal>
          <Reveal delay={100}>
            <div role="tablist" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
              {(['base', 'pro'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={model === m}
                  onClick={() => switchModel(m)}
                  className={`min-h-[44px] rounded-full px-5 text-sm font-semibold transition-colors ${
                    model === m ? 'bg-[#F5A623] text-[#0b0c0f]' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {m === 'base' ? g.tabBase : g.tabPro}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* Hauptbild */}
          <div className="relative">
            <div className="absolute inset-[6%] rounded-full bg-[#F5A623]/15 blur-[100px]" aria-hidden />
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1015] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
              <Image
                key={images[index]}
                src={`/landing/amazon/${images[index]}.jpg`}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="animate-scale-in object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={g.prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-[#F5A623] hover:text-[#0b0c0f]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m5 5-5-5 5-5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={g.next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-[#F5A623] hover:text-[#0b0c0f]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Erklaerung + Thumbnails */}
          <div className="flex flex-col">
            <p className="qa-num text-sm font-medium text-[#F5A623]">
              {String(index + 1).padStart(2, '0')} <span className="text-zinc-600">/ {String(count).padStart(2, '0')}</span>
            </p>
            <div key={`${model}-${index}`} className="qa-enter mt-3 min-h-[150px]" aria-live="polite">
              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">{current.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-zinc-400">{current.text}</p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-2.5 sm:grid-cols-5">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${g.show} ${i + 1}: ${captions[i].title}`}
                  aria-current={i === index}
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    i === index ? 'border-[#F5A623] opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                >
                  <Image src={`/landing/amazon/${img}.jpg`} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>

            <a
              href={amazonUrl(model)}
              target="_blank"
              rel="noopener noreferrer"
              className="qa-btn mt-8 min-h-[52px] self-start !rounded-full bg-[#F5A623] px-6 text-sm font-semibold text-[#0b0c0f] [--qa-btn-fill:#ffffff]"
            >
              {model === 'base' ? g.buyBase : g.buyPro}
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  text,
  className = '',
  delay = 0,
}: {
  icon: ReactNode
  title: string
  text: string
  className?: string
  delay?: number
}) {
  return (
    <Reveal delay={delay} className={`qa-card group rounded-[28px] border border-black/[0.06] bg-[#fbf9f4] p-7 hover:border-[#F5A623]/50 hover:shadow-[0_20px_50px_-30px_rgba(22,23,27,0.35)] ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16171b] text-[#F5A623] transition-colors duration-300 group-hover:bg-[#F5A623] group-hover:text-[#16171b] [&_svg]:h-6 [&_svg]:w-6">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="mt-2 leading-relaxed text-zinc-600">{text}</p>
    </Reveal>
  )
}

function CompareMark({ on }: { on: boolean }) {
  return on ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F5A623]/15 text-[#F5A623] [&_svg]:h-3.5 [&_svg]:w-3.5">
      <CheckIcon />
    </span>
  ) : (
    <span className="text-zinc-600" aria-label="–">—</span>
  )
}

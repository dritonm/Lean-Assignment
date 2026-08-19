import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/ditto/site-nav'
import { SiteFooter } from '@/components/ditto/site-footer'
import { Reveal } from '@/components/ditto/reveal'
import { Eyebrow } from '@/components/ditto/brand'
import { BrandIcon, type BrandIconName } from '@/components/ditto/brand-icon'
import { NetworkSimulator } from '@/components/ditto/network-simulator'
import { CodePreview } from '@/components/ditto/code-preview'
import { CaseStudySection } from '@/components/ditto/case-study-card'
import { LogoMarquee } from '@/components/ditto/logo-marquee'
import { Faq } from '@/components/ditto/faq'

export const metadata: Metadata = {
  title: 'Ditto for Point of Sale — Keep selling when the network drops',
  description:
    'A resilient, offline-first POS: every terminal, printer, and tablet syncs peer-to-peer, so an outage never becomes a revenue outage. BLE, P2P Wi-Fi and LAN with automatic CRDT conflict resolution.',
}

const problems: { icon: BrandIconName; title: string; body: string }[] = [
  {
    icon: 'sync',
    title: 'Orders stop moving',
    body: 'The moment connectivity drops, cloud-dependent systems stall — transactions queue up instead of completing.',
  },
  {
    icon: 'devices',
    title: 'Devices desync',
    body: 'Your POS shows one order total, the KDS shows another. Without a shared connection, there is no shared state.',
  },
  {
    icon: 'filter',
    title: 'Service slows down',
    body: 'Staff fall back on paper tickets and manual workarounds. Every outage becomes a line out the door.',
  },
]

const steps: { icon: BrandIconName; n: string; title: string; body: string }[] = [
  {
    icon: 'shield',
    n: '01',
    title: 'Work offline',
    body: 'Every device keeps reading, writing, and processing orders locally — no degraded mode, no waiting on a server.',
  },
  {
    icon: 'sync',
    n: '02',
    title: 'Sync directly',
    body: 'POS, KDS, tablets, and printers form a mesh and exchange data over Bluetooth, Wi-Fi, or LAN — no access point required.',
  },
  {
    icon: 'cloud-done',
    n: '03',
    title: 'Sync on return',
    body: 'The moment any device finds a connection, everything reconciles automatically with your cloud. No manual cleanup.',
  },
]

const tech: { icon: BrandIconName; num: string; desc: string }[] = [
  {
    icon: 'zap',
    num: 'BLE · P2P · LAN',
    desc: 'Ditto moves across whichever transport is available and optimizes for speed automatically — no fixed dependency on Wi-Fi.',
  },
  {
    icon: 'repeat',
    num: 'CRDT',
    desc: 'Conflict-free replicated data types resolve simultaneous offline edits automatically, so two registers never disagree.',
  },
  {
    icon: 'check-double',
    num: '0 config',
    desc: 'Devices on the same mesh discover and pair with each other automatically — no manual network setup on the floor.',
  },
]

const compareRows: [string, boolean | string, boolean | string][] = [
  ['Works with zero internet connectivity', false, true],
  ['Survives a central server / cloud outage', false, true],
  ['Direct device-to-device local mesh sync', false, true],
  ['Automatic CRDT deterministic conflict resolution', 'Manual', true],
  ['Dedicated onsite server hardware required', 'Often required', false],
  ['Recovery & reconciliation after network returns', 'Minutes–hours', 'Instant / Automatic'],
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span
        className="mx-auto flex size-6 items-center justify-center rounded-full bg-signal text-ink"
        aria-label="Yes"
      >
        <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.4}>
          <path d="M3 8.5L6.5 12L13 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ) : (
      <span
        className="mx-auto flex size-6 items-center justify-center rounded-full border border-line text-ash"
        aria-label="No"
      >
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth={2.4}>
          <path d="M4 4L12 12M12 4L4 12" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return <span className="block text-center text-sm text-muted-ink">{value}</span>
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pt-40">
        <div
          className="grid-lines pointer-events-none absolute inset-0 opacity-60"
          style={{
            maskImage: 'radial-gradient(ellipse 75% 55% at 50% 12%, black 8%, transparent 66%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 12%, black 8%, transparent 66%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-[11px] tracking-wider text-muted-ink">
              <span className="inline-block h-2 w-2 bg-signal" aria-hidden="true" />
              Ditto for Point of Sale
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-7 max-w-4xl text-balance font-display text-5xl font-semibold leading-tight tracking-tight text-ink md:text-7xl md:leading-[1.08] lg:text-[82px] lg:leading-[1.1]">
              Keep selling when the{' '}
              <span className="text-[#9ba1a6]">network drops.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-ink">
              Ditto turns every register, KDS, tablet, and smart printer into a resilient, offline-first node.
              Devices sync peer-to-peer — so an internet outage never becomes a revenue outage.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#simulator"
                className="rounded-full bg-ink px-6 py-3.5 font-mono text-[13px] tracking-wide text-paper transition-transform hover:-translate-y-0.5"
              >
                Try the live demo
              </a>
              <a
                href="#how"
                className="rounded-full border border-line px-6 py-3.5 font-mono text-[13px] tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                How it works &rarr;
              </a>
            </div>
          </Reveal>
        </div>

        {/* Simulator */}
        <div id="simulator" className="relative mx-auto mt-16 max-w-5xl scroll-mt-24">
          <Reveal delay={0.1}>
            <NetworkSimulator />
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      {/* PROBLEM */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              When the connection dies,{' '}
              <span className="text-[#9ba1a6]">so does the checkout line.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-ink">
              &ldquo;When your POS goes down, that has a true financial cost to your business.&rdquo;
              Cloud-only architecture turns network connectivity into a single point of failure.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-hairline bg-panel p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-paper-2">
                    <BrandIcon name={p.icon} size={26} />
                  </div>
                  <p className="mt-6 font-display text-2xl font-semibold text-ink">{p.title}</p>
                  <p className="mt-2 leading-relaxed text-muted-ink">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-20 border-y border-hairline bg-paper-2 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              Three states.{' '}
              <span className="text-[#9ba1a6]">Zero interruption.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-hairline bg-panel p-8">
                  <span className="font-mono text-[13px] text-ash">{s.n}</span>
                  <div className="mt-4 flex size-12 items-center justify-center rounded-xl bg-signal text-ink">
                    <BrandIcon name={s.icon} size={26} />
                  </div>
                  <p className="mt-6 font-display text-2xl font-semibold text-ink">{s.title}</p>
                  <p className="mt-2 leading-relaxed text-muted-ink">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-PLATFORM CODE PREVIEW */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Developer experience</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              Develop in your preferred language.{' '}
              <span className="text-[#9ba1a6]">Servers &amp; cloud optional.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-ink">
              Ditto ships SDKs for Swift, Kotlin, TypeScript, C#, and Rust with reactive query observers that automatically form ad-hoc local mesh networks.
            </p>
          </Reveal>
          <div className="mt-10">
            <Reveal delay={0.1}>
              <CodePreview />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="border-t border-hairline bg-paper-2 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>The technology</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              Built for the edge,{' '}
              <span className="text-[#9ba1a6]">not the data center.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-3">
            {tech.map((t, i) => (
              <Reveal key={t.num} delay={i * 0.08}>
                <div className="h-full bg-panel p-8">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-paper-2 text-ink">
                    <BrandIcon name={t.icon} size={22} />
                  </div>
                  <p className="mt-5 font-display text-3xl font-semibold text-ink">{t.num}</p>
                  <p className="mt-2 leading-relaxed text-muted-ink">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <CaseStudySection />
          </Reveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-hairline bg-paper-2 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow>Ditto vs. cloud-only POS</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              The difference at the counter.{' '}
              <span className="text-[#9ba1a6]">Side by side.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-hairline bg-panel shadow-sm">
              <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-4 border-b border-hairline bg-paper px-6 py-4 font-mono text-[11px] tracking-wider">
                <span className="text-ash">Capability</span>
                <span className="text-center text-muted-ink">Cloud-only POS</span>
                <span className="rounded-full bg-ink py-1 text-center text-paper">With Ditto POS</span>
              </div>
              {compareRows.map(([label, a, b], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[1.6fr_1fr_1fr] items-center gap-4 px-6 py-4 ${
                    i !== compareRows.length - 1 ? 'border-b border-hairline' : ''
                  }`}
                >
                  <span className="text-[15px] font-medium text-ink">{label}</span>
                  <Cell value={a} />
                  <Cell value={b} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-hairline px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              The questions ops leaders ask first.{' '}
              <span className="text-[#9ba1a6]">Answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <Faq />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-signal px-8 py-16 text-center sm:py-20 shadow-xl">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
            Make the network optional.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink/80 font-medium">
            See how Ditto keeps your registers selling through any outage — no new hardware, no
            re-architecture.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#simulator"
              className="rounded-full bg-ink px-7 py-3.5 font-mono text-[13px] tracking-wide text-paper transition-transform hover:-translate-y-0.5"
            >
              Replay the demo
            </a>
            <Link
              href="/ads"
              className="rounded-full border border-ink/25 px-7 py-3.5 font-mono text-[13px] tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Back to ad concepts
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

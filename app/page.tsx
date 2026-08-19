import Link from 'next/link'
import { SiteNav } from '@/components/ditto/site-nav'
import { SiteFooter } from '@/components/ditto/site-footer'
import { Reveal } from '@/components/ditto/reveal'
import { Eyebrow, DittoLogo } from '@/components/ditto/brand'
import { AdDirect, AdVariant } from '@/components/ditto/ads'

const rationale = [
  [
    'Audience',
    'CTOs and VPs of Operations at high-volume retail and QSR chains, where a minute of downtime is measured in lost transactions — not inconvenience.',
  ],
  [
    'Core message',
    '"The network is optional." Offline-first, peer-to-peer sync means an outage never reaches the customer at the counter.',
  ],
  [
    'Why it resonates',
    'It speaks to revenue and reliability — the two words that move an enterprise buyer — not to abstract infrastructure jargon.',
  ],
]

export default function OverviewPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
        <div
          className="grid-lines pointer-events-none absolute inset-0 opacity-60"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 15%, black 10%, transparent 68%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 15%, black 10%, transparent 68%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Digital Marketing Designer · Assignment 2026</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-tight tracking-tight text-ink md:text-7xl md:leading-[1.08] lg:text-[82px] lg:leading-[1.1]">
              An awareness campaign built on one idea:{' '}
              <span className="text-[#9ba1a6]">
                the network is optional.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-ink">
              A concept campaign for <span className="font-medium text-ink">Ditto</span> on the{' '}
              <span className="font-medium text-ink">Point of Sale</span> track — two original
              static ads and a functional, interactive landing page that prove Ditto&apos;s
              always-on, peer-to-peer sync keeps retail and QSR operations running through any
              outage.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/ads"
                className="rounded-full bg-ink px-6 py-3.5 font-mono text-[13px] tracking-wide text-paper transition-transform hover:-translate-y-0.5"
              >
                View ad concepts
              </Link>
              <Link
                href="/landing"
                className="rounded-full border border-line px-6 py-3.5 font-mono text-[13px] tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Open landing page &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="border-y border-hairline bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-px bg-hairline sm:grid-cols-3">
          {[
            ['Offline-first', 'Every device reads, writes, and processes locally — no degraded mode.'],
            ['Peer-to-peer', 'POS, KDS, tablets and printers form a mesh over BLE, Wi-Fi, or LAN.'],
            ['Cloud optional', 'The moment one device finds internet, the whole mesh reconciles.'],
          ].map(([title, body]) => (
            <div key={title} className="bg-paper-2 px-6 py-8">
              <p className="font-display text-2xl font-semibold text-ink">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-ink">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>The deliverables</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              Two tasks.{' '}
              <span className="text-[#9ba1a6]">One coherent story.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link
                href="/ads"
                className="group block rounded-3xl border border-hairline bg-panel p-6 transition-colors hover:border-line sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between font-mono text-[11px] tracking-wider text-muted-ink">
                  <span className="text-ink font-medium">Task 1 · Static ads</span>
                  <span className="text-ash">1080 × 1080</span>
                </div>
                <div className="grid grid-cols-2 gap-4 overflow-hidden rounded-2xl">
                  <AdDirect />
                  <AdVariant />
                </div>
                <p className="mt-6 font-display text-2xl font-semibold text-ink">
                  A direct concept + a stat-led variant
                </p>
                <p className="mt-2 leading-relaxed text-muted-ink">
                  Two angles on the same promise, each engineered to stop a scroll and earn a
                  &quot;Learn more.&quot;
                  <span className="ml-2 inline-block text-ink transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/landing"
                className="group flex h-full flex-col rounded-3xl border border-hairline bg-panel p-6 transition-colors hover:border-line sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between font-mono text-[11px] tracking-wider text-muted-ink">
                  <span className="text-ink font-medium">Task 2 · Landing page</span>
                  <span className="text-ash">Interactive</span>
                </div>
                <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-paper-2 p-8">
                  <div className="grid-dots pointer-events-none absolute inset-0 opacity-60" />
                  <div className="relative text-center">
                    <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                      Toggle the <span className="text-[#9ba1a6]">network.</span>
                    </p>
                    <p className="mt-3 font-mono text-[12px] tracking-wider text-muted-ink">
                      Live simulator · scroll reveals · FAQ
                    </p>
                  </div>
                </div>
                <p className="mt-6 font-display text-2xl font-semibold text-ink">
                  A page you can actually operate
                </p>
                <p className="mt-2 leading-relaxed text-muted-ink">
                  Flip a store between online and offline and watch the topology, sync path, and
                  transaction counter respond in real time.
                  <span className="ml-2 inline-block text-ink transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Link>
            </Reveal>
          </div>

          {/* rationale */}
          <Reveal delay={0.15}>
            <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-3">
              {rationale.map(([label, body]) => (
                <div key={label} className="bg-panel p-8">
                  <Eyebrow>{label}</Eyebrow>
                  <p className="mt-4 leading-relaxed text-muted-ink">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:py-20">
          <DittoLogo className="mx-auto h-8 text-paper" />
          <p className="mx-auto mt-8 max-w-2xl text-balance font-display text-3xl font-semibold leading-snug tracking-tight text-paper sm:text-4xl">
            Resilient edge device connectivity.{' '}
            <span className="text-[#9ba1a6]">Servers &amp; cloud optional.</span>
          </p>
          <Link
            href="/landing"
            className="mt-9 inline-flex rounded-full bg-signal px-7 py-3.5 font-mono text-[13px] tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            Experience the landing page &rarr;
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/ditto/site-nav'
import { SiteFooter } from '@/components/ditto/site-footer'
import { Reveal } from '@/components/ditto/reveal'
import { Eyebrow } from '@/components/ditto/brand'
import { AdDirect, AdVariant } from '@/components/ditto/ads'

export const metadata: Metadata = {
  title: 'Static ad concepts — Awareness',
  description:
    'Two original awareness ad concepts for Ditto, built for the Point of Sale industry track: a direct problem→solution ad and a stat-led typographic variant.',
}

const adOne = {
  tag: 'Ad 01 — Direct concept',
  concept:
    'Names the buyer\u2019s most expensive fear out loud — a checkout that dies mid-rush — then resolves it in the same breath.',
  points: [
    ['Angle', 'Problem → solution. Lead with the pain a CTO already loses sleep over, land Ditto as the fix.'],
    ['Headline', '"The wifi doesn\u2019t decide if you get paid." Reframes connectivity as a revenue risk, not an IT detail.'],
    ['Why it lands', 'Retail & QSR ops leaders equate downtime with lost transactions. The offline mesh visual proves the claim before they read a word.'],
  ],
}

const adTwo = {
  tag: 'Ad 02 — Variant',
  concept:
    'Same promise, opposite execution. Strips the diagram away and lets one number — set in Ditto\u2019s signal color — carry the whole message.',
  points: [
    ['Angle', 'Typographic and stat-led. A confident, quiet flex instead of a scenario.'],
    ['Headline', '"0 seconds of downtime." One metric a decision-maker can repeat in a budget meeting.'],
    ['Why it lands', 'In a busy feed, a single giant numeral flooded in brand color out-reads a busy layout — earning the stop, then the "Learn more."'],
  ],
}

function Rationale({
  tag,
  concept,
  points,
}: {
  tag: string
  concept: string
  points: string[][]
}) {
  return (
    <div className="flex flex-col justify-center">
      <Eyebrow>{tag}</Eyebrow>
      <p className="mt-5 text-pretty font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
        {concept}
      </p>
      <dl className="mt-8 flex flex-col divide-y divide-hairline border-y border-hairline">
        {points.map(([label, body]) => (
          <div key={label} className="grid grid-cols-[104px_1fr] gap-4 py-5">
            <dt className="font-mono text-[11px] tracking-wider text-ash">{label}</dt>
            <dd className="text-[15px] leading-relaxed text-muted-ink">{body}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 font-mono text-[11px] tracking-wider text-ash">
        Format 1080×1080 · Campaign Awareness · CTA Learn more
      </p>
    </div>
  )
}

export default function AdsPage() {
  return (
    <main className="min-h-screen pt-28">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-8">
        <Reveal>
          <Eyebrow>Task 1 · Static ads</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-tight tracking-tight text-ink md:text-7xl md:leading-[1.08]">
            One promise.{' '}
            <span className="text-[#9ba1a6]">Two ways in.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-ink">
            An awareness pair for someone who has never heard of Ditto. The first ad dramatizes the
            pain; the second lets a single number do the talking. Both hold the brand&apos;s
            paper-and-signal system.
          </p>
        </Reveal>
      </section>

      {/* Ad 1 — interactive preview */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-3">
              <AdDirect />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider text-ash">
                  1080 × 1080 px · export ready
                </span>
                <div className="flex items-center gap-2">
                <a
                  href="/ditto-ad-01-direct.png"
                  download="ditto-pos-network-doesnt-decide.png"
                  className="rounded-xl border border-hairline bg-paper-2 px-3 py-2.5 font-mono text-[11px] tracking-wider text-muted-ink transition-colors hover:border-line hover:bg-panel hover:text-ink"
                >PNG</a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Rationale {...adOne} />
          </Reveal>
        </div>
      </section>

      {/* Ad 2 — interactive preview */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <div className="flex flex-col gap-3">
              <AdVariant />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider text-ash">
                  1080 × 1080 px · export ready
                </span>
                <div className="flex items-center gap-2">
                <a
                  href="/ditto-ad-02-variant.png"
                  download="ditto-pos-zero-cloud-wait.png"
                  className="rounded-xl border border-hairline bg-paper-2 px-3 py-2.5 font-mono text-[11px] tracking-wider text-muted-ink transition-colors hover:border-line hover:bg-panel hover:text-ink"
                >PNG</a>
                <a
                  href="/ditto-ad-02-variant.jpg"
                  download="Ditto-Ad-02-Variant.jpg"
                  className="flex items-center gap-2 rounded-xl border border-hairline bg-paper-2 px-4 py-2.5 font-mono text-[11px] tracking-wider text-muted-ink transition-colors hover:border-line hover:bg-panel hover:text-ink"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path
                      d="M12 3v12m0 0-4-4m4 4 4-4M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  JPG
                </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <Rationale {...adTwo} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-hairline bg-paper-2 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-ink">See the concept come alive.</p>
            <p className="mt-1 text-muted-ink">
              The landing page turns these ads into an interactive proof-of-resilience.
            </p>
          </div>
          <Link
            href="/landing"
            className="shrink-0 rounded-full bg-ink px-6 py-3.5 font-mono text-[13px] tracking-wide text-paper transition-transform hover:-translate-y-0.5"
          >
            View landing page &rarr;
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { Eyebrow } from './brand'

const STORIES = [
  {
    client: 'Alaska Airlines',
    quote:
      'Our approach to developing frontline tools prioritizes close partnership with our flight attendants. Ditto has been a great partner in ensuring our tools are seamless for our team, providing visibility of one another’s inflight mobile devices in real time without Wi-Fi.',
    author: 'Vikram Baskaran',
    role: 'VP of Information Technology',
    industry: 'Aviation & Inflight Retail',
    metric: '100% Inflight Device Sync',
  },
  {
    client: 'Global Quick Service Restaurant',
    quote:
      'During peak lunch rush, an access point reboot used to freeze four drive-thru lanes. With Ditto, kitchen prep displays and handheld order tablets stay 100% synchronized across the local mesh. The customer never notices.',
    author: 'Chief Technology Officer',
    role: 'Top 5 Global QSR Franchise',
    industry: 'Drive-Thru & Kitchen Systems',
    metric: '0 Lost Transactions',
  },
  {
    client: 'High-Volume Stadium POS',
    quote:
      'When 80,000 fans overwhelm cellular and Wi-Fi networks simultaneously, standard cloud POS registers crash. Ditto keeps our mobile beer vendors and concession registers processing uninterrupted.',
    author: 'Director of Point of Sale Operations',
    role: 'Major Sports & Entertainment Venue',
    industry: 'Sports Arena & Event Concessions',
    metric: '3.4x Faster Line Clearance',
  },
]

export function CaseStudySection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = STORIES[activeIdx]

  return (
    <div className="rounded-3xl border border-hairline bg-panel p-8 sm:p-12">
      <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-8 md:flex-row md:items-end">
        <div>
          <Eyebrow>Enterprise Proof &amp; Case Studies</Eyebrow>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Trusted where network downtime is not an option.
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2">
          {STORIES.map((s, idx) => (
            <button
              key={s.client}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={cn(
                'rounded-full px-4 py-2 font-mono text-[11px] tracking-wider transition-all',
                activeIdx === idx
                  ? 'bg-ink text-paper font-semibold'
                  : 'border border-line bg-paper-2 text-muted-ink hover:text-ink',
              )}
            >
              {s.client.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr] items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.client}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl sm:text-2xl font-display font-medium text-ink leading-snug">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-1 bg-signal rounded-full" />
              <div>
                <p className="font-mono text-[13px] font-bold text-ink tracking-wide">
                  {current.author}
                </p>
                <p className="text-xs text-muted-ink">{current.role} · {current.client}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col justify-center rounded-3xl border border-hairline bg-paper-2 p-6 sm:p-8">
          <span className="font-mono text-[10px] tracking-wider text-ash">
            Outcome Metric
          </span>
          <p className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            {current.metric}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-ink">
            Proven at scale under high-concurrency conditions across {current.industry}.
          </p>
          <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-muted-ink">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Verified Enterprise Deployment
          </div>
        </div>
      </div>
    </div>
  )
}

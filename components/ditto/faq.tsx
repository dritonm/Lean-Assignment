'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const ITEMS = [
  {
    q: 'Does Ditto replace my existing POS or cloud?',
    a: 'No. Ditto sits inside your existing apps as an offline-first data layer. Your cloud and back-office systems stay exactly where they are — Ditto simply keeps devices in sync when the connection to them drops, and reconciles automatically once it returns.',
  },
  {
    q: 'What happens to transactions made during an outage?',
    a: 'Nothing is lost. Every device keeps reading and writing locally and shares changes peer-to-peer across the mesh. When any device regains internet, all offline changes sync back to your cloud with CRDT-based conflict resolution — no manual cleanup, no duplicate charges.',
  },
  {
    q: 'Do I need to buy new hardware or set up a local server?',
    a: 'No. Devices running the same app discover each other and form an ad-hoc mesh automatically over BLE, P2P Wi-Fi, or LAN. There is no access point, edge server, or manual pairing to configure on the floor.',
  },
  {
    q: 'How do two registers avoid disagreeing on an order?',
    a: 'Ditto uses conflict-free replicated data types (CRDTs). Simultaneous edits made on different devices merge deterministically, so every terminal converges on the same state without a central referee.',
  },
  {
    q: 'Which platforms does it support?',
    a: 'Ditto ships SDKs for Swift, Kotlin, JavaScript, C#, C++, and Rust, with first-class support for SwiftUI, Jetpack Compose, React, and Flutter — so it fits whatever your POS, KDS, and companion apps are built on.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {ITEMS.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-ash">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {item.q}
                </span>
              </span>
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors',
                  isOpen ? 'border-ink bg-ink text-paper' : 'border-line text-ink',
                )}
                aria-hidden="true"
              >
                <span className="relative block size-3">
                  <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span
                    className={cn(
                      'absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform',
                      isOpen && 'scale-y-0',
                    )}
                  />
                </span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 pl-10 text-pretty leading-relaxed text-muted-ink">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

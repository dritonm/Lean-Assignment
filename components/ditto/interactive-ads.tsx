'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AdDirect, AdVariant } from './ads'

export function InteractiveAdSection({
  adOne,
  adTwo,
}: {
  adOne: { tag: string; concept: string; points: string[][] }
  adTwo: { tag: string; concept: string; points: string[][] }
}) {
  const [activeModal, setActiveModal] = useState<'ad1' | 'ad2' | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeModal])

  return (
    <>
      {/* Ad 1 — interactive preview */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="group relative flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setActiveModal('ad1')}
                className="relative block w-full text-left transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-2xl cursor-zoom-in overflow-hidden"
                aria-label="Click to view Ad 1 in full 1080x1080 resolution"
              >
                <AdDirect />
                <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[11px] text-paper shadow-lg backdrop-blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to expand (1080×1080)
                </div>
              </button>

              {/* Download Bar */}
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[11px] tracking-wider text-ash">
                  1080 × 1080 px · PNG
                </span>
                <a
                  href="/ditto-ad-01-final.png"
                  download="Ditto-Ad-01-Direct.png"
                  className="flex items-center gap-2 rounded-xl border border-hairline bg-paper-2 px-3.5 py-2 font-mono text-[11px] tracking-wider text-ink transition-colors hover:border-line hover:bg-panel"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PNG
                </a>
              </div>
            </div>
          </div>
          <div>
            <Rationale {...adOne} />
          </div>
        </div>
      </section>

      {/* Ad 2 — interactive preview */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="group relative flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setActiveModal('ad2')}
                className="relative block w-full text-left transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-2xl cursor-zoom-in overflow-hidden"
                aria-label="Click to view Ad 2 in full 1080x1080 resolution"
              >
                <AdVariant />
                <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[11px] text-paper shadow-lg backdrop-blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to expand (1080×1080)
                </div>
              </button>

              {/* Download Bar */}
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[11px] tracking-wider text-ash">
                  1080 × 1080 px · PNG
                </span>
                <a
                  href="/ditto-ad-02-final.png"
                  download="Ditto-Ad-02-Variant.png"
                  className="flex items-center gap-2 rounded-xl border border-hairline bg-paper-2 px-3.5 py-2 font-mono text-[11px] tracking-wider text-ink transition-colors hover:border-line hover:bg-panel"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PNG
                </a>
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <Rationale {...adTwo} />
          </div>
        </div>
      </section>

      {/* Modal / Zoomed view (1080x1080 square preview) */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative flex flex-col items-center justify-center shrink-0"
            style={{ width: 'min(88vh, 88vw)', height: 'min(88vh, 88vw)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header controls */}
            <div className="absolute -top-11 left-0 right-0 flex items-center justify-between font-mono text-[12px] text-paper/80">
              <span>{activeModal === 'ad1' ? 'Ad 01 — Direct concept (1080×1080)' : 'Ad 02 — Variant (1080×1080)'}</span>
              <div className="flex items-center gap-3">
                <a
                  href={activeModal === 'ad1' ? '/ditto-ad-01-final.png' : '/ditto-ad-02-final.png'}
                  download={activeModal === 'ad1' ? 'Ditto-Ad-01-Direct.png' : 'Ditto-Ad-02-Variant.png'}
                  className="flex items-center gap-1.5 rounded-full border border-paper/20 bg-paper/10 px-3 py-1 text-paper hover:bg-paper/20 transition-colors cursor-pointer"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PNG
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="flex items-center gap-1.5 rounded-full border border-paper/20 bg-paper/10 px-3 py-1 text-paper hover:bg-paper/20 transition-colors cursor-pointer"
                >
                  Close ✕
                </button>
              </div>
            </div>

            {/* Square 1080x1080 container - seamless pixel-to-pixel fit */}
            <div
              className={`relative aspect-square h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-paper/15 ${
                activeModal === 'ad1' ? 'bg-[#0a0a0a]' : 'bg-paper'
              }`}
            >
              <Image
                src={activeModal === 'ad1' ? '/ditto-ad-01-final.png' : '/ditto-ad-02-final.png'}
                alt={activeModal === 'ad1' ? 'Ditto Ad 01' : 'Ditto Ad 02'}
                fill
                className="object-cover scale-[1.005]"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
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
      <span className="font-mono text-xs uppercase tracking-widest text-ash">{tag}</span>
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

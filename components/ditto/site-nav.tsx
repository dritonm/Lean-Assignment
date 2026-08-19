'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { DittoLogo } from './brand'

const LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/ads', label: 'Static ads' },
  { href: '/landing', label: 'Landing page' },
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-hairline bg-paper/90 px-4 shadow-[0_8px_28px_rgba(10,10,10,0.06)] backdrop-blur-md sm:px-6">
        <button
          type="button"
          onClick={() => {
            const start = window.scrollY
            if (start === 0) return
            const startTime = performance.now()
            const duration = 300 // 0.3s

            const step = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              // easeInOutCubic
              const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2
              window.scrollTo(0, start * (1 - ease))
              if (progress < 1) {
                requestAnimationFrame(step)
              }
            }
            requestAnimationFrame(step)
          }}
          className="flex items-center gap-2.5 cursor-pointer bg-transparent border-0 p-0 text-left focus:outline-none"
          aria-label="Scroll to top of page"
        >
          <DittoLogo className="h-5 text-ink" />
          <span className="hidden font-mono text-[11px] tracking-wider text-muted-ink sm:inline">
            / concept
          </span>
        </button>

        <div className="flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-3.5 py-2 font-mono text-[12px] tracking-wide transition-colors sm:px-4',
                  active
                    ? 'bg-ink text-paper'
                    : 'text-muted-ink hover:bg-paper-2 hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

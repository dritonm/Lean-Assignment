import Link from 'next/link'
import { DittoLogo } from './brand'

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <DittoLogo className="h-6 text-ink" />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-ink">
              Resilient edge device connectivity. Servers &amp; cloud optional. The only
              offline-first database with built-in peer-to-peer networking.
            </p>
          </div>

          <div className="flex gap-3 font-mono text-[12px] tracking-wide">
            <Link
              href="/ads"
              className="rounded-full border border-line px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Static ads
            </Link>
            <Link
              href="/landing"
              className="rounded-full border border-line px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Landing page
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 font-mono text-[11px] tracking-wider text-ash sm:flex-row sm:items-center sm:justify-between">
          <span>Concept work · not an official Ditto property · non-commercial</span>
          <span>Digital Marketing Designer assignment 2026</span>
        </div>
      </div>
    </footer>
  )
}

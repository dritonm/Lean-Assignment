import { cn } from '@/lib/utils'

/**
 * Ditto logotype (mark + wordmark), inlined so it inherits `currentColor`
 * and can sit on light or dark surfaces. Source: official DittoLogo.svg.
 */
export function DittoLogo({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 1202 328"
      className={cn('h-6 w-auto text-ink', className)}
      style={style}
      fill="currentColor"
      role="img"
      aria-label="Ditto"
    >
      <polygon points="124.2 196.3 124.2 132.3 120.2 128.3 56.2 128.3 52.2 132.3 52.2 196.3 56.2 200.3 120.2 200.3 124.2 196.3" />
      <polygon points="4.2 216.3 .2 220.3 .2 258.3 4.2 262.3 42.2 262.3 46.2 258.3 46.2 220.3 42.2 216.3 4.2 216.3" />
      <polygon points="4.2 66.3 .2 70.3 .2 108.3 4.2 112.3 42.2 112.3 46.2 108.3 46.2 70.3 42.2 66.3 4.2 66.3" />
      <path d="M280.2,118.3h-72l-4-4v-62l-4-4h-64l-4-4V6.3l-4-4h-44l-4,4v46l4,4h48l4,4v62l4,4h68l4,4v68l-4,4h-68l-4,4v62l-4,4h-48l-4,4v46l4,4h44l4-4v-38l4-4h64l4-4v-62l4-4h72l4-4v-84l-4-4Z" />
      <rect x="657.2" y="136.3" width="50" height="144" />
      <path d="M390.2,48.3v232h169.5l60-60v-112l-60-60h-169.5ZM564.2,202.3l-26,26h-98V100.3h98l26,26v76Z" />
      <path d="M1168.7,94.3h-120l-33,33v120l33,33h120l33-33v-120l-33-33ZM1156.7,228.6l-6.6,6.6h-82.7l-6.6-6.6v-82.7l6.6-6.6h82.7l6.6,6.6v82.7Z" />
      <polygon points="934.2 48.3 884.2 48.3 884.2 238.3 930.2 238.3 934.2 242.3 934.2 280.3 990.2 280.3 990.2 224.3 938.2 224.3 934.2 220.3 934.2 140.3 990.2 140.3 990.2 94.3 934.2 94.3 934.2 48.3" />
      <polygon points="798.2 48.3 748.2 48.3 748.2 238.3 794.2 238.3 798.2 242.3 798.2 280.3 854.2 280.3 854.2 224.3 802.2 224.3 798.2 220.3 798.2 140.3 854.2 140.3 854.2 94.3 798.2 94.3 798.2 48.3" />
      <rect x="657.2" y="48.3" width="50" height="50" />
    </svg>
  )
}

/** Just the Ditto mark (the chevron + blocks). */
export function DittoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 285 328"
      className={cn('h-7 w-auto text-ink', className)}
      fill="currentColor"
      role="img"
      aria-label="Ditto"
    >
      <polygon points="124.2 196.3 124.2 132.3 120.2 128.3 56.2 128.3 52.2 132.3 52.2 196.3 56.2 200.3 120.2 200.3 124.2 196.3" />
      <polygon points="4.2 216.3 .2 220.3 .2 258.3 4.2 262.3 42.2 262.3 46.2 258.3 46.2 220.3 42.2 216.3 4.2 216.3" />
      <polygon points="4.2 66.3 .2 70.3 .2 108.3 4.2 112.3 42.2 112.3 46.2 108.3 46.2 70.3 42.2 66.3 4.2 66.3" />
      <path d="M280.2,118.3h-72l-4-4v-62l-4-4h-64l-4-4V6.3l-4-4h-44l-4,4v46l4,4h48l4,4v62l4,4h68l4,4v68l-4,4h-68l-4,4v62l-4,4h-48l-4,4v46l4,4h44l4-4v-38l4-4h64l4-4v-62l4-4h72l4-4v-84l-4-4Z" />
    </svg>
  )
}

/** Mono eyebrow label with a signal tick — the recurring section marker. */
export function Eyebrow({
  children,
  className,
  tone = 'ink',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'ink' | 'invert'
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 font-mono text-[12px] tracking-widest',
        tone === 'invert' ? 'text-paper/70' : 'text-muted-ink',
        className,
      )}
    >
      <span className="inline-block h-2.5 w-2.5 shrink-0 bg-signal" aria-hidden="true" />
      {children}
    </p>
  )
}

/**
 * Signature Ditto title highlight: muted grey secondary punchline without background box.
 */
export function TitleHighlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn('text-[#9ba1a6] font-display block sm:inline', className)}>
      {children}
    </span>
  )
}

const ITEMS = [
  'RETAIL',
  'QSR',
  'GROCERY',
  'CONVENIENCE',
  'HOSPITALITY',
  'PHARMACY',
  'STADIUMS',
  'DRIVE-THRU',
]

export function LogoMarquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-paper-2 py-5">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(90deg, var(--color-paper-2) 0%, transparent 12%, transparent 88%, var(--color-paper-2) 100%)',
        }}
      />
      <div className="flex w-max animate-marquee items-center gap-14">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-14 font-mono text-[13px] tracking-widest text-muted-ink"
          >
            {item}
            <span className="h-2.5 w-2.5 shrink-0 bg-signal" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}

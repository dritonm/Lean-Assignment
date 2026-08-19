import { DittoLogo } from './brand'

/* Both ads are authored on a 1080×1080 square and sized in container-query
   width units (cqw) so they scale crisply at any width. 1cqw = 1% of width.
   These are purely static — no animations, no motion libraries. */

/* ------------------------------------------------------------------ */
/* AD 1 — Direct concept: pain point → solution (paper surface)        */
/* ------------------------------------------------------------------ */

/* Per-device SVG icons */
function IconPOS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: '4cqw', height: '4cqw' }}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="7" y1="17" x2="7" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="17" y1="17" x2="17" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="5" y1="20" x2="19" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="7" y="7.5" width="4" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function IconKDS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: '4cqw', height: '4cqw' }}>
      <rect x="2" y="3" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="8" y1="17" x2="8" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="16" y1="17" x2="16" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="6" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconTablet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: '4cqw', height: '4cqw' }}>
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="18.5" r="0.9" fill="currentColor" />
      <line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconPrinter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: '4cqw', height: '4cqw' }}>
      <rect x="5" y="9" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 9V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8" y="14" width="8" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="18" cy="12" r="0.9" fill="currentColor" />
    </svg>
  )
}

/* Node: transparent circle with white dotted border (matches Edge-native ring) + icon + label */
function DeviceNode({
  left,
  top,
  label,
  icon,
}: {
  left: string
  top: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <div
      className="absolute flex flex-col items-center justify-center gap-[0.9cqw]"
      style={{ left, top, width: '14cqw', height: '14cqw', transform: 'translate(-50%, -50%)' }}
    >
      {/* dotted white border circle — no fill, matches Edge-native hub style */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 100 100"
        style={{ width: '14cqw', height: '14cqw' }}
        aria-hidden="true"
      >
        <circle
          cx="50" cy="50" r="46"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.8"
          strokeDasharray="4 7"
          fill="none"
        />
      </svg>
      {/* icon — signal yellow, same as before */}
      <span style={{ color: '#e6ec43', position: 'relative' }}>{icon}</span>
      {/* label */}
      <span
        className="font-mono relative"
        style={{ fontSize: '1.4cqw', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)' }}
      >
        {label}
      </span>
    </div>
  )
}

export function AdDirect({ dotGridOpacity = 0.6 }: { dotGridOpacity?: number }) {
  return (
    <div
      id="ad-direct"
      className="relative aspect-square w-full overflow-hidden border border-ink bg-ink [container-type:inline-size]"
      style={{ borderRadius: '2.4cqw' }}
    >
      {/* Dot grid field */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: dotGridOpacity,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.22) 0.14cqw, transparent 0.16cqw)',
          backgroundSize: '2.4cqw 2.4cqw',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 20%, transparent 80%)',
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: '7cqw' }}>
        {/* top row */}
        <div className="flex items-start justify-between">
          <DittoLogo className="text-paper" style={{ height: '3.2cqw' }} />
          <div
            className="flex items-center gap-[0.9cqw] border border-paper/35 font-mono text-paper"
            style={{
              padding: '0.9cqw 1.6cqw',
              fontSize: '1.35cqw',
              letterSpacing: '0.08em',
              borderRadius: '9999px',
            }}
          >
            <span
              className="rounded-full bg-signal"
              style={{ width: '0.85cqw', height: '0.85cqw', display: 'inline-block' }}
            />
            Mesh active
          </div>
        </div>

        {/* mesh diagram — spread-out with icons */}
        <div className="relative" style={{ height: '44cqw', marginTop: '1cqw' }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center font-mono text-paper/45"
            style={{ top: 0, fontSize: '1.1cqw', letterSpacing: '0.12em' }}
          >
            MESH TOPOLOGY
          </div>

          {/* Connector lines SVG */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 440" fill="none" aria-hidden="true">
            {/* outer faint ring */}
            <circle cx="250" cy="230" r="155" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            {/* inner dashed ring (edge-native hub) */}
            <circle cx="250" cy="230" r="78" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeDasharray="4 7" />
            {/* spoke lines — dotted */}
            <path d="M130 100 L200 180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeDasharray="3 7" strokeLinecap="round" />
            <path d="M370 100 L300 180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeDasharray="3 7" strokeLinecap="round" />
            <path d="M60 295 L180 248" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeDasharray="3 7" strokeLinecap="round" />
            <path d="M440 295 L320 248" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeDasharray="3 7" strokeLinecap="round" />
          </svg>

          {/* POS — top left */}
          <DeviceNode left="26%" top="17%" label="POS" icon={<IconPOS />} />
          {/* KDS — top right */}
          <DeviceNode left="74%" top="17%" label="KDS" icon={<IconKDS />} />
          {/* Tablet — bottom left */}
          <DeviceNode left="14%" top="68%" label="TABLET" icon={<IconTablet />} />
          {/* Printer — bottom right */}
          <DeviceNode left="86%" top="68%" label="PRINTER" icon={<IconPrinter />} />

          {/* Edge-native sync — centre hub */}
          <div
            className="absolute flex flex-col items-center justify-center text-center px-1"
            style={{ left: '50%', top: '52%', width: '22cqw', height: '22cqw', transform: 'translate(-50%, -50%)' }}
          >
            <span
              className="mb-[0.8cqw] block"
              style={{
                width: '2.8cqw',
                height: '2.8cqw',
                background: '#e6ec43',
                clipPath: 'polygon(0 0, 45% 0, 45% 45%, 100% 45%, 100% 100%, 55% 100%, 55% 55%, 0 55%)',
              }}
            />
            <span className="font-mono text-paper leading-tight" style={{ fontSize: '1.4cqw', letterSpacing: '0.02em', maxWidth: '14cqw' }}>
              Edge-native<br />sync
            </span>
            <span className="mt-[0.5cqw] font-mono text-paper/45" style={{ fontSize: '1.05cqw' }}>
              P2P · BLE · LAN
            </span>
          </div>
        </div>

        {/* copy */}
        <div>
          <h2
            className="font-display font-semibold text-paper"
            style={{ fontSize: '8cqw', lineHeight: 0.98, letterSpacing: '-0.01em', maxWidth: '80cqw' }}
          >
            The network doesn&apos;t decide
            <br />
            if you get{' '}
            <span className="text-paper/55">
              paid.
            </span>
          </h2>
          <p
            className="text-paper/55"
            style={{ fontSize: '2.3cqw', marginTop: '2cqw', maxWidth: '62cqw', lineHeight: 1.5 }}
          >
            When the cloud drops, the devices already in your store keep orders moving.
          </p>
        </div>

        {/* bottom row */}
        <div className="flex items-center justify-between" style={{ marginTop: '3.4cqw' }}>
          <span
            className="inline-flex items-center gap-[0.9cqw] bg-signal font-display font-bold text-ink"
            style={{
              padding: '1.9cqw 3.2cqw',
              fontSize: '2.1cqw',
              borderRadius: '0.9cqw',
            }}
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </span>
          <span className="font-mono text-paper/50" style={{ fontSize: '1.3cqw', letterSpacing: '0.1em' }}>
            Resilient edge connectivity
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* AD 2 — Variant: typographic, stat-led (signal flood)                */
/* ------------------------------------------------------------------ */
export function AdVariant() {
  return (
    <div
      id="ad-variant"
      className="relative aspect-square w-full overflow-hidden border border-hairline bg-paper [container-type:inline-size]"
      style={{ borderRadius: '2.4cqw' }}
    >
      {/* faint mesh receding into corner */}
      <svg
        className="absolute"
        style={{ right: '-12cqw', bottom: '-12cqw', width: '46cqw', height: '46cqw', opacity: 0.12 }}
        viewBox="0 0 640 640"
      >
        <g stroke="#0a0a0a" strokeWidth={2} opacity={0.4}>
          <line x1="60" y1="120" x2="260" y2="80" />
          <line x1="260" y1="80" x2="480" y2="180" />
          <line x1="260" y1="80" x2="200" y2="300" />
          <line x1="480" y1="180" x2="420" y2="380" />
          <line x1="200" y1="300" x2="420" y2="380" />
          <line x1="420" y1="380" x2="560" y2="470" />
          <line x1="200" y1="300" x2="80" y2="420" />
        </g>
        <g fill="#0a0a0a">
          {[
            [60, 120],
            [260, 80],
            [480, 180],
            [200, 300],
            [420, 380],
            [560, 470],
            [80, 420],
          ].map(([cx, cy]) => (
            <rect key={`${cx}-${cy}`} x={cx - 6} y={cy - 6} width={12} height={12} rx={2} />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col" style={{ padding: '7cqw' }}>
        <div className="flex items-start justify-between">
          <DittoLogo className="text-ink" style={{ height: '3.2cqw' }} />
          <span className="font-mono text-ink" style={{ fontSize: '1.35cqw', letterSpacing: '0.16em' }}>
            Point of Sale
          </span>
        </div>

        <div className="relative flex flex-1 flex-col justify-center">
          {/* stat chips — aligned with the "0" numeral matching Photoshop reference */}
          <div
            className="pointer-events-none absolute flex flex-col items-end justify-between"
            style={{ right: '0.5cqw', top: 0, height: '23.5cqw' }}
            aria-hidden="true"
          >
            {([
              { value: '99.9%', label: 'uptime' },
              { value: '<5ms', label: 'sync latency' },
              { value: '∞', label: 'devices' },
            ] as { value: string; label: string }[]).map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-end text-right"
              >
                <span
                  className="font-display font-semibold text-ink leading-none"
                  style={{ fontSize: '3.6cqw', letterSpacing: '-0.02em', opacity: 0.88 }}
                >
                  {value}
                </span>
                <span
                  className="font-mono text-ink/45"
                  style={{ fontSize: '1.05cqw', letterSpacing: '0.12em', marginTop: '0.35cqw' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div
            className="font-display font-bold text-ink"
            style={{ fontSize: '34cqw', lineHeight: 0.8, letterSpacing: '-0.02em' }}
          >
            0
          </div>
          <div
            className="font-display font-semibold text-ink"
            style={{ fontSize: '5.2cqw', marginTop: '1cqw', letterSpacing: '-0.01em' }}
          >
            seconds of downtime.
          </div>
          <p
            className="text-muted-ink"
            style={{ fontSize: '2.2cqw', marginTop: '1.8cqw', maxWidth: '58cqw', lineHeight: 1.5 }}
          >
            Your terminals don&apos;t know the difference between a strong signal and no
            signal at all — Ditto syncs device-to-device either way.
          </p>
        </div>

        <div
          className="flex items-center gap-[2.6cqw] border-t border-ink/25"
          style={{ paddingTop: '3cqw' }}
        >
          <span
            className="inline-flex shrink-0 items-center gap-[0.9cqw] bg-ink font-display font-bold text-paper"
            style={{ padding: '1.9cqw 3.2cqw', fontSize: '2.1cqw', borderRadius: '0.9cqw' }}
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </span>
          <span
            className="font-mono text-ink/70"
            style={{ fontSize: '1.3cqw', lineHeight: 1.6, letterSpacing: '0.08em' }}
          >
            Peer-to-peer sync
            <br />
            No cloud required
          </span>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

export function AdDirect() {
  return (
    <div
      id="ad-direct"
      className="relative aspect-square w-full overflow-hidden border border-ink bg-ink"
      style={{ borderRadius: '1.25rem' }}
    >
      <Image
        src="/ditto-ad-01-final.png"
        alt="Ditto POS Ad 01 - The network doesn't decide if you get paid"
        fill
        sizes="(max-width: 768px) 100vw, 540px"
        className="object-cover"
        priority
      />
    </div>
  )
}

export function AdVariant() {
  return (
    <div
      id="ad-variant"
      className="relative aspect-square w-full overflow-hidden border border-hairline bg-paper"
      style={{ borderRadius: '1.25rem' }}
    >
      <Image
        src="/ditto-ad-02-final.png"
        alt="Ditto POS Ad 02 - 0 seconds of downtime"
        fill
        sizes="(max-width: 768px) 100vw, 540px"
        className="object-cover"
        priority
      />
    </div>
  )
}

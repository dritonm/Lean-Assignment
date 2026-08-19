import { cn } from '@/lib/utils'

export type BrandIconName =
  | 'sync'
  | 'zap'
  | 'shield'
  | 'check-double'
  | 'cloud-done'
  | 'devices'
  | 'filter'
  | 'repeat'

const ICON_PATHS: Record<BrandIconName, React.ReactNode> = {
  sync: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9L4 7L16 7L16 5L18 5L18 7L20 7L20 9L18 9L18 11L16 11L16 9L4 9ZM16 11L14 11L14 13L16 13L16 11ZM16 5L14 5L14 3L16 3L16 5ZM20 17L20 15L8 15L8 13L10 13L10 11L8 11L8 13L6 13L6 15L4 15L4 17L6 17L6 19L8 19L8 21L10 21L10 19L8 19L8 17L20 17Z"
      fill="currentColor"
    />
  ),
  zap: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1H14V9H22V11V13H20V11H14H12V9V5H10V3H12V1ZM8 7V5H10V7H8ZM6 9V7H8V9H6ZM4 11V9H6V11H4ZM14 19V21H12V23H10V15H2V13V11H4V13H10H12V15V19H14ZM16 17V19H14V17H16ZM18 15V17H16V15H18ZM18 15H20V13H18V15Z"
      fill="currentColor"
    />
  ),
  shield: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2H4H2V4V14H4L4 16H6V14L4 14V4H20V14L18 14V16H20V14H22V4V2H20ZM6 16.0001H8V18H10V20H8V18.0001H6V16.0001ZM10 20V22H14V20H10ZM16 16.0001H18V18.0001H16V20H14V18H16V16.0001Z"
      fill="currentColor"
    />
  ),
  'check-double': (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 6H17V8H15V6ZM13 10V8H15V10H13ZM11 12V10H13V12H11ZM9 14V12H11V14H9ZM7 16V14H9V16H7ZM5 16H7V18H5V16ZM3 14H5V16H3V14ZM3 14H1V12H3V14ZM11 16H13V18H11V16ZM15 14V16H13V14H15ZM17 12V14H15V12H17ZM19 10V12H17V10H19ZM21 8H19V10H21V8ZM21 8H23V6H21V8Z"
      fill="currentColor"
    />
  ),
  'cloud-done': (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4H10V6H8V8H4V10H2V12H0V18H2V20H22V18H24V12H22V10H20V8H18V6H16V4ZM16 6V8H18V10V12H20H22V18H2V12H4V10H8V8H10V6H16ZM10 12H8V14H10V16H12V14H14V12H16V10H14V12H12V14H10V12Z"
      fill="currentColor"
    />
  ),
  devices: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2H4H18V4V8H20H22V22H20H14H12V16H4H2V14V4V2ZM16 8V4H4V14H12V8H14H16ZM10 6H6V8H10V6ZM20 20V10H14V20H20ZM16 16H18V18H16V16ZM6 10H10V12H6V10Z"
      fill="currentColor"
    />
  ),
  filter: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3H5V5H3V7H5V11H7V13H9V19V21H13V19H15V13H17V11H19V7H21V5H19V3ZM19 5V7H17V11H15V13H13V19H11V13H9V11H7V7H5V5H19Z"
      fill="currentColor"
    />
  ),
  repeat: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1H9V3H11V5H5V7H3V17H5V19H7V17H5V7H11V9H9V11H11V9H13V7H15V5H13V3H11V1ZM19 5H17V7H19V17H13V15H15V13H13V15H11V17H9V19H11V21H13V23H15V21H13V19H19V17H21V7H19V5Z"
      fill="currentColor"
    />
  ),
}

/** Renders official Ditto pixel-grid brand icons using currentColor */
export function BrandIcon({
  name,
  size = 24,
  className,
}: {
  name: BrandIconName
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0 text-current transition-colors', className)}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

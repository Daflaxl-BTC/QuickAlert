type IconProps = { className?: string }

const base = 'w-7 h-7'

export function MagnetIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 4H3v7a9 9 0 0 0 18 0V4h-3v7a6 6 0 0 1-12 0V4Z" />
      <path d="M3 8h3" />
      <path d="M18 8h3" />
    </svg>
  )
}

export function BatteryIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="16" height="10" rx="2.5" />
      <path d="M21 10.5v3" />
      <path d="M11.5 9.5 8.8 13h2.9l-1.2 2.5" />
    </svg>
  )
}

export function SatelliteIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 21a9 9 0 0 0 9-9" />
      <path d="M12 17.5a5.5 5.5 0 0 0 5.5-5.5" />
      <path d="M4.5 4.5 8 8" />
      <path d="M3 12a9 9 0 0 1 9-9" opacity="0.35" />
    </svg>
  )
}

export function AlertTriangleIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4.5 21 19.5H3L12 4.5Z" />
      <path d="M12 10v4" />
      <path d="M12 17.2h.01" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-3.5 h-3.5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

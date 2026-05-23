import { useEffect, useRef } from 'react'

/**
 * AdSlot — a single Google AdSense unit for flexible placement.
 *
 * Props:
 *   slot      — AdSense data-ad-slot ID (10-digit string from your dashboard)
 *   format    — AdSense format string (default "auto")
 *   responsive — whether to add data-full-width-responsive (default true)
 *   className — extra Tailwind classes for the outer wrapper
 *
 * Usage:
 *   <AdSlot slot={import.meta.env.VITE_ADSENSE_SLOT_LEADERBOARD} />
 */

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT ?? 'ca-pub-6862894074348546'

export default function AdSlot({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}) {
  const pushed = useRef(false)

  useEffect(() => {
    if (!slot || pushed.current) return
    try {
      pushed.current = true
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [slot])

  if (!slot) return null

  return (
    <div className={`w-full flex flex-col items-center my-6 ${className}`}>
      <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1.5 select-none">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(responsive ? { 'data-full-width-responsive': 'true' } : {})}
      />
    </div>
  )
}

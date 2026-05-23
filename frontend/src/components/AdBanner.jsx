import { useEffect, useRef } from 'react'

/**
 * AdBanner — Google AdSense in-content unit.
 *
 * Sizes:
 *   "leaderboard" — responsive horizontal  (PlacePage / BlogPage mid-content)
 *   "rectangle"   — responsive rectangle   (between content sections)
 *   "mobile"      — responsive mobile unit (narrow viewports)
 *
 * Slot IDs are read from env vars so you never need to touch this file:
 *   VITE_ADSENSE_SLOT_LEADERBOARD
 *   VITE_ADSENSE_SLOT_RECTANGLE
 *   VITE_ADSENSE_SLOT_MOBILE
 *
 * If a slot ID is not yet set the component renders nothing — Auto Ads
 * (enabled via the <script> in index.html) fills the gap automatically.
 */

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT ?? 'ca-pub-6862894074348546'

const SLOT_MAP = {
  leaderboard: import.meta.env.VITE_ADSENSE_SLOT_LEADERBOARD,
  rectangle:   import.meta.env.VITE_ADSENSE_SLOT_RECTANGLE,
  mobile:      import.meta.env.VITE_ADSENSE_SLOT_MOBILE,
}

export default function AdBanner({ size = 'leaderboard', className = '' }) {
  const slot    = SLOT_MAP[size] ?? SLOT_MAP.leaderboard
  const pushed  = useRef(false)

  useEffect(() => {
    if (!slot || pushed.current) return
    try {
      pushed.current = true
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // adsbygoogle not yet loaded — Auto Ads script handles it
    }
  }, [slot])

  // No slot ID configured yet — render nothing; Auto Ads covers this space
  if (!slot) return null

  return (
    <div className={`w-full flex flex-col items-center my-8 ${className}`}>
      <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1.5 select-none">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

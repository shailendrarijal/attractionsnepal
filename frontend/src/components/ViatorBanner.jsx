import { useEffect } from 'react'

const PARTNER_ID = 'P00300558'
const VIATOR_SCRIPT = 'https://partners.vtrcdn.com/static/scripts/banners/banners.js'

/**
 * ViatorBanner — renders a Viator affiliate banner.
 *
 * Props:
 *   width     — banner width  in px (default 120)
 *   height    — banner height in px (default 240)
 *   selection — Viator banner design key  (default 'banner3')
 *
 * Available sizes from Viator dashboard:
 *   120 × 240  (vertical banner — compact sidebar)
 *   120 × 600  (skyscraper — tall sidebar)
 *   300 × 250  (medium rectangle)
 *   728 × 90   (leaderboard — good for top/bottom)
 */
export default function ViatorBanner({ width = 120, height = 600, selection = 'banner3' }) {
  useEffect(() => {
    if (document.getElementById('viator-script')) return
    const s = document.createElement('script')
    s.id    = 'viator-script'
    s.src   = VIATOR_SCRIPT
    s.async = true
    document.body.appendChild(s)
  }, [])

  return (
    <div>
      <p className="text-center text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 select-none">
        Sponsored
      </p>
      <div className="flex justify-center">
        <div
          data-id="viator-banner"
          data-partner-id={PARTNER_ID}
          data-url="https://www.viator.com/"
          data-banner-width={width}
          data-banner-height={height}
          data-banner-language="en"
          data-banner-selection={selection}
        />
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import ViatorBanner from './ViatorBanner'

/**
 * MobileAdBanner — shown on screens < xl (below page content, above footer).
 *
 * Slots:
 *   1. GetYourGuide activities strip (2 cards)
 *   2. Viator 120 × 600 banner (centred)
 */
export default function MobileAdBanner() {
  const gygPartnerId = import.meta.env.VITE_GYG_PARTNER_ID

  useEffect(() => {
    if (document.getElementById('gyg-script')) return
    const s = document.createElement('script')
    s.id    = 'gyg-script'
    s.src   = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js'
    s.async = true
    s.defer = true
    document.body.appendChild(s)
  }, [])

  return (
    <div className="px-4 py-8 space-y-8 max-w-xl mx-auto">

      {/* ── GetYourGuide activities ──────────────────────────────────── */}
      {gygPartnerId && (
        <div className="overflow-x-auto">
          <p className="text-center text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 select-none">
            Sponsored Activities
          </p>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="en-US"
            data-gyg-widget="activities"
            data-gyg-number-of-items="2"
            data-gyg-partner-id={gygPartnerId}
            data-gyg-q="Nepal"
          />
        </div>
      )}

      {/* ── Viator banner ────────────────────────────────────────────── */}
      <ViatorBanner width={120} height={600} selection="banner3" />

    </div>
  )
}

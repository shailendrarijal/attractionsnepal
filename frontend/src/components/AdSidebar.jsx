import { useEffect } from 'react'
import ViatorBanner from './ViatorBanner'

/**
 * AdSidebar — sticky right-hand sidebar shown on xl+ screens.
 *
 * Slots (top → bottom):
 *   1. GetYourGuide sponsored activities widget
 *   2. Viator 120 × 600 skyscraper banner
 */
export default function AdSidebar() {
  const gygPartnerId = import.meta.env.VITE_GYG_PARTNER_ID

  // Load GYG widget script once (idempotent — ViatorBanner handles its own script)
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
    <div className="flex flex-col gap-8 py-8 px-4">

      {/* ── GetYourGuide activities ──────────────────────────────────── */}
      {gygPartnerId && (
        <div className="overflow-hidden">
          <p className="text-center text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 select-none">
            Sponsored
          </p>
          <div
            data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
            data-gyg-locale-code="en-US"
            data-gyg-widget="activities"
            data-gyg-number-of-items="3"
            data-gyg-partner-id={gygPartnerId}
            data-gyg-q="Nepal"
          />
        </div>
      )}

      {/* ── Viator 120 × 600 skyscraper ─────────────────────────────── */}
      <ViatorBanner width={120} height={600} selection="banner3" />

    </div>
  )
}

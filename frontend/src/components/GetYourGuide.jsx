import { useEffect } from 'react'

/**
 * Embeds a GetYourGuide activities widget.
 * Set VITE_GYG_PARTNER_ID in .env and pass gygQuery from the place.
 */
export default function GetYourGuide({ query }) {
  const partnerId = import.meta.env.VITE_GYG_PARTNER_ID

  useEffect(() => {
    // Load GYG widget script if not already present
    if (!document.getElementById('gyg-script')) {
      const s = document.createElement('script')
      s.id = 'gyg-script'
      s.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js'
      s.async = true
      s.defer = true
      document.body.appendChild(s)
    }
  }, [])

  if (!query || !partnerId) return null

  return (
    <div className="my-8">
      <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
        Tours & Activities
      </h2>
      <div
        data-gyg-href={`https://widget.getyourguide.com/default/activities.frame`}
        data-gyg-locale-code="en-US"
        data-gyg-widget="activities"
        data-gyg-number-of-items="4"
        data-gyg-partner-id={partnerId}
        data-gyg-q={query}
      />
    </div>
  )
}

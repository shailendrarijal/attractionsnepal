/**
 * Booking.com affiliate hotel search link.
 * Set VITE_BOOKING_AFFILIATE_ID in .env.
 */
export default function BookingWidget({ city, placeName }) {
  const aid = import.meta.env.VITE_BOOKING_AFFILIATE_ID

  if (!city || !aid) return null

  const url = `https://www.booking.com/searchresults.html?aid=${aid}&ss=${encodeURIComponent(city + ', Nepal')}&lang=en-us`

  return (
    <div className="my-8 rounded-2xl bg-[#003580] text-white p-6 flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">Hotels near {placeName}</h3>
        <p className="text-sm text-blue-200 mt-1">
          Find the best accommodation deals in {city} on Booking.com
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="shrink-0 rounded-lg bg-[#FFB700] hover:bg-yellow-400 text-[#003580] font-bold px-6 py-3 text-sm transition-colors"
      >
        Search Hotels →
      </a>
    </div>
  )
}

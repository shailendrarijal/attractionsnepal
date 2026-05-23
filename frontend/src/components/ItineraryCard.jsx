import { Link } from 'react-router-dom'

const ACTIVITY_ICONS = {
  TREKKING:   '🥾',
  CULTURAL:   '🏛️',
  SPIRITUAL:  '🕉️',
  ADVENTURE:  '🪂',
  WILDLIFE:   '🐘',
  RELAXATION: '🧘',
}

const BUDGET_LABELS = {
  BUDGET:   'Budget',
  MIDRANGE: 'Mid-range',
  LUXURY:   'Luxury',
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'

export default function ItineraryCard({ itinerary }) {
  return (
    <Link
      to={`/itineraries/${itinerary.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Background */}
      <img
        src={itinerary.heroImage ?? PLACEHOLDER}
        alt={itinerary.title}
        loading="lazy"
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {/* Days badge — top left */}
      <span className="absolute top-3 left-3 badge bg-primary-700/80 text-white text-xs font-semibold">
        {itinerary.days} {itinerary.days === 1 ? 'day' : 'days'}
      </span>

      {/* Featured badge — top right */}
      {itinerary.featured && (
        <span className="absolute top-3 right-3 badge bg-amber-500/90 text-white text-xs font-semibold">
          Featured
        </span>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-green-200 transition-colors">
          {itinerary.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-1">
          {itinerary.activities?.slice(0, 4).map((a) => (
            <span key={a} className="text-sm" title={a.charAt(0) + a.slice(1).toLowerCase()}>
              {ACTIVITY_ICONS[a] ?? '🗺️'}
            </span>
          ))}
          {itinerary.budget && (
            <span className="ml-auto text-xs text-gray-300">
              {BUDGET_LABELS[itinerary.budget]}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

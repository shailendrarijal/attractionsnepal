import { Link } from 'react-router-dom'
import CategoryBadge from './CategoryBadge'

const PLACEHOLDER = 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80'

export default function PlaceCard({ place }) {
  return (
    <Link
      to={`/places/${place.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Background image */}
      <img
        src={place.heroImage ?? PLACEHOLDER}
        alt={place.name}
        loading="lazy"
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient overlay — strong at bottom, fades to transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {/* Top badges */}
      <div className="absolute top-3 left-3">
        <CategoryBadge category={place.category} />
      </div>
      {place.featured && (
        <div className="absolute top-3 right-3 badge bg-nepal-gold/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Title + meta pinned to the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-green-200 transition-colors">
          {place.name}
        </h3>

        <p className="mt-1.5 text-xs text-gray-300 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {place.district}, {place.province}
        </p>

        {(place.bestSeason || place.trekDays) && (
          <div className="mt-2 flex flex-wrap gap-2">
            {place.bestSeason && (
              <span className="text-xs text-gray-300 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {place.bestSeason}
              </span>
            )}
            {place.trekDays && (
              <span className="text-xs text-gray-300 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {place.trekDays} days
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}

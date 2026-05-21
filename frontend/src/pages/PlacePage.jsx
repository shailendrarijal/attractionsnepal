import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { usePlace } from '../hooks/usePlaces'
import CategoryBadge from '../components/CategoryBadge'
import MapView from '../components/MapView'
import TrekRouteMap from '../components/TrekRouteMap'
import GetYourGuide from '../components/GetYourGuide'
import BookingWidget from '../components/BookingWidget'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'
import AdBanner from '../components/AdBanner'
import JsonLd from '../components/JsonLd'

const PLACEHOLDER = 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1600&q=80'

const SECTION_ICONS = {
  WHERE_TO_STAY:      '🏨',
  WHERE_TO_EAT:       '🍜',
  TOURS_EXPERIENCES:  '🎒',
  TRAVEL_TIPS:        '💡',
  NEARBY_PLACES:      '📍',
}

export default function PlacePage() {
  const { slug } = useParams()
  const { data: place, isLoading, error } = usePlace(slug)

  if (isLoading) return <LoadingSpinner />

  if (error || !place) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-5xl mb-4">🏔️</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Place not found</h1>
        <p className="text-gray-500 mb-6">The listing you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    )
  }

  const mapPlaces = place.lat && place.lng ? [place] : []

  const stripUndefined = (obj) => JSON.parse(JSON.stringify(obj))

  const placeJsonLd = stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: place.name,
    description: place.seoDescription ?? place.summary,
    url: `https://attractionsnepal.com/places/${place.slug}`,
    image: place.heroImage ?? undefined,
    address: {
      '@type': 'PostalAddress',
      addressRegion: place.district,
      addressCountry: 'NP',
    },
    geo: place.lat && place.lng
      ? { '@type': 'GeoCoordinates', latitude: place.lat, longitude: place.lng }
      : undefined,
  })

  return (
    <>
      <PageSeo
        title={place.seoTitle ?? place.name}
        description={place.seoDescription ?? place.summary}
        image={place.heroImage}
        canonicalPath={`/places/${place.slug}`}
      />
      <JsonLd data={placeJsonLd} />

      {/* Hero */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] bg-gray-900 overflow-hidden">
        <img
          src={place.heroImage ?? PLACEHOLDER}
          alt={place.name}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-4xl">
            <CategoryBadge category={place.category} size="lg" />
            <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {place.name}
            </h1>
            <p className="mt-2 text-gray-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {place.district}, {place.province.replace('_', ' ')}
              {place.elevation && ` · ${place.elevation.toLocaleString()}m`}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Quick facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {place.bestSeason && (
            <div className="rounded-xl bg-green-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Best Season</p>
              <p className="mt-1 font-semibold text-gray-900 text-sm">{place.bestSeason}</p>
            </div>
          )}
          {place.entryFee && (
            <div className="rounded-xl bg-yellow-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Entry Fee</p>
              <p className="mt-1 font-semibold text-gray-900 text-sm">{place.entryFee}</p>
            </div>
          )}
          {place.openingHours && (
            <div className="rounded-xl bg-blue-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Hours</p>
              <p className="mt-1 font-semibold text-gray-900 text-sm">{place.openingHours}</p>
            </div>
          )}
          {place.trekDays && (
            <div className="rounded-xl bg-purple-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Duration</p>
              <p className="mt-1 font-semibold text-gray-900 text-sm">{place.trekDays} days</p>
            </div>
          )}
          {place.trekDifficulty && (
            <div className="rounded-xl bg-red-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Difficulty</p>
              <p className="mt-1 font-semibold text-gray-900 text-sm capitalize">{place.trekDifficulty.toLowerCase()}</p>
            </div>
          )}
          {place.trekMaxElevation && (
            <div className="rounded-xl bg-sky-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Max Altitude</p>
              <p className="mt-1 font-semibold text-gray-900 text-sm">{place.trekMaxElevation.toLocaleString()}m</p>
            </div>
          )}
        </div>

        {/* Trek highlights */}
        {place.trekHighlights?.length > 0 && (
          <div className="mb-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h2 className="font-display font-bold text-lg text-gray-900 mb-3">Trek Highlights</h2>
            <ul className="space-y-1">
              {place.trekHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main content */}
        <div className="prose prose-base max-w-none mb-10">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{place.story}</ReactMarkdown>
        </div>

        {/* Mid-page ad — after story, before sections */}
        <AdBanner size="leaderboard" />

        {/* Booking widget */}
        <BookingWidget city={place.bookingCity} placeName={place.name} />

        {/* Content sections — ad injected after every 2nd section */}
        {place.sections?.map((section, idx) => (
          <div key={section.id}>
            <div className="mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h2 className="font-display font-bold text-xl text-gray-900 mb-3">
                {SECTION_ICONS[section.type] ?? '📌'} {section.title}
              </h2>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content}</ReactMarkdown>
              </div>
              {section.links && Array.isArray(section.links) && section.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel={link.type === 'affiliate' ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                      className="btn-secondary text-xs py-1.5"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
            {idx === 1 && <AdBanner size="rectangle" />}
          </div>
        ))}

        {/* How to get there */}
        {place.howToGetThere && (
          <div className="mb-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-3">🚌 How to Get There</h2>
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{place.howToGetThere}</ReactMarkdown>
            </div>
          </div>
        )}

        {/* Contact information */}
        {(place.website || place.phone || place.email) && (
          <div className="mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-4">📞 Contact Information</h2>
            <ul className="space-y-3">
              {place.website && (
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-700 shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </span>
                  <span className="text-gray-500 w-16 shrink-0">Website</span>
                  <a
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:underline break-all"
                  >
                    {place.website.replace(/^https?:\/\//, '')}
                  </a>
                </li>
              )}
              {place.phone && (
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-700 shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-gray-500 w-16 shrink-0">Phone</span>
                  <a href={`tel:${place.phone}`} className="text-gray-800 hover:text-primary-700">
                    {place.phone}
                  </a>
                </li>
              )}
              {place.email && (
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-gray-500 w-16 shrink-0">Email</span>
                  <a href={`mailto:${place.email}`} className="text-primary-700 hover:underline">
                    {place.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* GetYourGuide */}
        <GetYourGuide query={place.gygQuery} />

        {/* Gallery */}
        {place.images?.length > 0 && (
          <div className="mb-10">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-4">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {place.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${place.name} ${i + 1}`}
                  className="rounded-xl aspect-square object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}

        {/* Trek Route Map — shown for TREK_ROUTE places that have geocoded points */}
        {place.category === 'TREK_ROUTE' && (place.trekStartLat || place.trekEndLat) && (
          <div className="mb-10">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-4">🗺️ Trek Route</h2>
            <TrekRouteMap place={place} height="400px" />
          </div>
        )}

        {/* Location map — shown for all places with lat/lng; for trek routes only if no geocoded trek points */}
        {mapPlaces.length > 0 && (place.category !== 'TREK_ROUTE' || (!place.trekStartLat && !place.trekEndLat)) && (
          <div className="mb-10">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-4">📍 Location</h2>
            <MapView places={mapPlaces} height="350px" mode="place" />
          </div>
        )}

        {/* Tags */}
        {place.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {place.tags.map(({ tag }) => (
              <span key={tag.id} className="badge bg-gray-100 text-gray-600">
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

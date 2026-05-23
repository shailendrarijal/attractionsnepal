import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useItinerary } from '../hooks/useItineraries'
import { emailItinerary } from '../lib/api'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'
import JsonLd from '../components/JsonLd'
import GuidePromo from '../components/GuidePromo'
import AdBanner from '../components/AdBanner'

const PLACEHOLDER = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80'

const ACTIVITY_LABELS = {
  TREKKING:   '🥾 Trekking',
  CULTURAL:   '🏛️ Cultural',
  SPIRITUAL:  '🕉️ Spiritual',
  ADVENTURE:  '🪂 Adventure',
  WILDLIFE:   '🐘 Wildlife',
  RELAXATION: '🧘 Relaxation',
}

const BUDGET_COLORS = {
  BUDGET:   'bg-green-100 text-green-800',
  MIDRANGE: 'bg-blue-100 text-blue-800',
  LUXURY:   'bg-purple-100 text-purple-800',
}

const BUDGET_LABELS = {
  BUDGET:   'Budget',
  MIDRANGE: 'Mid-range',
  LUXURY:   'Luxury',
}

const DIFFICULTY_COLORS = {
  EASY:     'bg-green-100 text-green-800',
  MODERATE: 'bg-yellow-100 text-yellow-800',
  HARD:     'bg-orange-100 text-orange-800',
  EXTREME:  'bg-red-100 text-red-800',
}

const CATEGORY_ICONS = {
  TEMPLE:           '🕌',
  MONASTERY:        '🏯',
  STUPA:            '☸️',
  DURBAR_PALACE:    '🏰',
  ARCHAEOLOGICAL:   '🏛️',
  CULTURAL_VILLAGE: '🏘️',
  HILL_VIEWPOINT:   '⛰️',
  MOUNTAIN_VIEW:    '🏔️',
  RIVER:            '🌊',
  WATERFALL:        '💧',
  LAKE:             '🏞️',
  HOT_SPRING:       '♨️',
  CAVE:             '🪨',
  NATIONAL_PARK:    '🌿',
  TREK_ROUTE:       '🥾',
  ADVENTURE_SPORTS: '🎿',
  AMUSEMENT_PARK:   '🎡',
}

// ─── Email modal ─────────────────────────────────────────────────────────────
function EmailModal({ slug, selectedDays, itineraryTitle, onClose }) {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [status, setStatus]   = useState('idle')  // idle | sending | done | error
  const [errMsg, setErrMsg]   = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      await emailItinerary(slug, { name, email, selectedDays })
      setStatus('done')
    } catch (err) {
      setErrMsg(err?.response?.data?.error ?? 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary-700 px-6 py-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display font-bold text-white text-lg leading-tight">
                📧 Email me this itinerary
              </h2>
              <p className="text-primary-200 text-xs mt-1">
                Get your personalised plan delivered to your inbox — free.
              </p>
            </div>
            <button onClick={onClose} className="text-primary-200 hover:text-white mt-0.5 shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 py-5">
          {status === 'done' ? (
            <div className="text-center py-6">
              <p className="text-4xl mb-3">✉️</p>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Check your inbox!</h3>
              <p className="text-gray-500 text-sm">
                Your itinerary for <em>{itineraryTitle}</em> has been sent to <strong>{email}</strong>.
              </p>
              <button onClick={onClose} className="btn-primary mt-5 w-full">Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email-name">
                  Your name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="email-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email-addr">
                  Email address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email-addr"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                />
              </div>

              <p className="text-xs text-gray-400">
                We'll also subscribe you to our free Nepal travel tips newsletter. Unsubscribe anytime.
              </p>

              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{errMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || !email}
                className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send me this itinerary →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ItineraryPage() {
  const { slug } = useParams()
  const { data: itinerary, isLoading, error } = useItinerary(slug)
  // Tracks which plan is selected per day: { [dayNum]: planId }
  const [selectedOptions, setSelectedOptions] = useState({})
  const [showEmailModal, setShowEmailModal]   = useState(false)

  if (isLoading) return <LoadingSpinner />

  if (error || !itinerary) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-5xl mb-4">🗺️</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Itinerary not found</h1>
        <p className="text-gray-500 mb-6">This itinerary doesn't exist or has been removed.</p>
        <Link to="/itineraries" className="btn-primary">Browse Itineraries</Link>
      </div>
    )
  }

  // Group dayPlans by day number
  const dayGroups = {}
  for (const plan of (itinerary.dayPlans ?? [])) {
    if (!dayGroups[plan.day]) dayGroups[plan.day] = []
    dayGroups[plan.day].push(plan)
  }
  const dayNumbers = Object.keys(dayGroups).map(Number).sort((a, b) => a - b)

  function getSelectedPlan(dayNum) {
    const plans = dayGroups[dayNum] ?? []
    const primary = plans.find((p) => !p.isAlternative) ?? plans[0]
    const selectedId = selectedOptions[dayNum]
    return plans.find((p) => p.id === selectedId) ?? primary
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: itinerary.title,
    description: itinerary.excerpt,
    url: `https://attractionsnepal.com/itineraries/${itinerary.slug}`,
    image: itinerary.heroImage ?? undefined,
    touristType: itinerary.activities?.map((a) => ACTIVITY_LABELS[a]?.split(' ').slice(1).join(' ')),
  }

  return (
    <>
      {showEmailModal && (
        <EmailModal
          slug={slug}
          selectedDays={selectedOptions}
          itineraryTitle={itinerary.title}
          onClose={() => setShowEmailModal(false)}
        />
      )}
      <PageSeo
        title={itinerary.seoTitle ?? itinerary.title}
        description={itinerary.seoDescription ?? itinerary.excerpt}
        image={itinerary.heroImage}
        canonicalPath={`/itineraries/${itinerary.slug}`}
      />
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] bg-gray-900 overflow-hidden">
        <img
          src={itinerary.heroImage ?? PLACEHOLDER}
          alt={itinerary.title}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge bg-primary-700/80 text-white text-sm">
                {itinerary.days} {itinerary.days === 1 ? 'day' : 'days'}
              </span>
              {itinerary.featured && (
                <span className="badge bg-amber-500/90 text-white text-sm">Featured</span>
              )}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {itinerary.title}
            </h1>
            {(itinerary.startLocation || itinerary.endLocation) && (
              <p className="mt-2 text-gray-300 text-sm flex items-center gap-1.5">
                📍 {itinerary.startLocation}
                {itinerary.startLocation && itinerary.endLocation && itinerary.startLocation !== itinerary.endLocation && (
                  <> <span className="text-gray-500">→</span> {itinerary.endLocation}</>
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Activity / budget / difficulty badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {itinerary.activities?.map((a) => (
            <span key={a} className="badge bg-primary-50 text-primary-800 text-xs">
              {ACTIVITY_LABELS[a] ?? a}
            </span>
          ))}
          {itinerary.budget && (
            <span className={`badge text-xs ${BUDGET_COLORS[itinerary.budget] ?? 'bg-gray-100 text-gray-800'}`}>
              {BUDGET_LABELS[itinerary.budget]}
            </span>
          )}
          {itinerary.difficulty && (
            <span className={`badge text-xs ${DIFFICULTY_COLORS[itinerary.difficulty] ?? 'bg-gray-100 text-gray-800'}`}>
              {itinerary.difficulty.charAt(0) + itinerary.difficulty.slice(1).toLowerCase()}
            </span>
          )}
          {itinerary.provinces?.map((p) => (
            <span key={p} className="badge bg-gray-100 text-gray-700 text-xs">
              {p.replace(/_/g, ' ')}
            </span>
          ))}
        </div>

        {/* Excerpt */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{itinerary.excerpt}</p>

        {/* Highlights */}
        {itinerary.highlights?.length > 0 && (
          <div className="mb-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h2 className="font-display font-bold text-lg text-gray-900 mb-3">✨ Trip Highlights</h2>
            <ul className="space-y-1.5">
              {itinerary.highlights.map((h, i) => (
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

        {/* Day-by-day timeline */}
        {dayNumbers.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">📅 Day-by-Day Plan</h2>
            <div className="space-y-5">
              {dayNumbers.map((dayNum) => {
                const plans       = dayGroups[dayNum]
                const primary     = plans.find((p) => !p.isAlternative) ?? plans[0]
                const alternatives = plans.filter((p) => p.isAlternative)
                const hasAlts     = alternatives.length > 0
                const selected    = getSelectedPlan(dayNum)

                return (
                  <div key={dayNum} className="rounded-2xl border border-gray-200 overflow-hidden">
                    {/* Day header bar */}
                    <div className="bg-primary-700 px-5 py-3 flex items-center justify-between gap-4">
                      <h3 className="font-display font-bold text-white">
                        Day {dayNum} — {selected.title}
                      </h3>
                      <span className="text-primary-200 text-xs shrink-0">
                        {selected.distanceKm ? `${selected.distanceKm} km` : ''}
                        {selected.distanceKm && selected.maxElevation ? ' · ' : ''}
                        {selected.maxElevation ? `${selected.maxElevation.toLocaleString()}m` : ''}
                      </span>
                    </div>

                    {/* Alternative tabs — only shown if day has alternatives */}
                    {hasAlts && (
                      <div className="flex gap-0 border-b border-gray-100 overflow-x-auto no-scrollbar bg-gray-50">
                        <button
                          onClick={() => setSelectedOptions((s) => ({ ...s, [dayNum]: primary.id }))}
                          className={`shrink-0 px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
                            (selectedOptions[dayNum] ?? primary.id) === primary.id
                              ? 'border-primary-600 text-primary-700 bg-white'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          Main Route
                        </button>
                        {alternatives.map((alt) => (
                          <button
                            key={alt.id}
                            onClick={() => setSelectedOptions((s) => ({ ...s, [dayNum]: alt.id }))}
                            className={`shrink-0 px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${
                              selectedOptions[dayNum] === alt.id
                                ? 'border-primary-600 text-primary-700 bg-white'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            {alt.alternativeLabel ?? 'Alternative'}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Day content */}
                    <div className="p-5">
                      <div className="prose prose-sm max-w-none mb-4">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{selected.description}</ReactMarkdown>
                      </div>

                      {/* Places to visit */}
                      {selected.places?.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                            Places to Visit
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selected.places.map(({ place, note }) => (
                              <Link
                                key={place.id}
                                to={`/places/${place.slug}`}
                                className="group flex items-center gap-2 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 px-3 py-2 transition-colors max-w-xs"
                              >
                                {place.heroImage ? (
                                  <img
                                    src={place.heroImage}
                                    alt={place.name}
                                    className="w-9 h-9 rounded-lg object-cover shrink-0"
                                  />
                                ) : (
                                  <span className="text-xl shrink-0">
                                    {CATEGORY_ICONS[place.category] ?? '📍'}
                                  </span>
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-700 transition-colors truncate">
                                    {place.name}
                                  </p>
                                  <p className="text-xs text-gray-400 truncate">
                                    {note ?? place.district}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Accommodation & meals */}
                      {(selected.accommodation || selected.meals) && (
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 pt-3 border-t border-gray-100 mt-3">
                          {selected.accommodation && (
                            <span className="flex items-center gap-1.5">
                              🏨 <span>{selected.accommodation}</span>
                            </span>
                          )}
                          {selected.meals && (
                            <span className="flex items-center gap-1.5">
                              🍽️ <span>{selected.meals}</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Email CTA */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-white text-lg">📧 Save this itinerary to your inbox</h3>
            <p className="text-primary-200 text-sm mt-0.5">
              Get the full day-by-day plan emailed to you — including any day options you've selected.
            </p>
          </div>
          <button
            onClick={() => setShowEmailModal(true)}
            className="shrink-0 bg-white text-primary-800 font-bold px-6 py-2.5 rounded-xl hover:bg-primary-50 transition-colors shadow-sm whitespace-nowrap"
          >
            Email me this plan →
          </button>
        </div>

        {/* Guide promo */}
        <GuidePromo variant="inline" />

        {/* Ad */}
        <AdBanner size="leaderboard" />

        {/* Tags */}
        {itinerary.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {itinerary.tags.map(({ tag }) => (
              <span key={tag.id} className="badge bg-gray-100 text-gray-600">
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link
            to="/itineraries"
            className="text-primary-700 hover:text-primary-900 font-medium text-sm flex items-center gap-1"
          >
            ← Browse all itineraries
          </Link>
        </div>
      </div>
    </>
  )
}

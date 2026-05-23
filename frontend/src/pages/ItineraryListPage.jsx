import { useState } from 'react'
import { useItineraries } from '../hooks/useItineraries'
import ItineraryCard from '../components/ItineraryCard'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'

const DAY_RANGES = [
  { label: '1–3 days',  value: '1-3',  min: 1,  max: 3 },
  { label: '4–6 days',  value: '4-6',  min: 4,  max: 6 },
  { label: '7–10 days', value: '7-10', min: 7,  max: 10 },
  { label: '11+ days',  value: '11+',  min: 11, max: undefined },
]

const ACTIVITIES = [
  { label: 'Trekking',   value: 'TREKKING',   icon: '🥾' },
  { label: 'Cultural',   value: 'CULTURAL',   icon: '🏛️' },
  { label: 'Spiritual',  value: 'SPIRITUAL',  icon: '🕉️' },
  { label: 'Adventure',  value: 'ADVENTURE',  icon: '🪂' },
  { label: 'Wildlife',   value: 'WILDLIFE',   icon: '🐘' },
  { label: 'Relaxation', value: 'RELAXATION', icon: '🧘' },
]

const BUDGETS = [
  { label: 'Budget',    value: 'BUDGET' },
  { label: 'Mid-range', value: 'MIDRANGE' },
  { label: 'Luxury',    value: 'LUXURY' },
]

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
        active
          ? 'bg-primary-700 text-white border-primary-700'
          : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-700'
      }`}
    >
      {children}
    </button>
  )
}

export default function ItineraryListPage() {
  const [daysRange, setDaysRange]         = useState(null)
  const [activity, setActivity]           = useState(null)
  const [budget, setBudget]               = useState(null)
  const [search, setSearch]               = useState('')
  const [appliedSearch, setAppliedSearch] = useState('')

  const rangeObj = DAY_RANGES.find((r) => r.value === daysRange)

  const { data, isLoading } = useItineraries({
    ...(rangeObj?.min  !== undefined && { daysMin: rangeObj.min }),
    ...(rangeObj?.max  !== undefined && { daysMax: rangeObj.max }),
    ...(activity       && { activity }),
    ...(budget         && { budget }),
    ...(appliedSearch  && { search: appliedSearch }),
  })

  const itineraries = data?.itineraries ?? []
  const hasFilters  = daysRange || activity || budget || appliedSearch

  function handleSearch(e) {
    e.preventDefault()
    setAppliedSearch(search.trim())
  }

  function clearAll() {
    setDaysRange(null)
    setActivity(null)
    setBudget(null)
    setSearch('')
    setAppliedSearch('')
  }

  return (
    <>
      <PageSeo
        title="Nepal Itineraries — Day-by-Day Trip Plans"
        description="Browse hand-crafted Nepal itineraries: 3-day Kathmandu highlights, 7-day Annapurna Circuit, classic Nepal and more. Filter by days, activities and budget."
        canonicalPath="/itineraries"
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-950 to-primary-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-300 mb-2">Plan Your Trip</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Nepal Itineraries</h1>
          <p className="mt-3 text-emerald-100 max-w-xl mx-auto">
            Hand-crafted day-by-day plans for every travel style — from quick cultural weekends to
            epic trekking expeditions. Pick your itinerary, swap days to customise, and go.
          </p>

          <form onSubmit={handleSearch} className="mt-6 flex max-w-md mx-auto gap-2">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search itineraries..."
              className="input flex-1"
            />
            <button type="submit" className="btn-primary">Search</button>
            {appliedSearch && (
              <button
                type="button"
                onClick={() => { setSearch(''); setAppliedSearch('') }}
                className="btn-secondary"
              >
                Clear
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2">
          {/* Days row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400 w-12">Days</span>
            <Chip active={!daysRange} onClick={() => setDaysRange(null)}>Any</Chip>
            {DAY_RANGES.map((r) => (
              <Chip
                key={r.value}
                active={daysRange === r.value}
                onClick={() => setDaysRange(daysRange === r.value ? null : r.value)}
              >
                {r.label}
              </Chip>
            ))}
          </div>

          {/* Activity + Budget row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400 w-12">Type</span>
            {ACTIVITIES.map((a) => (
              <Chip
                key={a.value}
                active={activity === a.value}
                onClick={() => setActivity(activity === a.value ? null : a.value)}
              >
                {a.icon} {a.label}
              </Chip>
            ))}
            <span className="shrink-0 w-px h-5 bg-gray-200 mx-1" />
            {BUDGETS.map((b) => (
              <Chip
                key={b.value}
                active={budget === b.value}
                onClick={() => setBudget(budget === b.value ? null : b.value)}
              >
                {b.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-16">
        {isLoading ? (
          <LoadingSpinner />
        ) : itineraries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itineraries.map((it) => (
              <ItineraryCard key={it.id} itinerary={it} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🗺️</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {hasFilters ? 'No itineraries match your filters' : 'Itineraries coming soon'}
            </h2>
            <p className="text-gray-500">
              {hasFilters
                ? 'Try adjusting your filters to see more options.'
                : 'Hand-crafted Nepal itineraries are being added — check back soon!'}
            </p>
            {hasFilters && (
              <button onClick={clearAll} className="btn-primary mt-4">Clear filters</button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

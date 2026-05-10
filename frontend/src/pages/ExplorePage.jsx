import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePlaces } from '../hooks/usePlaces'
import PlaceCard from '../components/PlaceCard'
import MapView from '../components/MapView'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'

const PROVINCES = ['KOSHI','MADHESH','BAGMATI','GANDAKI','LUMBINI','KARNALI','SUDURPASHCHIM']

const CATEGORIES = [
  { value: '',                 label: 'All Categories' },
  { value: 'TEMPLE',           label: 'Temples' },
  { value: 'MONASTERY',        label: 'Monasteries' },
  { value: 'STUPA',            label: 'Stupas' },
  { value: 'DURBAR_PALACE',    label: 'Palaces & Durbar' },
  { value: 'ARCHAEOLOGICAL',   label: 'Museums & Sites' },
  { value: 'CULTURAL_VILLAGE', label: 'Villages & Towns' },
  { value: 'TREK_ROUTE',       label: 'Trekking Routes' },
  { value: 'NATIONAL_PARK',    label: 'National Parks' },
  { value: 'HILL_VIEWPOINT',   label: 'Viewpoints' },
  { value: 'MOUNTAIN_VIEW',    label: 'Mountain Views' },
  { value: 'WATERFALL',        label: 'Waterfalls' },
  { value: 'LAKE',             label: 'Lakes' },
  { value: 'RIVER',            label: 'Rivers' },
  { value: 'HOT_SPRING',       label: 'Hot Springs' },
  { value: 'CAVE',             label: 'Caves' },
  { value: 'ADVENTURE_SPORTS', label: 'Adventure Sports' },
  { value: 'AMUSEMENT_PARK',   label: 'Amusement Parks' },
]

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [view, setView] = useState('grid') // 'grid' | 'map'

  const [filters, setFilters] = useState({
    search:   searchParams.get('search')   ?? '',
    category: searchParams.get('category') ?? '',
    province: searchParams.get('province') ?? '',
  })
  const [applied, setApplied] = useState(filters)

  useEffect(() => {
    const s = searchParams.get('search')
    if (s) setApplied((f) => ({ ...f, search: s }))
  }, [])

  const { data, isLoading } = usePlaces({
    ...(applied.search   && { search:   applied.search }),
    ...(applied.category && { category: applied.category }),
    ...(applied.province && { province: applied.province }),
    limit: 100,
  })

  function apply() {
    setApplied(filters)
    const p = {}
    if (filters.search)   p.search   = filters.search
    if (filters.category) p.category = filters.category
    if (filters.province) p.province = filters.province
    setSearchParams(p)
  }

  function reset() {
    const empty = { search: '', category: '', province: '' }
    setFilters(empty)
    setApplied(empty)
    setSearchParams({})
  }

  return (
    <>
      <PageSeo
        title="Explore Nepal"
        description="Browse and filter all Nepal attractions by category, province, or keyword. Switch between map and grid views."
        canonicalPath="/explore"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold text-gray-900">Explore Nepal</h1>
          <p className="text-gray-500 mt-1">
            {data ? `${data.total} places found` : 'Searching...'}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-4 mb-8 flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            value={filters.search}
            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
            onKeyDown={(e) => e.key === 'Enter' && apply()}
            placeholder="Search name or district..."
            className="input flex-1"
          />
          <select
            value={filters.category}
            onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
            className="input sm:w-52"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
          <select
            value={filters.province}
            onChange={(e) => setFilters((f) => ({ ...f, province: e.target.value }))}
            className="input sm:w-44"
          >
            <option value="">All Provinces</option>
            {PROVINCES.map((p) => (
              <option key={p} value={p}>{p.replace(/_/g, ' ')}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button onClick={apply} className="btn-primary whitespace-nowrap">Apply</button>
            <button onClick={reset} className="btn-secondary whitespace-nowrap">Reset</button>
          </div>
        </div>

        {/* View toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setView('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === 'grid' ? 'bg-primary-100 text-primary-800' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Grid
          </button>
          <button
            onClick={() => setView('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === 'map' ? 'bg-primary-100 text-primary-800' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Map
          </button>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : view === 'map' ? (
          <MapView places={data?.places ?? []} height="600px" />
        ) : data?.places?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No places found</h2>
            <p className="text-gray-500">Try adjusting your filters.</p>
            <button onClick={reset} className="btn-primary mt-4">Clear filters</button>
          </div>
        )}
      </div>
    </>
  )
}

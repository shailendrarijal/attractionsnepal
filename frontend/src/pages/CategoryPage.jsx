import { useParams, Link } from 'react-router-dom'
import { usePlaces } from '../hooks/usePlaces'
import PlaceCard from '../components/PlaceCard'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'
import JsonLd from '../components/JsonLd'

const SLUG_TO_ENUM = {
  'temple':          'TEMPLE',
  'monastery':       'MONASTERY',
  'stupa':           'STUPA',
  'durbar-palace':   'DURBAR_PALACE',
  'archaeological':  'ARCHAEOLOGICAL',
  'cultural-village':'CULTURAL_VILLAGE',
  'hill-viewpoint':  'HILL_VIEWPOINT',
  'mountain-view':   'MOUNTAIN_VIEW',
  'river':           'RIVER',
  'waterfall':       'WATERFALL',
  'lake':            'LAKE',
  'hot-spring':      'HOT_SPRING',
  'cave':            'CAVE',
  'national-park':   'NATIONAL_PARK',
  'trek-route':      'TREK_ROUTE',
  'adventure-sports':'ADVENTURE_SPORTS',
  'amusement-park':  'AMUSEMENT_PARK',
}

const CATEGORY_LABELS = {
  TEMPLE:           { label: 'Temples',         icon: '🛕', description: 'Sacred Hindu temples across Nepal, from the grand Pashupatinath to remote mountain shrines.' },
  MONASTERY:        { label: 'Monasteries',      icon: '🏯', description: 'Buddhist monasteries and gompas, centres of spiritual learning and Himalayan art.' },
  STUPA:            { label: 'Stupas',           icon: '☸️', description: 'Ancient Buddhist stupas housing sacred relics, from Boudhanath to remote valley shrines.' },
  DURBAR_PALACE:    { label: 'Palaces & Durbar Squares', icon: '🏛️', description: 'Royal palaces and historic durbar squares that tell Nepal\'s fascinating royal history.' },
  ARCHAEOLOGICAL:   { label: 'Archaeological Sites', icon: '🏺', description: 'Ancient ruins, excavation sites, and prehistoric landmarks of Nepal.' },
  CULTURAL_VILLAGE: { label: 'Cultural Villages', icon: '🏘️', description: 'Traditional ethnic villages preserving centuries-old customs, architecture, and way of life.' },
  HILL_VIEWPOINT:   { label: 'Hilltop Viewpoints', icon: '👁️', description: 'Panoramic viewpoints offering stunning vistas of the Himalayas and Nepal\'s landscapes.' },
  MOUNTAIN_VIEW:    { label: 'Mountain Views',   icon: '🏔️', description: 'The best spots to see Everest, Annapurna, Dhaulagiri, and the world\'s highest peaks.' },
  RIVER:            { label: 'Rivers',           icon: '🏞️', description: 'Sacred rivers, river confluences, and riverside pilgrimage sites.' },
  WATERFALL:        { label: 'Waterfalls',       icon: '💦', description: 'Stunning waterfalls from misty curtains to thundering cascades hidden in Nepal\'s hills.' },
  LAKE:             { label: 'Lakes',            icon: '🏖️', description: 'High-altitude glacial lakes, sacred ponds, and tranquil lakeside destinations.' },
  HOT_SPRING:       { label: 'Hot Springs',      icon: '♨️', description: 'Natural hot springs perfect for soaking sore muscles after a Himalayan trek.' },
  CAVE:             { label: 'Caves',            icon: '🪨', description: 'Sacred caves, ancient hermitages, and geological wonders of Nepal.' },
  NATIONAL_PARK:    { label: 'National Parks',   icon: '🌿', description: 'Wildlife sanctuaries protecting rhinos, tigers, elephants, and snow leopards.' },
  TREK_ROUTE:       { label: 'Trekking Routes',  icon: '🥾', description: 'From Everest Base Camp to Annapurna Circuit — Nepal\'s world-famous trekking trails.' },
  ADVENTURE_SPORTS: { label: 'Adventure Sports', icon: '🪂', description: 'Bungee jumping, paragliding, white-water rafting, and adrenaline activities in Nepal.' },
  AMUSEMENT_PARK:   { label: 'Amusement Parks',  icon: '🎡', description: 'Family fun parks and recreational attractions in Nepal.' },
}

export default function CategoryPage() {
  const { category } = useParams()
  const categoryEnum = SLUG_TO_ENUM[category]
  const meta = CATEGORY_LABELS[categoryEnum]

  const { data, isLoading } = usePlaces({ category: categoryEnum, limit: 50 })

  if (!categoryEnum || !meta) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <p className="text-5xl mb-4">🗺️</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Category not found</h1>
        <Link to="/" className="btn-primary mt-4">Back to Home</Link>
      </div>
    )
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://attractionsnepal.com' },
      { '@type': 'ListItem', position: 2, name: meta.label, item: `https://attractionsnepal.com/category/${category}` },
    ],
  }

  return (
    <>
      <PageSeo
        title={`${meta.label} in Nepal`}
        description={meta.description}
        canonicalPath={`/category/${category}`}
      />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <span>/</span>
            <span>Categories</span>
            <span>/</span>
            <span className="text-gray-900">{meta.label}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            {meta.icon} {meta.label}
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl">{meta.description}</p>
          {data && (
            <p className="mt-3 text-sm text-gray-500">{data.total} places</p>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : data?.places?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">{meta.icon}</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No listings yet</h2>
            <p className="text-gray-500">We're still adding {meta.label.toLowerCase()} to our database. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  )
}

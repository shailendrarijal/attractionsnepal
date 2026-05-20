import { Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NEPAL_CENTER = { lat: 28.3949, lng: 84.124 }

// Restrict the map to Nepal + immediate neighbours so users can't
// accidentally scroll out to Australia or beyond.
const NEPAL_RESTRICTION = {
  latLngBounds: { north: 31.0, south: 25.0, east: 90.0, west: 78.0 },
  strictBounds: false,
}

function googleMapsDirectionsUrl(lat, lng, name) {
  const destination = encodeURIComponent(`${name}@${lat},${lng}`)
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

// mode="explore" — multi-place map, clicking a marker shows "View details"
// mode="place"   — single-place map, zoomed in, clicking shows "Get Directions"
export default function MapView({
  places = [],
  height = '500px',
  gestureHandling = 'cooperative',
  mode = 'explore',
}) {
  const [selected, setSelected] = useState(null)
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID

  const geoPlaces = places.filter((p) => p.lat && p.lng)

  // In place mode there's always exactly one place — zoom in on it.
  const isPlaceMode = mode === 'place' && geoPlaces.length === 1
  const center      = isPlaceMode ? { lat: geoPlaces[0].lat, lng: geoPlaces[0].lng } : NEPAL_CENTER
  const defaultZoom = isPlaceMode ? 14 : 7

  return (
    <div style={{ height }} className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
      <Map
        defaultCenter={center}
        defaultZoom={defaultZoom}
        mapId={mapId}
        gestureHandling={gestureHandling}
        minZoom={6}
        restriction={NEPAL_RESTRICTION}
        disableDefaultUI={false}
      >
        {geoPlaces.map((place) => (
          <AdvancedMarker
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
            onClick={() => setSelected(place)}
          >
            <Pin background="#15803d" borderColor="#14532d" glyphColor="#fff" />
          </AdvancedMarker>
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            {isPlaceMode ? (
              /* ── Place-detail mode: directions button ── */
              <div className="min-w-[160px]">
                <p className="font-semibold text-sm text-gray-900 mb-3">{selected.name}</p>
                <a
                  href={googleMapsDirectionsUrl(selected.lat, selected.lng, selected.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full px-3 py-1.5 rounded-lg bg-primary-700 text-white text-xs font-semibold hover:bg-primary-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            ) : (
              /* ── Explore mode: view-details link ── */
              <div className="max-w-[200px]">
                {selected.heroImage && (
                  <img
                    src={selected.heroImage}
                    alt={selected.name}
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                )}
                <h3 className="font-semibold text-sm text-gray-900">{selected.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{selected.district}</p>
                <Link
                  to={`/places/${selected.slug}`}
                  className="mt-2 inline-block text-xs font-medium text-primary-700 hover:underline"
                >
                  View details →
                </Link>
              </div>
            )}
          </InfoWindow>
        )}
      </Map>
    </div>
  )
}

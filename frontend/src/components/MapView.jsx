import { Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_CENTER = { lat: 28.3949, lng: 84.124 } // Centre of Nepal
const DEFAULT_ZOOM = 7

// Restrict the map to Nepal + immediate neighbours so users can't
// accidentally scroll out to Australia or beyond.
const NEPAL_RESTRICTION = {
  latLngBounds: { north: 31.0, south: 25.0, east: 90.0, west: 78.0 },
  strictBounds: false,
}

export default function MapView({ places = [], height = '500px', gestureHandling = 'cooperative' }) {
  const [selected, setSelected] = useState(null)
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID

  const geoPlaces = places.filter((p) => p.lat && p.lng)

  return (
    <div style={{ height }} className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
      <Map
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
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
            <Pin
              background="#15803d"
              borderColor="#14532d"
              glyphColor="#fff"
            />
          </AdvancedMarker>
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
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
          </InfoWindow>
        )}
      </Map>
    </div>
  )
}

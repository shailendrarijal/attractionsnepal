import { useEffect, useRef } from 'react'
import { Map, AdvancedMarker, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'

// Draws a dashed polyline between two coordinates using the native Maps API
function TrekPolyline({ start, end }) {
  const map  = useMap()
  const maps = useMapsLibrary('maps')
  const lineRef = useRef(null)

  useEffect(() => {
    if (!map || !maps || !start || !end) return

    // Clean up any previous line
    if (lineRef.current) lineRef.current.setMap(null)

    lineRef.current = new maps.Polyline({
      path: [start, end],
      strokeColor:   '#15803d',
      strokeOpacity: 0,             // solid line hidden; icons draw dashes
      strokeWeight:  3,
      icons: [
        {
          icon: {
            path:          'M 0,-1 0,1',
            strokeOpacity: 1,
            strokeWeight:  3,
            strokeColor:   '#15803d',
            scale:         3,
          },
          offset: '0',
          repeat: '14px',
        },
      ],
      map,
    })

    return () => {
      if (lineRef.current) {
        lineRef.current.setMap(null)
        lineRef.current = null
      }
    }
  }, [map, maps, start, end])

  return null
}

// Custom pin with label
function LabelledPin({ color, border, label }) {
  return (
    <div className="flex flex-col items-center -translate-y-full">
      <div
        style={{ background: color, borderColor: border }}
        className="px-2 py-0.5 rounded-full text-white text-[10px] font-bold border-2 shadow-md whitespace-nowrap"
      >
        {label}
      </div>
      <div
        style={{ background: color, borderColor: border }}
        className="w-3 h-3 rounded-full border-2 -mt-0.5 shadow"
      />
    </div>
  )
}

export default function TrekRouteMap({
  place,
  height = '380px',
}) {
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID

  const hasStart = place.trekStartLat && place.trekStartLng
  const hasEnd   = place.trekEndLat   && place.trekEndLng
  const isLoop   = hasStart && hasEnd &&
    Math.abs(place.trekStartLat - place.trekEndLat) < 0.001 &&
    Math.abs(place.trekStartLng - place.trekEndLng) < 0.001

  // Compute map centre and zoom to fit both points
  const center = hasStart
    ? {
        lat: hasEnd && !isLoop
          ? (place.trekStartLat + place.trekEndLat) / 2
          : place.trekStartLat,
        lng: hasEnd && !isLoop
          ? (place.trekStartLng + place.trekEndLng) / 2
          : place.trekStartLng,
      }
    : { lat: place.lat ?? 28.39, lng: place.lng ?? 84.12 }

  const startPos = hasStart ? { lat: place.trekStartLat, lng: place.trekStartLng } : null
  const endPos   = hasEnd   ? { lat: place.trekEndLat,   lng: place.trekEndLng   } : null

  if (!hasStart && !hasEnd) return null

  return (
    <div>
      {/* Route summary bar */}
      <div className="flex items-center gap-4 mb-3 flex-wrap text-sm">
        {place.trekStartPoint && (
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-600 border-2 border-emerald-800 shrink-0" />
            <span className="font-medium text-gray-700">Start:</span>
            <span className="text-gray-600">{place.trekStartPoint}</span>
          </div>
        )}
        {place.trekStartPoint && place.trekEndPoint && (
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
        {place.trekEndPoint && (
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 border-2 border-red-700 shrink-0" />
            <span className="font-medium text-gray-700">{isLoop ? 'Returns to:' : 'End:'}</span>
            <span className="text-gray-600">{place.trekEndPoint}</span>
          </div>
        )}
        {place.trekDistance && (
          <span className="ml-auto text-gray-500">
            📏 {place.trekDistance} km &nbsp;·&nbsp; 🗓 {place.trekDays} days
          </span>
        )}
      </div>

      {/* Map */}
      <div style={{ height }} className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
        <Map
          defaultCenter={center}
          defaultZoom={hasEnd && !isLoop ? 8 : 10}
          mapId={mapId}
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          {/* Dashed route line */}
          {startPos && endPos && !isLoop && (
            <TrekPolyline start={startPos} end={endPos} />
          )}

          {/* Start marker */}
          {startPos && (
            <AdvancedMarker position={startPos}>
              <LabelledPin
                color="#16a34a"
                border="#14532d"
                label={isLoop ? '▲ Start / Finish' : '▲ Start'}
              />
            </AdvancedMarker>
          )}

          {/* End marker (only if different from start) */}
          {endPos && !isLoop && (
            <AdvancedMarker position={endPos}>
              <LabelledPin
                color="#dc2626"
                border="#991b1b"
                label="⬛ End"
              />
            </AdvancedMarker>
          )}
        </Map>
      </div>

      {isLoop && (
        <p className="mt-2 text-xs text-gray-500 text-center">
          🔄 This is a loop trek — returns to the starting point
        </p>
      )}
    </div>
  )
}

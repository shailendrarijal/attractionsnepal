import { useEffect, useRef } from 'react'
import { Map, AdvancedMarker, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'

// ── Dashed polyline — connects all points in the path array ──────────────────
// If trekWaypoints are stored, the line threads through them in order.
// Otherwise it's just a straight line start → end.
function TrekPolyline({ path }) {
  const map  = useMap()
  const maps = useMapsLibrary('maps')
  const lineRef = useRef(null)

  useEffect(() => {
    if (!map || !maps || !path?.length) return
    if (lineRef.current) lineRef.current.setMap(null)

    lineRef.current = new maps.Polyline({
      path,
      strokeColor:   '#15803d',
      strokeOpacity: 0,
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

    // Fit the map to the full path — fixes the zoom issue
    const bounds = new maps.LatLngBounds()
    path.forEach((p) => bounds.extend(p))
    if (!bounds.isEmpty()) {
      map.fitBounds(bounds, { top: 70, bottom: 50, left: 60, right: 60 })
    }

    return () => {
      if (lineRef.current) {
        lineRef.current.setMap(null)
        lineRef.current = null
      }
    }
  }, [map, maps, path])

  return null
}

// ── Custom map pin ────────────────────────────────────────────────────────────
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

// ── Intermediate waypoint marker ──────────────────────────────────────────────
function WaypointMarker({ position, label }) {
  return (
    <AdvancedMarker position={position}>
      <div className="flex flex-col items-center -translate-y-full">
        <div className="px-2 py-0.5 rounded-full text-white text-[10px] font-bold border-2 shadow-md whitespace-nowrap bg-amber-600 border-amber-800">
          📍 {label}
        </div>
        <div className="w-2.5 h-2.5 rounded-full border-2 -mt-0.5 shadow bg-amber-500 border-amber-700" />
      </div>
    </AdvancedMarker>
  )
}

const NEPAL_RESTRICTION = {
  latLngBounds: { north: 31.0, south: 25.0, east: 90.0, west: 78.0 },
  strictBounds: false,
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
//
// Draws a dashed polyline between start → optional waypoints → end.
// The map auto-fits its bounds to show the full route.
//
// place.trekWaypoints (optional JSON in DB): [{lat, lng, label?}]
//   Add intermediate stops via admin to make the line more faithful to the
//   real trail without any API costs.
// ─────────────────────────────────────────────────────────────────────────────
export default function TrekRouteMap({ place, height = '380px' }) {
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID

  const hasStart = !!(place.trekStartLat && place.trekStartLng)
  const hasEnd   = !!(place.trekEndLat   && place.trekEndLng)

  const isLoop = hasStart && hasEnd &&
    Math.abs(place.trekStartLat - place.trekEndLat) < 0.001 &&
    Math.abs(place.trekStartLng - place.trekEndLng) < 0.001

  const startPos = hasStart ? { lat: place.trekStartLat, lng: place.trekStartLng } : null
  const endPos   = hasEnd   ? { lat: place.trekEndLat,   lng: place.trekEndLng   } : null

  // Intermediate waypoints stored in place.trekWaypoints JSON field
  const waypoints = Array.isArray(place.trekWaypoints) ? place.trekWaypoints : []

  // Full polyline path: start → waypoints → end
  const polylinePath = [
    startPos,
    ...waypoints.map(({ lat, lng }) => ({ lat, lng })),
    // Don't repeat end point for loop treks
    ...(endPos && !isLoop ? [endPos] : []),
  ].filter(Boolean)

  // Default centre — used only as initial position before fitBounds kicks in
  const defaultCenter = startPos ?? { lat: 28.39, lng: 84.12 }

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
        {place.trekStartPoint && place.trekEndPoint && !isLoop && (
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
            📏 {place.trekDistance} km &nbsp;·&nbsp; 🗓 {place.trekDays} {place.trekDays === 1 ? 'day' : 'days'}
          </span>
        )}
      </div>

      {/* Map */}
      <div style={{ height }} className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
        <Map
          defaultCenter={defaultCenter}
          defaultZoom={9}
          mapId={mapId}
          gestureHandling="cooperative"
          minZoom={6}
          restriction={NEPAL_RESTRICTION}
          disableDefaultUI={false}
        >
          {/* Dashed route line */}
          {polylinePath.length >= 2 && !isLoop && (
            <TrekPolyline path={polylinePath} />
          )}

          {/* For loop treks with waypoints, still draw the path */}
          {polylinePath.length >= 2 && isLoop && waypoints.length > 0 && (
            <TrekPolyline path={[...polylinePath, startPos].filter(Boolean)} />
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

          {/* Intermediate waypoint markers */}
          {waypoints.map((wp, i) =>
            wp.label ? (
              <WaypointMarker
                key={i}
                position={{ lat: wp.lat, lng: wp.lng }}
                label={wp.label}
              />
            ) : null
          )}
        </Map>
      </div>

      {isLoop && (
        <p className="mt-2 text-xs text-gray-500 text-center">
          🔄 Loop trek — returns to the starting point
        </p>
      )}
    </div>
  )
}

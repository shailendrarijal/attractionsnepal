/**
 * MapsProvider — wraps children with Google Maps APIProvider.
 * Only imported by pages that actually render a map (PlacePage,
 * ExplorePage, TripPlannerPage, ItineraryPage).
 * This keeps the heavy Maps JS SDK out of every other page's bundle.
 */
import { APIProvider } from '@vis.gl/react-google-maps'

const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY

export default function MapsProvider({ children }) {
  if (!mapsKey) return children
  return <APIProvider apiKey={mapsKey}>{children}</APIProvider>
}

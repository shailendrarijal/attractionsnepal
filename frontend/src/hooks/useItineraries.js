import { useQuery } from '@tanstack/react-query'
import { getItineraries, getItinerary } from '../lib/api'

export function useItineraries(params = {}) {
  return useQuery({
    queryKey: ['itineraries', params],
    queryFn: () => getItineraries(params),
  })
}

export function useItinerary(slug) {
  return useQuery({
    queryKey: ['itinerary', slug],
    queryFn: () => getItinerary(slug),
    enabled: !!slug,
  })
}

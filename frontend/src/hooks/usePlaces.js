import { useQuery } from '@tanstack/react-query'
import { getPlaces, getPlace } from '../lib/api'

export function usePlaces(params = {}) {
  return useQuery({
    queryKey: ['places', params],
    queryFn: () => getPlaces(params),
  })
}

export function usePlace(slug) {
  return useQuery({
    queryKey: ['place', slug],
    queryFn: () => getPlace(slug),
    enabled: !!slug,
  })
}

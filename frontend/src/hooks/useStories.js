import { useQuery } from '@tanstack/react-query'
import { getStories, getStory } from '../lib/api'

export function useStories(params = {}) {
  return useQuery({ queryKey: ['stories', params], queryFn: () => getStories(params) })
}

export function useStory(slug) {
  return useQuery({ queryKey: ['story', slug], queryFn: () => getStory(slug), enabled: !!slug })
}

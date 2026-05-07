import { useQuery } from '@tanstack/react-query'
import { getBlogs, getBlog } from '../lib/api'

export function useBlogs(params = {}) {
  return useQuery({
    queryKey: ['blogs', params],
    queryFn: () => getBlogs(params),
  })
}

export function useBlog(slug) {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => getBlog(slug),
    enabled: !!slug,
  })
}

import { useQuery } from '@tanstack/react-query'
import { getAmazonProductGroup } from '../lib/api'

export function useAmazonProducts(context) {
  return useQuery({
    queryKey: ['amazon-products', context],
    queryFn: () => getAmazonProductGroup(context),
    staleTime: 5 * 60 * 1000,  // cache for 5 min — product lists rarely change
    retry: false,
    enabled: !!context,
  })
}

import { httpClient } from '@/services/useFetch'
import { $loadError } from '@/stores/data'
import type { RegularMovie } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  if (!language) throw new Error('Language is not provided')
  return httpClient
    .get('trending/all/day', [], language)
    .then((data) => {
      return data.results
    })
    .catch(() => {
      $loadError.set(true)
      return null
    })
}

import { httpClientLocal } from '@/services/useFetchLocal'
import { $loadError } from '@/stores/data'
import type { RegularMovie } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  if (!language) throw new Error('Language is not provided')
  return httpClientLocal
    .get('trending', [], language)
    .then((data) => {
      return data
    })
    .catch(() => {
      $loadError.set(true)
      return null
    })
}

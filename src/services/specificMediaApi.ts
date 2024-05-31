import { httpClient } from '@/services/useFetch'
import { $loadError } from '@/stores/data'
import type { DetailedMovie, DetailedTv } from '@/types/index'

export const getSpecificMedia = async (
  language: string,
  mediaId: string,
  mediaType: 'movie' | 'tv',
): Promise<DetailedMovie & DetailedTv> => {
  if (!language) throw new Error('Language is not provided')
  if (!mediaId) throw new Error('Media Id is not provided')
  if (!mediaType) throw new Error('Media type is not provided')

  const params = [{ name: 'append_to_response', value: 'credits%2Csimilar' }]

  return httpClient
    .get(`${mediaType}/${mediaId}`, params, language)
    .then((data) => {
      return data
    })
    .catch(() => {
      $loadError.set(true)
      return null
    })
}

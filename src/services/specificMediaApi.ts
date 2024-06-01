import { getDataApi } from '@/services/getDataApi'
import type { DetailedMovie, DetailedTv } from '@/types/index'

export const getSpecificMedia = async (
  language: string,
  mediaId: string,
  mediaType: 'movie' | 'tv',
): Promise<DetailedMovie & DetailedTv> => {
  const params = [
    { name: 'append_to_response', value: 'credits%2Csimilarcredits%2Csimilar%2Cvideos' },
  ]
  console.log(`${mediaType}/${mediaId}`)
  return getDataApi(`${mediaType}/${mediaId}`, params, language)
}

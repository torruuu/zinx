import { getDataApi } from '@/services/getApiServices'
import type { DetailedMovie, DetailedTv } from '@/types/index'

export const getSpecificMedia = async (
  language: string,
  mediaId: string,
  mediaType: 'movie' | 'tv',
): Promise<DetailedMovie & DetailedTv> => {
  const params = [
    {
      name: 'append_to_response',
      value: 'credits%2Csimilarcredits%2Crecommendations%2Cvideos',
    },
  ]
  return getDataApi(`${mediaType}/${mediaId}`, params, language)
}

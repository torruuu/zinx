import { getDataApi } from '@/services/getDataApi'
import { SERIES_GENRES } from '@/constants/genres'
import type { RegularMedia } from '@/types/index'

export const getTrendingTv = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'trending/tv/day',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

export const getTopTv = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'tv/top_rated',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

export const getComedyTv = async (language: string): Promise<RegularMedia[]> => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.COMEDY }]
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'discover/tv',
    [...params, { name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

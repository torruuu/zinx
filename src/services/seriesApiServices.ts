import { getDataApi } from '@/services/getDataApi'
import type { RegularMedia } from '@/types/index'

export const getTrendingTv = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'trending/tv/day',
    [],
    language,
  )
  return results
}

export const getTopTv = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'tv/top_rated',
    [],
    language,
  )
  return results
}

export const getComedyTv = async (language: string): Promise<RegularMedia[]> => {
  const params = [{ name: 'with_genres', value: '35' }]
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'discover/tv',
    params,
    language,
  )
  return results
}

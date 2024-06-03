import { getDataApi } from '@/services/getDataApi'
import type { RegularMedia } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'trending/all/day',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

export const getPopularMovies = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'movie/popular',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

export const getPopularTv = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'tv/popular',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

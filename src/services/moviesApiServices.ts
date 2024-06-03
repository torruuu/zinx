import { getDataApi } from '@/services/getDataApi'
import type { RegularMedia } from '@/types/index'

export const getTrendingMovies = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'trending/movie/day',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

export const getTopMovies = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'movie/top_rated',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

export const getTheatersMovies = async (language: string): Promise<RegularMedia[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    'movie/now_playing',
    [{ name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return results
}

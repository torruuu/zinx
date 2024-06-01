import { getDataApi } from '@/services/getDataApi'
import type { RegularMovie } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMovie[] }>(
    'trending/all/day',
    [],
    language,
  )
  return results
}

export const getPopularMovies = async (language: string): Promise<RegularMovie[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMovie[] }>(
    'movie/popular',
    [],
    language,
  )
  return results
}

export const getPopularTv = async (language: string): Promise<RegularMovie[]> => {
  const { results } = await getDataApi<{ page: string; results: RegularMovie[] }>(
    'tv/popular',
    [],
    language,
  )
  return results
}

import { getDataApi } from '@/services/getDataApi'
import type { RegularMovie } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> =>
  getDataApi('trending/all/day', [], language)

export const getPopularMovies = async (language: string): Promise<RegularMovie[]> =>
  getDataApi('movie/popular', [], language)

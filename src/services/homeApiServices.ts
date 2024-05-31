import { getDataLocal } from '@/services/getDataApiLocal'
import type { RegularMovie } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> =>
  getDataLocal('trending', [], language)

export const getPopularMovies = async (language: string): Promise<RegularMovie[]> =>
  getDataLocal('popular-movies', [], language)

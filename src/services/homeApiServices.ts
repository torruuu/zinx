import { getService } from '@/services/getApiServices'
import type { ui } from '@/types/index'

export const getTrendingMedia = (language: keyof typeof ui) =>
  getService('trending/all/day', 'title.trend', language)

export const getPopularMovies = (language: keyof typeof ui) =>
  getService('movie/popular', 'movies.popular', language, [], 'movie')

export const getPopularTv = (language: keyof typeof ui) =>
  getService('tv/popular', 'tv.popular', language, [], 'tv')

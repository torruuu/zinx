import { getService } from '@/services/getApiServices'
import type { ui } from '@/types/index'

export const getTrendingMovies = (language: keyof typeof ui) =>
  getService('trending/movie/day', 'movies.trend', language, [], 'movie')

export const getTopMovies = (language: keyof typeof ui) =>
  getService('movie/top_rated', 'movies.top', language, [], 'movie')

export const getTheatersMovies = (language: keyof typeof ui) =>
  getService('movie/now_playing', 'movies.theaters', language, [], 'movie')

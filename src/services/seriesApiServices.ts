import { getService } from '@/services/getApiServices'
import { SERIES_GENRES } from '@/constants/genres'
import type { ui } from '@/types/index'

export const getTrendingTv = (language: keyof typeof ui) =>
  getService('trending/tv/day', 'tv.trend', language, [], 'tv')

export const getTopTv = (language: keyof typeof ui) =>
  getService('tv/top_rated', 'tv.top', language, [], 'tv')

export const getComedyTv = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.COMEDY }]
  return getService('discover/tv', 'title.comedy', language, params, 'tv')
}

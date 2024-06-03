import { getService } from '@/services/getApiServices'
import { MOVIES_GENRES, SERIES_GENRES } from '@/constants/genres'
import type { ui } from '@/types/index'

// GENERAL
export const getTrendingMedia = (language: keyof typeof ui) =>
  getService('trending/all/day', 'title.trend', language)

// MOVIES
export const getPopularMovies = (language: keyof typeof ui) =>
  getService('movie/popular', 'movies.popular', language, [], 'movie')

export const getTrendingMovies = (language: keyof typeof ui) =>
  getService('trending/movie/day', 'movies.trend', language, [], 'movie')

export const getTopMovies = (language: keyof typeof ui) =>
  getService('movie/top_rated', 'movies.top', language, [], 'movie')

export const getTheatersMovies = (language: keyof typeof ui) =>
  getService('movie/now_playing', 'movies.theaters', language, [], 'movie')

export const getActionMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.ACTION }]
  return getService('discover/movie', 'movies.action', language, params, 'movie')
}

export const getCrimeMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.CRIME }]
  return getService('discover/movie', 'movies.crime', language, params, 'movie')
}

export const getDramaMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.DRAMA }]
  return getService('discover/movie', 'movies.drama', language, params, 'movie')
}

export const getHistoryMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.HISTORY }]
  return getService('discover/movie', 'movies.history', language, params, 'movie')
}

export const getHorrorMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.HORROR }]
  return getService('discover/movie', 'movies.horror', language, params, 'movie')
}

export const getMisteryMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.MYSTERY }]
  return getService('discover/movie', 'movies.mistery', language, params, 'movie')
}

export const getSciFiMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.SCIENCE_FICTION }]
  return getService('discover/movie', 'movies.scifi', language, params, 'movie')
}

export const getWarMovies = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: MOVIES_GENRES.WAR }]
  return getService('discover/movie', 'movies.war', language, params, 'movie')
}

// SERIES
export const getPopularTv = (language: keyof typeof ui) =>
  getService('tv/popular', 'tv.popular', language, [], 'tv')

export const getTrendingTv = (language: keyof typeof ui) =>
  getService('trending/tv/day', 'tv.trend', language, [], 'tv')

export const getTopTv = (language: keyof typeof ui) =>
  getService('tv/top_rated', 'tv.top', language, [], 'tv')

export const getAnimationTv = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.ANIMATION }]
  return getService('discover/tv', 'tv.animation', language, params, 'tv')
}

export const getComedyTv = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.COMEDY }]
  return getService('discover/tv', 'tv.comedy', language, params, 'tv')
}

export const getDocumentaryTv = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.DOCUMENTARY }]
  return getService('discover/tv', 'tv.documentary', language, params, 'tv')
}

export const getFamilyTv = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.FAMILY }]
  return getService('discover/tv', 'tv.family', language, params, 'tv')
}

export const getSoapTv = (language: keyof typeof ui) => {
  const params = [{ name: 'with_genres', value: SERIES_GENRES.SOAP }]
  return getService('discover/tv', 'tv.soap', language, params, 'tv')
}

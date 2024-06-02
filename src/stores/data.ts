import { atom, computed, map } from 'nanostores'
import {
  getTrendingMedia,
  getPopularMovies,
  getPopularTv,
} from '@/services/homeApiServices'
import {
  getTrendingMovies,
  getTopMovies,
  getTheatersMovies,
} from '@/services/moviesApiServices'
import { getTrendingTv, getTopTv, getComedyTv } from '@/services/seriesApiServices'
import type { WritableAtom } from 'nanostores'
import type { HomeBlock, MoviesBlock, SeriesBlock, ui } from '@/types'

export const $loadError = atom<boolean>(false)

// Cargar datos de la Home
export const $homeBlock = map<HomeBlock>()

export const setHomeData = async (lang: keyof typeof ui) => {
  const trendingData = await getTrendingMedia(lang)
  const popularMovies = await getPopularMovies(lang)
  const popularTv = await getPopularTv(lang)
  $homeBlock.setKey('trending', trendingData)
  $homeBlock.setKey('popularMovies', popularMovies)
  $homeBlock.setKey('popularTv', popularTv)
  $homeBlock.setKey('language', lang)
}

// Cargar datos de Movies
export const $moviesBlock = map<MoviesBlock>()

export const setSeriesData = async (lang: keyof typeof ui) => {
  const trendingTv = await getTrendingTv(lang)
  const topTv = await getTopTv(lang)
  const comedyTv = await getComedyTv(lang)
  $seriesBlock.setKey('trending', trendingTv)
  $seriesBlock.setKey('top', topTv)
  $seriesBlock.setKey('comedy', comedyTv)
  $seriesBlock.setKey('language', lang)
}

// Cargar datos de Series
export const $seriesBlock = map<SeriesBlock>()

export const setMoviesData = async (lang: keyof typeof ui) => {
  const trendingMovies = await getTrendingMovies(lang)
  const topMovies = await getTopMovies(lang)
  const theatersMovies = await getTheatersMovies(lang)
  $moviesBlock.setKey('trending', trendingMovies)
  $moviesBlock.setKey('top', topMovies)
  $moviesBlock.setKey('theaters', theatersMovies)
  $moviesBlock.setKey('language', lang)
}

// Controlamos el mounted de los componentes del banner del Main Section
export const $mainBannerMounted = atom<boolean>(false)
export const $bannerBgMounted = atom<boolean>(false)

export const $mainSectionMounted = computed<boolean, WritableAtom<boolean>[]>(
  [$mainBannerMounted, $bannerBgMounted],
  () => {
    return $mainBannerMounted.get() && $bannerBgMounted.get()
  },
)

import { atom, computed, map } from 'nanostores'
import { useTranslations } from '@/i18n/utils'
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
  const [trendingData, popularMovies, popularTv] = await Promise.all([
    getTrendingMedia(lang),
    getPopularMovies(lang),
    getPopularTv(lang),
  ])
  const t = useTranslations(lang)
  $homeBlock.setKey('mainSection', { title: t('title.trend'), media: trendingData })
  $homeBlock.setKey('regularSections', [
    { title: t('movies.popular'), media: popularMovies, type: 'movie' },
    { title: t('tv.popular'), media: popularTv, type: 'tv' },
  ])
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

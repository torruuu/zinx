import { atom, computed, map } from 'nanostores'
import { shuffleArray } from '@/composables/shuffleArray'
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
import type { MainPage, ui } from '@/types'

export const $loadError = atom<boolean>(false)

// Cargar datos de la Home
export const $homeBlock = map<MainPage>()

export const setHomeData = async (lang: keyof typeof ui) => {
  const [mainSection, ...regularSections] = await Promise.all([
    getTrendingMedia(lang),
    getPopularMovies(lang),
    getPopularTv(lang),
  ])
  $homeBlock.setKey('mainSection', mainSection)
  $homeBlock.setKey('regularSections', shuffleArray(regularSections))
  $homeBlock.setKey('language', lang)
}

// Cargar datos de Movies
export const $moviesBlock = map<MainPage>()

export const setSeriesData = async (lang: keyof typeof ui) => {
  const [mainSection, ...regularSections] = await Promise.all([
    getTopTv(lang),
    getTrendingTv(lang),
    getComedyTv(lang),
  ])
  $seriesBlock.setKey('mainSection', mainSection)
  $seriesBlock.setKey('regularSections', shuffleArray(regularSections))
  $seriesBlock.setKey('language', lang)
}

// Cargar datos de Series
export const $seriesBlock = map<MainPage>()

export const setMoviesData = async (lang: keyof typeof ui) => {
  const [trending, ...regularSections] = await Promise.all([
    getTrendingMovies(lang),
    getTopMovies(lang),
    getTheatersMovies(lang),
  ])

  $moviesBlock.setKey('mainSection', trending)
  $moviesBlock.setKey('regularSections', shuffleArray(regularSections))
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

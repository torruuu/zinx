import { atom, computed, map } from 'nanostores'
import { getTrendingMedia, getPopularMovies } from '@/services/homeApiServices'
import type { WritableAtom } from 'nanostores'
import type { HomeBlock, ui } from '@/types'

export const $loadError = atom<boolean>(false)

// Cargar datos de la Home
export const $homeBlock = map<HomeBlock>()

export const setHomeData = async (lang: keyof typeof ui) => {
  const trendingData = await getTrendingMedia(lang)
  const popularMovies = await getPopularMovies(lang)
  $homeBlock.setKey('trending', trendingData)
  $homeBlock.setKey('popularMovies', popularMovies)
  $homeBlock.setKey('language', lang)
}

// Controlamos el mounted de los componentes del banner de la Home
export const $mainBannerMounted = atom<boolean>(false)
export const $bannerBgMounted = atom<boolean>(false)

export const $homeMounted = computed<boolean, WritableAtom<boolean>[]>(
  [$mainBannerMounted, $bannerBgMounted],
  () => {
    return $mainBannerMounted.get() && $bannerBgMounted.get()
  },
)

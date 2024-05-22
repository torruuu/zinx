import { atom, computed, map } from 'nanostores'
import { getTrendingMedia } from '@/services/trendingMediaApi'
import type { WritableAtom } from 'nanostores'
import type { HomeBlock } from '@/types'

export const $loadError = atom<boolean>(false)

// Cargar datos de la Home
export const $homeBlock = map<HomeBlock>()

export const setHomeData = async (lang: string) => {
  const trendingData = await getTrendingMedia(lang)
  $homeBlock.setKey('trending', trendingData)
}

// Controlamos el mounted de los componentes de la Home
export const $mainBannerMounted = atom<boolean>(false)
export const $bannerSliderMounted = atom<boolean>(false)
export const $bannerDescriptionMounted = atom<boolean>(false)
export const $bannerBgMounted = atom<boolean>(false)

export const $homeMounted = computed<boolean, WritableAtom<boolean>[]>(
  [$mainBannerMounted, $bannerSliderMounted, $bannerDescriptionMounted, $bannerBgMounted],
  () => {
    return (
      $mainBannerMounted.get() &&
      $bannerSliderMounted.get() &&
      $bannerDescriptionMounted.get() &&
      $bannerBgMounted.get()
    )
  },
)

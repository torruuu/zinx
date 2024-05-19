import { atom, computed } from 'nanostores'
import type { WritableAtom } from 'nanostores'

export const $loadError = atom<boolean>(false)

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

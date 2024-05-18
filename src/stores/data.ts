import { atom, computed, onMount } from 'nanostores'
import type { WritableAtom } from 'nanostores'

const MAX_WAIT_TIME = 5000

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

onMount($homeMounted, () => {
  setTimeout(async () => {
    if (!$homeMounted.get()) $loadError.set(true)
  }, MAX_WAIT_TIME)
})

import type { RegularSliderMedia, ui } from '@/types'

export type MainPage = {
  mainSection: RegularSliderMedia
  regularSections: RegularSliderMedia[]
  language: keyof typeof ui
}

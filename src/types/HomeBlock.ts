import type { RegularSliderMedia, ui } from '@/types'

export type HomeBlock = {
  mainSection: RegularSliderMedia
  regularSections: RegularSliderMedia[]
  language: keyof typeof ui
}

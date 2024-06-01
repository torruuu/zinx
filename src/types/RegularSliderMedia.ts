import type { RegularMedia } from '@/types/RegularMedia'

export type RegularSliderMedia = {
  title: string
  media: RegularMedia[]
  type?: 'movie' | 'tv'
}

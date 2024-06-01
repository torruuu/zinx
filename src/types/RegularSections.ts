import type { RegularMedia } from '@/types/RegularMedia'

export type RegularSections = {
  title: string
  media: RegularMedia[]
  type?: 'movie' | 'tv'
}[]

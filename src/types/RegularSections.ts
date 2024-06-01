import type { RegularMovie } from '@/types/RegularMovie'

export type RegularSections = {
  title: string
  media: RegularMovie[]
  type?: 'movie' | 'tv'
}[]

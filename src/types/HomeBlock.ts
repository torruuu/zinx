import type { RegularMovie, ui } from '@/types'

export type HomeBlock = {
  trending: RegularMovie[]
  popularMovies: RegularMovie[]
  language: keyof typeof ui
}

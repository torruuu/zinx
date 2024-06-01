import type { RegularMedia, ui } from '@/types'

export type HomeBlock = {
  trending: RegularMedia[]
  popularMovies: RegularMedia[]
  popularTv: RegularMedia[]
  language: keyof typeof ui
}

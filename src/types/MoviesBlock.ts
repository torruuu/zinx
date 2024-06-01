import type { RegularMedia, ui } from '@/types'

export type MoviesBlock = {
  trending: RegularMedia[]
  top: RegularMedia[]
  theaters: RegularMedia[]
  language: keyof typeof ui
}

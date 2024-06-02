import type { RegularMedia, ui } from '@/types'

export type SeriesBlock = {
  trending: RegularMedia[]
  top: RegularMedia[]
  comedy: RegularMedia[]
  language: keyof typeof ui
}

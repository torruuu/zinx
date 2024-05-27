import type { RegularMovie, ui } from '@/types'

export type HomeBlock = {
  trending: RegularMovie[]
  language: keyof typeof ui
}

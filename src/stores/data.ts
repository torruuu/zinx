import { getTrendingMedia } from '@/services/trendingMediaApi'
import { atom } from 'nanostores'
import type { RegularMovie } from '@/types/RegularMovie'

export const setBlocksData = async (lang: string) => {
  $trendingMedia.set(await getTrendingMedia(lang))
}

export const $trendingMedia = atom<RegularMovie[]>([])

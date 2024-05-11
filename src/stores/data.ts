import { getTrendingMedia } from '@/services/trendingMediaApi'
import { atom } from 'nanostores'
import type { RegularMovie } from '@/types/index'

export const setBlocksData = async (lang: string) => {
  $trendingMedia.set(await getTrendingMedia(lang))
}

export const $trendingMedia = atom<RegularMovie[]>([])

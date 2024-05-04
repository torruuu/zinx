import { getTrendingMedia } from '@/services/trendingMediaApi'
import { atom } from 'nanostores'
import type { RegularMovie } from '@/types/RegularMovie'
import { $language } from './language'

export const setBlocksData = async (lang: string) => {
  $trendingMedia.set(await getTrendingMedia(lang))
}

export const $trendingMedia = atom<RegularMovie[]>(
  await getTrendingMedia($language.value),
)

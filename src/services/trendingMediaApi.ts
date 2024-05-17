import { httpClientLocal } from '@/services/useFetchLocal'
import { needsUpdate } from '@/composables/checkStoreUpdate'
import { $loadError } from '@/stores/data'
import type { RegularMovie } from '@/types/index'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  if (!language) throw new Error('Language is not provided')
  const storedTrendingMedia = JSON.parse(
    window.sessionStorage.getItem(`trending_media_${language}`) || 'null',
  )
  if (storedTrendingMedia && !needsUpdate(storedTrendingMedia.date))
    return storedTrendingMedia.data

  return httpClientLocal
    .get('trending', [], language)
    .then((data) => {
      sessionStorage.setItem(
        `trending_media_${language}`,
        JSON.stringify({ data, lang: language, date: new Date() }),
      )
      return data
    })
    .catch(() => {
      $loadError.set(true)
      return null
    })
}

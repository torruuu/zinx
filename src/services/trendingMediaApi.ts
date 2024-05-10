import { httpClientLocal } from '@/services/useFetchLocal'
import { needsUpdate } from '@/composables/checkStoreUpdate'
import type { RegularMovie } from '@/types/RegularMovie'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  const storedTrendingMedia = window.sessionStorage.getItem(`trending_media_${language}`)
  if (storedTrendingMedia) {
    const { data: storedData, lang: storedLang, date } = JSON.parse(storedTrendingMedia)
    const updateStore = needsUpdate(date)
    if (language === storedLang && !updateStore) return storedData
  }
  const data = await httpClientLocal.get('trending', [], language)
  const now = new Date()
  sessionStorage.setItem(
    `trending_media_${language}`,
    JSON.stringify({ data, lang: language, date: now }),
  )
  return data
}

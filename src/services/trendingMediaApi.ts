import { httpClientLocal } from '@/services/useFetchLocal'
import { needsUpdate } from '@/composables/checkStoreUpdate'
import type { RegularMovie } from '@/types/RegularMovie'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  const storedTrendingMedia = window.sessionStorage.getItem('trendingMedia')
  if (storedTrendingMedia) {
    const { data: storedData, lang: storedLang, date } = JSON.parse(storedTrendingMedia)
    const updateStore = needsUpdate(date)
    if (language === storedLang && !updateStore) return storedData
  }
  const data = await httpClientLocal.get('trending', [], language)
  const now = new Date()
  sessionStorage.setItem(
    'trendingMedia',
    JSON.stringify({ data, lang: language, date: now }),
  )
  return data
}

import { httpClient } from './useFetch'
import { needsUpdate } from '@/composables/checkStoreUpdate'
import type { RegularMovie } from '@/types/RegularMovie'

export const getTrendingMedia = async (language: string): Promise<RegularMovie[]> => {
  const storedTrendingMedia = window.sessionStorage.getItem('trendingMedia')
  if (storedTrendingMedia) {
    const { results, lang: storedLang, date } = JSON.parse(storedTrendingMedia)
    const updateStore = needsUpdate(date)
    console.log(JSON.parse(storedTrendingMedia))
    if (language === storedLang && !updateStore) return results
  }
  console.log('fetch')
  const { results } = await httpClient.get('trending/all/day', [], language)
  const now = new Date()
  sessionStorage.setItem(
    'trendingMedia',
    JSON.stringify({ results, lang: language, date: now }),
  )
  return results
}

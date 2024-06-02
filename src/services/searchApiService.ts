import { getDataApi } from '@/services/getDataApi'
import { concatArrays } from '@/composables/concatArrays'
import type { RegularMedia } from '@/types/index'

export const searchMedia = async (
  query: string | null,
  language: string,
): Promise<RegularMedia[]> => {
  const params = query ? [{ name: 'query', value: query }] : []

  const fetchData = async (endpoint: string, mediaType: 'tv' | 'movie') => {
    const { results } = await getDataApi<{ results: RegularMedia[] }>(
      endpoint,
      params,
      language,
    )
    return results.map((media) => ({ ...media, media_type: mediaType }))
  }

  const [resultsTv, resultsMovies] = await Promise.all([
    fetchData('search/tv', 'tv'),
    fetchData('search/movie', 'movie'),
  ])

  return concatArrays(resultsTv, resultsMovies)
}

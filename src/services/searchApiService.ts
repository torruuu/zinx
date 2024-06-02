import { getDataApi } from '@/services/getDataApi'
import type { RegularMedia } from '@/types/index'

export const searchMedia = async (
  query: string | null,
  language: string,
): Promise<RegularMedia[]> => {
  const params = query ? [{ name: 'query', value: query }] : []

  const fetchData = async (endpoint: string, mediaType: 'tv' | 'movie', page: number) => {
    const { results } = await getDataApi<{ results: RegularMedia[] }>(
      endpoint,
      [...params, { name: 'page', value: page.toString() }],
      language,
    )
    return results.map((media) => ({ ...media, media_type: mediaType }))
  }

  const fetchAllPages = async (endpoint: string, mediaType: 'tv' | 'movie') => {
    const promises: Promise<RegularMedia[]>[] = []
    for (let i = 1; i <= 5; i++) {
      promises.push(fetchData(endpoint, mediaType, i))
    }
    return await Promise.all(promises)
  }

  const [resultsTvPages, resultsMoviesPages] = await Promise.all([
    fetchAllPages('search/tv', 'tv'),
    fetchAllPages('search/movie', 'movie'),
  ])

  const allResults = resultsTvPages
    .concat(resultsMoviesPages)
    .flat()
    .filter((media) => media.backdrop_path)
  return allResults.sort((a, b) => b.popularity - a.popularity)
}

import { httpClient } from './useFetch'

export const getTrendingMedia = async (lang) => {
  const { results } = await httpClient.get('trending/all/day', [], lang)
  return results
}

import { httpClient } from '@/services/useFetch'
import { $loadError } from '@/stores/data'

export const getDataApi = async <T>(
  service: string,
  params: { name: string; value: string }[] = [],
  language: string,
): Promise<T> => {
  if (!service) throw new Error('Service is not provided')
  if (!language) throw new Error('Language is not provided')
  return httpClient
    .get(service, params, language)
    .then((data: T) => {
      return data
    })
    .catch(() => {
      $loadError.set(true)
      return null as T
    })
}

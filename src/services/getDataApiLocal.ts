import { httpClientLocal } from '@/services/useFetchLocal'
import { $loadError } from '@/stores/data'

export const getDataLocal = async <T>(
  service: string,
  params: { name: string; value: string }[] = [],
  language: string,
): Promise<T> => {
  if (!service) throw new Error('Service is not provided')
  if (!language) throw new Error('Language is not provided')
  return httpClientLocal
    .get(service, params, language)
    .then((data: T) => {
      return data
    })
    .catch(() => {
      $loadError.set(true)
      return null as T
    })
}

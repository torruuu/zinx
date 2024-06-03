import { httpClient } from '@/services/useFetch'
import { $loadError } from '@/stores/data'
import { useTranslations } from '@/i18n/utils'
import { defaultLang } from '@/i18n/ui'
import type { RegularSliderMedia, RegularMedia, ui } from '@/types/index'

type TitleKeys = keyof (typeof ui)[typeof defaultLang]

export const getDataApi = async <T>(
  service: string,
  params: { [key: string]: string }[] = [],
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

export const getService = async (
  endpoint: string,
  titleKey: TitleKeys,
  language: keyof typeof ui,
  params: { [key: string]: string }[] = [],
  type?: 'movie' | 'tv',
): Promise<RegularSliderMedia> => {
  const t = useTranslations(language)
  const { results } = await getDataApi<{ page: string; results: RegularMedia[] }>(
    endpoint,
    [...params, { name: 'page', value: (Math.floor(Math.random() * 5) + 1).toString() }],
    language,
  )
  return { title: t(titleKey), media: results, type }
}

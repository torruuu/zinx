import { ui, genres, defaultLang } from '@/i18n/ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    const langTranslations = ui[lang] as { [key: string]: string }
    const defaultTranslations = ui[defaultLang] as { [key: string]: string }

    return langTranslations[key] || defaultTranslations[key]
  }
}

export function useGenres(lang: keyof typeof genres) {
  return function g(key: keyof (typeof genres)[typeof defaultLang]) {
    const langGenres = genres[lang] as {
      [key: string]: { id: number; name: string }[]
    }
    const defaultGenres = genres[defaultLang] as {
      [key: string]: { id: number; name: string }[]
    }

    return langGenres[key] || defaultGenres[key]
  }
}

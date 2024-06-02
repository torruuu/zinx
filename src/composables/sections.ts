import { useTranslations } from '@/i18n/utils'
import type { ui } from '@/types/index'

export const SECTION_IDS = {
  HOME: 'home',
  MOVIES: 'movies',
  SERIES: 'series',
  SEARCH: 'search',
}

export const getSections = (lang: keyof typeof ui) => {
  const t = useTranslations(lang)
  return [
    { title: t('nav.home'), route: `/${lang}`, id: SECTION_IDS.HOME },
    { title: t('nav.movies'), route: `/${lang}/movies`, id: SECTION_IDS.MOVIES },
    { title: t('nav.series'), route: `/${lang}/series`, id: SECTION_IDS.SERIES },
  ]
}

export const getSectionByRoute = (url: URL, lang: keyof typeof ui) => {
  const routeToFind = url.pathname
  const sections = getSections(lang)
  return sections.find((section) => section.route === routeToFind.replace(/\/$/, ''))
}

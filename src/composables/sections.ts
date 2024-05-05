import { useTranslations } from '@/i18n/utils'
import { ui } from '@/i18n/ui'

export const getSections = (lang: keyof typeof ui) => {
  const t = useTranslations(lang)
  return [
    { title: t('nav.home'), route: `/${lang}` },
    { title: t('nav.movies'), route: `/${lang}/movies` },
    { title: t('nav.series'), route: `/${lang}/series` },
    { title: t('nav.explore'), route: `/${lang}/explore` },
  ]
}

export const getSectionByRoute = (routeToFind: string, lang: keyof typeof ui) => {
  const sections = getSections(lang)
  return sections.find((section) => section.route === routeToFind.replace(/\/$/, ''))
}

import { useTranslations } from '@/i18n/utils'
import type { Credits, CastMember, ui } from '@/types'

const DEPARTMENTS = {
  DIRECTING: 'Directing',
  ACTING: 'Acting',
  WRITING: 'Writing',
}

const removeDuplicates = (array: CastMember[]) => {
  const nombresUnicos = new Set()
  return array.filter(
    (object) => !nombresUnicos.has(object.name) && nombresUnicos.add(object.name),
  )
}

const findMembers = (
  members: CastMember[],
  department: string,
  limit: number,
  title: string,
) => {
  const filteredDuplicates = removeDuplicates(members)
  const filteredMembers = filteredDuplicates
    .filter((member) => member.known_for_department === department)
    .slice(0, limit)
    .map((member) => member.name)
    .join(', ')

  return { title, members: filteredMembers }
}

export const getFilteredCredits = (credits: Credits, lang: keyof typeof ui) => {
  const { cast, crew } = credits
  const t = useTranslations(lang)
  const directing = findMembers(
    crew,
    DEPARTMENTS.DIRECTING,
    5,
    t('media-detail.director'),
  )
  const acting = findMembers(cast, DEPARTMENTS.ACTING, 5, t('media-detail.actors'))
  const writing = findMembers(crew, DEPARTMENTS.WRITING, 5, t('media-detail.script'))

  return [directing, acting, writing]
}

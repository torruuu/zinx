import type { Credits } from '@/types'

const DEPARTMENTS = {
  DIRECTING: 'Directing',
  ACTING: 'Acting',
  WRITING: 'Writing',
}

export const getFilteredCredits = (credits: Credits) => {
  const { cast, crew } = credits

  const directing = crew.find(
    (member) => member.known_for_department === DEPARTMENTS.DIRECTING,
  )
  const acting = cast
    .filter((member) => member.known_for_department === DEPARTMENTS.ACTING)
    .slice(0, 5)
  const writing = crew
    .filter((member) => member.known_for_department === DEPARTMENTS.WRITING)
    .slice(0, 5)

  return { directing, acting, writing }
}

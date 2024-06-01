import type { Video } from '@/types'

const TRAILER = 'Trailer'
const YOUTUBE = 'YouTube'
const URL = 'https://www.youtube.com/embed/'

export const getYoutubeUrl = (videos: Video[], lang: string): string | null => {
  const result = videos.find(
    (video) =>
      video.type === TRAILER && video.iso_639_1 === lang && video.site === YOUTUBE,
  )
  return result
    ? `${URL}${result?.key}?autoplay=1&hl=${lang}&cc_lang_pref=${lang}&rel=0`
    : null
}

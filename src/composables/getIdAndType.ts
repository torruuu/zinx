const MEDIA_TYPES = {
  MOVIE: 'movie',
  TV: 'tv',
}

export function extractIdAndType(url: URL): { id: string; type: 'movie' | 'tv' } | null {
  const [, , mediaSegment] = url.pathname.split('/')
  const [, idType] = mediaSegment.split('=')
  const [id, type] = idType.split('-') as [string, 'movie' | 'tv']

  if (type !== MEDIA_TYPES.MOVIE && type !== MEDIA_TYPES.TV) {
    return null
  }

  return { id, type }
}

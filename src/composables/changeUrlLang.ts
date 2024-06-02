export const changeUrlLang = (url: URL, newLang: string): string => {
  const { pathname, search } = url
  const segments = pathname.split('/').filter(Boolean)
  segments[0] = newLang
  const result = `/${segments.join('/')}`
  return `${result.toString()}${search}`
}

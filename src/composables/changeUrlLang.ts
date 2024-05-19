export const changeUrlLang = (url: string, newLang: string): string => {
  const segments = url.split('/').filter(Boolean)
  segments[0] = newLang
  url = `/${segments.join('/')}`
  return url.toString()
}

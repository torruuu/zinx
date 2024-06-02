export const getQuery = (url: URL, param: string): string | null => {
  return url.searchParams.get(param)
}

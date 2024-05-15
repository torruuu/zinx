export function needsUpdate(lastUpdate: string | null, expirationMinutes = 1): boolean {
  if (!lastUpdate) throw new Error('Resource is not provided')
  const diffInMinutes =
    (new Date().getTime() - new Date(lastUpdate).getTime()) / (1000 * 60)
  return diffInMinutes >= expirationMinutes
}

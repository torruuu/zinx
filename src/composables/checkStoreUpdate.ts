export function needsUpdate(lastUpdate: string | null, expirationMinutes = 1): boolean {
  if (!lastUpdate) throw new Error('Resource is not provided')
  const now = new Date()
  const lastUpdateTime = new Date(lastUpdate)
  const diffInMinutes = (now.getTime() - lastUpdateTime.getTime()) / (1000 * 60) // Diferencia en minutos
  return diffInMinutes >= expirationMinutes
}

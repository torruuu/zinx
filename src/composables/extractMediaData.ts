export const getHours = (minutes: number) => Math.floor(minutes / 60)

export const getRestMinutes = (minutes: number) => minutes % 60

export const getYear = (date: string) => date.split('-')[0]

export const concatStrings = (...strings: string[]) => {
  const nonEmptyStrings = strings.filter((str) => str !== '')
  return nonEmptyStrings.join(' - ')
}

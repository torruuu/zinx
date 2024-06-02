export const concatArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = []
  const maxLength = Math.max(...arrays.map((arr) => arr.length))
  for (let i = 0; i < maxLength; i++) {
    arrays.forEach((arr) => {
      if (i < arr.length) {
        result.push(arr[i])
      }
    })
  }
  return result
}

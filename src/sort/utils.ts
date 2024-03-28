export function generateArray(size: number = 100000) {
  const result = []
  for (let index = 0; index < size; index++) {
    const number = Math.round(Math.random() * 1000)
    result.push(number)
  }
  return result
}
export function generateArray() {
  const result = []
  for (let index = 0; index < 100000; index++) {
    const number = Math.round(Math.random()*1000)
    result.push(number)
  }
  return result
}
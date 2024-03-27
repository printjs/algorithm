function generateListSorted(size: number = 10, order:"asc"| "desc" = "asc") {
  const desc = order === "desc"
  let i = 0
  const list:number[] = []
  for(desc ? i = size - 1 :i = 0; desc ? i >= 0 : i < size; desc ? i--:i++) {
    list.push(i)
  }
  return list
}


console.log(generateListSorted(10))
console.log(generateListSorted(10, "desc"))


function binarySearch(list: number[], target: number, order: "asc" | "desc" = "asc") {
  const desc = order === "desc"
  const result = {
    target,
    index: -1,
  }
  let i = 0
  let j = list.length
  while (i < j) {
    const m = Math.round((i + j) / 2)
    if(list[m] > target) {
      desc ? i = m : j = m
      continue
    } else if(list[m] < target) {
      desc ? j = m : i = m
      continue
    } else {
      result.index = m
      break
    }
  }
  return result
}

console.log(JSON.stringify(binarySearch(generateListSorted(11, "desc"), 6, "desc")))

function insertTargetIntoListSorted(list: number[], target: number) {
  let i = 0
  let j = list.length
  let insertIndex = 0
  while (i < j) {
    const m = Math.round((i + j) / 2)
    if(list[m] > target) {
      j = m
    } else if(list[m] < target) {
      i = m
    } else {
      insertIndex = m
      for(let k = m - 1; k > 0; k--) {
        if(list[k] === target) {
          continue
        } else {
          insertIndex = k + 1
          break
        }
      }
      break
    }
    insertIndex = i - 1
  }
  return insertIndex
}

const target = 6
const listSorted = generateListSorted(100)
let index = insertTargetIntoListSorted(listSorted, target)
console.log(index)

listSorted.splice(index, 0, target)
console.log(listSorted)

index = insertTargetIntoListSorted(listSorted, target)
console.log(index)

listSorted.splice(index, 0, target)
console.log(listSorted)


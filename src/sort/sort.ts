import { generateArray } from "./utils";

// 生序
class Sort {
  private target: number[] = []
  constructor(target: number[]) {
    this.target = target
    console.log(`original result: ${JSON.stringify(this.target)}`)
  }

  selectionSort() {
    const list = this.target.slice(0)
    for(let i = 0; i < list.length; i++) {
      let min = i
      let selection = list[i]
      for(let j= i+ 1; j < list.length; j++) {
        const current = list[j]
        if(selection > current) {
          selection = current
          min = j
        }
      }
      const temp = list[i]
      list[i] = list[min]
      list[min] = temp
    }
    return list
  }
}

const sortInstance = new Sort(generateArray())

console.log(`Selection Result: ${JSON.stringify(sortInstance.selectionSort())}`)

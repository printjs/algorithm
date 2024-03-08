import dayjs from "dayjs";
import { generateArray } from "./utils";

// 生序
class Sort {
  private target: number[] = []
  constructor(target: number[]) {
    this.target = target
    // console.log(`original result: ${JSON.stringify(this.target)}`)
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

  insertionSort() {
    const list = this.target.slice(0)
    for(let i = 0; i < list.length; i++) {
      for(let j = i + 1; j > 0 && list[j] < list[j-1]; j--) {
        const min = list[j]
        list[j] = list[j - 1]
        list[j - 1] = min
      }
    }
    return list
  }

  shellSort() {
    const list = this.target.slice(0)
    const {length} = list
    let n = Math.floor(length / 4)
    while(n >= 1) {
      for(let i = n; i < length; i++) {
        for(let j = i; j >= n && list[j] < list[j - n];j -= n) {
          const temp = list[j]
          list[j] = list[j - n]
          list[j-n] = temp
        }
      }
      n = Math.floor(n / 2)
    }
    return list
  }

  mergeSort() {
    const list = this.target.slice(0)
  }

  private mergeSortSubMethod(list: number[]) {
    const {length} = list
    const mid = Math.floor(length / 2)
    this.merge(0, mid, list)
    this.merge(mid, length - 1, list)
    this.sort(0, mid, length - 1, list)
  }

  private merge(left: number, right: number, list: number[]) {
    
  }

  private sort(left: number, mid: number, right: number, list: number[]) {

  }
}

const sortInstance = new Sort(generateArray())

class SortCompare {
  static compare(fn: () => number[], title: string) {
    const start = new Date()
    const startDate =  dayjs(start).format('YYYY-MM-DD hh:mm:ss')
    const result = fn.bind(sortInstance)()
    const end = new Date()
    const endDate = dayjs(end).format('YYYY-MM-DD hh:mm:ss')

    // console.log(`${title} Result: ${JSON.stringify(result)}`)
    console.log(`${title}: Operating time is`, end.getTime() - start.getTime(), `start:${startDate}, end: ${endDate}`)
  }
}

SortCompare.compare(sortInstance.selectionSort, 'Selection')
SortCompare.compare(sortInstance.insertionSort, 'Insertion')
SortCompare.compare(sortInstance.shellSort, 'Shell')

export enum OrderEnum {
  DESC = "DESC",
  ASC = "ASC"
}

export class Sort {
  selectSort(list: number[], order: OrderEnum = OrderEnum.ASC) {
    const asc = order === OrderEnum.ASC
    for(let i = 0; i< list.length; i++) {
      const value = list[i]
      for(let j = i + 1; j < list.length; j++) {
        if(value > list[j]) {
          list[i] = list[j]
          list[j] = value
        }
      }
    }
    return list
  }

  bubbleSort(list: number[], order: OrderEnum = OrderEnum.ASC) {
    for(let i = list.length; i > 0; i--) {
      for(let j = 0; j < i; j++) {
        let cur = j
        let next = j + 1
        if(list[cur] > list[next]) {
          const temp = list[cur]
          list[cur] = list[next]
          list[next] = temp
        }
      }
    }
    return list
  }

  insertSort(list: number[], order: OrderEnum = OrderEnum.ASC) {
    for(let i = 0; i < list.length; i++) {
      for(let j = i + 1; j > 0; j--) {
        const temp = list[j]
        if(list[j - 1] > temp) {
          list[j] = list[j - 1]
        } else {
          list[j - 1] = temp
        }
      }
    }
    return list
  }
}
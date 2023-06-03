import { SimpleLinkNode } from "./utils"

export function generateLinkList() {
  const first = new SimpleLinkNode()
  first.title ='first'

  const second = new SimpleLinkNode()
  second.title = 'second'

  const third = new SimpleLinkNode()
  third.title = 'third'
  
  const fouth = new SimpleLinkNode()
  fouth.title = 'fouth'

  const fifth = new SimpleLinkNode()
  fifth.title = 'fifth'

  first.next = second
  second.next = third
  third.next = fouth
  fouth.next = fifth
  return first
}

export function generateLinkList2() {
  const zero = new SimpleLinkNode()
  zero.title = '0'

  const first = new SimpleLinkNode()
  first.title ='1'

  const second = new SimpleLinkNode()
  second.title = '2'

  const third = new SimpleLinkNode()
  third.title = '1'
  
  const fouth = new SimpleLinkNode()
  fouth.title = '3'

  const fifth = new SimpleLinkNode()
  fifth.title = '1'

  const sixth = new SimpleLinkNode()
  sixth.title = '1'

  const seventh = new SimpleLinkNode()
  seventh.title = '7'

  zero.next = first
  first.next = second
  second.next = third
  third.next = fouth
  fouth.next = fifth
  fifth.next = sixth
  sixth.next = seventh
  return zero
}

class Utils {
  remove(num: number, linkList: SimpleLinkNode) {
    const head = new SimpleLinkNode()
    let p1 = new SimpleLinkNode()
    let p2 = new SimpleLinkNode()
    head.next = linkList
    p1.next = linkList
    p2.next = linkList
    let index = 1
    while(p1.next && index <= num) {
      if(index === 1) {
        p1 = p1.next
      } else {
        p1 = p1.next
        p2 = p2.next
      }

      if(index === num) {
        if(index === 1) {
          head.next = p1.next
        } else {
          p2.next = p1.next
        }
      }
      index += 1
    }
    return head
  }

  find(key: string, linkList: SimpleLinkNode) {
    const head = new SimpleLinkNode()
    let p1 = new SimpleLinkNode()
    head.next = linkList
    p1 = linkList
    while (p1.next) {
      if(p1.next.title === key) {
        return true
      }
      p1 = p1.next
    }
    return false
  }

  removeAfter(key: string, linkList: SimpleLinkNode) {
    const head = new SimpleLinkNode()
    let p1 = new SimpleLinkNode()
    head.next = linkList
    p1.next = linkList
    while (p1.next) {
      if(p1.next.title === key) {
        p1.next.next = undefined as unknown as SimpleLinkNode
      }
      p1 = p1.next
    }
    return head
  }

  insertAfter(node1: SimpleLinkNode, node2: SimpleLinkNode, linkList: SimpleLinkNode) {
    const head = new SimpleLinkNode()
    let p1 = new SimpleLinkNode()
    head.next = linkList
    p1.next = linkList
    while(p1.next) {
      if(p1.next.title === node1.title) {
        p1 = p1.next
        p1.next = node2
        break
      }
      p1 = p1.next
    }
    return head
  }

  removeIncludeKeyItem(key:string, linkList: SimpleLinkNode) {
    const head = new SimpleLinkNode()
    let p1 = new SimpleLinkNode()
    let p2 = new SimpleLinkNode()
    head.next = linkList
    p1.next = linkList
    p2.next = linkList
    while(p1.next) {
      if(p1.next.title !== key) {
        p2.next = p1.next
        if(head.next.title === key) {
          head.next = p1.next
        }
        if(p2.next.next && p2.next.title !== key) {
          p2 = p2.next
        }
      }
      p1 = p1.next
    }
    return head
  }

  max(linkList: SimpleLinkNode) {
    if(!linkList.next) {
      return 0
    }
    let p1 = new SimpleLinkNode()
    p1.next = linkList
    let max = 0
    let first = true
    while (p1.next) {
      if(first) {
        max = parseInt(p1.next.title)
        first = false
      } else {
        const current = parseInt(p1.next.title)
        if(max < current) {
          max = current
        }
      }
      p1 = p1.next
    }
    return max
  }

  findMax(linkList:SimpleLinkNode, max?: number): number{
    if(typeof max === 'undefined' && !linkList) {
      return 0
    }
    const current = parseInt(linkList.title)
    if(typeof max === 'undefined'){
      max = current
    } else if(max < current) {
      max = current
    }
    linkList = linkList.next
    if(!linkList) {
      return max
    }
    return this.findMax(linkList, max)
  }
}

const utils = new Utils()

// let link = utils.remove(5, generateLinkList())

// while (link.next) {
//   console.log(link.next.title)
//   link = link.next
// }

// console.log(utils.find('second', generateLinkList()))
// console.log(utils.find('second111', generateLinkList()))

// let link1 = utils.removeAfter('third', generateLinkList())


// while (link1.next) {
//   console.log(link1.next.title)
//   link1 = link1.next
// }

// const node1 = new SimpleLinkNode()
// node1.title = 'second'

// const node2 = new SimpleLinkNode()
// node2.title = 'fouth'

// const node3 = new SimpleLinkNode()
// node3.title = 'fifth'

// node2.next = node3

// let link2 = utils.insertAfter(node1, node2, generateLinkList())

// while (link2.next) {
//   console.log(link2.next.title)
//   link2 = link2.next
// }

let link3 = utils.removeIncludeKeyItem('1', generateLinkList2())

while (link3.next) {
  console.log(link3.next.title)
  link3 = link3.next
}

console.log('max:', utils.max(generateLinkList2()))
console.log('max:', utils.findMax(generateLinkList2()))
import { SimpleLinkNode } from "./utils"

function generateLinkList() {
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

let link1 = utils.removeAfter('third', generateLinkList())


while (link1.next) {
  console.log(link1.next.title)
  link1 = link1.next
}

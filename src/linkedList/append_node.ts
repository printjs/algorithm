import { SimpleLinkNode } from "./utils"

function appendNode() {
  const first = new SimpleLinkNode()
  first.title ='first'

  const second = new SimpleLinkNode()
  second.title = 'second'

  const third = new SimpleLinkNode()
  third.title = 'third'

  first.next = second
  second.next = third

  const lastOne = new SimpleLinkNode()
  lastOne.title = 'last'
  
  const result = new SimpleLinkNode()
  result.next = first

  let p = new SimpleLinkNode()
  p.next = first

  while (typeof p.next !== 'undefined') {
    p = p.next
  }
  p.next = lastOne

  let p1 = new SimpleLinkNode()
  p1.next = result.next
  while (typeof p1.next !== 'undefined') {
    p1 = p1.next
    console.log(p1.title)
  }
}

appendNode()

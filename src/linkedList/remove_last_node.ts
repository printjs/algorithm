import { SimpleLinkNode } from "./utils"

function removeLastNode() {
  let first = new SimpleLinkNode()
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

  const head = new SimpleLinkNode()
  head.next = first

  let point = new SimpleLinkNode()
  point.next = first
  while (point.next) {
    if(point.next.next) {
      point = point.next
      continue
    }
    point.next = point.next.next
  }

  return head
}

let linkList = removeLastNode()

while(linkList.next) {
  console.log(linkList.next.title)
  linkList = linkList.next
}
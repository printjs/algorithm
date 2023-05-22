import { SimpleLinkNode } from "./utils"

function removeNodeFromLinkHeader(){
  let first = new SimpleLinkNode()
  first.title ='first'

  const second = new SimpleLinkNode()
  second.title = 'second'

  const third = new SimpleLinkNode()
  third.title = 'third'

  first.next = second
  second.next = third

  first = first.next

  let result = new SimpleLinkNode()
  result.next = first
  while (typeof result.next !== 'undefined') {
    result = result.next
    console.log(result.title)
  }
}

removeNodeFromLinkHeader()

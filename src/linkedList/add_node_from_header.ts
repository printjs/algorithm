import { SimpleLinkNode } from "./utils"

function addNodeFromLinkHeader() {
  const first = new SimpleLinkNode()
  first.title ='first'

  const second = new SimpleLinkNode()
  second.title = 'second'

  const third = new SimpleLinkNode()
  third.title = 'third'

  first.next = second
  second.next = third

  const newOne = new SimpleLinkNode()
  newOne.title = 'newOne'

  newOne.next = second

  first.next = newOne

  let result = new SimpleLinkNode()
  result.next = first
  while (typeof result.next !== 'undefined') {
    result = result.next
    console.log(result.title)
  }
}

addNodeFromLinkHeader()
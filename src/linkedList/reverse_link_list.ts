import { SimpleLinkNode } from "./utils";

export function generateLinkList() {
  const first = new SimpleLinkNode()
  first.title ='1'

  const second = new SimpleLinkNode()
  second.title = '2'

  const third = new SimpleLinkNode()
  third.title = '3'
  
  const fouth = new SimpleLinkNode()
  fouth.title = '4'

  const fifth = new SimpleLinkNode()
  fifth.title = '5'

  first.next = second
  second.next = third
  third.next = fouth
  fouth.next = fifth
  return first
}
class ReverseLinkList {
  constructor() {}

  public reverse(linkList: SimpleLinkNode) {
    let reverse = new SimpleLinkNode()
    let first = new SimpleLinkNode()
    let second = new SimpleLinkNode()
    reverse.next = linkList
    if(linkList.next) {
      first.next = linkList.next
    } else {
      return reverse.next
    }

    if(linkList.next.next) {
      second.next = linkList.next.next
    }

    return this.reverseLinkList(reverse, first, second)
  }

  private reverseLinkList(reverse: SimpleLinkNode, first: SimpleLinkNode, second: SimpleLinkNode) {
    reverse.next.next = undefined as unknown as SimpleLinkNode
    while (second.next) {
      first.next.next = reverse.next
      reverse.next = first.next
      first.next = second.next
      second.next = second.next.next
    }
    first.next.next = reverse.next
    return first
  }
}

let link = new ReverseLinkList().reverse(generateLinkList())

while (link.next) {
  console.log(link.next.title)
  link = link.next
}

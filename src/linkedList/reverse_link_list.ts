import { SimpleLinkNode } from "./utils";

class ReverseLinkList {
  constructor() {}

  revese(linkList: SimpleLinkNode) {
    let p1 = new SimpleLinkNode()
    let p2 = new SimpleLinkNode()
    let p3 = new SimpleLinkNode()

    p1.next = linkList
    if(linkList.next) {
      p2.next = linkList.next
    } else {
      return p1.next
    }

    p3.next = linkList

    while (p1.next && p2.next && p3.next) {
      if(p1.next === p2.next) {
        p2 = p2.next
      }
      if(p3.next === p1.next) {
        p3.next = p2.next
      }
      p1.next.next = undefined as unknown as SimpleLinkNode
    }
  }
}

import { LinkNode } from "./utils"

class StackLinkList<T> {
  private length: number = 0
  private maxLength: number = -1
  private linkList = new LinkNode<T>()
  constructor() {}

  public push(item: T) {
    const node = new LinkNode<T>()
    node.item = item
    if(typeof this.linkList.next === 'undefined') {
      this.linkList.next = node
      return
    }
    node.next = this.linkList.next
    this.linkList.next = node
  }

  public pop() {
    const firstOne = new LinkNode<T>()
    if(typeof this.linkList.next ==='undefined') {
      return
    }
    firstOne.next = this.linkList.next
    this.linkList = this.linkList.next
    return firstOne.next.item
  }
}

const stack = new StackLinkList()

stack.push('A')
stack.push('B')
stack.push('C')

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

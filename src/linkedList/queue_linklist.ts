import { LinkNode } from "./utils"

class QueueLinkList<T> {
  private length: number = 0
  private maxLength: number = -1
  private linkList = new LinkNode<T>()
  private point = new LinkNode<T>()
  constructor() {}

  public enqueue(item: T) {
    const node = new LinkNode<T>()
    node.item = item
    if(typeof this.linkList.next === 'undefined') {
      this.linkList.next = node
      this.point.next = node
      return
    }
    this.point = this.point.next
    this.point.next = node
  }

  public dequeue() {
    if(typeof this.linkList.next === 'undefined') {
      return
    }
    const firstOne = new LinkNode<T>()
    firstOne.next = this.linkList.next
    this.linkList = this.linkList.next
    return firstOne.next.item
  }

  public size(size?: number) {
    if(typeof size !== 'number') {
      return this.length
    }
    this.maxLength = size
  }
}


const queue = new QueueLinkList<string>()

queue.enqueue('A')
queue.enqueue('B')
queue.enqueue('C')

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
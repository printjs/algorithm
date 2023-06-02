import { SimpleLinkNode } from "./utils";

export class CircleLinkListQueue {
  private linkList?: SimpleLinkNode
  private head: SimpleLinkNode = new SimpleLinkNode()
  private tail: SimpleLinkNode = new SimpleLinkNode()
  constructor() {}
  enqueue(value: string) {
    if(!this.linkList) {
      this.linkList = new SimpleLinkNode()
      this.linkList.title = value
      this.linkList.next = this.linkList
      this.head.next = this.linkList
      this.tail.next = this.linkList
      return
    }
    const node = new SimpleLinkNode()
    node.title = value
    this.tail.next.next = node
    this.tail = this.tail.next
    node.next = this.head.next
  }

  dequeue() {
    const value = this.head.next.title
    if(this.tail.next === this.tail.next.next) {
      this.linkList = undefined
      return value
    }
    this.tail.next.next = this.head.next.next
    this.head = this.head.next
    return value
  }
}


const queue = new CircleLinkListQueue()

queue.enqueue('1')
queue.enqueue('2')
queue.enqueue('3')

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

queue.enqueue('4')
queue.enqueue('5')

console.log(queue.dequeue())
console.log(queue.dequeue())
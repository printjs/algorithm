import { GenerateLinkedList, LinkedList } from './GenerateLinkedList.mjs';

export class CombineLinkedList {
  constructor() {
    this.h1 = new GenerateLinkedList([1,2,3,4,5]).build();
    this.h2 = new GenerateLinkedList([]).build();
  }

  combine() {
    const gap = 2;
    if (!this.h1) {
      return this.h2;
    }
    if (!this.h2) {
      return this.h1;
    }
    const head = new LinkedList();
    let pointer = new LinkedList();
    let temp = new LinkedList();
    head.next = this.h1;
    pointer.next = this.h1;
    temp.next = this.h2;
    let count = 0;
    while (pointer.next || temp.next) {
      if (count < gap) {
        if (pointer.next) {
          pointer = pointer.next;
        } else {
          count = gap;
        }
      }
      if (count === gap) {
        const t = pointer.next;
        pointer.next = temp.next;
        temp.next = t;
        count = 0;
        continue;
      }
      count += 1;
    }
    return head.next;
  }
}

new CombineLinkedList().combine();

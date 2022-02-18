import { GenerateLinkedList, LinkedList } from './GenerateLinkedList.mjs';

export class ReverseLinkedList {
  constructor() {
    this.h1 = new GenerateLinkedList([1]).build();
  }

  reverse() {
    let head = this.h1;

    let before = undefined;
    let after = undefined;
    while (head && head.next) {
      after = head.next;
      head.next = before;
      before = head;
      head = after;
      if (after.next) {
        after = after.next;
      }
    }

    head.next = before;

    return head;
  }
}

new ReverseLinkedList().reverse();

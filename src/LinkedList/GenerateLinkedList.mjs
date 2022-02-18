export class LinkedList {
  content;
  next;
}

export class GenerateLinkedList {
  constructor(arr) {
    this.arr = arr;
  }

  build() {
    let head = null;
    let p = null;
    for (let i= 0; i < this.arr.length; i++) {
      const temp = new LinkedList();
      temp.content = this.arr[i];
      if(i === 0) {
        head = temp;
        p = temp;
        continue;
      }
      p.next = temp;
      p = p.next;
    }
    return head;
  }
}

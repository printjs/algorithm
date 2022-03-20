import { GenerateLinkedList, LinkedList } from "../LinkedList/GenerateLinkedList.mjs";

export class InsertSort {
  h1 = new LinkedList();

  constructor(arr) {
    this.h1.next = new GenerateLinkedList(arr).build();
  }

  start(){
    let p1 = this.h1.next;
    while (p1.next) {
      if(p1.content <= p1.next.content) {
        p1 = p1.next;
        continue;
      }
      let p2 = new LinkedList();
      p2.next = this.h1.next;
      while (p2.next.content <= p1.next.content) {
        p2 = p2.next;
      }
      p2.next = p1.next;
      p1.next = p1.next.next;
      p2.next.next = p1;
      console.log();
    }
    return this.h1.next;
  };
}

new InsertSort([5,8,7,2,10,4,9,1]).start();

const demo = [5,8,7,2,10,4,9,1];
for(let i = 0; i< demo.length; i++) {
  for(let j = i + 1; j < demo.length; j++) {
    if(demo[i] > demo[j]) {
      const temp = demo[i];
      demo[i] = demo[j];
      demo[j] = temp;
    }
  }
}

console.log(demo);

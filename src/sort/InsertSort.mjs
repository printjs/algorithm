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
  if(i + 1 < demo.length && demo[i] > demo[i+1]) {
    for(let j = 0; j< demo.length;j++) {
      if(demo[j] > demo[i + 1]) {
        const temp = demo[j];
        demo[j] = demo[i+1];
        demo[i + 1] = temp;
      }
    }
  }
}

console.log(demo);

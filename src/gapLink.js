import { LinkedList } from './LinkedList';

const h = LinkedList.builder([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);

const times = 2;
const gap = 3;

let result = h;
let pointer = h;

let count = 1;
while(pointer.next) {
  if(count < times) {
    pointer = pointer.next;
    result = result.next;
  }
  if(count === times) {
    count = 0;
    for(let i = 0; i< gap; i++) {
      if (pointer.next) {
        pointer = pointer.next;
        continue;
      }
      break;
    }
    result.next = pointer.next;
    continue;
  }
  count += 1;
}

console.log(h);

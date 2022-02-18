export class Linked {
  next
  content
}

export class LinkedList {
  static builder(arr) {
    let head = new Linked();
    let tail = new Linked();
    for(let i = 0; i< arr.length; i++) {
      const temp = new Linked();
      temp.content = arr[i];
      if(i === 0) {
        head = temp;
        tail = temp;
        continue;
      }
      tail.next = temp;
      tail = tail.next;
    }
    return head;
  }
}

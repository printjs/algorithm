class BinaryTree {
  val;
  left;
  right;
}

export class Tree {
  tree
  constructor(arr) {
    let head = new BinaryTree();
    this.tree = head;
    for(let i = 0;i < arr.length; i++) {
      head.val = arr[i];
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if(left < arr.length) {
        head.left = new BinaryTree();
        head.left.val = arr[left];
      }
    }
  }
}
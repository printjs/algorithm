import { tree } from './DemoTree.mjs';

export class InorderTraversal {
  arr = []
  constructor() {
    this.start(tree);
  }

  start(t) {
    if(t) {
      this.start(t.left);
      this.arr.push(t.val);
      this.start(t.right);
    }
  }

  get result() {
    return this.arr;
  }
}

const it = new InorderTraversal();
console.log(it.result);

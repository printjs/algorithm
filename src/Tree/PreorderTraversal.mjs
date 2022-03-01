import { tree } from './DemoTree.mjs';

export class PreorderTraversal {
  arr = [];
  constructor() {
    this.start(tree);
  }

  start(t) {
    if(t) {
      this.arr.push(t.val);
      this.start(t.left);
      this.start(t.right);
    }
  }

  get result() {
    return this.arr;
  }
}

const pt = new PreorderTraversal();
console.log(pt.result);

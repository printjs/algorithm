import { tree } from "./DemoTree.mjs";

export class PostorderTraversal {
  arr = [];
  constructor() {
    this.start(tree)
  }

  start(t) {
    if(t) {
      this.start(t.left);
      this.start(t.right);
      this.arr.push(t.val);
    }
  }

  get result() {
    return this.arr;
  }
}

const pt = new PostorderTraversal();
console.log(pt.result);

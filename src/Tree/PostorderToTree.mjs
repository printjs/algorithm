class Tree {
  val;
  left;
  right
}

export class PostorderToTree {
  str = 'ab+cde+**';
  stack = [];
  letterReg = /([A-Z]|[a-z])/;

  build() {
    for(let i = 0; i< this.str.length; i++) {
      const node = new Tree();
      node.val = this.str[i];
      if(!this.letterReg.test(this.str[i])) {
        let times = 2;
        while (times > 0) {
          if(!node.right) {
            node.right = this.stack.pop();
          } else if(!node.left) {
            node.left = this.stack.pop();
          }
          times -= 1;
        }
      }
      this.stack.push(node);
    }
    return this.stack.pop();
  }
}

console.log(new PostorderToTree().build());

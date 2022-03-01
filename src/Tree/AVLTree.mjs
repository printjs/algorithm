const demo = [16,3,7,11,9,26,18,14,15];

class AVLNode {
  val;
  height;
  left;
  right;
  constructor(val,height = 0,left,right) {
    this.val = val;
    this.height = height;
    this.left = left;
    this.right = right;
  }
}

const ALLOWED_NUMBER = 2;

class AVLTree {
  insert(val, t) {
    if(!t) {
      return new AVLNode(val);
    }
    if(t.val > val) {
      t.left = this.insert(val, t.left);
    } else if (t.val < val) {
      t.right = this.insert(val, t.right);
    }
    return this.balance(t);
  }

  balance(t) {
    if(!t) {
      return t;
    }
    if(Math.abs(this.height(t.left) - this.height(t.right)) >= ALLOWED_NUMBER) {
      if(this.height(t.left.left) > this.height(t.left.right)) {
        t = this.rotateWithLeftChild(t);
      } else {
        debugger
        t = this.doubleWithLeftChild(t);
      }
    } else if(Math.abs(this.height(t.right) - this.height(t.left)) >= ALLOWED_NUMBER) {
      if(this.height(t.right.right) > this.height(t.right.left)) {
        t = this.rotateWithRightChild(t);
      } else {
        t = this.doubleWithRightChild(t);
      }
    }
    t.height = Math.max(this.height(t.left), this.height(t.right)) + 1;
    return t;
  }

  rotateWithLeftChild(t) {
    const k = t.left;
    t.left = k.right;
    k.right = t;
    t.height = Math.max(this.height(t.left), this.height(t.right)) + 1;
    k.height = Math.max(this.height(k.left), k.height) + 1;
    return k;
  }

  doubleWithLeftChild(t) {
    debugger
    t.left = this.rotateWithRightChild(t.left);
    return this.rotateWithLeftChild(t);
  }

  doubleWithRightChild(t) {
    t.right = this.rotateWithRightChild(t.right);
    return this.rotateWithRightChild(t);
  }

  rotateWithRightChild(t) {
    const k = t.right;
    t.right = k.left;
    k.left = t;
    t.height = Math.max(this.height(t.left), this.height(t.right)) + 1;
    k.height = Math.max(this.height(t.right), k.height) + 1;
    return k;
  }

  height(t) {
    return t ? t.height : 0;
  }
}

const avlTree = new AVLTree();

let tree;
for (let index = 0; index < demo.length; index++) {
  tree = avlTree.insert(demo[index], tree);
}

console.log(tree);

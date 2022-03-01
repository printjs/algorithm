const demo = [100,40,20,21,39,0,-20,5,8,1];

class Tree {
  val;
  left;
  right;
  constructor (val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class BinaryTreeSearchTree {
  constructor() {}

  insert(val, t) {
    if (!t) {
      return new Tree(val);
    }
    if(t.val > val) {
      t.left = this.insert(val, t.left);
    } else if(t.val < val) {
      t.right = this.insert(val, t.right);
    } else {
      t.val === val;
    }
    return t;
  }

  remove(val, t) {
    if(!t) {
      return t;
    }
    if(t.val > val) {
      t.left = this.remove(val, t.left);
    } else if (t.val < val) {
      t.right = this.remove(val, t.right);
    }
    if(t.left && t.right) {
      const max = this.findMax(t.left);
      t.val = max.val;
      this.remove(t.val, t.left);
    } else {
      t = t.left ? t.left: t.right;
    }
    return t;
  }

  printTree(t) {
    // 前序，中序，后序，广度，深度遍历 
  }

  contains(val, t) {
    if(!t) {
      return false;
    }
    if(t.val > val) {
      return this.contains(val, t.left);
    }
    if (t.val < val) {
      return this.contains(val, t.right);
    }
    return true;
  }

  findMin(t) {
    if(!t) {
      return t;
    }
    while (t.left) {
      t = t.left;
    }
    return t;
  }


  findMax() {
    if(!t) {
      return t;
    }
    while (t.right) {
      t = t.right;
    }
    return t;
  }
}

const btst = new BinaryTreeSearchTree();
let tree;
for(let i = 0; i < demo.length; i++) {
  tree = btst.insert(demo[i], tree);
  // btst.printTree(tree);
}
console.log(tree);

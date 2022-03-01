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

export class AVLTree {
  remove(val, t) {
    if(!t) {
      return t;
    }
    if(t.val > val) {
      t.left = this.remove(val, t.left);
    } else if(t.val < val) {
      t.right = this.remove(val, t.right);
    } else {
      if(t.left && t.right) {
        const max = this.findMax(t.left);
        t.val = max.val;
        t.left = this.remove(max.val, t.left);
      } else {
        t = t.left ? t.left : t.right;
      }
    }
    return this.balance(t);
  }

  insert(val, t) {
    if(!t) {
      return new AVLNode(val);
    }
    if(t.val > val) {
      t.left = this.insert(val, t.left);
    } else if (t. val < val) {
      t.right = this.insert(val, t.right);
    }
    return this.balance(t);
  }

  balance(t) {
    if(!t) {
      return t;
    }
    if(this.height(t.left) - this.height(t.right) > 1) {
      if(this.height(t.left.left) > this.height(t.left.right)) {
        t = this.rotateWithLeftChild(t);
      } else {
        t = this.doubleWithLeftChild(t);
      }
    } else if (this.height(t.left) - this.height(t.right) < -1) {
      if(this.height(t.right.right) > this.height(t.right.left)) {
        t = this.rotateWithRightChild(t);
      } else {
        t = this.doubleWithRightChild(t);
      }
    }
    return t;
  }

  height(t) {
    if(!t) {
      return 0;
    }
    return Math.max(this.height(t.left), this.height(t.right)) + 1;
  }

  rotateWithLeftChild(t) {
    const k = t.left;
    t.left = k.right;
    k.right = t;
    return k;
  }

  rotateWithRightChild(t) {
    const k = t.right;
    t.right = k.left;
    k.left = t;
    return k;
  }

  doubleWithLeftChild(t) {
    t.left = this.rotateWithRightChild(t.left);
    return this.rotateWithLeftChild(t);
  }

  doubleWithRightChild(t) {
    t.right = this.rotateWithLeftChild(t.right);
    return this.rotateWithRightChild(t);
  }


  findMax(t) {
    if(!t) {
      return t;
    }
    while(t.right) {
      t = t.right;
    }
    return t;
  }

  findMin(t) {
    if(!t) {
      return t;
    }
    while(t.left) {
      t = t.left;
    }
    return t;
  }
}


const avlTree = new AVLTree();

let tree;
for (let index = 0; index < demo.length; index++) {
  tree = avlTree.insert(demo[index], tree);
}

console.log(tree);

tree = avlTree.remove(11, tree);
console.log(tree);

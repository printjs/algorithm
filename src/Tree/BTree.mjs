class BNode {
  values = [];
  node = [];
  constructor(val) {
    this.insert(val);
  }

  insert(val) {
    for(let i = 0; i< this.values.length; i++) {
      if(val < this.values[i]) {
        this.values.splice(i, 0 ,val); 
        break;
      }
    }
    if(this.values.length === 0) {
      this.values.push(val);
    }
  }
}

const order = 5;
const middleIndex = Math.floor(order / 2);

class BTree {
  insert(val, t) {
    if(!t) {
      return new BNode(val);
    }
    if(t.nodes.length > 0) {
      for(let i = 0; i < t.values.length; i++) {
        if(val < t.values[i]) {
          if(i === 0) {
            t.nodes[i] = this.insert(val, t.nodes[i]);
          } else {
            t.nodes[i - 1] = this.insert(val, t.nodes[i - 1]);
          }
        }
      }
      return t;
    }
    t.insert(val);
    if(t.values.length > order - 1) {
      t = this.splitNode(t);
    }
    return t;
  }

  splitNode(t) {
    for(let i = 0; i < t.values.length; i++) {
    }
  }
}

export class DisjointSet {
  parents = [];

  constructor(length) {
    for(let i = 0; i< length; i++) {
      this.parents.push(-1);
    }
  }

  union(node1, node2) {
    const node1Root = this.find(node1);
    const node2Root = this.find(node2);
    if(node1Root === node2Root && node1Root !== -1) {
      return false;
    }
    this.parents[node2Root - 1] = node1Root;
    return true;
  }

  find(x) {
    let root = x;
    while (this.parents[root - 1] !== -1) {
      root = this.parents[root - 1];
    }
    return root;
  }
}

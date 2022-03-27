export class LinkedList {
  value;
  indegree = 0;
  weight;
  next;
}

export class Graph {
  list = [];
  constructor(value) {
    if(value) {
      this.list.push(this.addNode(value));
    }
  }

  addEdge(v1, v2, weight) {
    if(!this.list[v1 - 1]) {
      this.list[v1 - 1] = this.addNode(v1);
    }
    if(!this.list[v2 - 1]) {
      this.list[v2 - 1] = this.addNode(v2);
    }
    let p = new LinkedList();
    p.next = this.list[v1 - 1];
    while (p.next) {
      p = p.next
    }
    this.list[v2 - 1].indegree += 1;
    const temp = {
      ...this.list[v2 - 1],
      weight, 
    };
    temp.next = undefined;
    p.next = temp;
  }

  addNode(value) {
    const node = new LinkedList();
    node.value = value;
    return node;
  }
}
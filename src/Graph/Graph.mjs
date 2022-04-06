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

export class NetFlowLinkedList {
  value;
  next;
  capacity = 0;
  flow = 0;
  get residual() {
    return this.capacity - this.flow;
  }
}

export class NetFlowGraph {
  list = [];
  constructor(value) {
    if(value) {
      this.list.push(this.addNode(value));
    }
  }

  addEdge(v1, v2, capacity = 0, level = 0) {
    if(!this.list[v1 - 1]) {
      this.list[v1 - 1] = this.addNode(v1, level);
    }
    if(!this.list[v2 - 1]) {
      this.list[v2 - 1] = this.addNode(v2, level + 1);
    }
    let p = new NetFlowLinkedList();
    p.next = this.list[v1 - 1];
    while (p.next) {
      if(p.next.value === v2) {
        p.next.capacity =capacity;
        return;
      }
      p = p.next;
    }
    const temp = {
      ...this.list[v2 - 1],
      capacity,
      next: undefined,
    };
    p.next = temp;
  }

  updateEdge(v1, v2, flow) {
    if(!this.list[v1 - 1] || !this.list[v2 - 1]) {
      console.log('节点不存在');
      return false;
    }
    let p = new NetFlowLinkedList();
    p.next = this.list[v1 - 1];
    while (p && p.next) {
      if(p.next.value === v2) {
        p.next.capacity -= flow;
        if(p.next.capacity === 0) {
          p.next = p.next.next;
        }
      }
      p = p.next;
    }
    return true;
  }

  addNode(value, level = 0) {
    const node = new NetFlowLinkedList();
    node.value = value;
    node.level = level;
    return node;
  }
}
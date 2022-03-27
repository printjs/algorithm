import { Graph } from "./Graph.mjs";

class TreeLink {
  value;
  next = [];
}

const graph = new Graph();

graph.addEdge(1,2,2);
graph.addEdge(2,1,2);

graph.addEdge(1,4,1);
graph.addEdge(4,1,1);

graph.addEdge(2,4,3);
graph.addEdge(4,2,3);

graph.addEdge(2,5,10);
graph.addEdge(5,2,10);

graph.addEdge(4,5,7);
graph.addEdge(5,4,7);

graph.addEdge(5,7,6);
graph.addEdge(7,5,6);

graph.addEdge(4,7,4);
graph.addEdge(7,4,4);

graph.addEdge(6,7,1);
graph.addEdge(7,6,1);

graph.addEdge(4,6,8);
graph.addEdge(6,4,8);

graph.addEdge(4,3,2);
graph.addEdge(3,4,2);

graph.addEdge(3,6,5);
graph.addEdge(6,3,5);

graph.addEdge(1,3,4);
graph.addEdge(3,1,4);


console.log(graph.list);


class PrimMinimumSpanningTree {
  table = [];
  // p = new TreeLink();
  // head = { next: p };
  constructor() {
    for(let i = 0; i < graph.list.length; i++) {
      this.table[i] = [i === 0, i === 0 ? 0 : null, null];
    }
    const queue = [];
    while (queue.length < graph.list.length) {
      this.table.forEach((item, i) => {
        if(item[0]) {
          queue.push(i + 1);
        }
      });
      if(queue.length === graph.list.length) {
        break;
      }
      let min = null;
      let minNode = null;
      let parent = null;
      while(queue.length) {
        let node = graph.list[queue.shift() - 1];
        parent = node.value;
        while (node.next) {
          if((min === null || min > node.next.weight) && !this.table[node.next.value - 1][0]){
            min = node.next.weight;
            minNode = node.next;
          }
          node = node.next;
        }
      }
      if(minNode !== null && !this.table[minNode.value -1][0]) {
        this.table[minNode.value -1] = [true, minNode.weight, parent];
      }
    };
  }

  generate() {
    return this.table;
    // const data = this.table[index];
    // this.p.value = data[1];
    // this.p.next = this.table
    //   .filter((item,$index) => {
    //     if(item[2] === this.p.value){
    //       this.generate($index);
    //       return true;
    //     }
    //     return false;
    //   })
  }
}

const obj = new PrimMinimumSpanningTree();
obj.generate();

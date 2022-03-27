import { Graph } from "./Graph.mjs";

const graph = new Graph(1);

graph.addEdge(1,2);
graph.addEdge(1,4);
graph.addEdge(2,4);
graph.addEdge(2,5);
graph.addEdge(3,1);
graph.addEdge(3,6);
graph.addEdge(4,3);
graph.addEdge(4,6);
graph.addEdge(4,5);
graph.addEdge(4,7);
graph.addEdge(5,7);
// graph.addEdge(6,3);
graph.addEdge(7,6);

class UnweightedGraphShortestPath {
  table = [];
  constructor(source) {
    for(let i = 0; i< 7;i++) {
      if(i === source - 1) {
        this.table.push([true, 0, null]);
      } else {
        this.table.push([false, null, null]);
      }
    }
    const queue = [source];
    while (queue.length) {
      const index = queue.shift();
      let node = graph.list[index - 1];
      while (node.next) {
        if(!this.table[node.next.value - 1][0]) {
          queue.push(node.next.value);
          this.table[node.next.value - 1][0] = true;
          this.table[node.next.value - 1][1] = this.table[index - 1][1] + 1;
          this.table[node.next.value - 1][2] = index;
        }
        node = node.next;
      }
    }
  }
  shortestPath(target) {
    return this.table[target - 1][1];
  }
}

const obj = new UnweightedGraphShortestPath(3);
console.log(obj.shortestPath(7));

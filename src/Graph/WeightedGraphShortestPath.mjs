import { Graph } from "./Graph.mjs";

const graph = new Graph(1);
graph.addEdge(1,2,2);
graph.addEdge(1,4,1);
graph.addEdge(2,4,3);
graph.addEdge(2,5,10);
graph.addEdge(3,1,4);
graph.addEdge(3,6,5);
graph.addEdge(4,3,2);
graph.addEdge(4,6,8);
graph.addEdge(4,5,2);
graph.addEdge(4,7,4);
graph.addEdge(5,7,1);
// graph.addEdge(6,3);
graph.addEdge(7,6,1);

class WeightedGraphShortestPath {
  table = [];
  constructor(source) {
    for(let i = 0; i < graph.list.length; i++) {
      if(source - 1 === i) {
        this.table.push([0, null]);
      } else {
        this.table.push([null, null]);
      }
    }
    const priorityQueue = [];
    priorityQueue.push(source);
    while (priorityQueue.length) {
      const index = priorityQueue.shift();
      let node = graph.list[index - 1];
      while (node.next) {
        const newWeight = (this.table[index - 1][0] || 0) + node.next.weight;
        if(this.table[node.next.value - 1][0] === null || this.table[node.next.value - 1][0] > newWeight) {
          priorityQueue.push(node.next.value);
          this.table[node.next.value - 1][0] = newWeight;
          this.table[node.next.value - 1][1] = index;
        }
        node = node.next;
      }
      priorityQueue.sort((a, b) => {
        return this.table[a - 1][0] - this.table[b - 1][0];
      });
    }
  }

  shortestPath(target) {
    return this.table[target - 1][0];
  }
}

const obj = new WeightedGraphShortestPath(3);

console.log(obj.shortestPath(7));

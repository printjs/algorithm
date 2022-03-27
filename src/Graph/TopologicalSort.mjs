import { Graph, LinkedList } from "./Graph.mjs";

export class TopologicalSort {
  sortList = [];

  topologicalSort(list) {
    const indegrees = [];
    const result = [];
    for(let i = 0; i < list.length; i++) {
      indegrees.push(list[i].indegree);
    }
    while (typeof this.hasZero(indegrees) === 'number') {
      const index = this.hasZero(indegrees);
      result.push(index);
      indegrees[index] -= 1;
      let p = new LinkedList();
      p.next = list[index].next;
      while (p.next) {
        p = p.next;
        indegrees[p.value - 1] -= 1;
      }
    }
    return result;
  }

  hasZero(list) {
    for(let i = 0; i < list.length; i++) {
      if(list[i] === 0) {
        return i;
      }
    }
    return
  }
}

const graph = new Graph(1);

graph.addEdge(1,2);
graph.addEdge(1,4);
graph.addEdge(1,3);
graph.addEdge(2,4);
graph.addEdge(2,5);
graph.addEdge(3,6);
graph.addEdge(4,6);
graph.addEdge(4,7);
graph.addEdge(4,3);
graph.addEdge(5,4);
graph.addEdge(5,7);
graph.addEdge(6,3);
graph.addEdge(7,6);

console.log(graph.list);

const obj = new TopologicalSort();

console.log(obj.topologicalSort());

console.log(obj.sortList);

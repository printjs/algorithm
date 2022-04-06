import { NetFlowGraph } from '../Graph.mjs';

const graph = new NetFlowGraph();

/**
 * 5 is start node
 * 6 is end node
 */
graph.addEdge(5, 1, 10);
graph.addEdge(5, 2, 10);
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 4);
graph.addEdge(1, 4, 8);
graph.addEdge(2, 4, 9);
graph.addEdge(4, 3, 6);
graph.addEdge(4, 6, 10);
graph.addEdge(3, 6, 10);

class DinicNetFlow {
  findFlow() {

  }

  buildLevelGraph(start) {
    const levelGraph = new NetFlowGraph();
    const queue = [start];
    while (queue.length) {
      let index = queue.shift();
      let node = graph.list[index - 1];
      while (node.next) {
        if(!levelGraph.list[node.next.value - 1] || levelGraph.list[node.next.value - 1].level !== levelGraph.list[index - 1].level) {
          levelGraph.addEdge(index, node.next.value, node.next.capacity, start === index ? 0 : levelGraph.list[index - 1].level);
          queue.push(node.next.value);
        }
        node = node.next;
      }
    }
    return levelGraph;
  }

  shorestPath() {

  }
}

const obj = new DinicNetFlow();

obj.buildLevelGraph(5);

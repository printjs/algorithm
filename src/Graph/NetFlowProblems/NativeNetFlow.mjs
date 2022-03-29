import { NetFlowGraph } from '../Graph.mjs';

const graph = new NetFlowGraph();

/**
 * 5 is start node
 * 6 is end node
 */
graph.addEdge(5, 1, 4);
graph.addEdge(5, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 4);
graph.addEdge(2, 4, 2);
graph.addEdge(3, 6, 3);
graph.addEdge(4, 6, 3);

// console.log(graph.list);

class NativeNetFlow {
  findFlow() {
    let totalFlow = 0;
    let obj = this.shortestPath(5, 6 ,graph.list);
    while (obj) {
      totalFlow += obj.flow;
      for(let i = 0; i < obj.path.length; i++) {
        let pre = i - 1;
        if(graph.updateEdge(pre < 0 ? 5 : obj.path[pre], obj.path[i], obj.flow)) {
          continue;
        }
        break;
      }
      obj = this.shortestPath(5, 6, graph.list);
    }
    return totalFlow;
  }
  
  shortestPath(start, end, list) {
    const table = [];
    for(let i = 0; i< list.length; i++) {
      table[i] = [i === start - 1, i === (start - 1) ? 0 : null, 0 ,null];
    }

    const queue = [start];
    while (queue.length) {
      let index = queue.shift();
      let node = list[index - 1];
      while (node.next) {
        if(!table[node.next.value - 1][0]) {
          table[node.next.value - 1][0] = true;
          table[node.next.value - 1][1] = table[index - 1][1] + 1;
          table[node.next.value - 1][2] = node.next.capacity;
          table[node.next.value - 1][3] = index;
        }
        queue.push(node.next.value);
        node = node.next;
      }
    }
    let index = end;
    const path = [];
    let min = null;
    while (table[index - 1][3] !== null) {
      if(min === null || min > table[index - 1][2]) {
        min = table[index - 1][2];
      }
      path.unshift(index);
      index = table[index - 1][3];
    }
    if (index === start) {
      return {
        path,
        flow: min,
      };
    }
    return null;
  }
}


const obj = new NativeNetFlow();

console.log(obj.findFlow());

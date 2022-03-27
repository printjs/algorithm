import { DisjointSet } from "../DisjointSet/DisjointSet.mjs";

const edges = [
  [1,2,2],
  [1,4,1],
  [2,4,3],
  [2,5,10],
  [4,5,7],
  [5,7,6],
  [4,7,4],
  [6,7,1],
  [4,6,8],
  [4,3,2],
  [3,6,5],
  [1,3,4],
];

edges.sort((a,b) => a[2] - b[2]);

class KruskalMinimunSpanningTree {
  minimunEdges = [];

  generate(nodeLength) {
    const ds = new DisjointSet(nodeLength);
    while (this.minimunEdges.length !== nodeLength - 1) {
      const edge = edges.shift();
      if(ds.union(edge[0],edge[1])) {
        this.minimunEdges.push(edge);
      }
    }
    return this.minimunEdges;
  }
}

const obj = new KruskalMinimunSpanningTree();

console.log(obj.generate(7));
import { Traverse } from "./traverse";
import { BinaryTree } from "./types";

const nodes = 10

const nodeList: BinaryTree[] = []
for(let i = 0; i < nodes; i++) {
  const node = new BinaryTree()
  node.title = `node ${i + 1}`
  nodeList.push(node)
}

for(let i = 0; i < nodeList.length; i++) {
  const node = nodeList[i]
  const leftIndex = 2 * i + 1
  const rightIndex = 2 * i + 2
  if(leftIndex < nodeList.length) {
    node.left = nodeList[leftIndex]
  }
  if(rightIndex < nodeList.length) {
    node.right = nodeList[rightIndex]
  }
}

let root: BinaryTree = nodeList[0];

const t = new Traverse(root)

t.levelOrderTraversal()

t.breadthFirstTraversal("preOrder")
t.breadthFirstTraversal("middleOrder")
t.breadthFirstTraversal("postOrder")

function generatedBinaryTreeByArray() {

}
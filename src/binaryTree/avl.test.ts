
import { AVLBalanceTree } from "./avl"
import { Traverse } from "./traverse"
import { generatedBinaryTreeByArray } from "./utils"

const avlRoot = generatedBinaryTreeByArray([20, 10, 100, 5, 17, 60, 110, 1, 6, 12, 19, 22, 99]) 

const avlT = new Traverse(avlRoot)

avlT.breadthFirstTraversal("middleOrder")

console.log("===========================")

const avlTree = new AVLBalanceTree()
// avlTree.insert(20)
// avlTree.insert(10)
// avlTree.insert(100)
// avlTree.insert(5)
// avlTree.insert(17)
// avlTree.insert(60)
// avlTree.insert(110)
// avlTree.insert(1)
// avlTree.insert(6)
// avlTree.insert(12)
// avlTree.insert(19)
// avlTree.insert(22)
// avlTree.insert(99)

avlTree.insert(1)
avlTree.insert(5)
avlTree.insert(6)
avlTree.insert(10)
avlTree.insert(12)
avlTree.insert(17)
avlTree.insert(19)
avlTree.insert(20)
avlTree.insert(22)
avlTree.insert(60)
avlTree.insert(99)
avlTree.insert(100)
avlTree.insert(110)

const avlTraversal = new Traverse(avlTree.getTree())

console.log("===========result start==========")
avlTraversal.breadthFirstTraversal("middleOrder", "value")
console.log("===========result end==========")

avlTraversal.printTree()

avlTree.remove(10)
avlTree.remove(20)

new Traverse(avlTree.getTree()).printTree()


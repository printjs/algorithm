import { Traverse } from "./traverse"
import { generatedBinaryTreeByArray } from "./utils"

const avlRoot = generatedBinaryTreeByArray([20, 10, 100, 5, 17, 60, 110, 1, 6, 12, 19, 22, 99]) 

const avlT = new Traverse(avlRoot)

avlT.breadthFirstTraversal("middleOrder")
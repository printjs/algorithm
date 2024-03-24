export class BinaryTree{
  left?: BinaryTree
  right?: BinaryTree
  title!: string
}

export class AVLTree extends BinaryTree{
  left?: AVLTree
  right?: AVLTree
  height: number = -1
  balanceFactor: number = 0
  value!: number
}


export function generatedBinaryTreeByArray(list: number[]) {
  const result: AVLTree [] = []
  for(let i = 0; i< list.length; i++) {
    let avlNode = result[i]
    if(!avlNode) {
      avlNode = new AVLTree()
      avlNode.value = list[i]
      avlNode.title = `node_${i + 1}`
      result.push(avlNode)
    }
    const leftIndex = 2 * i + 1
    const rightIndex = 2 * i + 2
    if(leftIndex < list.length) {
      const left = new AVLTree()
      left.value = list[leftIndex]
      left.title = `node_${i + 1}`
      avlNode.left = left
      result.push(left)
    }
    if(rightIndex < list.length) {
      const right = new AVLTree()
      right.value = list[rightIndex]
      right.title = `node_${i + 1}`
      avlNode.right = right
      result.push(right)
    }
  }
  return result[0]
}
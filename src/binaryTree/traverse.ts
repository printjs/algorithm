import { BinaryTree } from "./types";

export class Traverse {
  private tree!:BinaryTree

  private list:string [] = []

  constructor(tree: BinaryTree) {
    this.tree = tree
  }

  levelOrderTraversal() {
    const queue:BinaryTree[] = [this.tree]
    while (queue.length > 0) {
      const node = queue.shift()
      if(node?.left) {
        queue.push(node.left)
      }
      if(node?.right) {
        queue.push(node.right)
      }
      this.list.push(node?.title || "")
    }
    console.log(this.list)
    this.resetList()
  }

  breadthFirstTraversal(traversalMode: "preOrder" | "postOrder" | "middleOrder") {
    switch (traversalMode) {
      case "preOrder":
        this.preOrder(this.tree)
        console.log(this.list)
        this.resetList()
        break;
      case "middleOrder":
        this.middleOrder(this.tree)
        console.log(this.list)
        this.resetList()
        break;
      case "postOrder":
        this.postOrder(this.tree)
        console.log(this.list)
        this.resetList()
        break;
      default:
        console.log(`error traversal mode: ${traversalMode}`)
        break;
    }
  }
  
  private preOrder(tree: BinaryTree) {
    this.list.push(tree.title)
    if(tree.left) {
      this.preOrder(tree.left)
    }
    if(tree.right) {
      this.preOrder(tree.right)
    }
  }

  private middleOrder(tree: BinaryTree) {
    if(tree.left) {
      this.middleOrder(tree.left)
    }
    this.list.push(tree.title)
    if(tree.right) {
      this.middleOrder(tree.right)
    }
  }

  private postOrder(tree: BinaryTree) {
    if(tree.left) {
      this.postOrder(tree.left)
    }
    if(tree.right) {
      this.postOrder(tree.right)
    }
    this.list.push(tree.title)
  }

  private resetList() {
    this.list = []
  }
}
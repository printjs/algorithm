import { BinaryTree } from "./utils";

export class Traverse<T extends {
  left?: BinaryTree,
  right?: BinaryTree,
  title: string,
  value?: number
}> {
  private tree!:T

  private titleList:string [] = []

  private valueList: number [] = []

  private nodeList: string[] = []

  constructor(tree: T) {
    this.tree = tree
  }

  levelOrderTraversal () {
    const queue: T[] = [this.tree]
    while (queue.length > 0) {
      const node = queue.shift()
      if(node?.left) {
        queue.push(node.left as T)
      }
      if(node?.right) {
        queue.push(node.right as T)
      }
      this.titleList.push(node?.title || "")
      if(node && Number.isInteger(node.value)) this.valueList.push(node.value || 0)
      if(node) this.nodeList.push(JSON.stringify(node))
    }
    console.log("title", this.titleList)
    console.log("value", this.valueList)
    this.resetList()
  }

  breadthFirstTraversal(traversalMode: "preOrder" | "postOrder" | "middleOrder", printMode?: "title" | "value" | "node") {
    switch (traversalMode) {
      case "preOrder":
        this.preOrder(this.tree)
        this.print(printMode)
        this.resetList()
        break;
      case "middleOrder":
        this.middleOrder(this.tree)
        this.print(printMode)
        this.resetList()
        break;
      case "postOrder":
        this.postOrder(this.tree)
        this.print(printMode)
        this.resetList()
        break;
      default:
        console.log(`error traversal mode: ${traversalMode}`)
        break;
    }
  }
  
  private preOrder(tree: T) {
    this.titleList.push(tree.title)
    if(tree && Number.isInteger(tree.value)) this.valueList.push(tree.value || 0)
    if(tree) this.nodeList.push(JSON.stringify(tree))
    if(tree.left) {
      this.preOrder(tree.left as T)
    }
    if(tree.right) {
      this.preOrder(tree.right as T)
    }
  }

  private middleOrder(tree: T) {
    if(tree.left) {
      this.middleOrder(tree.left as T)
    }
    this.titleList.push(tree.title)
    if(tree && Number.isInteger(tree.value)) this.valueList.push(tree.value || 0)
    if(tree) this.nodeList.push(JSON.stringify(tree))
    if(tree.right) {
      this.middleOrder(tree.right as T)
    }
  }

  private postOrder(tree: T) {
    if(tree.left) {
      this.postOrder(tree.left as T)
    }
    if(tree.right) {
      this.postOrder(tree.right as T)
    }
    this.titleList.push(tree.title)
    if(tree && Number.isInteger(tree.value)) this.valueList.push(tree.value || 0)
    if(tree) this.nodeList.push(JSON.stringify(tree))
  }

  private resetList() {
    this.titleList = []
    this.valueList = []
    this.nodeList = []
  }

  private print(printMode?: "title" | "value" | "node") {
    switch (printMode) {
      case "title":
        console.log("title", this.titleList)
        break
      case "value":
        console.log("value", this.valueList)
        break;
      case "node":
        console.log("node", this.nodeList)
      default:
        console.log("title", this.titleList)
        console.log("value", this.valueList)
        console.log("node", this.nodeList)
        break;
    }
  }

  public printTree() {
    console.log(JSON.stringify(this.tree))
  }
}
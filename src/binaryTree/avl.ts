import { AVLTree } from "./utils";

export class AVLBalanceTree {
  private tree!: AVLTree

  public getTree() {
    return this.tree
  }

  public insert(nodeValue: number) {
    if(!this.tree) {
      const root = new AVLTree()
      root.value = nodeValue
      this.updateHeight(root)
      this.tree = root
      return
    }
    this.tree = this.insertHelper(this.tree, nodeValue)
  }

  public remove(nodeValue: number) {
    this.tree = this.removeHelper(this.tree, nodeValue) as AVLTree
  }

  private removeHelper(node: AVLTree, value: number) {
    if(node.value === value) {
      let result!: AVLTree
      if(!node.left && !node.right) {
        return undefined
      }
      if(!node.left) {
        result = node.right as AVLTree
      } else if (!node.right) {
        result = node.left as AVLTree
      } else {
        const left = node.left
        const right = node.right
        node = node.right
        while (node.left) {
          node = node.left
        }
        node.left = left
        result = right
      }
      this.updateHeight(result)
      return this.rotate(result)
    } else if(node.value > value) {
      if(node.left) {
        node.left = this.removeHelper(node.left, value)
      }
    } else {
      if(node.right) {
        node.right = this.removeHelper(node.right, value)
      }
    }
    return node
  }

  private insertHelper(node: AVLTree, value: number) {
    if(node.value === value) {
      return node
    }
    if(node.value > value) {
      if(node.left) {
        node.left = this.insertHelper(node.left, value)
      } else {
        const child = new AVLTree()
        child.value = value
        node.left = child
      }
    } else {
      if(node.right) {
        node.right = this.insertHelper(node.right, value)
      } else {
        const child = new AVLTree()
        child.value = value
        node.right = child
      }
    }

    this.updateHeight(node)
    return this.rotate(node)
  }

  private height(node?: AVLTree): number {
    if(!node || (!node.left && !node.right)) {
      return 0
    }
    return Math.max(node.left ? this.height(node.left) + 1 : 0, node.right ? this.height(node.right) + 1 : 0)
  }

  private updateHeight(node: AVLTree) {
    if(node.left) this.updateHeight(node.left)
    if(node.right) this.updateHeight(node.right)
    node.height = this.height(node)
  }

  private balanceFactor(node: AVLTree): number {
    if(node.left) {
      this.balanceFactor(node.left)
    }
    if(node.right) {
      this.balanceFactor(node.right)
    }
    const balanceFactor: number = (node.left ? node.left.height + 1 : 0) - (node.right? node.right.height + 1 : 0)
    node.balanceFactor = balanceFactor
    return balanceFactor
  }

  private rotate(node: AVLTree) {
    const balanceFactor = this.balanceFactor(node)
    if(balanceFactor > 1) {
      const leftBalanceFactor = this.balanceFactor(node.left as AVLTree)
      if(leftBalanceFactor < 0) {
        return this.leftRightRotate(node)
      }
      return this.rightRotate(node)
    }
    if(balanceFactor < -1) {
      const rightBalanceFactor = this.balanceFactor(node.right as AVLTree)
      if(rightBalanceFactor > 0) {
        return this.rightLeftRotate(node)
      }
      return this.leftRotate(node)
    }
    return node
  }

  private leftRightRotate(node: AVLTree) {
    const right = node.left?.right as AVLTree
    if(node.left) right.left = node.left
    node.left = right
    return this.rightRotate(node)
  }

  private rightRotate(node: AVLTree) {
    const left = node.left as AVLTree
    node.left = left.right
    left.right = node
    return left
  }

  private leftRotate(node: AVLTree) {
    const right = node.right as AVLTree
    node.right = right.left
    right.left = node
    return right
  }

  private rightLeftRotate(node: AVLTree) {
    const left = node.right?.left as AVLTree
    if(node.right) left.right = node.right
    node.right = left.right
    return this.leftRotate(node)
  }
}
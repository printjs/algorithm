import { AVLTree } from "./utils";

export class AVLPoint {
  next!: AVLTree
}

export class AVLBalanceTree {
  private tree!: AVLTree

  public getTree() {
    return this.tree
  }

  insert(nodeValue: number) {
    if(!this.tree) {
      const root = new AVLTree()
      root.value = nodeValue
      this.tree = root
      return
    }
    const p = new AVLPoint()
    p.next = this.tree
    while (p.next) {
      if(nodeValue > p.next.value) {
        if(p.next.right) {
          p.next = p.next.right
        } else {
          const node = new AVLTree()
          node.value = nodeValue
          p.next.right = node
          break
        }
      } else if(nodeValue < p.next.value) {
        if(p.next.left) {
          p.next = p.next.left
        } else {
          const node = new AVLTree()
          node.value = nodeValue
          p.next.left = node
          break
        }
      } else {
        console.log(`this ${nodeValue} of node has been inserted into tree`)
        return
      }
    }
  }

  remove(nodeValue: number) {
    const p = new AVLPoint()
    let pre = this.tree
    p.next = this.tree
    while (p.next) {
      if(p.next.value === nodeValue) {
        if(!p.next.left && !p.next.right) {
          if(pre.value === nodeValue) {
            this.tree = new AVLTree()
            return
          }
          if(pre.left && pre.left.value === nodeValue) {
            pre.left = undefined
            return
          }
          if (pre.right && pre.right.value === nodeValue) {
            pre.right = undefined
            return
          }
        }
        if(!p.next.left) {
          if(pre.left && pre.left.value === nodeValue) {
            pre.left = p.next.right
            return
          }
          if(pre.right && pre.right.value === nodeValue) {
            pre.right = p.next.right
            return
          }
        }
        if(!p.next.right) {
          if(pre.left && pre.left.value === nodeValue) {
            pre.left = p.next.left
            return
          }
          if(pre.right && pre.right.value === nodeValue) {
            pre.right = p.next.left
            return
          }
        }
        if(pre.left && pre.left.value === nodeValue) {
          const temp = p.next.left
          pre.left = p.next.right as AVLTree
          pre.left.left = temp
          return
        }
        if(pre.right && pre.right.value === nodeValue) {
          const temp = p.next.right
          pre.right = p.next.left as AVLTree
          pre.right.right = temp
          return
        }
      } else if (p.next.value > nodeValue) {
        if(p.next.left) {
          pre = p.next
          p.next = p.next.left
        } else {
          console.log(`this node ${nodeValue} doesn't exist in currnet tree`)
          break
        }
      } else if(p.next.value < nodeValue) {
        if(p.next.right) {
          pre = p.next
          p.next = p.next.right
        } else {
          console.log(`this node ${nodeValue} doesn't exist in currnet tree`)
          break
        }
      }
    }
  }

  height(node?: AVLTree): number {
    if(!node || (!node.left && !node.right)) {
      return 0
    }
    return Math.max(this.height(node.left), this.height(node.right)) + 1
  }
}
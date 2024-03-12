export class SimpleLinkNode {
  title: string = ''
  next!: SimpleLinkNode
}

export class LinkNode<T> {
  item!:T
  next!: LinkNode<T>
}

export class LinkUtils<T extends {next: T, title: string}> {
  append(link: T, node: T) {
    let p = new SimpleLinkNode()
    p.next = link
    while (p.next) {
      p = p.next
    }
    p.next = node
    return link
  }

  display(link: T) {
    while (link) {
      console.log(link.title)
      link = link.next
    }
  }

  insert(link: T, node: T, index: number) {
    let p = new SimpleLinkNode()
    let cur = new SimpleLinkNode()
    p.next = link
    cur = p
    for(let i = 0; i < index; i++) {
      cur = cur.next
    }
    if(cur) {
      (node as SimpleLinkNode).next = cur.next
      cur.next = node
    } else {
      console.log(`error params ${index}, the value is out of link`)
    }
    return p
  }

  remove(link: T, node: T) {
    let p = new SimpleLinkNode()
    let cur = new SimpleLinkNode()
    let pre = new SimpleLinkNode()
    p.next = link
    pre = p
    cur.next = link
    const sets = new Set<T>()
    while(cur.next) {
      sets.add(cur.next as T)
      if(sets.has(node)) {
        pre.next = cur.next.next
        break
      } else {
        pre = cur.next
        cur = cur.next
      }
    }
    return p
  }
}

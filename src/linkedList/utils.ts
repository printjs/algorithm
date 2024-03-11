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
    
  }

  remove(link: T, node: T) {
    let p = new SimpleLinkNode()
    p.next = link
    const sets = new Set<T>()
    while(p.next) {
      sets.add(p.next as T)
      if(sets.has(node)) {
        p.next = p.next.next
        break
      } else {
        p = p.next
      }
    }
    return link
  }
}

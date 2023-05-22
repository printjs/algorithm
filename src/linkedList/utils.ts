export class SimpleLinkNode {
  title: string = ''
  next!: SimpleLinkNode
}

export class LinkNode<T> {
  item!:T
  next!: LinkNode<T>
}
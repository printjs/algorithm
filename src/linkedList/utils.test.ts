import { LinkUtils, SimpleLinkNode } from "./utils";

const link = new SimpleLinkNode()
link.title = 'a'

const p1 = new SimpleLinkNode()
p1.title = 'b'

const p2 = new SimpleLinkNode()
p2.title = 'c'

const p3 = new SimpleLinkNode()
p3.title = 'last one'

link.next = p1
p1.next = p2

const lnInstance = new LinkUtils<SimpleLinkNode>()

const appendedLink = lnInstance.append(link, p3)

lnInstance.display(appendedLink)

const removedLink = lnInstance.remove(appendedLink, p2)

lnInstance.display(removedLink)

const theNodeWillBeInserted = new SimpleLinkNode()
theNodeWillBeInserted.title = 'insert'
const insertedLink = lnInstance.insert(appendedLink, theNodeWillBeInserted, 4)
lnInstance.display(insertedLink)
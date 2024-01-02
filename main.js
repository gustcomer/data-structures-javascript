import {Node, Tree} from './default-tree'

nA = Node('A')

nB = Node('B')
nC = Node('C')
nD = Node('D')

nE = Node('E')

nA.addChild(nB)
nA.addChild(nC)
nA.addChild(nD)

nB.addChild(nE)

t = Tree(nA)

t.print()
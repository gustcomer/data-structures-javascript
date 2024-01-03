const {Node, Tree} = require('./default-tree.js')

nA = new Node('A')

nB = new Node('B')
nC = new Node('C')
nD = new Node('D')

nE = new Node('E')

nA.addChild(nB)
nA.addChild(nC)
nA.addChild(nD)

nB.addChild(nE)

t = new Tree(nA)

t.print()

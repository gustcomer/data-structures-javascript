//import {Node, Tree} from './default-tree'
const Node = require('./default-tree.js').Node
const Tree = require('./default-tree.js').Tree

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

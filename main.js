const {Node, Tree} = require('./default-tree.js')

const nA = new Node('A')
const nB = new Node('B')
const nC = new Node('C')
const nD = new Node('D')
const nE = new Node('E')

nA.addChild(nB)
nA.addChild(nC)
nA.addChild(nD)
nB.addChild(nE)

t = new Tree(nA)

const nodeE = t.getNode('E')
console.log(nodeE)
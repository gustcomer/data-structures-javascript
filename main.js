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
condition1 = t.search('B')
condition2 = t.search('D')
condition3 = t.search('H')
condition4 = t.search(14)
condition5 = t.search('Z')

console.log(condition1);
console.log(condition2);
console.log(condition3);
console.log(condition4);
console.log(condition5);
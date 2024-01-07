const {Node, Tree} = require('./default-tree.js')

const nF = new Node('F')
const n14 = new Node(14)

console.log(nF.isEqual('F'));
console.log(nF.isEqual('G'));

console.log(n14.isEqual(14));
console.log(n14.isEqual(17));
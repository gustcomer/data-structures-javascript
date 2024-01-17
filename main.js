const {Node, BinarySearchTree} = require('./binary-search-tree.js')

n5 = new Node(5)
n6 = new Node(6)
n4 = new Node(4)

n10 = new Node(10)
n12 = new Node(12)
n0 = new Node(0)
n2 = new Node(2)

bst = new BinarySearchTree()

bst.insert(n5)
bst.insert(n6)
bst.insert(n4)
bst.insert(n10)
bst.insert(n12)
bst.insert(n0)
bst.insert(n2)

console.log(n6.toString())
console.log(bst.toString());

console.log(n5.searchNode(5));
console.log(n5.searchNode(6));
console.log(n5.searchNode(7));
console.log(n5.searchNode(10));
console.log(n5.searchNode(11));
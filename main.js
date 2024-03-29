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

console.log(n5.isLeaf());
console.log(n12.isLeaf());
console.log(n0.isLeaf());
console.log(n2.isLeaf());
console.log(n4.isLeaf());

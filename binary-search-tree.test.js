const {Node, BinarySearchTree} = require('./binary-search-tree.js')

let bst;
let n5;

beforeEach(() => {
  const n5 = new Node(5)

  bst = new BinarySearchTree()
});

test('Should create a simple Binary Search Tree', function () {

  expect(bst).toBeDefined()
});


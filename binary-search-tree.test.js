const {Node, BinarySearchTree} = require('./binary-search-tree.js')

let bst;
let n5
let n6
let n4

let n10
let n12
let n0
let n2

beforeEach(() => {
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
});

test('Should create a simple Binary Search Tree', function () {

  expect(bst).toBeDefined()
});

test('Should print some Node subtree', () => {
  expect(n6.toString()).toBe('6 10 12 ')
})

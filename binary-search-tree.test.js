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

test('Should transform Node into string', () => {
  expect(n6.toString()).toBe('6 10 12 ')
})

test('Should transform Tree into Node', () => {
  expect(bst.toString()).toBe('5 4 0 2 6 10 12')
})

test('Should return true if the key matches some Node or subNode value', () => {
  expect(n5.searchNode(4)).toBe(true)
  expect(n5.searchNode(5)).toBe(true)
  expect(n5.searchNode(6)).toBe(true)
  expect(n5.searchNode(7)).toBe(false)
  expect(n5.searchNode(200)).toBe(false)
  expect(n5.searchNode(12)).toBe(true)
})

test('Should return true if the key in a tree search is present', () => {
  expect(bst.searchNode(5)).toBe(true)
  expect(bst.searchNode(0)).toBe(true)
  expect(bst.searchNode(12)).toBe(true)
  expect(bst.searchNode(100)).toBe(false)
  expect(bst.searchNode(8)).toBe(false)
})

test('Should return true if the key in a tree search is present', () => {
  expect(n5.getNode(5).value).toBe(5)
  expect(n5.getNode(100)).toBe(null)
  expect(n6.getNode(10).value).toBe(10)
  expect(n0.getNode(0).value).toBe(0)
  expect(n5.getNode(12).value).toBe(12)
})
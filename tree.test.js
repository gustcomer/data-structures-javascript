const {Node, Tree} = require('./tree.js')

let t;

beforeEach(() => {
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
});

test('Should create a simple tree', function () {

  expect(t).toBeDefined()
});

test('Should transform to string a simple tree', function () {

  const text = t.toString()

  expect(text).toBe('A B E C D')
});

test('Node should be compared to values', function () {

  const nF = new Node('F')
  const n14 = new Node(14)

  const condition1 = nF.isEqual('F')
  const condition2 = nF.isEqual('G')
  const condition3 = n14.isEqual(14)
  const condition4 = n14.isEqual(17)

  expect(condition1).toBe(true)
  expect(condition2).toBe(false)
  expect(condition3).toBe(true)
  expect(condition4).toBe(false)
});

test('Should search for keys in the tree', function () {

  condition1 = t.searchNode('B')
  condition2 = t.searchNode('D')
  condition3 = t.searchNode('H')
  condition4 = t.searchNode(14)
  condition5 = t.searchNode('Z')

  expect(condition1).toBe(true)
  expect(condition2).toBe(true)
  expect(condition3).toBe(false)
  expect(condition4).toBe(false)
  expect(condition5).toBe(false)
});

test('Should get specified Nodes', function () {

  nodeB = t.getNode('B')
  nodeF = t.getNode('F')

  expect(nodeB.toString()).toBe('B E ')
  expect(nodeF).toBeNull()
});

test('Should return the root node', function () {

  nodeRoot = t.getRoot()

  expect(nodeRoot.value).toBe('A')
});

test('Should tell when it is leaf', function () {

  nodeB = t.getNode('B')
  nodeD = t.getNode('D')

  expect(nodeD.isLeaf()).toBeTruthy()
  expect(nodeB.isLeaf()).toBeFalsy()
});

test('Should calculate height of Nodes', function () {

  nodeA = t.getNode('A')
  nodeB = t.getNode('B')
  nodeC = t.getNode('C')
  nodeD = t.getNode('D')
  nodeE = t.getNode('E')

  expect(nodeA.height()).toBe(2)
  expect(nodeB.height()).toBe(1)
  expect(nodeC.height()).toBe(0)
  expect(nodeD.height()).toBe(0)
  expect(nodeE.height()).toBe(0)
});

test('Should calculate height of a Tree', () => {
  height = t.height()

  expect(height).toBe(2)
})

test('Should record parent of the node', () => {
  nodeA = t.getNode('A')
  nodeB = t.getNode('B')
  nodeC = t.getNode('C')
  nodeD = t.getNode('D')
  nodeE = t.getNode('E')


  expect(nodeA.parent).toBeNull()
  expect(nodeE.parent).toBe(nodeB)
  expect(nodeC.parent).toBe(nodeA)
})

test('Should calculate depth of Node', () => {
  nodeA = t.getNode('A')
  nodeB = t.getNode('B')
  nodeC = t.getNode('C')
  nodeD = t.getNode('D')
  nodeE = t.getNode('E')


  expect(nodeA.depth()).toBe(0)
  expect(nodeB.depth()).toBe(1)
  expect(nodeC.depth()).toBe(1)
  expect(nodeD.depth()).toBe(1)
  expect(nodeE.depth()).toBe(2)
})

test('Should calculate depth of a Tree', () => {
  depth = t.depth()

  expect(depth).toBe(2)
})
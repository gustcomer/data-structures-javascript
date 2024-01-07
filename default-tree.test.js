const {Node, Tree} = require('./default-tree.js')

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
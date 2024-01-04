const {Node, Tree} = require('./default-tree.js')

/*
test('Should create an empty default-tree', function () {
  t = new Tree()
});
*/

test('Should create a simple tree', function () {

  const nA = new Node('A')
  const nB = new Node('B')
  const nC = new Node('C')
  const nD = new Node('D')
  const nE = new Node('E')

  nA.addChild(nB)
  nA.addChild(nC)
  nA.addChild(nD)
  nB.addChild(nE)

  const t = new Tree(nA)

  expect(t).toBeDefined()
});
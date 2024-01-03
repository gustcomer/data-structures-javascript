const {Node, Tree} = require('./default-tree.js')

/*
test('Should create an empty default-tree', function () {
  t = new Tree()
});
*/

test('Should create a simple tree', function () {

  nA = new Node('A')
  nB = new Node('B')
  nC = new Node('C')
  nD = new Node('D')
  nE = new Node('E')

  nA.addChild(nB)
  nA.addChild(nC)
  nA.addChild(nD)
  nB.addChild(nE)

  t = new Tree(nA)

  expect(t).toBeDefined()
});
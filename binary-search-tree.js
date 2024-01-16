
class BinarySearchTree {
  constructor() {
    this.root = undefined
  }

  toString() {
    if(this.root == null) {
      return ''
    }
    return this.root.toString().trim()
  }
}

class Node {
  constructor(value) {
    this.parent = null
    this.value = value
    this.leftNode = null
    this.rightNode = null
  }

  toString() {
    let text = this.value + ' '

    for(let c of this.children){
      text+=c.toString()
    }
    return text
  }
}

module.exports = {BinarySearchTree, Node}
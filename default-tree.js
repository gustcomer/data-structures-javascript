
class Tree{
  constructor(root=null) {
    this.root = root
  }

  toString() {
    return this.root.toString().trim()
  }

  search(key) {
    return this.root.searchNode(key)
  }

  getNode(key) {
    return this.root.getNode(key)
  }

  getRoot() {
    return this.root
  }

  height() {
    return this.root.height()
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.children = []
    this.parent = null
  }

  addChild(node) {
    node.parent = this
    this.children.push(node)
  }

  isEqual(value) {
    return this.value === value
  }

  toString() {
    let text = this.value + ' '

    for(let c of this.children){
      text+=c.toString()
    }
    return text
  }

  searchNode(key){
    if(this.value === key) {
      return true
    }
    for(let c of this.children) {
      if (c.searchNode(key)) {
        return true
      }
    }
    return false
  }

  getNode(key){
    if(this.value === key) {
      return this
    }
    for(let c of this.children) {
      if (c.searchNode(key)) {
        return c.getNode(key)
      }
    }
    return null
  }

  isLeaf() {
    return this.children.length === 0
  }

  height() {
    let height = 0
    let childrenHeight = []

    for (let c of this.children) {
      childrenHeight.push(c.height())
    }

    if(childrenHeight.length>0) {
      height = Math.max(...childrenHeight) + 1
    }

    return height
  }
}

module.exports = {Tree, Node}
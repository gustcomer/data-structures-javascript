
class Tree{
  constructor(root=null) {
    this.root = root
  }

  toString() {
    return this.root.toString().trim()
  }

  search(key) {
    return this.root.nodeSearch(key)
  }

  getNode(key) {
    return this.root.getNode(key)
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(value) {
    this.children.push(value)
  }

  isEqual(value) {
    return this.value === value
  }

  toString() {
    let text = this.value + ' '

    for(let c of this.children){
      // console.log(c);
      text+=c.toString()
    }
    return text
  }

  nodeSearch(key){
    if(this.value === key) {
      return true
    }
    for(let c of this.children) {
      if (c.nodeSearch(key)) {
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
      if (c.nodeSearch(key)) {
        return c
      }
    }
    return null
  }
}

module.exports = {Tree, Node}
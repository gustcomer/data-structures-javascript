
class Tree{
  constructor(root=null) {
    this.root = root
  }

  toString() {
    return this.root.toString().trim()
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
}

module.exports = {Tree, Node}
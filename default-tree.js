
class Tree{
  constructor(root=null) {
    this.root = root
  }

  print() {
    this.root.print()
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

  print() {
    console.log(this.value);

    for(let c of this.children){
      // console.log(c);
      c.print()
    }
  }
}

module.exports = {Tree, Node}
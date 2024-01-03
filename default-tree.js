
class Tree{
  constructor(root=null) {
    this.root = root
  }

  print() {
    this.root.print()
  }
}

class Node {
  constructor(key) {
    this.key = key
    this.children = []
  }

  addChild(key) {
    this.children.push(key)
  }

  print() {
    console.log(this.key);

    for(let c of this.children){
      // console.log(c);
      c.print()
    }
  }
}

module.exports = {Tree, Node}
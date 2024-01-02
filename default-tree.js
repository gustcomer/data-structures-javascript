
export class Tree{
  constructor(root=null) {
    this.root = root
  }

  print() {
    this.root.print()
  }
}

export default class Node {
  constructor(key) {
    this.key = key
    this.children = []
  }

  addChild(key) {
    c.push(key)
  }

  print() {
    console.log(this.key);

    for(c in this.children){
      c.print()
    }
  }
}
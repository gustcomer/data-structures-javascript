
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
    /*
    se o value do node for igual ao do key, retorna true
    senão, chama a search de cada filho com o key em questão, se algum retornar
    true, retorna true aqui.
    caso nenhum returne true, retorna false
    */
  }
}

module.exports = {Tree, Node}
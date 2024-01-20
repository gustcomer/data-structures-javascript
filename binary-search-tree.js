
class BinarySearchTree {
  constructor() {
    this.root = undefined
  }

  insert(node){
    if(this.root == null) {
      this.root = node
    }
    else {
      this.root.insert(node)
    }
  }

  searchNode(key) {
    return this.root.searchNode(key)
  }

  getNode(key) {
    return this.root.getNode(key)
  }

  toString() {
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

  insert(node) {
    if(node.value < this.value) {
      if(this.leftNode == null) {
        this.leftNode = node
      }
      else {
        this.leftNode.insert(node)
      }
    }
    else {
      if(this.rightNode == null) {
        this.rightNode = node
      }
      else {
        this.rightNode.insert(node)
      }
    }
  }

  searchNode(key){
    if(this.value === key){
      return true
    }
    if(key < this.value && this.leftNode){
      return this.leftNode.searchNode(key)
    }
    if (key > this.value && this.rightNode){
      return this.rightNode.searchNode(key)
    }
    return false
  }

  getNode(key){
    if(this.value === key){
      return this
    }
    if(key < this.value && this.leftNode){
      return this.leftNode.getNode(key)
    }
    if (key > this.value && this.rightNode){
      return this.rightNode.getNode(key)
    }
    return null
  }

  toString() {
    let text = this.value + ' '

    if(this.leftNode!=null) {
      text+=this.leftNode.toString()
    }
    if(this.rightNode!=null) {
      text+=this.rightNode.toString()
    }

    return text
  }

  isLeaf() {
    return this.leftNode == null && this.rightNode == null
  }
}

module.exports = {BinarySearchTree, Node}
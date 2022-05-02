const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
        this._root = newNode;
    } else {
        this._insertNode(this._root, newNode); // helper method below
    }
  }
  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this._insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this._insertNode(node.right, newNode);
        }
    }
  }



  has(data) {
    let node = this._root;
    while (node) {
      if (data == node.data) {
        return true;
      }
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  find(data) {
    let node = this._root;
    while (node.data !== data) {
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
      if (node === null) {
        return null;
      }
    }
    return node;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data){
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      let nodeTemp = node.right;
      while (nodeTemp.left !== null) {
        nodeTemp = nodeTemp.left;
      }
      node.data = nodeTemp.data;
      node.right = this._removeNode(node.right, nodeTemp.data);
      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  };

  min() {
    let node = this._root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this._root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
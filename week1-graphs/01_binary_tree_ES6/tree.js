// Daniel Shiffman
// Greg Kreisman refactored to ES6 class
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// Tree object
class Tree {

  constructor(){  
    // Just store the root
    this.root = null;
  }

  // Start by visiting the root
  traverse() {
    this.root.visit();
  }

  // Start by searching the root
  search(val) {
    var found = this.root.search(val);
    return found;
  }

  // Add a new value to the tree
  addValue(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  }
}
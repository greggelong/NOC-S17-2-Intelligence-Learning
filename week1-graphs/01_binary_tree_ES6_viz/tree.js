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
    this.root.visit(this.root);
  }

  // Start by searching the root
  search(val) {
    let found = this.root.search(val);
    return found;
  }

  // Add a new value to the tree
  addValue(val) {
    let n = new Node(val);
    if (this.root == null) {
      this.root = n;
      // An initial position for the root node
      this.root.x = width / 2;
      this.root.y = 16;
    } else {
      this.root.addNode(n);
    }
  }
}
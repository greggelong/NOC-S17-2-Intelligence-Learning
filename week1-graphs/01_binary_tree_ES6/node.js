// Daniel Shiffman
// Greg Kreisman refactored into ES6 class
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// Node in the tree
class Node{

  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  // Search the tree for a value
   search(val) {
    if (this.value == val) {
      return this;
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }

  // Visit a node
    visit() {
    // Recursively go left
    if (this.left != null) {
      this.left.visit();
    }
    // Print out value
    console.log(this.value);
    // Recursively go right
    if (this.right != null) {
      this.right.visit();
    }
  }

  // Add a node
   addNode(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n)
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }
}
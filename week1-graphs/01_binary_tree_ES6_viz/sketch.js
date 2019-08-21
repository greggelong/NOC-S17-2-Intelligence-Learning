// Daniel Shiffman
// Greg Kreisman refactored to ES6 class
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// Binary tree
let tree;

function setup() {
  createCanvas(800,600);
  background(0);

  // New tree
  tree = new Tree();

  // Add ten random values
  for (let i = 0; i < 30; i++) {
    tree.addValue(floor(random(0, 100)));
  }

  // Traverse the tree 
  tree.traverse();

  // Search the tree for 10
  let result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}

// Function that prints the in-order traversal of the binary tree
function iterativeInorder(root) {
  // If the root is null, we simply print null
  if (!root) {
    return null;
  } else {
    let result = "";
    // Initializing the stack
    let stk = [];
    // This loop will print keep printing the tree node in "L N R"
    // until the current node in stack is null or the stack becomes empty
    while (stk.length != 0 || root) {
      // If the current node is not null, we push it into the stack and point it
      // to its left child and skip to the next iteration
      if (root) {
        stk.push(root);
        root = root.left;
        continue;
      }
      // Popping and printing the top-most element of the stack
      result = result + stk[stk.length - 1].data + ", ";
      root = stk[stk.length - 1].right;
      stk.pop();
    }
    //Truncating right most comma
    result = result.slice(0, -2);
    process.stdout.write(result);
  }
}

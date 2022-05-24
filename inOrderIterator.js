class InorderIterator {

    constructor(root) {
      // Initializing the stack
      this.stk = [];
      // Assuming that when iterator is initialized
      // it is always at the first element of tree in its in-order
      this.populateStack(root)
    }
    
    // When our iterator is initialized, we populate our stack with all nodes from
      // the root till the left-most node
      inorderIterator(root) {
          populateStack(root);
      }
  
    // Function to populate the stack from the root till the left-most node
    populateStack(root) {
      while (root) {
        this.stk.push(root);
        root = root.left;
      }
    }
  
    // This function checks if there is a node next in line inside the iterator
    hasNext() {
      if (!this.stk || this.stk.length === 0) {
        return false;
      } else {
        return true;
      }
    }
    
    // getNext returns null if there are no more elements in tree
    getNext() {
      // Return null if there's no succeeding node to return
      if (!this.stk || this.stk.length === 0) {
        return null;
      }
  
      // Extracting and popping the next node from the stack
      let r_val = this.stk.pop();
      // this.stk.remove(-1)
      let temp = r_val.right;
      this.populateStack(temp)
  
      // Returning the next node
      return r_val;
    }
  
  };

  let inorderUsingIterator = function(root) {
    let iter = new InorderIterator(root);
    let result_str = "";
    while (iter.hasNext()) {
      let ptr = iter.getNext();
      if(iter.hasNext()){
           result_str += ptr.data + ", ";
      } else {
          result_str += ptr.data;
      }
    }
    if (result_str == "") {
              result_str = "null";
          }
    return result_str;
  };
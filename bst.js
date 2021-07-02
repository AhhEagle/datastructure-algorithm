//Binary Search Tree
//Binary tree can only have two branches for every node. 
//BST are ordered.
//Each subtree is less than or equal to the parent node 
//and each subtree is greater than or equal to the parent tree

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
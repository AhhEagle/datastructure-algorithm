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

class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node == null){
            this.root = new Node(data);
            return;
        } else{
            const searchTree = (node) =>{
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if(node.left !==null){
                        return searchTree(node.left);
                    }
                }
            }
        }
    }
}
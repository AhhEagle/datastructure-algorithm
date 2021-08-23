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
                } else if (data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data
    }
    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }
    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left; 
            } else {
                current = current.right
            }
            if (current === null){
                return null;
            }

        }
        return current;
    }
    isPresent(data){
        let current = this.root;
        while(current){
            if (data === current.data){
                return true;
            }
            if(data < current.data){
                current = current.left;
            } else{
                current = current.right;
            }
        }
        return false;
    }

    remove(data){
        const removeNode = function (node, data){
            if( node == null){
                return null;
            }
            if (data == node.data){
                //node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                //node has no left child
                if (node.left == null){
                    return node.right;
                }
                //node has no right child
                if(node.right == null){
                    return node.left;
                }

                //node has two children
                let tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right,tempNode.data);
                return node;
            } else if (data  < node.data){
                node.left = removeNode(node.left, data);
                return node;
            } else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
   findMinHeight(node = this.root){
        if(node == null){
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right){
            return left + 1;
        } else {
            return right + 1;
        };
   }
   findMaxHeight(node = this.root){
    if(node == null){
        return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left > right){
        return left + 1;
    } else {
        return right + 1;
    };
}

}
//Min height is the distance from the root node to the first leave node without two children
//Max height is the distance from the root node to the last node on the tree
//test the code
const bst = new BST();
bst.add(6);
bst.add(5);
bst.add(2);
bst.add(1);
bst.add(4);
bst.add(7)
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));
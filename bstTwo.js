class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BstTwo{
    constructor(){
        this.root = null;
    }

    addNode(data){
        const newNode = new Node (data);
        if(!this.root){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        } 
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(!node.left){
                node.left = newNode;
            } else{
                this.insertNode(node.left, newNode);
            }
        } else {
            if(!node.right){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data){
        if(!node){
            return null
        }

        if(data < node.data){
            node.left = this.removeNode(node.left, data);
            return node
        } else if (data > node.data){
            node.right = this.removeNode(node.right, data)
            return node
        } else {
            if(!node.left && !node.right){
                node = null;
                return node;
            }

            if(!node.left){
                node = node.right;
                return node;
            }

            if(!node.right){
                node = node.left;
                return node;
            }
            let min = this.findMin(node.right);
            node.data = min.data;
            node.right = this.removeNode(node.right, min.data);
            return node;
        }
    }

    inOrder(node){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        } else {
            return null;
        }
    }

    preOrder(node){
        if(node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        } else {
            return null;
        }
    }

    postOrder(node){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        } else {
            return null;
        }
    }
    
    traverseBFS() {
        if (!this.root) return;
        this.queue = [];
        this.queue.push(this.root);
        this.output = [];
       
        while (this.queue.length) {
          const node = this.queue.shift();
          if (node.left) {
             this.queue.push(node.left);
          }
          if (node.right) {
             this.queue.push(node.right);
          }
          this.output.push(node.data);
        }
        return this.output;
      }
    
}

let bst = new BstTwo();

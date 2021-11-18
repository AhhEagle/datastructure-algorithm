class Node {
    constructor(label = null){
        this.label = label;
    }
}

class graph{
    constructor(){
         this.nodes = {};
    }
    add(label){
        let node =  new Node(label)
        this.nodes[label] = node;
    }

    addEdge(from, to){
        let fromNode = this.nodes[from];
    }
}
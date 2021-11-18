class Node {
    constructor(label = null){
        this.label = label;
    }
}

class graph{
    constructor(){
         this.nodes = {};
         this.adjacency = {};
         this.list = [];
    }
    add(label){
        let node =  new Node(label)
        this.nodes[label] = node;
        this.adjacency[node] = this.list;
    }

    addEdge(from, to){
        let fromNode = this.nodes[from];
        if(fromNode == null){
            throw new Error("IllegalArgument");
        }
        let toNode = this.nodes[to];
        if(toNode == null){
            throw new Error("IllegalArgument");
        }
    this.adjacency[fromNode] = this.list.push(toNode);
    }

}
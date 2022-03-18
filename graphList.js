class Node{
    constructor(label){
        this.label = label;
        this.list = [];
    }

    addAdjancent(node){
        this.list.push(node);
    }
    
    getAdjancents(){
        return this.list;
    }
    
    removeAdjancent(node){
        const index = this.list.indexOf(node);
        return this.list.splice(index, 1)
    }

    isAdjacent(node){
        return this.list.indexOf(node) > -1;
    }
}

class Graph{
    constructor(){
        this.nodes = new Map();
    }

    addNode(label){
        if(this.nodes.has(label)){
            return this.nodes.get(label)
        } else {
            const node =  new Node(label);
            this.nodes.set(label, node);
            return node;
        }
    }

    removeNode(label){
        const toRemove = this.nodes.get(label);
        if(toRemove){
            for( const node of this.nodes.values()){
                node.removeAdjancent(toRemove);
            }
        }

        return this.nodes.delete(label);
    }

    addEdge(from, to){
        const fromNode = this.addNode(from);
        const toNode = this.addNode(to)
       return fromNode.addAdjancent(toNode);  
    }

    removeEdge(from, to){
        const fromNode = this.nodes.get(from);
        const toNode = this.nodes.get(to);
        if (fromNode && toNode){
            return fromNode.removeAdjacent(toNode)
        }

        return;
    }
    
    *breadthSearch(firstNode){
        const visited = new Map();
        const visitedList = new Queue();

        visitedList.add(firstNode);
        
        while(!visitedList.isEmpty()) {
            const node = visitedList.remove();
            if(node && !visited.has(node)) {
              yield node;
              visited.set(node);
              node.getAdjacents().forEach(adj => visitedList.add(adj));
            }
          }
    }

    *depthSearch(firstNode) {
        const visited = new Map();
        const visitedList = new Stack();
      
        visitedList.add(firstNode);
      
        while(!visitedList.isEmpty()) {
          const node = visitedList.remove();
          if(node && !visited.has(node)) {
            yield node;
            visited.set(node);
            node.getAdjacents().forEach(adj => visitedList.add(adj));
          }
        }
      }
    
}

//const test = new Node(10);
const graph = new Graph();
graph.addNode(10);
console.log(graph);
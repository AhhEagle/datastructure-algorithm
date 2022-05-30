class Graph {
 constructor(){
     this.noOfVertices = 0;
     this.adjList = new Map();
 }

 addVertex(vertex){
     this.adjList.set(vertex, []);
     this.noOfVertices++;
 }
}
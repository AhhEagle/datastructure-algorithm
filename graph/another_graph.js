class Graph {
  constructor() {
    this.noOfVertices = 0;
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
    this.noOfVertices++;
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }

  print() {
    const keys = this.adjList.keys();
    for (let i of keys) {
      const values = this.adjList.get(i);
      let value = "";
      for (let j of values) {
        value += j + " ";
      }
      console.log(`${i} => ${value}`);
    }
  }
}

let graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addEdge("a", "b");
graph.addEdge("a", "c");

console.log(graph.print());

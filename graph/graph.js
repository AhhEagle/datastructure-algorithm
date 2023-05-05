class Node {
  constructor(label = null) {
    this.label = label;
  }
}

class graph {
  constructor() {
    this.nodes = {};
    this.adjacencyList = {};
  }
  add(label) {
    let node = new Node(label);
    this.nodes[label] = node;
    this.adjacencyList[node] = [];
  }

  addEdge(from, to) {
    let fromNode = this.nodes[from];
    if (fromNode == null) {
      throw new Error("IllegalArgument");
    }
    let toNode = this.nodes[to];
    if (toNode == null) {
      throw new Error("IllegalArgument");
    }
    this.adjacencyList[fromNode].push(toNode);
  }
  print() {
    for (let x in Object.keys(this.adjacencyList)) {
      var targets = this.adjacencyList[x];
      if (targets != null) {
        console.log(x + " is connected to " + targets);
      }
    }
  }
}
const graphtest = new graph();
graphtest.add("A");
graphtest.add("B");
graphtest.add("C");
graphtest.addEdge("A", "B");
graphtest.addEdge("A", "C");
graphtest.addEdge("B", "C");
graphtest.print();
console.log(graphtest);

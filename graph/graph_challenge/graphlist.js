class Graph{
    constructor(vertices){
      //Total number of vertices in the graph
      this.vertices=vertices;
      // List to hold the edges
      this.list=[];
      for(i=0; i<vertices.length; i++){
        let temp=new LinkedList();
        this.list.push(temp);
      }
    }

    addEdge(source, destination) {
        if (source < this.vertices && destination < this.vertices)
         this.list[source].insertAtHead(destination);
      }
  }

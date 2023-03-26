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
         //for an undirected graph 
         //this.list[destination].insertAtHead(source);
      }

      strGraph() {
        //breadth First
        let str = "";
        var i;
        for (i = 0; i < this.list.length; i++) {
          str = str + "|" + String(i) + "| => ";
          let temp = this.list[i].getHead();
          while (temp != null) {
            str += ("[" + String(temp.data) + "] -> ");
            temp = temp.nextElement;
          }
          str += "null ";
        }
        return str;
      }

      dfGraph() {
        //depth first 
        let str = "";
        var i;
        for (i = 0; i < this.list.length; i++) {
          str = str + "|" + String(i) + "| => ";
          let temp = this.list[i].getHead();
          while (temp != null) {
            str += ("[" + String(temp.data) + "] -> ");
            temp = temp.nextElement;
          }
          str += "null ";
        }
        return str;
      }
  }

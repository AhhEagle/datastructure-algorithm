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

       bfsTraversal_helper(g, source, visited, obj) {
  
  
        //Create Queue(implemented in previous lesson) for Breadth First Traversal and enqueue source in it
        let queue = new Queue(g.vertices);
        queue.enqueue(source);
        visited[source] = true;
        //Traverse while queue is not empty
        while (queue.isEmpty() == false) {
          //Dequeue a vertex/node from queue and add it to result
          let current_node = queue.dequeue();
          obj.result += String(current_node);
          //Get adjacent vertices to the current_node from the list,
          //and if they are not already visited then enqueue them in the Queue
          let temp = g.list[current_node].getHead();
          while (temp != null) {
            if (visited[temp.data] == false) {
              queue.enqueue(temp.data);
              visited[temp.data] = true; //Visit the children
            }
            temp = temp.nextElement;
          }
        }
      }
      
       bfsTraversal(g)
      {
        if (g.vertices < 1){
          return null;
        }
        
        var obj = {result: ''}
      
        //An array to hold the history of visited nodes
        //Make a node visited whenever you push it into stack
        let visited = [];
        for (var x = 0; x < g.vertices; x++) {
          visited.push(false);
        }
          
        for (var i = 0; i < g.vertices; i++) {
          if (!visited[i])
            bfsTraversal_helper(g, i, visited, obj);
        }
      
        return obj.result;
      }

      
dfsTraversal_helper (g, source, visited, obj) {
  //Create Stack(Implemented in previous lesson) for Depth First Traversal and Push source in it
  let stack = new Stack(g.vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack and add it to the result
    let current_node = stack.pop();
    obj.result += String(current_node);
    //Get adjacent vertices to the current_node from the array,
    //and if they are not already visited then push them in the stack
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (visited[temp.data] == false) {
        stack.push(temp.data);
         visited[temp.data] = true;
      }
      temp = temp.nextElement;
    } 
  }
}

dfsTraversal(g)
{
  if (g.vertices < 1){
    return null;
  }
  
  var obj = {result: ''}

  //An array to hold the history of visited nodes
  //Make a node visited whenever you push it into stack
  var visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }
    
  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i])
      dfsTraversal_helper(g, i, visited, obj);
  }

  return obj.result;
}


detectCycleRec(g, i,visited, recNodes) {
    // Check if current node is being visited in the same recursive call
    if(visited[i]==false) {
        // Set recursive array and visited to true
        visited[i] = true;
        recNodes[i] = true;

        var adjacent;
        let adjacentNode= g.list[i].getHead();
        while (adjacentNode != null ) {
            // Access adjacent node and repeat algorithm
            adjacent = adjacentNode.data;
            if ((!visited[adjacent]) && detectCycleRec(g, adjacent, visited, recNodes))
                return true;  // Loop found
            else if(recNodes[adjacent])
              return true;
            adjacentNode=adjacentNode.nextElement;
        }

    }


    recNodes[i] = false;
    return false;
}

 detectCycle(g) {

    var num_of_vertices = g.vertices;
    //Boolean Array to hold the history of visited nodes (by default-false)
    //Make a node visited whenever you traverse it
     var visited = [];

    //Boolean array of vertices which will recursively called
     var recNodes = [];

    for(var i = 0; i < num_of_vertices; i++)
    {
        visited[i] = false;
        recNodes[i] = false;
    }

    for (var i = 0; i < num_of_vertices; i++) { // Recursive function called
        if (detectCycleRec(g,i, visited, recNodes))
            return true;
        // If cycle detected, return true
    }
    return false;
}

findMotherVertex(g) {
  //Traverse the Graph Array and perform DFS operation on each vertex
  //The vertex whose DFS Traversal results is equal to the total number
  //of vertices in graph is a mother vertex
  let num_of_vertices_reached = 0;
  for (var i = 0; i < g.vertices; i++) {
    num_of_vertices_reached = DFS(g, i);
    if (num_of_vertices_reached == g.vertices) {
      return i;
    }
  }
  return -1;
}

//Performs DFS Traversal on graph starting from source
//Returns total number of vertices which can be reached from source
 DFS(g, source) {
  let num_of_vertices = g.vertices;
  let vertices_reached = 0 //To store how many vertices reached starting from source
  //An array to hold the history of visited nodes (by default all false)
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (var i = 0; i < num_of_vertices; i++) {
    visited[i] = false;
  }

  //Create Stack(Implemented in previous lesson) for Depth First Traversal and Push source in it
  let stack = new Stack(num_of_vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack 
    let current_node = stack.pop();
    //Get adjacent vertices to the current_node from the list,
    //and if only push unvisited adjacent vertices into stack
    let temp = g.list[current_node].head;
    while (temp != null) {
      if (visited[temp.data] == false) {
        stack.push(temp.data)
        visited[temp.data] = true;
        vertices_reached += 1;
      }
      temp = temp.nextElement;
    }
    //end of while
  }
  return vertices_reached + 1; //+1 is to include the source itself
}

 anotherFindMotherVertex(g){
  // visited[] is used for DFS. Initially all are 
  // initialized as not visited 
  let visited = [];
  for (var i=0; i<g.vertices; i++){
    visited[i]=false;  
  }

  // To store last finished vertex (or mother vertex) 
  let lastV=0;

  // Do a DFS traversal and find the last finished 
  // vertex 
  for (var i=0; i<g.vertices; i++){ 
    if (visited[i]==false){
      ADFS(g, i, visited); 
      lastV = i;
    }
  }

  // If there exist mother vertex (or vetices) in given 
  // graph, then v must be one (or one of them) 

  // Now check if v is actually a mother vertex (or graph 
  // has a mother vertex). We basically check if every vertex 
  // is reachable from v or not. 

  // Reset all values in visited[] as false and do 
  // DFS beginning from v to check if all vertices are 
  // reachable from it or not. 
  for (var i=0; i<g.vertices; i++){
    visited[i]=false;
  }
  ADFS(g, lastV, visited); 
  
  for(var j=0; j<visited.length; j++){
    if(visited[j]==false){
      return -1;
    }
  }
  return lastV;
}  

  
}

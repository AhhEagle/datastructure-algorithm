"use strict";
// importing LinkedList and Node class from the respective files.
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
//Access HeadNode => this.head
//Check if list is empty => this.isEmpty() 
//Node class  { data ; Node nextElement;}

//Inserts a value at the end of the list  
LinkedList.prototype.insertAtTail = function(newData) {
  //Creating a new Node with data as newData
  let node = new Node(newData);

  //check for case when list is empty
  if (this.isEmpty()) {
    //Needs to Insert the new node at Head
    this.head = node;
    return this;
  }

  //Start from head
  let currentNode = this.head;

  //Iterate to the last element
  while (currentNode.nextElement != null) {
    currentNode = currentNode.nextElement;
  }

  //Make new node the nextElement of last node of list
  currentNode.nextElement = node;
  return this;
}

//Searches a value in the given list.
LinkedList.prototype.search = function(value) {
  //Write code here
  //5->6->7->8->10

  let current = this.head;
  while(current != null){
    if(current.data == value){
      return true;
    }
    current = current.nextElement;
  }

  return false;
}

LinkedList.prototype.searchRecursively = function(value) {
  return this.searchRecursive(this.head, value);
}

LinkedList.prototype.searchRecursive = function(node, value) {
  //Base case
  if (node == null) {
    return false;
  }

  //Check if the node's value contains the required value
  if (node.data == value) {
    return true; //value found
  }

  //Recursive call to the next node in the list
  return this.searchRecursive(node.nextElement, value);
}

LinkedList.prototype.deleteVal = function(value) {
  
  if (this.isEmpty()) {
    return false;
  }

  let currentNode = this.head;
  if (currentNode.data == value) {
    this.head = currentNode.nextElement;
    return true;
  }

  while (currentNode.nextElement != null) {
    if (currentNode.nextElement.data == value) {
      currentNode.nextElement = currentNode.nextElement.nextElement;
      return true;
    }
    currentNode = currentNode.nextElement;
  }
  //else node was not found, return false
  return false;
}


let list = new LinkedList()
for (var i = 0; i < 5; i++) {
  list.insertAtTail(i);
  list.printList();
}

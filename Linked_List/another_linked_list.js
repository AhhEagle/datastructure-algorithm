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

let list = new LinkedList()
for (var i = 0; i < 5; i++) {
  list.insertAtTail(i);
  list.printList();
}

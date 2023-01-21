"use strict";
const Node = require('./Node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion At Head  
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }

  isEmpty() {
    return (this.head == null);
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }
  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }

}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()  
//Node class  { data ; Node nextElement;}

//Searches a value in the given list.
LinkedList.prototype.search = function(value) {
  //Start from the first element
  let currentNode = this.head;

  //Traverse the list until you find the value or reach the end
  while (currentNode != null) {
    if (currentNode.data == value) {
      return true; //value found
    }
    currentNode = currentNode.nextElement
  }
  return false; //value not found
}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => this.head
//Check if list is empty => this.isEmpty()
//Delete at head => this.deleteAtHead()
//Search for element => this.search(value)
//Node class  { data ; Node nextElement;}
LinkedList.prototype.deleteVal = function(value) {
  
  //if list is empty return false
  if (this.isEmpty()) {
    return false;
  }

  //else get pointer to head
  let currentNode = this.head;
  // if first node's is the node to be deleted, delete it and return true
  if (currentNode.data == value) {
    this.head = currentNode.nextElement;
    return true;
  }

  // else traverse the list
  while (currentNode.nextElement != null) {
    // if a node whose next node has the value as data, is found, delete it from the list and return true
    if (currentNode.nextElement.data == value) {
      currentNode.nextElement = currentNode.nextElement.nextElement;
      return true;
    }
    currentNode = currentNode.nextElement;
  }
  //else node was not found, return false
  return false;
}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => this.head
//Check if list is empty => this.isEmpty()
// delete first node => this.deleteAtHead()
//Node class  { data ; Node nextElement;}

LinkedList.prototype.deleteAtTail = function() {
  // check for the case when linked list is empty
  if (this.isEmpty()) {
    return this;
  }
  //if linked list is not empty, get the pointer to first node
  let firstNode = this.head;
  //check for the corner case when linked list has only one element
  if (firstNode.nextElement == null) {
    this.deleteAtHead();
    return this;
  }
  //otherwise traverse to reach second last node
  while (firstNode.nextElement.nextElement != null) {
    firstNode = firstNode.nextElement;
  }
  //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
  firstNode.nextElement = null;
  return this;
}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

function length(list) {
  let length = 0;
  let currentNode = list.getHead();
  while (currentNode != null) {
    length = length + 1;
    currentNode = currentNode.nextElement;
  }
  return length;
}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Access Length => list.length;
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
function removeDuplicates(list) {
  if (list.isEmpty()) {
    return null;
  }

  //If list only has one node, leave it unchanged
  if (list.getHead().nextElement == null) {
    return list;
  }

  let outerNode = list.getHead();
  while (outerNode != null) {
    let innerNode = outerNode; // Iterator for the inner loop
    while (innerNode != null) {
      if (innerNode.nextElement != null && outerNode.data == innerNode.nextElement.data) { //Duplicate found ahead
        innerNode.nextElement = innerNode.nextElement.nextElement; // Remove duplicate
      } else {
        innerNode = innerNode.nextElement; // Otherwise simply iterate ahead
      }
    }
    outerNode = outerNode.nextElement;
  }

  return list;
}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Create List => list = LinkedList()
//Remove duplicates => list.removeDuplicates()
//Node class { data ; Node nextElement;}


//Returns a list containing the union of list1 and list2  
function union(list1, list2) {
  if (list1.isEmpty()) {
    return list2;
  } else if (list2.isEmpty()) {
    return list1;
  }

  let start = list1.getHead();

  //Traverse the first list till the tail
  while (start.nextElement != null) {
    start = start.nextElement;
  }

  //Link last element of first list to the first element of second list
  start.nextElement = list2.getHead();
  list1.removeDuplicates();

  return list1;
}
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Create List => list = LinkedList()
//Remove duplicates => list.removeDuplicates()
//Node class { data ; Node nextElement;}
//Returns a list containing the intersection of list1 and list2  
function intersection(list1, list2) {
  let result = new LinkedList();

  let t1 = list1.getHead();
  let t2 = list2.getHead();


  while (t1 != null) {
    while (t2 != null) {
      if(t1.data == t2.data){
         result.insertAtHead(t1.data);
      }
      t2 = t2.nextElement;
    }
    t2 = list2.getHead();
    t1 = t1.nextElement;
  }
  result.removeDuplicates();
  return result;
}

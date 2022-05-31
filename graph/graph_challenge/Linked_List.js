import Node from "./node";
export default class LinkedList {
    constructor() {
      this.head = null;
    }
  
    //Insertion At Head  
    insertAtHead(newData) {
      let tempNode = new Node(newData);
      tempNode.next = this.head;
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
          temp = temp.next;
        }
        console.log("null");
        return true;
      }
    }
  
    getHead() {
      return this.head;
    }
    setHead(newHead) {
      this.head = newHead;
      return this;
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
          temp = temp.next;
        }
        st += "null";
        return st;
      }
    }
    insertAtTail(newData) {
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
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
  
      //Make new node the nextElement of last node of list
      currentNode.next = node;
      return this;
    }
    search(value) {
      //Start from the first element
      let currentNode = this.head;
  
      //Traverse the list until you find the value or reach the end
      while (currentNode != null) {
        if (currentNode.data == value) {
          return true; //value found
        }
        currentNode = currentNode.next;
      }
      return false; //value not found
    }
    deleteAtHead() {
      //if list is empty, do nothing
      if (this.isEmpty()) {
        return this;
      }
      //Get the head and first element of the list
      let firstElement = this.head;
  
      //If list is not empty, link head to the nextElement of firstElement
      this.head = firstElement.next;
  
      return this;
    }
    deleteVal(value) {
      let deleted = null; //True or False
  
      //if list is empty return false
      if (this.isEmpty()) {
        return false;
      }
  
      //else get pointer to head
      let currentNode = this.head;
      // if first node's is the node to be deleted, delete it and return true
      if (currentNode.data == value) {
        this.head = currentNode.next;
        return true;
      }
  
      // else traverse the list
      while (currentNode.next != null) {
        // if a node whose next node has the value as data, is found, delete it from the list and return true
        if (currentNode.next.data == value) {
          currentNode.next = currentNode.next.next;
          return true;
        }
        currentNode = currentNode.next;
      }
      //else node was not found, return false
      deleted = false;
      return deleted;
    }
    deleteAtTail() {
      // check for the case when linked list is empty
      if (this.isEmpty()) {
        return this;
      }
      //if linked list is not empty, get the pointer to first node
      let firstNode = this.head;
      //check for the corner case when linked list has only one element
      if (firstNode.next == null) {
        this.deleteAtHead();
        return this;
      }
      //otherwise traverse to reach second last node
      while (firstNode.next.next != null) {
        firstNode = firstNode.next;
      }
      //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
      firstNode.next = null;
      return this;
    }
  }
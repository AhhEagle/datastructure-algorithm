const Node = require('./node.js')
export class NewLinkedList{
    constructor(){
        this.head = null;
    }

    isEmpty() {
        return (this.head == null);
      }
    
      //function to print the linked list
      printList() {
        if (this.isEmpty()) {
          return false;
        } else {
          let temp = this.head;
          while (temp != null) {
            process.stdout.write(String(temp.data));
            process.stdout.write(" -> ");
            temp = temp.nextElement;
          }
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
class Node {    
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinked{
   constructor(){
        this.head;
        this.tail;
        this.size = 0;
   }
   addFirst(data){
       let node = new Node(data);
       if(this.head == null){
           this.head = this.tail = node;
       } else{
           node.next = this.head;
           this.head.prev = node ;
           this.head = node;
       }

       this.size++;
   }
     addLast(data){
       let node = new Node(data);
       if(this.head == null){
           this.head = this.tail = node;
       } else{
            node.prev = this.tail;
          this.tail.next = node;
          this.tail = node;
       }

       this.size++;
   }

   insertAfter(data, nodeAfter) {
    let current = this.head;
    while (current) {
      if (current.data === nodeAfter) {
        const node = new Node(data);
        if (current === this.tail) {
          this.addLast(data);
        } else {
          current.next.prev = node;
          node.prev = current; 
          node.next = current.next;
          current.next = node;
          this.size++;
        }
      }
      current = current.next;
    }
  }

   indexOf(data){
       let index = 0;
       let current = this.head;
       while(current != null){
           if(current.data == data){ 
               return index;
           }
           current = current.next;
           index++;
       }
       return -1;
   }

    removeHead(){
      if(!this.head){
        return null;
      }
      let tobeRemoved = this.head;
      if(!this.head.next){
        this.head = null;
        this.tail = null;
      } else{
        let newHead = this.head.next;
        this.head.next = null;
        newHead.prev = null;
        this.head = newHead;
      }
      this.size -- ;
      return tobeRemoved.data
    }

   removeNode(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--
      }
      current = current.next;
    }
  }
}

const double =  new DoubleLinked()
double.addFirst(5);
double.addFirst(4);
double.addFirst(3);
double.addFirst(2);
double.addLast(6);
double.addLast(7);
console.log(double.indexOf(2));
console.log(double);


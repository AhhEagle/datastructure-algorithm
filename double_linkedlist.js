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
          current.next.previous = node;
          node.previous = current; 
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


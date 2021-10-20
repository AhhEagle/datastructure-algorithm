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
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
       }

       this.size++;
   }
}

const double =  new DoubleLinked()
double.addFirst(5);
double.addFirst(4);
double.addFirst(3);
double.addFirst(2);
double.addLast(6);
double.addLast(7);
console.log(double);


class Node {    
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinked{
   constructor(){
        this.head = null;
        this.tail = null;
   }

    addLast(data){
     let node =  new Node (data);
     if(this.head == null){
         this.head = this.tail = node;
     } else {
         this.tail.next = node;
         this.tail = node;
     }
    }

    addFirst(data){
        let node =  new Node (data);
     if(this.head == null){
         this.head = this.tail = node;
     } else {
         node.next =  this.head;
         this.head = node;
    }
}
}

const ll_linked = new SingleLinked();
ll_linked.addLast(3);
ll_linked.addLast(4);
ll_linked.addLast(6)
ll_linked.addLast(5);
ll_linked.addFirst(1)
console.log(ll_linked)


class Node {    
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinked{
   constructor(){
        this.head ;
        this.tail ;
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
    indexOf(data){
        let index = 0;
        let current = this.head;
        while(current != null){
            if(current.data == data){ return index;}
            current = current.next;
            index++
        }
        return -1;
    }

    contains(data){
        return this.indexOf(data) != -1;
    }

}

const ll_linked = new SingleLinked();
ll_linked.addLast(3);
ll_linked.addLast(4);
ll_linked.addLast(6)
ll_linked.addLast(5);
ll_linked.addFirst(1)
console.log(ll_linked.contains(0));
console.log(ll_linked)


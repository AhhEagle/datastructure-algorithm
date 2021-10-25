class Node {    
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinked{
   constructor(){
        this.head;
        this.tail;
        this.size = 0;
   }

    addLast(data){
     let node =  new Node (data);
     if(this.head == null){
         this.head = this.tail = node;
     } else {
         this.tail.next = node;
         this.tail = node;
     }
      this.size++;
    }

    addFirst(data){
        let node =  new Node (data);
     if(this.head == null){
         this.head = this.tail = node;
     } else {
         node.next =  this.head;
         this.head = node;
    }
     this.size++;
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
    removeFirst(){
        if(this.head == null){
            return;
        }
        this.size--;
        if(this.head == this.tail){
            return null;
        } else{
            let first =  this.head.next;
            this.head.next = null;
            this.head = first;
        }
    }
    removeLast(){
         if(this.head == null){
            return;
        }
        this.size --
        if(this.head == this.tail){
            return null;
        } else{
           let current = this.head
            let prev;
        while(current.next != null){
             prev = current;
             current =  current.next
           }
           prev.next = null;
           this.tail = prev
        }
    }

    returnSize(){
        return this.size;
    }

    toArray(){
        let newArray = [];
        let current = this.head;
        let index = 0;
        while(current != null){
            newArray[index] = current.data;
            index++;
            current = current.next;
        }
        return newArray;
    }

    getKthFromTheEnd(k){
        let a = this.head;
        let b = this.head;
        for(let i = 0; i < k-1; i++){
            b = b.next;
            if(b == null){
                return "error";
            }
        }
        while (b != this.tail){
            a = a.next;
            b = b.next;
        }
        return a.data
    }

}

export SingleLinked;

const ll_linked = new SingleLinked();
ll_linked.addLast(3);
ll_linked.addLast(4);
ll_linked.addLast(6)
ll_linked.addLast(5);
ll_linked.addFirst(1);
ll_linked.removeFirst();
ll_linked.removeLast();
console.log(ll_linked.getKthFromTheEnd(1));
console.log(ll_linked.returnSize());
console.log(ll_linked.contains(0));
console.log(ll_linked.toArray());
console.log(ll_linked)


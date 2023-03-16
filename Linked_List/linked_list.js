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
     if(this.isEmpty()){
         this.head = this.tail = node;
     } else {
         this.tail.next = node;
         this.tail = node;
     }
      this.size++;
    }

    addFirst(data){
        let node =  new Node (data);
     if(this.isEmpty()){
         this.head = this.tail = node;
     } else {
         node.next =  this.head;
         this.head = node;
    }
     this.size++;
}
    insertAfter(data, nodeAfter){
     let current = this.head;
     while (current){
        if(current.data === nodeAfter){
            let node =  new Node (data)
            if(current === this.tail){
               this.tail.next = node;
               this.tail = node;
            } else {
                node.next = current.next
                current.next = node;
                break;
            }
            this.size++;
        }
        current = current.next
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
    removeFirst(){
        if(this.isEmpty()){
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
         if(this.isEmpty()){
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
    isEmpty(){
        return this.head == null;
    }

    reverse(){
        if(this.isEmpty()){
            return;
        }
        let current = this.head.next;
        let previous = this.head;
        previous.next = null;
        this.tail = previous;
       while(current != null){
           let newCurrent = current;
           current = current.next;
           newCurrent.next = previous;
           previous = newCurrent;
        }

        this.head = previous;
    }

    getKthFromTheEnd(k){
        if(this.isEmpty()){
            return;
        }
        let a = this.head;
        let b = this.head;
        for(let i = 0; i < k-1; i++){
            b = b.next;
            console.log(b)
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
    deleteKeyOccur(k){
        let current = this.head;
        let prev = null;
        while(current){
            if (current.data == k){
                this.size--;
                if(current === this.head){
                    this.head = this.head.next;
                    current = this.head
                } else {
                    prev.next = current.next;
                    current = current.next;
                }
            } else{
                prev = current;
                current = current.next;
            }
        }
    }

    removeDuplicate(){
        let dup = new Set();
        let current =  this.head;
        if(!this.head){
            return
        } else {
            dup.add(current.data);
        }
        while (current.next){
            if(dup.has(current.next.data)){
                this.size--;
                current.next = current.next.next;
            } else{
                dup.add(current.next.data);
                current = current.next;
            }
        }
        return dup;
    }
    sortList() {
        let sorted = null;
        let current = this.head;
        while (current){
            let temp = current.next;
            sorted = this.sortedList(sorted, current);
            current = temp
        }
        console.log(sorted);
           return sorted;
    }
    sortedList(head, node){
        if(!node){
            return head;
        }
        if(!head || node.data <= head.data){
            node.next = head;
            return node;
        }
        let curr = head;
        while (curr.next && curr.next.data < node.data){
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
        return head
    }

    hasCycle(){
        let cycle_length = 0;
        let fast = this.head, slow = this.head;
        while(fast !== null && fast.next !== null){
            fast= fast.next.next;
            slow = slow.next;
            if(slow === fast){
             cycle_length = this.calculate_cycle_length(slow);
             break;
            }
        }
        return this.find_cycle_start(this.head, cycle_length);
    }
     calculate_cycle_length(slow) {
        let current = slow,
          cycleLength = 0;
        while (true) {
          current = current.next;
          cycleLength += 1;
          if (current === slow) {
            break;
          }
        }
        return cycleLength;
      }

       find_cycle_start(head, cycle_length) {
        let pointer1 = head,
          pointer2 = head;
        // move pointer2 ahead 'cycle_length' nodes
        while (cycle_length > 0) {
          pointer2 = pointer2.next;
          cycle_length -= 1;
        }
        // increment both pointers until they meet at the start of the cycle
        while (pointer1 !== pointer2) {
          pointer1 = pointer1.next;
          pointer2 = pointer2.next;
        }
      
        return pointer1;
      }
      decimalValue(){
        let res = 0;
        let current = this.head;
        while(current){
       // convert from base to 2 to decimal
         res = res *2 + current.data
         current = current.next
        }
         return res;
    }

}

const ll_linked = new SingleLinked();
ll_linked.addLast(3);
ll_linked.addLast(4);
ll_linked.addLast(6)
ll_linked.addLast(5);
ll_linked.addFirst(1);
ll_linked.addFirst(1);
ll_linked.insertAfter(8, 5);
console.log(ll_linked);
//console.log(ll_linked.deleteKeyOccur(1));
//ll_linked.removeFirst();
//ll_linked.removeLast();
//console.log(ll_linked.getKthFromTheEnd(3));




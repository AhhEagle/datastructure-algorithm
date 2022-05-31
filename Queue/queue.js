let Doublelinkedlist =  require("./double_linkedlist");
function Queue(){
    collection =  [];
    this.print = () => console.log(collection);
    this.enqueue= (element) => console.log(collection.push(element));
    this.dequeue= () => console.log(collection.shift());
    this.front=()=>{return collection[0]};
    this.size=()=>{ return collection.length};
    this.isEmpty= ()=>{return collection.length === 0};
}

function QueueWithTwoStack(){
    let stackOne = [];
    let stackTwo = [];

    this.enqueue = (element) =>{
        stackOne.push(element)
    }
    this.dequeue= ()=>{
        if(!stackOne.length && !stackTwo.length){
           return new Error ("IllegalStateExecption");
        }
        if(stackTwo.length == 0){
            while(stackOne.length !=0){
                stackTwo.push(stackOne.pop())
            }
        }
       return stackTwo.pop()
}
    this.toString = ()=>{
        return stackTwo
    }
   
}

class QueueTwo {
    constructor(){
        this.items = Doublelinkedlist;
    }

    isEmpty() {   
        return this.items.length == 0;
      }
    
      getFront() {
        if (!(this.isEmpty())) {
         return this.items.firstNode(); 
      } else
         return null;
      }
    
      size() {
        return this.items.length;
      }
       // Add an item to the queue (Time complexity: O(1))
     enqueue(element) {
    return this.items.addLast(element);
  }

  // Remove an item from the queue (Time complexity: O(1))
     dequeue() {
    return this.items.removeHead();
  }
}


let q = new QueueWithTwoStack();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log(q.dequeue())
// q.enqueue(40);
// console.log(q.dequeue())
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// q.enqueue(50);
// console.log(q.toString())
// q.enqueue('a');
// q.enqueue('b');

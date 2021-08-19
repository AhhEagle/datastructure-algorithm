function Queue(){
    collection =  [];
    this.print = () => console.log(collection);
    this.enqueue= (element) => console.log(collection.push(element));
    this.dequeue= () => console.log(collection.shift());
    this.front=()=>{return collection[0]};
    this.size=()=>{ return collection.length};
    this.isEmpty= ()=>{return collection.length === 0};
}

function PriorityQueue(){
    let collection = [];
    this.printCollection =  function(){
        console.log(collection)
    };
    this.enqueue = function(element){
    }
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
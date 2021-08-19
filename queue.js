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
        if(this.isEmpty()){
            collection.push(element);
        } else {
            let added = false;
            for(let i=0; i<collection.length; i++){
                if(element[1] < collection[i][1]){ // to check priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    };
    
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
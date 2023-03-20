class Stack{
    constructor(){
        this.items = [];
        this.top = null;
        this.count = 0;
    }

    peek(){
        if(this.count == 0)
            return null;
        
        return this.top;
    }

    isEmpty(){
        return this.count == 0 ? true : false; 
    }
    size(){
        return this.count
    }
    push(element){
        this.items.push(element);
        this.top = element;
        this.count++;
    }
    pop(){
        if(this.count == 0){
            return null;
        } else {
            this.count = this.count - 1 
            this.top = this.items[this.count - 1];
            return this.items.pop();
        }
    }
}

function anotherPush(element){
    this.items[count++] = element;
    this.top = this.items[count]
}

function anotherpop(){
    if(count == 0){
        return null
    } 
    count--;
    return this.items[count];
}

function stackWithTwoQueues(){
    let queueOne = [];
    let queueTwo = [];

    this.add = function (ele){
        queueOne.push(ele);
    };

    this.remove = function (){
        if(!queueOne.length && !queueTwo.length){
            return new Error ("IllegalStateException")
        }
        if(queueTwo.length == 0){
            while(queueOne.length !=0){
                queueTwo.push(queueOne.shift())
            }
        }
       return queueTwo.pop()
    }

    this.isEmpty = function (){
        return  ((queueOne.length + queueTwo.length) === 0)
    }

    this.size = function(){
        return queueTwo.length;
    }

    this.peek = function(){
        return queueTwo[queueTwo.length - 1];
    }
   
}

function sortAStack(stack){
     // stack = [23, 60, 97,42,12,4,2]
    //temp = []
    let temp = new Stack();
    let val;
    while(stack.isEmpty() == false){
        val = stack.pop();
        if(val>=temp.peek()){
            temp.push(val);
        } else {
            while(temp.isEmpty() == false){
                stack.push(temp.pop());
            }
            temp.push(val);
        }

    }

    while(temp.isEmpty() == false){
        stack.push(temp.pop());
    }
    return stack;

}

function anotherSortStack(stack) {

    if (!stack.isEmpty()) {
        var val = stack.pop();
        anotherSortStack(stack) 
        insert(stack, val)
        
    }
    return stack
}

function insert(stack, value) {
    if (stack.isEmpty() || value < stack.getTop())
        stack.push(value)
    else {
        let temp = stack.pop()
        insert(stack, value)
        stack.push(temp)
    }

}
let q = new Stack();
q.push(2)
q.push(97)
q.push(4)
q.push(42)
q.push(12)
q.push(60)
q.push(23);

console.log(sortAStack(q));

//let testStack =  new Stack();
// console.log(testStack.push(5));
// console.log(testStack.push(7));
// console.log(testStack.push(8));
// console.log(testStack.peek());
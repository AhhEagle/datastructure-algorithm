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
            console.log(this.count)
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

let testStack =  new Stack();
// console.log(testStack.push(5));
// console.log(testStack.push(7));
// console.log(testStack.push(8));
// console.log(testStack.peek());
// console.log("this is empty", testStack.isEmpty());
// console.log(testStack.size());
// console.log("This is pop", testStack.pop());
// console.log(testStack.peek());
// console.log(testStack.size());
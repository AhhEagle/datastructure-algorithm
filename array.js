class Array{
    constructor(){
        this.list = [];
    }
    insert(value){
     this.list.push(value);
    }
    removeAt(index){
        if (index > this.list.length){
            return -1
        }
    this.list[index] = 0;
    return this.list;
    }
}

let test = new Array();
test.insert(6);
test.insert(7);
test.insert(8);
test.insert(9);
console.log(test.removeAt(0));
console.log(test);

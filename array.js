class Array{
    constructor(){
        this.list = [];
    }
    insert(value){
     this.list.push(value);
    }
   
}

let test = new Array();
test.insert(6);
test.insert(7);
test.insert(8);
test.insert(9);
console.log(test);

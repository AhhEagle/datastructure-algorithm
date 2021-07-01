function mySet(){
let collection = [];
this.has =  function(element){
    return(collection.indexOf(element) !== -1);
};
this.values = function(){
    return collection;
};

this.add= function(element){
    if(!this.has(element)){
        collection.push(element);
        return true;
    }
    return false;
};

this.remove = function(element){
    if(this.has(element)){
        let index =  collection.indexOf(element);
        collection.splice(index,1);
        return true;
    }
    return false;
}
this.size = function(){
    return collection.length;
}
this.union = function(otherSet){
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((e)=> unionSet.add(e));
    secondSet.forEach((e)=> unionSet.add(e));
    return unionSet;
}
this.intersection = function(otherSet){
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e)=> {if(otherSet.has(e)){intersectionSet.add(e)}});
    return intersectionSet;
}

this.difference = (otherSet)=>{
  let differenceSet = new mySet();
  let firstSet = this.values();
  firstSet.forEach((e)=>{if(!otherSet.has(e)) differenceSet.add(e)});
  return differenceSet;
};
this.subset = (otherSet)=>{
    let firstSet = this.values();
    return firstSet.every((value)=>{ return otherSet.has(value)});
}
}

let setOne = new mySet();
let setTwo = new mySet();
setOne.add("a");
setTwo.add("b");
setTwo.add("c");
setTwo.add("a");
setTwo.add("d");
console.log(setOne.subset(setTwo));
console.log(setOne.intersection(setTwo).values());
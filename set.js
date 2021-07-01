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

}
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
 function subArraySum(arr, n, sum) {
        //cur_sum to keep track of cummulative sum till that point
        let cur_sum = 0;
        let start = 0;
        let end = -1;
        let hashMap = new Map();
   
        for (let i = 0; i < n; i++) {
            cur_sum = cur_sum + arr[i];
            //check whether cur_sum - sum = 0, if 0 it means
            //the sub array is starting from index 0- so stop
            if (cur_sum - sum == 0) {
                start = 0;
                end = i;
                break;
            }
            //if hashMap already has the value, means we already
            // have subarray with the sum - so stop
            if (hashMap.has(cur_sum - sum)) {
                start = hashMap.get(cur_sum - sum) + 1;
                end = i;
                break;
            }
            //if value is not present then add to hashmap
            hashMap.set(cur_sum, i);
   
        }
        // if end is -1 : means we have reached end without the sum
        if (end == -1) {
          return
        }
        else {
            console.log(start);
            console.log(end);
        }
   
    }

let setOne = new mySet();
let setTwo = new mySet();
setOne.add("a");
setTwo.add("b");
setTwo.add("c");
setTwo.add("a");
setTwo.add("d");
//console.log(setOne.subset(setTwo));
//console.log(setOne.intersection(setTwo).values());
console.log(subArraySum([23,2,6,4,7],5,6))



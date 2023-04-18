"use strict";
const HashEntry = require('./hashEntry.js');
const HashTable = require('./hashTable.js');

let threshold = 0.6
HashTable.prototype.resize = function (){
  
  let new_slots = this.slots * 2;
  let new_bucket = []; 
  for(var n=0; n<new_slots; n++){
    new_bucket[n]=null;
  }
  this.slots = new_slots;
  // rehash all items into new slots
  for (var i=0; i<this.bucket.length; i++){ 
          let head = this.bucket[i];
          while (head != null){
              let new_index = this.getIndex(head.key);
              if (new_bucket[new_index] == null){
                  new_bucket[new_index] = new HashEntry(head.key, head.value);
              }
              else{
                  let node = new_bucket[new_index];
                  while (node != null){
                    if (node.key == head.key){
                      node.value = head.value;
                      node = null;
                    }
                    else if (node.next == null){
                      node.next = new HashEntry(head.key, head.value);
                      node = null;
                    }
                    else{
                      node = node.next;
                    }
                  }
              }
              head = head.next
          }
  }
      this.bucket = new_bucket;
}  

function isSubset(list1,list2){ 
  // If list2 has more elements than list1, it would not be the subset of list1
  if (list2.length > list1.length){
    return false;
  } 
  let ht=new HashTable();
  //Inserting list1's elements in ht
  for(var i=0; i<list1.length; i++){
    ht.insert(list1[i], i);
  }
  //Checking to see if all of list2's elements are in the hashtable
  for(var j=0; j<list2.length; j++){
    if(ht.search(list2[j])==null){
       return false; //return false if there is an element in list2 not in list1
    }
  }
  return true;
  
}

function isDisjoint(list1,list2){  
  //Write code here
  let ht = new HashTable();
  //Inserting list1's elements in ht
  for(var i = 0; i < list1.length; i++){
    ht.insert(list1[i], i);
  }
  //Checking to see if all of list2's elements are in the hashtable
  for(var j = 0; j < list2.length; j++){
    if(ht.search(list2[j]) != null){
       return false; //return false if there is an element in list2 that is in list1
    }
  }
  return true;
}

let ht = new HashTable();
// Current capacity
console.log(ht.slots);
ht.resize();
// New capacity
console.log(ht.slots);

function findSymmetric(my_list){

  //Create an empty Hash Map
  //Traverse given array
  //Look for second element of each pair in the hash. i.e for pair (1,2) look for key 2 in map.
  //If found then store it in the result list, otherwise insert the pair in hash
  var ht = new HashTable();
  let result = [];
  //Traverse through the given array
  for (var i=0; i<my_list.length; i++){ 
    let first = my_list[i][0];
    let second = my_list[i][1];
    let value = ht.search(second)
    if(value != null && value == first){
      //Symmetric Pair found
      result.push([second, first])
      result.push([first, second])
    }
    else{
      ht.insert(first, second);
    }
  }
  return result;

}

let list1=[[1, 2], [3, 4], [2, 1], [4, 3], [0, 1], [5,5], [5,5]];
console.log("Input list:");
for (var x=0; x<list1.length; x++){
  console.log('['+list1[x][0]+', '+list1[x][1]+'] ');
}
let res=findSymmetric(list1);
console.log("Symmetric pairs:");
for (var y=0; y<res.length; y++){
  console.log('['+res[y][0]+', '+res[y][1]+'] ');
}

function tracePath(map){
  let result = [];
  //Create a reverse Map of given map i.e if given map has (N,C) then reverse map will have (C,N) as key value pair
  //Traverse original map and see if corresponding key exist in reverse Map
  //If it doesn't exist then we found our starting point.
  //After starting point is found, simply trace the complete path from original map.
  let reverseMap = {};
  //To fill reverse map, iterate through the given map
  for (var key in map){
    reverseMap[map[key]] = key;
  }
  //Find the starting point of itinerary
  let from_loc = null;
  for (var key1 in map){
    if (reverseMap[key1]==null){
      from_loc = key1;
      break;
    }
		//Trace complete path
  }
  let to = map[from_loc]
  while (to != null){
    result.push([from_loc, to])
    from_loc = to;
    to = map[to];
  }
  return result;
}

var map = {};
map["NewYork"] = "Chicago";
map["Boston"] = "Texas";
map["Missouri"] = "NewYork";
map["Texas"] = "Missouri";
console.log(tracePath(map));
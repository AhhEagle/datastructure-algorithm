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

let ht = new HashTable();
// Current capacity
console.log(ht.slots);
ht.resize();
// New capacity
console.log(ht.slots);
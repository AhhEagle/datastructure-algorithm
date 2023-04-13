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
let ht = new HashTable();
// Current capacity
console.log(ht.slots);
ht.resize();
// New capacity
console.log(ht.slots);
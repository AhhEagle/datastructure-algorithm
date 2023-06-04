"use strict";
const HashEntry = require("./hashEntry.js");

module.exports = class HashTable {
  constructor() {
    //Size of the HashTable
    this.slots = 10;
    //Current entries in the table
    //Used while resizing the table when half of the table gets filled
    this.size = 0;
    //List of HashEntry objects 
    this.bucket = [];
    for (var i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
  }
  //Helper Functions
  get_size() {
    return this.size;
  }
  //Hash Function
  getIndex(key) {
    let index = key % this.slots;
    return index;
  }
  isEmpty() {
    return this.get_size() == 0;
  }
};

function PriorityQueue() {
  let collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      //shifting
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          // to check priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    let result = collection.shift();
    return result[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let testQueue = new PriorityQueue();
testQueue.enqueue(["ola ola", 3]);
testQueue.enqueue(["teju teju", 2]);
testQueue.enqueue(["ope ope", 1]);
testQueue.printCollection();
testQueue.dequeue();
testQueue.front();
testQueue.printCollection();

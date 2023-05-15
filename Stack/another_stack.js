class twoStacks {
  constructor(s) {
    this.arr = [];
    this.top1 = -1;
    this.top2 = s;
    this.size = s;
  }

  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.arr[this.top1] = value;
    }
  }

  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2 -= 1;
      this.arr[this.top2] = value;
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      let value = this.arr[this.top1];
      this.top1 -= 1;
      return value;
    } else {
      return -1;
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      let val = this.arr[this.top2];
      this.top2 += 1;
      return val;
    } else {
      return -1;
    }
  }
}

var stack = new twoStacks(8);
stack.push1(10);
stack.push2(20);
stack.push1(30);
stack.push2(40);
stack.push1(60);

function reverseK(queue, k) {
  // [6,7,8,9,10,5,4,3,2,1], 5
  //[1,2,3,4,5]
  if (queue.isEmpty() == false) {
    let stack = new Stack();
    let count = 0;
    while (count < k) {
      stack.push(queue.dequeue());
      count++;
    }

    while (stack.isEmpty() == false) {
      queue.enqueue(stack.pop());
    }

    for (i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  }
  return queue;
}

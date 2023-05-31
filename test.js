class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SlinkedList {
  constructor() {
    this.head = null;
  }

  addElement(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      console.log(node.next);
      this.head = node;
    }
  }

  reverse() {
    let pre = this.head;
    let current = this.head.next;
    pre.next = null;
    while (current !== null) {
      let newP = current;
      current = current.next;

      newP.next = pre;
      pre = newP;
    }
    this.head = pre;
  }
}

let testone = new SlinkedList();
testone.addElement(5);
testone.addElement(6);
testone.addElement(7);
testone.reverse();
console.log(testone);

import Node from "./node.js"
export default class LinkedList {
	constructor() {
		this.head = null;
	}
	
	appendNode(newData) {
		let newNode = new Node(newData);
		if (this.head == null) {
			this.head = newNode;
			return;
		}
		
		let last = this.head;
		while (last.next != null) {
			last = last.next;
		}
		last.next =  newNode;
	}
	
	//function for printing the linked list
	printList() {
		let temp = this.head;
		while(temp != null) {
			console.log(temp.data);
			temp = temp.next;
		}
	}
}


let test =  new LinkedList();
test.appendNode('6');
test.appendNode('8');
test.appendNode('9');
test.printList();

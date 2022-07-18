import LinkedList from './linkedList.js'

function helperFunction(myLinkedList, current, previous) {
	if (current.next == null) { 
		myLinkedList.head = current;  
		current.next = previous; 
		return; 
    }

	let next = current.next;
	current.next = previous; 
	
	// Recursive case
	helperFunction(myLinkedList, next, current); 
}

function reverse(myLinkedList) {
	if (myLinkedList.head == null) { 
		return; 
    }
	
	helperFunction(myLinkedList, myLinkedList.head, null); 
}


// var list = new LinkedList();
// list.appendNode(6); 
// list.appendNode(7); 
// list.appendNode(8); 
// list.appendNode(9); 
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

function length(testVariable, head) {
	if (head == null) {
		return 0;
	}
		
	else {
		return 1 + length(testVariable, head.next); 
	}
}


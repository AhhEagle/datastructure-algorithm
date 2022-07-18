function count(myArray, key) {
    // Base case
    if (myArray.length == 0) {
      return 0;
    }
    if (myArray[0] == key) {
      return 1 + count(myArray.slice(1), key);
    }
      return 0 + count(myArray.slice(1), key);
    }
  function reverseArray(myArray){
    if (myArray.length == 0) {
        return [];
      }
      
      else if (myArray.length == 1) {
       return myArray;
      }
    
      return [myArray[myArray.length - 1]].concat(reverseArray(myArray.slice(0, myArray.length - 1)));
  }

  function replaceNegative(array, currentIndex) {
    if (currentIndex < array.length) {
      if (array[currentIndex] < 0) {
        array[currentIndex] = 0;
      }
  
      replaceNegative(array, currentIndex + 1);
    }
    return;
  }
  
  function average(testVariable, currentIndex = 0) {
	if (currentIndex == testVariable.length - 1) { 
		return testVariable[currentIndex]
	}
	
	if (currentIndex == 0) { 
		return ((testVariable[currentIndex] + average(testVariable, currentIndex + 1)) / testVariable.length)
	}
	
	// Compute sum 
	return (testVariable[currentIndex] + average(testVariable, currentIndex + 1)) 
}

function sort(testVariable, length) {
	// Base case
	if (length <= 1) {
		return
  }
	
	// Recursive case
	// Call sort() again for first n - 1 elements
	sort(testVariable, length - 1)

	// Insert last element at its correct position in sorted array
	var lastElement = testVariable[length - 1] // fetch the last element
	var temp = length - 2 // start finding its correct location from one element before it
	
	// Move elements of testVariable[0..i-1], that are greater than key, to one position ahead of their current position 
	while (temp >= 0 && testVariable[temp] > lastElement) {
		testVariable[temp + 1] = testVariable[temp]
		temp = temp - 1
  }

	testVariable[temp + 1] = lastElement // place the element in its correct position
}
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
    
      return [myArray[myArray.length - 1]].concat(reverse(myArray.slice(0, myArray.length - 1)));
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
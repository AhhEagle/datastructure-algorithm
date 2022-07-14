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
       return array;
      }
    
      return [myArray[myArray.length - 1]].concat(reverse(myArray.slice(0, myArray.length - 1)));
  }
  
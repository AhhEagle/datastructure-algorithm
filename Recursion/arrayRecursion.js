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
  }
  
  
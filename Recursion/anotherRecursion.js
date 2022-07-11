function isVowel(character) { 
    var character = character.toLowerCase(); 
      var vowels = "aeiou";
  
    if (vowels.indexOf(character) != -1) { 
      return true;
    }
    else {
        return false;
    }
  }
  
  function countVowels(string, stringLength) { 
      // Base case
    if (stringLength == 1) {
        return Number(isVowel(string[0])); 
    }
  
    // Recursive case
    return countVowels(string, stringLength - 1) + isVowel(string[stringLength - 1]); 
  }

  function findSquare(testVariable) {
      //testVariable * testVariable
    // Base case
    if (testVariable == 0) {
      return 0;
    }
  
    // Recursive case
    else {
      return findSquare(testVariable - 1) + (2 * testVariable) - 1;
    }
  }

  function searchFirstIndex(arr, testVariable, currentIndex) { 
      // returns the first occurrence of testVariable
    // Base case1
    if (arr.length == currentIndex) {
      return -1;
    }
    // Base case2  
    if (arr[currentIndex] == testVariable) {
      return currentIndex;
    }
    // Recursive case
    return firstIndex(arr, testVariable, currentIndex + 1);
  }

  function fibonacciIterative(testVariable) {
    var fn0 = 0;
    var fn1 = 1;
      
    for (let i = 0; i < testVariable; i++) {
      var temp = fn0 + fn1;
      fn0 = fn1;
      fn1 = temp;
    }
    return fn0;
  }
  function fibonacciRecursion(testVariable) {
    if (testVariable <= 1) {
      return testVariable;
    }
    return(fibonacciRecursion(testVariable - 1) + fibonacciRecursion(testVariable - 2));
  }


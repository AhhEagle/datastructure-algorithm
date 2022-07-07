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
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
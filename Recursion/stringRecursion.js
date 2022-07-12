function removeSpace(string) {
    // Base case
    if (string.length == 0) {
        return "";
    }
  
    if (string[0] == "\t" || string[0] == " ") {
        return removeSpace(string.substr(1));
    }
    else {
        return string[0] + removeSpace(string.substr(1));
    }
  }

  function removeAdjDuplicates(string) {
    // Base case
    if (string.length <= 1) {
        return string;
    }
  
    else if (string[0] == string[1]) {
        return removeAdjDuplicates(string.substr(1));
    }
  
    return string[0] + removeAdjDuplicates(string.substr(1));
  }
  
  function mergeLexico(string1, string2) {
    if (string1.length == 0) {
      if (string2.length == 0) { 
        return "";
      }
      return string2;
    }
  
    else if (string2.length == 0) {
      return string1;
    }

    else if (string1[0] > string2[0]) {
      return string2[0] + mergeLexico(string1, string2.substr(1));
    }
  
    else {
      return string1[0] + mergeLexico(string1.substr(1), string2);
    }
  }

  function sumDigits(testVariable) {
    if (testVariable === "") {
      return 0;
    }
    else {
      return Number(testVariable[0]) + sumDigits(testVariable.substr(1));
    }
  }
  
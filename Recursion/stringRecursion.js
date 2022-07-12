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
  
  console.log(removeAdjDuplicates('Hellloo')); 
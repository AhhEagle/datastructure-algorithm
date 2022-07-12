function removeSpace(string) {
    // Base case
    if (string.length == 0) {
        return "";
    }
  
    // Recursive case
    if (string[0] == "\t" || string[0] == " ") {
        return removeSpace(string.substr(1));
    }
    else {
        return string[0] + removeSpace(string.substr(1));
    }
  }
  
  console.log(removeSpace("H ello"))
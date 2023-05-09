//return the greatest commn divisor
function gD(variable1, variable2) {
  //The base condition to end recursion
  if (variable1 === variable2) {
    return variable1;
  }

  // Recursive case
  if (variable1 > variable2) {
    return gD(variable1 - variable2, variable2);
  } else {
    return gD(variable1, variable2 - variable1);
  }
}

//Pascal triangle solution
function pascal(variable) {
  //The base condition to end recursion
  if (variable === 0) {
    return [1];
  } else {
    var line = [1];

    // Recursive case
    let previousLine = pascal(variable - 1);
    console.log(previousLine);
    //console.log(previousLine.length);

    for (let i = 0; i < previousLine.length - 1; i++) {
      line.push(previousLine[i] + previousLine[i + 1]);
    }
    line.push(1);
  }
  return line;
}

console.log(pascal(2));

//Converting decimal to binary
function decimalToBinary(variable) {
  // Base case
  if (variable <= 1) {
    return String(variable);
  }

  // Recursive case
  else {
    return (
      decimalToBinary(Math.floor(variable / 2)) + decimalToBinary(variable % 2)
    );
  }
}
//check palindrome
function isPalindrome(word) {
  // Base case
  if (word.length <= 1) {
    // Strings that have length 1 or 0 are palindrome
    return true;
  }

  // Recursive case
  else if (word[0] == word[word.length - 1]) {
    // compare the first and last elements
    return isPalindrome(word.substring(1, word.length - 1));
  }

  return false;
}

function balanced(testVariable, startIndex = 0, currentIndex = 0) {
  //Base case
  if (startIndex == testVariable.length) {
    return currentIndex == 0;
  }

  // Base case
  if (currentIndex < 0) {
    return false;
  }

  // Recursive case1
  if (testVariable[startIndex] == "(") {
    return balanced(testVariable, startIndex + 1, currentIndex + 1);
  }

  // Recursive case2
  else if (testVariable[startIndex] == ")") {
    return balanced(testVariable, startIndex + 1, currentIndex - 1);
  } else {
    return false;
  }
}

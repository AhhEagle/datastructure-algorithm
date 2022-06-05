function gD(variable1, variable2){
    //The base condition to end recursion
    if(variable1 === variable2){
        return variable1;
    }

    // Recursive case
  if (variable1 > variable2) {
    return gcd(variable1 - variable2, variable2);
  } else {
    return gcd(variable1, variable2 - variable1);
  }
}
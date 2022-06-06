//return the greatest commn divisor 
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

//Pascal triangle solution
function pascal(variable){
  //The base condition to end recursion
  if(variable === 0){
    return [1];
  }

  else {
    var line = [1];

    // Recursive case
   let previousLine = pascal(variable - 1);
   console.log(previousLine);
   console.log(previousLine.length);

    for (let i = 0; i < previousLine.length - 1; i++) {
      line.push(previousLine[i] + previousLine[i + 1]);
    }
    line.push(1);
  } 
  return line;

}

console.log(pascal(5));


function exponential(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * exponential(base, expo - 1);
  }
}

function summation(testVariable) {
  if (testVariable == 1) {
    return 1;
  } else {
    return testVariable + summation(testVariable - 1);
  }
}

function gcd(testVariable1, testVariable2) {
  if (testVariable1 == testVariable2) {
    return testVariable1;
  }

  if (testVariable1 > testVariable2) {
    return gcd(testVariable1 - testVariable2, testVariable2);
  } else {
    return gcd(testVariable2 - testVariable1, testVariable1);
  }
}



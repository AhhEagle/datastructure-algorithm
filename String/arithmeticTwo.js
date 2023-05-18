//two-pass approach
// Returns true if the character ch is a divion
// or a multiplication operator
let isDivOrMul = function (ch) {
  return ch === "*" || ch === "/";
};

// Returns true if the operator is valid
let isOperator = function (c) {
  return c === "+" || c === "-" || c === "*" || c === "/";
};

// Checks if a given string character is a digit or not
let isDigit = function (ch) {
  return ch >= "0" && ch <= "9";
};

// Convert string type to double type
let stringToDouble = function (s, i) {
  let n = s.length;
  if (i >= n) {
    return null;
  }

  let temp = "";
  // Iterate if a space occurs
  while (i < n && (s[i] === " " || s[i] === "\t")) {
    i++;
  }

  if (i >= n) {
    return null;
  }

  if (s[i] === "-") {
    temp += "-";
    i++;
  }

  while (i < n) {
    let ch = s[i];
    if (ch !== "." && !isDigit(ch)) {
      break;
    }

    temp += ch;
    i++;
  }

  return {
    // ParseFloat: Converts a string to a floating-point number
    digit: parseFloat(temp),
    index: i,
  };
};

let EvaluateDoublePass = function (expr) {
  // stores operators and operands respectively
  let operators = [];
  let operands = [];

  let op = 0;
  let prev = 0;

  let i = 0;
  let n = expr.length;
  // The first pass
  while (i < n) {
    let ch = expr[i];
    // Skip empty spaces or tabs
    if (ch === " " || ch === "\t") {
      i++;
      continue;
    }

    if (isOperator(ch)) {
      // If the current expression item is an operator
      // push it onto the operators stacks and set it as op
      op = ch;
      operators.push(ch);
      i++;
    } else {
      // Convert string operand to double
      let re = stringToDouble(expr, i);
      let d = re.digit;
      i = re.index;

      if (isDivOrMul(op)) {
        // If op was a division or multiplication operator
        // pop it (op) from operators array and
        // pop an operand (prev) from the operands array
        operators.pop();
        operands.pop();

        // Perform the correct operation based on op
        prev = op === "*" ? prev * d : prev / d;
        operands.push(prev);
        // Reset op to 0
        op = 0;
      } else {
        // If op was not a division or multiplication operator
        // Push the digit onto the operands vector
        operands.push(d);
        // Update prev with the new digit
        prev = d;
      }
    }
  }

  // Initialize total as 0 or the first operand
  let total = operands.length > 0 ? operands[0] : 0;
  i = 1;
  // The second pass
  for (let k = 0; k < operators.length; k++) {
    let operator = operators[k];
    let operand = operands[i];
    // Iterate over the operators and perform the correct operations
    total = operator === "+" ? total + operand : total - operand;
    i++;
  }
  return total;
};

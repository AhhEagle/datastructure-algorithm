class Token {
    constructor(value, isOperator) {
      this.value = value;
      this.isOperator = isOperator;
    }
  }
  
// Returns true if the operator is valid 
let isOperator = function(o) {
    return (o === '+' || 
            o === '-' || 
            o === '*' ||
            o === '/'
            );
};

// returns true if operator1 has higher/equal precedence
// compared to operator2
let preced = function(op1, op2) {
    // * and / have a higher precedence than + and -
    if (op1 === '*' || op1 === '/') {
        return true;
    }

    // If both operators are + and/or -, we will treat them equally
    if (op1 === '+' || op1 === '-') {
        if (op2 === '+' || op2 === '-') {
        return true;
        }
    }

    return false;
};

// Checks if a given string character is a digit or not
let isDigit = function(ch) {
    return (ch >= '0' && ch <= '9');
};

// Convert string type to double type
let stringToDouble = function(s, i) {
    let n = s.length;
    if (i >= n) {
        return null;
    }

    let temp = '';
    while (i < n && (s[i] === ' ' || s[i] === '\t')) {
        i++;
    }

    if (i >= n) {
        return null;
    }

    if (s[i] === '-') {
        temp += '-';
        i++;
    }

    while (i < n) {
        let ch = s[i];
        if (ch !== '.' && !isDigit(ch)) {
        break;
        }

        temp += ch;
        i++;
    }

    return {
        // ParseFloat: Converts a string to a floating-point number.
        digit: parseFloat(temp),
        index: i
    };
};

// Converts the expression to postfix notation
let convertToPostfix = function(expr) {
    
    // Array of tokens to store the postfix expression
    let postFix = [];

    // A stack to push our operators on
    let operators = [];
    let n = expr.length;
    let i = 0;
    while (i < n) {
        let ch = expr[i];
        // Skip empty spaces or tabs
        if (ch === ' ' || ch === '\t') {
        i++;
        continue;
        }

        if (isOperator(ch)) {
            // If the precedence of the operator on the top of the stack
			// is greater than the current operator, we remove the top 
			// operator and add it to our postfix vector 
            while (operators && preced(operators[operators.length - 1], ch)) {
                let t = new Token(operators.pop(), true);
                postFix.push(t);
            }
            operators.push(ch);
            i++;
        }  else {
                // Convert string operand to double e.
                let re = stringToDouble(expr, i);
                let d = re.digit;
                i = re.index;
                let t = new Token(d, false);
                postFix.push(t);
            }
    }
    // Add all operators to the postfix notation once the entire 
	// expression has been traversed
    while (operators.length > 0) {
        let t = new Token(operators.pop(), true);
        postFix.push(t);
    }
    return postFix;
};

// Evalutes the expression to postfix notation
let EvaluatePostfix = function(postFix) {
    if(!postFix.length){
        return 0;
    }

    let operands = [];

    for (let x = 0; x < postFix.length; x++) {
        
        if (postFix[x].isOperator) {
            // Get two values to perform the operation on
            let val2 = operands.pop();
            let val1 = operands.pop();
            // Perform the operation based on the operator
            let op = postFix[x].value;

            if (op === '+') {
                operands.push(val1 + val2);
            } else if (op === '-') {
                operands.push(val1 - val2);
            } else if (op === '*') {
                operands.push(val1 * val2);
            } else if (op === '/') {
                operands.push(val1 / val2);
            }
            } else {
                // Push the operand on the operands stack
                operands.push(postFix[x].value);
        }
    }
    return operands.pop();
};

let Evaluate = function(expr) {

    // The pointer to our expression is passed to the ConvertToPostfix function
    // The tokenized vector returned from ConvertToPostFix is then passed 
    // to the EvalulatePostfix function
    return EvaluatePostfix(convertToPostfix(expr));
};
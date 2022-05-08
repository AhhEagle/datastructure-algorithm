// checking if a word is a palindrome or not
function palin(str){
    let letters = []; // the stack
   let reversed = ""; // reversed word

for(let i = 0; i <str.length; i++){
    letters.push(str[i]);
}
for(let i = 0; i<str.length; i++){
    reversed += letters.pop()
}
if (reversed == str){
    return `${str} is a palindrome`;
} else{
    return `${str} is not a palindrome`;
 
}
}
//console.log(palin('dimeji'))
//Balanced Expressions
//edge cases: 
//( , ((), (], )(

function balancedExpression(input){
    let brackets=[]
    for(let i = 0; i<input.length; i++){
        if(isleft(input, i)){
            brackets.push(input[i])
        }

        if(isRight(input, i)){
            if(brackets.length == 0){
                return false
            }
          var res =  brackets.pop();
          if(compare(input, i, res)){
            return false;
          }
          }
        }
    let result = (brackets.length == 0) ? true : false
    return result;

}
function isleft(input, i){
    return input[i] == "(" || input[i] == '<' || input[i] == '[' || input[i] == '{'
}
function isRight(input, i){
    return input[i] == ")"|| input[i] == '>' || input[i] == ']' || input[i] ==  '}'
}
function compare(input, i, res){
    return (input[i] == ')' && res != '(') || (input[i] == '>' && res != '<' ) || (input[i] == ']' && res != '[') || (input[i] == '}' && res != '{')
}
//console.log(balancedExpression("[(1+2]"));

var decodeString = function(s) {
    let i = 0; const stack = []; 
        while(i < s.length) {
        if(s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let [res, rep, top] = ['','',''];
            while(stack.length) {
                top = stack.pop();
                if(top === '[') {
                    break;
                } else {
                    res = top + res;
                }
            }
            while(stack.length) {
                top = stack.pop();
                if(top >= '0' && top <= '9') {
                    rep = top + rep;
                } else {
                    stack.push(top);
                    break;
                }
            }
            
            res = res.repeat(Number.parseInt(rep));
            stack.push(res);
        }
        i++;
    }
    
    res = '';
    while(stack.length) {
        res = stack.pop() + res;
    }
    return res;
};
//console.log(decodeString("3[a]"))

wordWrap = function(str, cols) {
    var formatedString = '',
       wordsArray = [];


   wordsArray = str.split(' ');

   formatedString = wordsArray[0];

   for (var i = 1; i < wordsArray.length; i++) {
       if (wordsArray[i].length > cols) {
           formatedString += '\n' + wordsArray[i];
       } else {
           if (formatedString.length + wordsArray[i].length > cols) {
               formatedString += '\n' + wordsArray[i];
           } else {
               formatedString += ' ' + wordsArray[i];
           }
       }
   }

   return formatedString
}
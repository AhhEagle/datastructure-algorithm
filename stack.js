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

console.log(palin('dimeji'))

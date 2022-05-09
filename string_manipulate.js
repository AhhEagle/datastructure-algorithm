function countVowels(str){
        let count = 0;
        let vowels = "aeiou"
        for(let i = 0; i<str.length; i++){
            if(vowels.includes(str[i])){
                count++
            }
        }
        return count;

}

function reverseStr(str){
    if(str == null || str == undefined){
        return "";
    }
    let reversed = "";
    for (let i = str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

function reverseWord(str){
    if(str == null || str == undefined){
        return "";
    }
    let newWord = str.trim().split(" ");
    let reversedWord = ""
    for(let i = newWord.length - 1; i>=0; i--){
        reversedWord += newWord[i] + " ";
    }
    return reversedWord;
}
function anotherReverse(str){
    let newWord = str.trim().split(" ");
    return newWord.reverse().join(" ");
}

function areRotations(str1, str2){
    console.log(str1+str1)
    return (str1.length == str2.length && (str1+str1).includes(str2))
}

function removeDup(str){
    if(str == null || str == undefined){
        return "";
    }
   let newStr = "";
   let check = {};
   for(let i =0; i<str.length; i++){
       if(str[i] in check){
          continue;
       } else{
        check[str[i]] = 1;
       newStr += str[i];
       }
       
   }
   return newStr;
}

function mostRepeated(str){
    if(str == null || str == undefined || str == ""){
        return "";
    }
    let check = {};
    for(let i = 0; i<str.length; i++){
        if(str[i] in check){
            check[str[i]] += 1 
        } else {
            check[str[i]] = 1
        }
    }
    let max = 0;
    let maxChar = null;
    for(let ele in check){
        if(check[ele] > max){
            max = check[ele];
            maxChar = ele
        }
    }
    return maxChar;
}

console.log(mostRepeated(""))


function countVowels(str){
    if(str == null || str == undefined){
        return "";
    }
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

function capitalizeFirst(sentence){
    //@replace handles instances where we have more than one space in a sentence
const words = sentence.trim().replace(/\s+/g, " ").split(" ");
return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
}

function areAnagrams(str1, str2){
   
    let firstString = str1.split("").sort();
    let secondString = str2.split("").sort();
    return (!!firstString && !!secondString && !(firstString<secondString || secondString<firstString));
}

function wordSegment(str, dictionary){
    for (let i = 1; i < str.length + 1; i++) {
        let first = str.substr(0, i);
        console.log("this is first: " + first);
    
        // check if the first part exists in the dictionary
        if (dictionary.has(first)) {
          let second = str.substr(i);
          console.log("this is second :"+second);
          if (second.length === 0) {
            return true;
          }
          // check if the second part exists in the dictionary
          if (dictionary.has(second)) {
            return true;
          }   // recursive call
              if (wordSegment(second, dictionary)) {
                console.log(second, + " " + dictionary);
                  return true;
              }
        }
      }
      return false;
}

function stringRotation(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
  
    for(let i = 0; i < str1.length; i++) {
        const rotation = str1.slice(i, str1.length) + str1.slice(0, i);
        
        if(rotation === str2) {
            return true;
        }
    }
    
    return false;
}



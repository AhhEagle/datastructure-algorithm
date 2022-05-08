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



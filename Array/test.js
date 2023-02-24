function returnPal(str){
    let left = 0;
    let right = str.length -1;
    console.log(right)

    while(left < right){
        if(str[left] != str[right]){
            return false;
        }

        left +=1;
        right -=1;
    }
    return true;

}

console.log(returnPal("abra"))
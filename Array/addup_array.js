function sumUp(arr, val){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == val){
                return [arr[i], arr[j]]
            }
        }
    }
    return false;

}

console.log(sumUp([2,4,6,8], 10))
//remove all even no in an array
function removeEven(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

function anotherRemoveEven(arr){
   return arr.filter((v => (v % 2 != 0)))
}
console.log(anotherRemoveEven([1,2,4,5,10,6,3]));
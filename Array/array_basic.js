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

function mergeSortedArray(arr, arr1){
    let merged = [];
    let i = 0, j = 0;
    while((i < arr.length) && (j < arr1.length)){
        if (arr[i] < arr1[j]){
            merged.push(arr[i]);
            i++;
        } else {
            merged.push(arr1[j]);
            j++
        }
    }
    
    if(i <= (arr.length - 1)){
        arr.splice(0, i)
        merged = merged.concat(arr);
    } else if (j <= (arr1.length - 1)){
        arr1.splice(0, j);
        merged = merged.concat(arr1);
    }
    return merged 
}
console.log(mergeSortedArray([1,3,4,5], [2,6,7,8]))

function findSum(arr, value){
    arr.sort (function (a,b){ return a-b});
    let index;
    for(var i = 0; i <arr.length; i++){
        index = binarySearch(arr, (value - arr[i]))
        if(index !=false && i != index)
            return [arr[i], value-arr[i]]
    }
    return false;

}


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
 
function binarySearch(arr, item){
    let first = 0, mid;
    let last = arr.length - 1;
    let elementFound = false;
    let index = -1;
    while( (first <= last) && !elementFound){
        mid = Math.floor((first + last) / 2)
        if( arr[mid] == item){
            index = mid
            elementFound = true
        }
        else{
            if(item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    if (elementFound)
         return index
     else
         return false

}

function findProduct(arr) {
    var temp = 1,
        product = [];
    for (let i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }
    temp = 1;
    for (let i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }

    return product
}

function findMinimum(arr) {
    var currentMin = arr[0];
    for (let val of arr) {
        if (val < currentMin)
            currentMin = val
    }

    return currentMin

}



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
    let temp = 1,
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
    let currentMin = arr[0];
    for (let val of arr) {
        if (val < currentMin)
            currentMin = val
    }
    return currentMin
}
function findSecondMaximum(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let secondmax = Number.NEGATIVE_INFINITY;
    for (let val of arr) {
        if (val > max) {
            secondmax = max
            max = val
        } else if (val > secondmax && val!=max)
            secondmax = val
    }
    return secondmax
}
function findFirstUnique(arr){
    let index1;
      for(let index=0;index<arr.length;index++){ 
          index1 = 0
          while(index1 < arr.length){
              if ((index != index1 )&& (arr[index] == arr[index1])) 
                  break
              index1 += 1
      }
          if (index1 == arr.length) 
              return arr[index] 
    }
      return null;
  }

  function rightRotate(arr, n) {
    return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}

function reArrange(arr) {
    let leftMostPosEle = 0,
        tmp;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i != leftMostPosEle) {
                tmp = arr[i];
                arr[i] = arr[leftMostPosEle];
                arr[leftMostPosEle] = tmp;
            }
            leftMostPosEle += 1
        }
    }
    return arr;
}

function maxMin(arr) {
    let maxIdx = arr.length-1
    let minIdx = 0
    let maxElem = arr[maxIdx] + 1;
    for( let i = 0; i < (arr.length); i++) {
      if (i % 2 == 0){  
        arr[i] += Math.floor((arr[maxIdx] % maxElem ) * maxElem)
        maxIdx -= 1
      }
      else {
        arr[i] += Math.floor((arr[minIdx] % maxElem ) * maxElem)
        minIdx += 1
      }
    }
    for( let i = 0; i < (arr.length); i++) {
      arr[i] = Math.floor(arr[i] / maxElem)
    }
    return arr
}
function anotherMaxMin(arr) {
    let result = []
    for (let i = 0; i < (Math.floor(arr.length / 2)); i++) {
        result.push(arr[arr.length - (i + 1)])
        result.push(arr[i])
    }

    if (arr.length % 2)
        result.push(arr[Math.floor(arr.length / 2)])
    return result
}

let findMaxSumSubArray = function(array_) {
  if (array_.length < 1) {
    return 0;
  }

  let currMax = array_[0];
  let globalMax = array_[0];
  let lengtharray = array_.length;
  for (let i = 1; i < lengtharray; i++) {
    if (currMax < 0) {
      currMax = array_[i];
    } else {
      currMax += array_[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
};

function maxMin(arr) {
    var result = []
    for (var i = 0; i < (Math.floor(arr.length / 2)); i++) {
        result.push(arr[arr.length - (i + 1)])
        result.push(arr[i])
    }

    if (arr.length % 2)
        result.push(arr[Math.floor(arr.length / 2)])
    return result
}

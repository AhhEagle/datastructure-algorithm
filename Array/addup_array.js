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

function binarySearch(arr, item){
    let first = 0;
    let mid;
    let last = arr.length - 1;
    let arrayIndex = -1
    let seen = false;
    while ((first <= last) && !seen){
        mid = Math.floor((first + last)/2);
        if( arr[mid] == item){
            arrayIndex = mid
            seen = true
        }
        else{
            if(item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    if (seen)
    return arrayIndex
else
    return false
}
function anotherSumUp(arr, val){
    arr.sort((a,b)=>{return a-b});
    let index;
    for(let i =0; i<arr.length; i++){
        index =  binarySearch(arr, val-arr[i])
        if(index != false && i!=index){
            return [arr[i], val-arr[i]]
        }
    }
    return false;

}
console.log(anotherSumUp([2,4,6,8], 10))
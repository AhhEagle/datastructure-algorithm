function mergeArray(array1, array2){
  let merge = [];
   let i = 0;
   let j = 0;
   while((i< array1.length) && (j<array2.length)){
    if(array1[i] < array2[j]){
        merge.push(array1[i]);
        i++;
    } else{
        merge.push(array2[j]);
        j++
    }
   }


   if(i <= (array1.length - 1)){
    array1.splice(0, i)
    merge = merge.concat(array1)
   } else if (j <= (array2.length - 1)){
    array2.splice(0, j)
    merge = merge.concat(array2)
   }

   return merge
}

console.log(sumTo([1,4,8], 5))

function sumTo(array1, value){
    let index;
    for(let i = 0; i < array1.length; i++){
        index = binarySearch(array1, value - array1[i])
        if(index != false && i != index){
            return [array1[i], value - array1[i]];
        }
    }
    return false;
}

function binarySearch(array, item){
   let first = 0;
   let mid;
   let last =  array.length - 1;
   let arrayIndex = -1;
   let found =  false
   while(first <= last && !found){
     mid = Math.floor((first + last)/2);
     if(array[mid] == item ){
        arrayIndex = mid;
        found = true
     }  else{
        if(item < arr[mid])
            last = mid - 1
        else
            first = mid + 1
    }
}
if (found)
return arrayIndex
else
return false
}
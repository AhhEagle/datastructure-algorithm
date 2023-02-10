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

console.log(mergeArray([1,4,8], [2,3,6,7]))
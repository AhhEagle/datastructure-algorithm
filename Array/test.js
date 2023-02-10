function mergeArray(array1, array2){
   return [...array1, ...array2].sort((a,b)=>{ return a-b })
}

console.log(mergeArray([1,4,8], [2,3,6,7]))
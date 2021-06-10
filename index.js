//O(1)
function multiply(j){
    return j * 5;
}
console.log(multiply(10));
console.log(multiply(2));

function OddorEven(j){
  return j % 2 ? 'Odd' : 'Even';
}
console.log(OddorEven(20));
console.log(OddorEven(30001));

//O(n)
//finding the largest item in an unsorted array
function max(n){
    let max = 0
    if(!Array.isArray(n)){
        return 'Input must be an array'
    }
    for(let i = 0; i < n.length; i++){
        if(max === undefined || max < n[i])
        max = n[i];
    }
    return max
}
console.log(max([3,2,1]));
console.log(max([10,50,30,80,100,90]));

//O(1)
function multiply(j){
    return j * 5;
}
//console.log(multiply(10));
//console.log(multiply(2));

function OddorEven(j){
  return j % 2 ? 'Odd' : 'Even';
}
//console.log(OddorEven(20));
//console.log(OddorEven(30001));

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
//console.log(max([3,2,1]));
//console.log(max([10,50,30,80,100,90]));


function maxChar(n){
 let characters = {};
 for(let character of n){
     console.log(character);
     characters[character] = characters[character] + 1 || 1;
 }
 let maxCount = 0;
 let maxchar = null;
 for(let character in characters){
     if(characters[character] > maxCount){
         maxCount = characters[character]
         maxchar = character;
     }
 }
 return maxchar;

}
//console.log(maxChar('oladimejioii'));

//O(n^2)
function duplicate(n){
    let dupValue = [];
    for(let i = 0; i<n.length; i++){
        for(let m = 0; m<n.length; m++){
            if(i === m) continue;
            if (n[i] === n[m]){
                dupValue.push(n[i]);
            }
        }
    }
    return dupValue;
}
//console.log(duplicate([1,3,3,6]));

//Better written has:
function betterDuplicate(n){
    let valuesIn = Object.create(null);
    for(let i  = 0; i<n.length; i++){
        let value = n[i];
        if(value in valuesIn){
            valuesIn[value] = valuesIn[value] + 1
        } else{
            valuesIn[value] = 1
        }
    }
    let max = 0;
    let maxValue ;
    for (value in valuesIn){
        if(valuesIn[value] > max){
            max = valuesIn[value];
            maxValue = value;
        }
    }
    return maxValue;

}
console.log(betterDuplicate([1,3,3,6]));
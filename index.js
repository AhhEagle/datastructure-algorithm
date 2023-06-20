//O(1)
function multiply(j) {
  return j * 5;
}
//console.log(multiply(10));
//console.log(multiply(2));

function OddorEven(j) {
  return j % 2 ? "Odd" : "Even";
}
//console.log(OddorEven(20));
//console.log(OddorEven(30001));

//O(n)
//finding the largest item in an unsorted array
function max(n) {
  let max = 0;
  if (!Array.isArray(n)) {
    return "Input must be an array";
  }
  for (let i = 0; i < n.length; i++) {
    if (max === undefined || max < n[i]) max = n[i];
  }
  return max;
}
//console.log(max([3,2,1]));
//console.log(max([10,50,30,80,100,90]));

//O(n^2)
function duplicate(n) {
  let dupValue = [];
  for (let i = 0; i < n.length; i++) {
    for (let m = 0; m < n.length; m++) {
      if (i === m) continue;
      if (n[i] === n[m]) {
        dupValue.push(n[i]);
      }
    }
  }
  return dupValue;
}
console.log(duplicate([1, 3, 3, 6]));

//Better written has:
function betterDuplicate(n) {
  let valuesIn = {};
  for (let i = 0; i < n.length; i++) {
    let value = n[i];
    if (value in valuesIn) {
      valuesIn[value] = valuesIn[value] + 1;
    } else {
      valuesIn[value] = 1;
    }
  }
  let max = 0;
  let maxValue;
  for (value in valuesIn) {
    if (valuesIn[value] > max) {
      max = valuesIn[value];
      maxValue = value;
    }
  }
  return maxValue;
}
//console.log(betterDuplicate([1,3,3,6]));
function maxChar(n) {
  let characters = {};
  for (let character of n) {
    console.log(character);
    characters[character] = characters[character] + 1 || 1;
  }
  let maxCount = 0;
  let maxchar = null;
  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxchar = character;
    }
  }
  return maxchar;
}
//console.log(maxChar('oladimejioii'));

//O(n^2) Bubble Sort
function sort(n) {
  for (let i = 0; i < n.length; i++) {
    let outer = n[i];
    for (let inn = i + 1; inn < n.length; inn++) {
      let inner = n[inn];

      if (outer > inner) {
        n[i] = inner;
        n[inn] = outer;
        outer = n[i];
        inner = n[inn];
      }
    }
  }
  return n;
}

//console.log(sort([1,3,6,5]));

//Polynomial O(n^c)
function polynomial(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (2 * i + 6 * j + 4 * k === 50) {
          result.push({ i, j, k });
        }
      }
    }
  }
  return result;
}
//console.log(polynomial(10));

//Binary Search O(log n)
function search(n, element, off = 0) {
  const half = parseInt(n.length / 2);
  const current = n[half];
  if (current === element) {
    return off + half;
  } else if (element > current) {
    const divide = n.slice(half);
    return search(divide, element, off + half);
  } else {
    const secondDivide = n.slice(0, half);
    return search(secondDivide, element, off);
  }
}
//console.log(search([2,4,3,6,8,10], 8));

//Merge Sort O(nlogn)
function sort(n) {
  const half = parseInt(n.length / 2, 10);
  if (n.length < 2) {
    return n;
  }

  if (n.length === 2) {
    return n[0] > n[1] ? [n[1], n[0]] : n;
  }

  return mergeSorted(sort(n.slice(0, half)), sort(n.slice(half)));
}

function mergeSorted(array1 = [], array2 = []) {
  const merged = [];
  let arrayIndex = 0;
  let arrayIndex2 = 0;
  while (arrayIndex < array1.length || arrayIndex2 < array2.length) {
    if (
      arrayIndex >= array1.length ||
      array1[arrayIndex] > array2[arrayIndex2]
    ) {
      merged.push(array2[arrayIndex2]);
      arrayIndex2 += 1;
    } else {
      merged.push(array1[arrayIndex]);
      arrayIndex += 1;
    }
  }
  return merged;
}

//console.log(sort([3,4,1,5,6,2]));
//console.log(mergeSorted(['aliyu', 'cataloguer', 'egg'], ['babade', 'dog', 'fish']))

//O(2^n) Exponential time
//i.e Power set
function power(n = "") {
  const array = Array.from(n);
  const base = [""];
  const result = array.reduce((p, e) => {
    const previous = p.map((el) => {
      return `${el}${e}`;
    });
    return p.concat(previous);
  }, base);
  return result;
}

//O(n!)
//Factorial permutations and combinations
function getPermutation(string, prefix = "") {
  let array = Array.from(string);
  if (string.length <= 1) {
    return [prefix + string];
  }
  return array.reduce((result, char, index) => {
    const reminder = string.slice(0, index) + string.slice(index + 1);
    result = result.concat(getPermutation(reminder, prefix + char));
    return result;
  }, []);
}
//console.log(getPermutation('abcdefghijk'));

// function isIsogram(str){
//     let newObj = Object.create(null);
//     if(str.length === 0){
//       return true
//     }
//     for(let value of str.toLowerCase()){
//       newObj[value] = newObj[value] + 1 || 1;
//     }
//     for(let values in newObj){
//       if (newObj[values] > 1){
//         return false;
//       }
//     }
//     return true;
//   }

function mergeTwo(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

//console.log(mergeTwo([1,3,5,7], [2,4,6]));

function fizzbuzz() {
  for (let i = 0; i < 100; )
    console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
}
//console.log(fizzbuzz());

function fizzbuzz2() {
  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}
//console.log(fizzbuzz2());
var s = new Set();
s.add("a");
s.add("b");
s.add("b");
s.add("1000");
var o = { 1: "1st", 2: "2nd" };
s.add(o);
s.add({ 1: "1st", 2: "2nd" });

let c = ["a", "b", "c"];
//console.log(c.splice(1));

function Cars(car, color) {
  var car = car;
  var color = color;
  this.carInfo = function () {
    return car + " " + color;
  };
}
var MyCar = new Array();
MyCar[0] = new Cars("Mustang", "Red");
try {
  //console.log(MyCar[0].car + " " + MyCar[0].color);
} catch (e) {
  //console.log(e);
}
class Server {
  constructor(item) {
    this._list = new WeakMap(item);
  }
  set(var1, var2) {
    this._list.set(var1, var2);
    return this._list;
  }
}
const ip = "111.11.11.11";
var svr = { name: "vip-server" };
var svrInfo = [[svr, ip]];
var svr = new Server(svrInfo);
console.log(svr);
function* maths(value) {
  let b = 2;
  yield value + b;
  b = 4;
  yield value - ++b;
  b = 8;
  yield value * b++;
  yield value / b;
}
const calcSums = maths(5);
//console.log(calcSums.next().value);
//console.log(calcSums.next().value);
//console.log(calcSums.next().value);

var student = new Object({ type: "student" });
function setvals(s) {
  s.name = "John";
  s.age = 15;
  s.id = 100;
}
//console.log(setvals(student));
someText = "JavaScript1.2";
pattern = /(\w+)(\d)\.(\d)/i;
outcome = pattern.test(someText);
//console.log(outcome)

var person = (name) => first + " " + last;
//console.log(new person ('jane', 'smith'));
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
var myArray = [
  numbers,
  letters,
  numbers,
  letters,
  numbers,
  letters,
  numbers,
  letters,
];
for (var i = 0, j = 7; i <= j; i++, --j) {
  //console.log('myArray[' + i + ']['+ j + ']= ' + myArray[i][j])
}
var a = "test";
var b = String("test");
var d = new String("test");
//console.log( a === d)

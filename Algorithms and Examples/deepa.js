//--INDEX-------------
//Protoype Inheritence

//---------Prototypal Inheritence--

//Base Parent Class
function Employee(name) {
  this.name = name;
}
//adding a method to base class
Employee.prototype.getName = function() {
  return this.name;
};

//creating another constructor child class and this should inherit Parent Class
var PermanentEmployee = function(annualSalary) {
  this.annualSalary = annualSalary;
};

var employee = new Employee("Deepa"); // instance of base class
//var e2 = new Employee("Chetan");

//establish reln between parent and child class
PermanentEmployee.prototype = employee;

var pe = new PermanentEmployee(50000);
document.write(pe.getName());
alert(pe instanceof Employee);
alert(employee instanceof PermanentEmployee);

document.write(employee.hasOwnProperty("annualSalary") + " <br />");

//protoype modifying example

let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// Lazy one's stomach is empty
alert(lazy.stomach); // <nothing>

//Closure Example

function generator(input) {
  var index = 0;
  return {
    next: function() {
      if (index < input.length) {
        index += 1;
        console.log(input[index - 1]);
        return input[index - 1];
      }
      return "";
    }
  };
}
mygenerator = generator("toon");
mygenerator.next();
mygenerator.next();
mygenerator.next();
mygenerator.next();
mygenerator.next();

console.log(mygenerator);
// ANother closure example
function counter(a) {
  let sum = 0;
  return {
    count: function(b = 0) {
      sum += a + b;
      console.log(sum);
    }
  };
}

let num = counter(10);
console.log(counter);
num.count();
num.count();
num.count(100);

num.count();
//what would be output of this code snippet
const array = [10, 12, 15, 21];
for (var i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log("Index: " + i + ", element: " + array[i]);
  }, 3000);
}

//ans :
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined

// The reason for this is because the setTimeout function creates a function (the closure)
// that has access to its outer scope, which is the loop that contains the index i.
// After 3 seconds go by, the function is executed and it prints out the value of i,
// which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4
//  and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined.

//we overcome this by using closures
const array = [10, 12, 15, 21];
for (var i = 0; i < array.length; i++) {
  function some() {
    let j = i;
    setTimeout(function() {
      console.log("Index: " + j + ", element: " + array[j]);
    }, 3000);
  }
  some();
}

//another way
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(
    (function(i_local) {
      return function() {
        console.log("The index of this number is: " + i_local);
      };
    })(i),
    3000
  );
}

//We can also use let keyword to overcome this
for (let i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log("Index: " + i + ", element: " + array[i]);
  }, 3000);
}

//JS Class
class Polygon {
  constructor(array) {
    this.sides = array;
  }
  perimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.sides.length; i++) {
      perimeter += this.sides[i];
    }
    console.log(perimeter);
    return perimeter;
  }
}

let triangle = new Polygon([30, 40, 5]);
let octagon = new Polygon([10, 10, 5, 20, 20, 5, 5, 5]);
triangle.area() = function(){
  console.log('Area');
};
console.log(triangle.perimeter());
console.log(octagon.perimeter());

//----Output : aaioojvscrptlps : display these characters one below the other-------
var s = "javascriptloops";
function vowelsAndConsonants(s) {
  let arrVow = [];
  let arrCons = [];
  let vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      arrVow.push(s[i]);
    } else {
      arrCons.push(s[i]);
    }
  }
  let arr = [...arrVow, ...arrCons];
  console.log(arr);
  for (var i in arr) {
    console.log(arr[i]);
  }
}
vowelsAndConsonants(s);
//Merge 2 arrays

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [8, 9, 10, 11, 12, 13, 14];

function mergeTwoArray(arr1, arr2) {
  let mergedArray = [];

  pushArray(arr1);
  pushArray(arr2);
  function pushArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      mergedArray.push(arr[i]);
    }
  }
  return mergedArray;
}
mergeTwoArray(arr1, arr2);

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 45, 6];

for (var i in arr2) {
  arr1.push(arr2[i]);
}

console.log(arr1);

// with ES6

let mergedArray = [...arr1, ...arr2];

//Sort array

function sortArray(a) {
  var count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        count = count + 1;
        // [a[i], a[j]] = [a[j], a[i]];
        let temp;
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log("Array is sorted in swaps:", count);
  console.log("First Element:", a[0]);
  console.log("Last Element:", a[a.length - 1]);
}
let a = [23, 21, 45, 8];
sortArray(a);

//   Range between 2 nums

function range(min, max) {
  let arr = [];
  while (min <= max) {
    let counter = min;
    arr.push(counter);
    min = min + 1;
  }
  return arr;
}

console.log(range(2, 8)); //2,3,4,5,6,7,8

// find max repeating numbers
var myArr = [2, 31, 4, 5, 12, 20, 6, 3];

let obj = {};
for (let i = 0; i < myArr.length; i++) {
  if (obj[myArr[i]] >= 1) {
    obj[myArr[i]] = obj[myArr[i]] + 1;
  } else {
    obj[myArr[i]] = 1;
  }
}
console.log(obj);

let highest = -Infinity;
let num;
for (let key in obj) {
  if (obj[key] > highest) {
    highest = obj[key];
    num = key;
  }
}
console.log(`Number ${num} repeats ${highest} times`);

//remove duplicate from array

let a = [1, 2, 2, 3, 4];
//using set
console.log([...new Set(myArr)]);
//algo
let b = [];
let len = a.length;
for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);

let obj = {};

for (let key of a) {
  obj[key] = true;
}
console.log(obj);

// Sort 2 arrays and find the median

var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2];
  let len = arr.length;
  let median = arr[len / 2];
  console.log(arr);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
  let mid = Math.floor(len / 2);
  if (len % 2) {
    median = arr[mid];
  } else {
    median = (arr[mid - 1] + arr[mid]) / 2;
  }
  console.log(median);
};
let nums1 = [4, 1, 3];
let nums2 = [2];
findMedianSortedArrays(nums1, nums2);


/*Find second highest number in the array */

var arr = [44, 554, 53, 89, 23, 5, 123, 334, 334, 2];

function secondLargestNumber(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest) {
      secondLargest = element;
    }
  }
  console.log(secondLargest);
}

secondLargestNumber(arr);
//Factorial

const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  console.log(product);
  return product;
};



factorial(4);

function factorial(num) {
  var fact = 1;
  while (num >= 1) {
    fact *= num;
    num--;
  }
  return fact;
}

// With Recursive func
const factorial = number => {
  return number < 2 ? 1 : number * factorial(number - 1);
};

console.log(factorial(5));
//Pass by value and pass by reference

var five = 5;

console.log(five);

function multiply(five) {
  five = five * 10;
  console.log(five);
  return five;
}

multiply(five);

console.log(five);

//Pass by reference

obj1 = {
  name: "Deepa",
  last: "Pattar"
};

console.log(obj1);

function changeName(obj1) {
  let obj2 = obj1;
  obj2.name = "Arti";
  console.log(obj1);
  console.log(obj2);
}

changeName(obj1);

console.log(obj1);
//Create copy of an array

let array1 = [1, 2, 3, 4, 5];

let copiedArray = [];

for (let i = 0; i < array1.length; i++) {
  copiedArray.push(array1[i]);
}
console.log(copiedArray);

let copiedArray1 = Object.assign([], array1); //Es6 format

let copiedArray2 = [...array1];

//Do a linear search in an array

linearsearch([2, 6, 7, 90, 103, 105, 120]);

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

function binarySearch(arr, item) {
  let min = 0;

  let max = arr.length; //7
  let mid = 0;
  // mid = Math.round((arr.length)/2);

  while (min <= max) {
    mid = Math.floor((max + min) / 2); //3//5//6
    if (arr[mid] === item) {
      return arr[mid];
    } else if (arr[mid] > item) {
      max = mid - 1; //
      min = 0;
    } else if (arr[mid] < item) {
      min = mid + 1; //4//5
    }
  }

  return false;
}
arr = [2, 6, 7, 90, 103, 105, 120];

binarySearch(arr, 100);
binarySearch(arr, 105);
binarySearch(arr, 120);
binarySearch(arr, 2);
binarySearch(arr, 7);


// given an array, find the max total and min total if 1 element is eliminated.
let a = [1, 2, 7, 3, 4];
function minAndMaxSum(a) {
  a = a.sort((a, b) => a - b);

  let min = a[0];
  let max = a[a.length - 1];

  let total = function(a) {
    return (Total = a.reduce((total, item) => total + item));
  };
  let totalSUm = total(a);

  let minTotal = totalSUm - max;
  let maxTotal = totalSUm - min;

  console.log(minTotal);
  console.log(maxTotal);
}
minAndMaxSum(a);
//alternate way
function findMinMax(array) {
  let minNumber = Math.min.apply(null, array);
  let maxNumber = Math.max.apply(null, array);

  let arraySum = array.reduce((acc, item) => acc + item);

  let minSum = arraySum - minNumber;
  let maxSum = arraySum - maxNumber;

  return { minSum: minSum, maxSum: maxSum };
}
let ary = [1, 2, 7, 3, 4];
console.log(findMinMax(ary));

//find length

let x = 12345678; //4

function findLength(num) {
  let numLength = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    numLength++;
  }
  return numLength;
}
console.log(findLength(x));

//Highest number repeating in array

function maxNumCount(ary) {
  let maxNum = Math.max.apply(null, ary);
  let count = 0;

  count = ary.filter(item => item === maxNum);
  console.log(count.length);
  console.log(`Max Number ${maxNum} repeats ${count.length} times`);
}

var a = [1, 2, 2, 5, 5, 5, 5, 3, 4, 4];
maxNumCount(a);

// what is the output--->
const arr = [500, 120, 0, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(`Index ${i}, element:${arr[i]}`);
  }, arr[i]);
}
//Index 2, element 0
// Index 3, element 21
// Index 1, element 120
// index 0, element 500

// const profile = {
//   name: "tech",
//   getName: () => {
//     console.log(this.name);
//   }
// };

// profile.getName();

function mergeArray(arr) {
  let finalArray = [];
  function concatArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        concatArray(arr[i]);
      } else finalArray.push(arr[i]);
    }
  }
  concatArray(arr);
  return finalArray;
}

console.log(mergeArray([[2, 3], [[8, [9, 0]], 5], [3, 5]]));
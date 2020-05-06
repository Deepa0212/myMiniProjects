//From a unsorted array, check whether there are any two numbers that will sum up to a given number?

function sumFinder(arr, sum) {
  let output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let obj = {};
      if (arr[i] + arr[j] === sum) {
        obj.a = arr[i];
        obj.b = arr[j];
        output.push(obj);
      }
    }
  }
  return output;
}

console.log(sumFinder([6, 4, 3, 2, 1, 7], 9)); // [{6,3}, {2,7}] // (2) [{a:6, b:3}, {a: 2, b:7}]

// find the largest sum of any two elements
// can also find by largest and second largest method of -Infinity

var arr = [23, 54, 65, 12, 23, 89];

function largestSumofTwo(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  let largestSum = arr[len - 1] + arr[len - 2];
  return largestSum;
}

console.log(Math.max.apply(null, arr)); // max num in an array
console.log(Math.min.apply(null, arr));
console.log(largestSumofTwo(arr));

// Find Missing Number in an array
var arr = [2, 3, 1, 5, 6, 4, 7, 9, 10];

let n = arr.length + 1;
let sum = (n * (n + 1)) / 2; //
let newSum = 0;

for (let i = 0; i < arr.length; i++) {
  newSum += arr[i];
}

let diff = sum - newSum;

console.log(diff);

// palindrome

function palindrome(str) {
  var revStr = str
    .split("")
    .reverse()
    .join("");
  if (str === revStr) {
    console.log("Its a palindrome");
  }
}
console.log(palindrome("madam"));

function palindrome(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1]) {
      return false;
    }
    return true;
  }
}

console.log(palindrome("madam"));

function reverseInPlace(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join("");
}

console.log(reverseInPlace("I am the good boy")); // I ma eht doog yob

function reverseSentence(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ");
}

console.log(reverseSentence("I am the good boy")); // boy good the am I

function reverseStringRecursively(str) {
  if (str === "") return "";
  else {
    return reverseStringRecursively(str.substr(1)) + str.charAt(0); // ello + H , llo + He
  }
}
console.log(reverseStringRecursively("palindrome"));

function reverseString(str) {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str === "") return "";
    else {
      revStr = str.substr(1) + str.charAt(0);
      console.log(revStr);
    }
  }
  return revStr;
}
console.log(reverseString("palindrome"));

//Find a number that is comman in all the arrays
// var arrays = [[1, 4, 6, 78, 8, 9, 124, 44], [44, 6, 9], [124, 44, 16, 9]];

var arrays = [[1, 4, 6, 78, 8, 9, 124, 44], [44, 6, 9], [124, 44, 16, 9]];

function intersection(array) {
  let resultAry = [];
  // let intersectionAry = new Set();
  for (let i = 0; i < array[0].length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (!array[j].includes(array[0][i])) {
        //compare zero index of first array if it exists in second array with index 1
        console.log(array[j], array[0][i]);
        break;
      }
    }
    if (j === array.length) {
      resultAry.push(array[0][i]);
    }
  }
  return resultAry;
}

console.log(intersection(arrays));

/*Write a function after that takes the number of times the callback needs to be called before being executed 
  as the first parameter and the callback as the second parameter. */

function after(count, func) {
  let counter = 0;
  return function() {
    counter++;
    if (counter === count) {
      func();
    } else {
      console.log("nothing to print");
    }
  };
}

var called = function() {
  console.log("hello");
};
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

function printNumbers() {
  for (var i = 1; i <= 10; i++) {
    setTimeout(
      (function() {
        console.log(i);
      })(),
      10000
    );
  }
}

printNumbers();

function sum(a, b) {
  if (b === undefined) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}
console.log(sum(2)(6)); //

function createBase(x) {
  return function(y) {
    return x + y;
  };
}
// console.log(createBase(6)(6));
var base = createBase(6);
base();
console.log(createBase(6));

createCurry = z => {
  return function(y) {
    return function(x) {
      return function(w) {
        return w + x + y + z;
      };
    };
  };
};
console.log(createCurry(1)(2)(3)(4));

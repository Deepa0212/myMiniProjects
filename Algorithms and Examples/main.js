// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//--INDEX-------------

// Reverse a String
// Replace letters in string
// Sort Array of Objects
// Map, Filter, Reduce
// Call and Apply
// Bubble Sort
// Compare 2 Objects
// Fizz Buzz
// fibonacci

/* Reverse the string*/

var str = "chetan";
//str.split('').reverse().join('');
ReverseString = str => {
  var strArr = str.split("");
  let revArr = strArr.reverse();
  revStr = revArr.join("");
  return revStr;
};

// Reverse an Integer

var str = 1234;
//str.split('').reverse().join('');
let revStr = function ReverseString(str) {
  let strG = str.toString();
  var strArr = strG.split("");
  let revArr = strArr.reverse();
  revStr = revArr.join("");
  console.log(revStr);
  return revStr;
};

revStr(1234);

str = "Chetan";
ReverseString2 = str => {
  var revString = "";
  var strLength = str.length - 1;

  for (strLength; strLength >= 0; strLength--) {
    //revArr.push(str.chartAt(j));
    revString = revString + str.charAt(strLength);
  }
  return revString;
};

// Reverse String with recursive function
function reverseString(str) {
  if (str === "") return "";
  else {
    return reverseString(str.substr(1)) + str.charAt(0);
    //console.log(revStr);
  }
}
console.log(reverseString("hello"));

//Replace letters ab with *
var str = "hello ab, how about today";

replaceStr = str => {
  var strAry = str.split(" ");
  var newAry = [];
  for (var i = 0; i < strAry.length; i++) {
    var strVar = strAry[i]; //hello //about
    var strVarAry = strVar.split(""); //["h", "e", "l", "l", "o"]//[]
    for (var j = 0; j < strVarAry.length; j++) {
      if (strVarAry[j] === "a" || strVarAry[j] === "A");
      {
        if (strVarAry[j + 1] == "b" || strVarAry[j + 1] == "B") {
          var startIndex = j;
          var removeCount = 2;
          j = j + 1;
          strVarAry.splice(startIndex, removeCount, "*");
          // strVarAry.splice(j,2,"*");
          //console.log(strVarAry);
        }
      }
      //console.log(newAry);
    }
    var strArray = strVarAry.join("");
    newAry.push(strArray);
  }

  console.log(newAry.join(" "));
  return newAry.join(" ");
};
replaceStr(str);

// //by using replace method
str.replace(/ab/gi, "$");

var points = [40, 100, 1, 5, 25, 10];

mySort = points => {
  return points.sort(function(a, b) {
    return a - b;
  });
};
console.log(mySort(points));

// SORT Array of objects

var aryOfObj = [
  { name: "George", age: 32, retiredate: "March 12, 2014" },
  { name: "Edward", age: 17, retiredate: "June 2, 2023" },
  { name: "Christine", age: 58, retiredate: "December 20, 2036" },
  { name: "Sarah", age: 62, retiredate: "April 30, 2020" }
];

aryOfObj.sort((a, b) => a.age - b.age);
console.log(Sort(aryOfObj));
//using fat arrow syntax
//arr.sort((a,b)=>{return a - b})

/* 
    The rule of thumb we use to determine which operator we should use is as follows:

    If we already have an array and i want to do the exact same operation on each of the elements in the array and return the
     same amount of items in the array, use the map.
    If we already have an array but i only want to have items in the array that match certain criteria, use the filter.
    If we already have an array, but i want to use the values in that array to create something completely new, use the reduce.

*/

const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "small",
    weight: 10
  },
  {
    name: "lion",
    size: "medium",
    weight: 150
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  }
];

// let animal_names = animals.map((animal, index, animals) => {
//     return animal.name
// })

let animal_names = animals.map(function(animal) {
  return animal.name;
});

animal_names = ["cat", "dog", "lion", "elephant"];

let small_animals = animals.filter(function(animal) {
  return animal.size == "small";
});

small_animals = [
  { name: "cat", size: "small", weight: 5 },
  { name: "dog", size: "small", weight: 10 }
];

//call() and apply()

var myObject = {
  someProperty: 20
};

function someFunction() {
  console.log(this.someProperty);
}

someFunction.call(myObject);

function newFunction(a, b, c) {
  console.log(this.someProperty + a + b + c);
}

newFunction.call(myObject, 10, 20, 30);

newFunction.apply(myObject, [10, 20, 30]);

//bubble sorting

// var arr = [52,3,44,77,88,12,93,4,66,88];

var arr = [52, 3, 44, 77, 1];

function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      var temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // [arr[i], arr[j]] = [arr[j], arr[i]]; ES6 way
      }
    }
  }
  console.log(arr);
  return arr;
}
/**For i = 0 */
//[3,52,44,77,1];
// [3,44,52,77,1];
// [3,44,52,77,1];
// [3,44,52,1,77];
/**For i = 1 */
// [3,44,52,1,77];
// [3,44,52,1,77];
// [3,44,1,52,77];
// [3,44,1,52,77];
/**For i = 2 */
// [3,44,1,52,77];
// [3,44,1,52,77];
// [3,1,44,52,77];
//  [3,1,44,52,77];
/**For i = 3 */
// [3,1,44,52,77];
// [1,3,44,52,77];
// [1,3,44,52,77];
// [1,3,44,52,77];
/**For i = 4 */
// [1,3,44,52,77];
// [1,3,44,52,77];
// [1,3,44,52,77];
// [1,3,44,52,77];

var sortedArr = sort(arr);

console.log(sortedArr);

arr = [3, 4, 12, 44, 52, 66, 77, 88, 88, 93, 98];
// 2nd interation [3,2,12,44,52]

arr = [3, 4, 12, 44, 52, 66, 77, 88, 88, 93, 98];

// var index = binarySort(arr,12);

//compare two objects

var obj = { name: "object", lastname: "lastObject", status: "open" };
var obj2 = { name: "object", lastname: "lastObject", status: "open" };
//var obj3 = {name:'object3',lastname:'lastObject3',status:'open3'}

function compareObj(obj, obj2) {
  let obj1length = Object.keys(obj).length;
  let obj2length = Object.keys(obj2).length;

  if (obj1length !== obj2length) {
    return false;
  }

  for (var prop in obj) {
    if (obj[prop] != obj2[prop]) {
      return false;
    }
  }
  return true;
}

compareObj(obj, obj2);
//compareObj(obj,obj3);

//Fizz Buzz - Given a number as an input, print out every integer from 1 to that number. However,
//when the integer is divisible by 2, print out “Fizz”;
//when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const FizzBuzz = n => {
  for (i = 1; i <= n; i++) {
    if (i % 6 === 0) {
      console.log("Fizz-Buzz", i);
    } else if (i % 2 === 0) {
      console.log("Fizz", i);
    } else if (i % 3 === 0) {
      console.log("Buzz", i);
    } else {
      console.log("Not a Fizz-Buzz", i);
    }
  }
};

FizzBuzz(13);

//Max Character
//Given a string of characters, return the character that appears the most often.

/* Primitive type (string, number, etc.) are passed by value and objects are passed by reference. 
If you change a property of the passed object global copy of that objcet change will be affected. However,
 you assign a new object to the passed object, the changes will not be reflected. */

var num = 10,
  name = "Addy Osmani",
  obj1 = {
    value: "first value"
  },
  obj2 = {
    value: "second value"
  },
  obj3 = obj2;

function change(num, name, obj1, obj2) {
  num = num * 10;
  name = "Paul Irish";
  obj1 = obj2;
  obj2.value = "new value";
  return num;
}

change(num, name, obj1, obj2);

console.log(num); // 10
console.log(name); // "Addy Osmani"
console.log(obj1.value); //"first value"
console.log(obj2.value); //"new value"
console.log(obj3.value); //"new value"

//Inheritance
var Company = function(address) {
  this.address = address;
};

var Employee = function(name, id) {
  this.name = name;
  this.id = id;
};

Employee.prototype = new Company("#123 white field");

var chetan = new Employee("Chetan", "111");

//generate fibonacci numbers

var looping = function(n) {
  var a = 0,
    b = 1,
    f = 1;
  console.log(a);
  console.log(b);
  for (var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
    console.log(f);
  }
};
looping(5);

// //find fibonnaci numbers
// 0 ,1 ,1, 2, 3, 5, 8, 13, 21
function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    console.log();

    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

fibonacci(5); //8

//Find a number that is comman in all the arrays
var arrays = [[1, 4, 6, 78, 8, 9, 124, 44], [44, 6, 9], [124, 44, 16, 9]];

function intersection(array) {
  let resultAry = [];
  // let intersectionAry = new Set();
  for (let i = 0; i < array[0].length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (!array[j].includes(array[0][i])) {
        //compare zero index of first array if it exists in second array with index 1
        break;
      }
    }
    if (j === array.length) {
      resultAry.push(array[0][i]);
    }
  }
  // return [...intersectionAry]
  return resultAry;
}

intersection(arrays);

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

for (var i = 0; i < array.length; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(`Index:${i}, Element:${array[i]}`);
    }, 1000);
  })(i);
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

Array.prototype.ayncPrint = function() {
  for (let i = 0; i < this.length; i++) {
    setTimeout(() => {
      console.log("Index: " + i + ", element: " + this[i]);
    }, 3000);
  }
};

Array.prototype.ayncPrint2 = function() {
  for (let i = 0; i < this.length; i++) {
    var that = this;
    setTimeout(function() {
      console.log("Index: " + i + ", element: " + that[i]);
    }, 3000);
  }
};

// Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(y) {
  return function(x) {
    return y + x;
  };
}

//addSix(10) // 16

//How would you use a closure to create a private counter?

function counter() {
  var count = 0;

  return function() {
    return count++;
  };
}

var mycounter = counter();
// sum(2,3) //5
// sum(2)(3) // 5

function sum(a, b) {
  if (b == undefined) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}

// function sum(a){
//     return function(b){
//         return a + b
//     }
// }

// sum(2,3) //5
// sum(2)(3) // 5
//console.log(sum(2));// returns func ref

/*Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. 
If it is called any additional times,instead of calling the callback again it will simply return the output
 value from the first time it was called*/

function addByTwo2(x) {
  return x + 2;
}

function once(func) {
  let result;

  return function(b) {
    if (!result) {
      // counter = counter + 1;
      result = func(b);
      return result;
    } else {
      return result;
    }
  };
}

var onceFunc = once(addByTwo2);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6

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

/*Merge two sorted array into another sorted array without using concat method*/

function merge(A, B) {
  var i = A.length - 1;
  var j = B.length - 1;

  var k = A.length + B.length - 1;

  while (k > 0) {
    if (j < 0 || (i >= 0 && A[i] > B[j])) {
      A[k--] = A[i--];
    } else {
      A[k--] = A[j--];
    }
  }

  return A;
}

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

// with ES6

let mergedArray = [...arr1, ...arr2];
/*Find second highest number in the array */

var arr = Array("20", "120", "111", "215", "54", "78");
(biggest = Infinity), (next_biggest = -Infinity);
let n = arr.length;
for (var i = 0; i < n; ++i) {
  var nr = +arr[i]; // convert to number first

  if (nr > biggest) {
    next_biggest = biggest; // save previous biggest value
    biggest = nr; //inf
  } else if (nr < biggest && nr > next_biggest) {
    next_biggest = nr; // new second biggest value
  }
}

console.log(next_biggest);

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

// With Recursive func
const factorial = number => {
  return number < 2 ? 1 : number * factorial(number - 1);
};

console.log(factorial(5));

// add(1) (2) (8) => 11

String.prototype.repeatify = function(times) {
  var conStr = "";
  while (times > 0) {
    conStr = conStr + this;
    times--;
  }
  return conStr;
};

console.log("hello".repeatify(3));
//Should print hellohellohello.

function isTwoPassed() {
  console.log(arguments);
  console.log(arguments.length);
  for (var i; i < arguments.length; i++) {
    if (arguments[i] == 2) {
      return true;
    }
  }
}

isTwoPassed(1, 2, 3, 4, 5);

// Class vs Factories

// Factories are functions which simply return an object
// Ex for class
class Dog {
  constructor() {
    this.sound = "Woof";
  }

  talk() {
    console.log(this.sound);
  }
}

var tomy = new Dog();

tomy.talk(); //Woof

function dogTalk() {
  tomy.talk();
}

$("#header").click(tomy.talk());
//$("#myButton").click(tomy.talk);//Will throw error as this refers to click event

// Same class can be rewritten using factories

// var Dog = function(){

// }

/* Inheritance example */

var parentClass = function() {
  this.parentProp = "parent property";
  this.parentFunc = function(message) {
    return "Parent method returned your message >" + message;
  };
};

var childClass = function() {
  this.childProp = "child property";
  this.childFunc = function(message) {
    return "Child method returned your message >" + message;
  };
};

childClass.prototype = new parentClass();

function Person(name, id) {
  this.name = name;
  this.id = id;
  this.getName = function() {
    return this.name;
  };
}

function Manager(name) {
  Person.call(this, name);
}

var myName = new Person("Chetan", "id");
var managerName = new Manager("Sammy");
managerName.getName(); //Sammy

arrayToSort = [5, 3, 55, 77, 1, 122, 15, 18, 9, 36, 44, 99, 4, 6];
arrayToSort.sort(function(a, b) {
  return a - b;
});

//[1, 3, 4, 5, 6, 9, 15, 18, 36, 44, 55, 77, 99, 122]
function binary_search(arr, value) {
  let min = 0;
  let mid = 0;
  let max = arr.length; //13

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (value == arr[mid]) {
      //value is equal to middle value at mid of array return
      console.log("Value found at index:", mid);
      return arr[mid];
    } else if (value > arr[mid]) {
      //value is greater than mid of array change min of array
      min = mid + 1;
    } else {
      //value is greater than mid of array change max of array
      max = mid - 1;
    }
  }

  return false; //no value found
}
console.log(binary_search(arrayToSort, 99));

//Remove duplicate elements from an array

let dupArr = [1, 3, 4, 1, 2, 3, 5, 7];

var uniqueArray = [];

let length = dupArr.length;

for (let i = 0; i < length; i++) {
  if (uniqueArray.indexOf(dupArr[i]) === -1) {
    uniqueArray.push(dupArr[i]);
  }
}

console.log(uniqueArray);

function removeDupl(dupArr) {
  let uniqAry = [];

  dupArr.forEach(element => {
    if (!uniqAry.includes(element)) {
      uniqAry.push(element);
    }
  });

  return uniqAry;
}

//Create copy of an array

let array1 = [1, 2, 3, 4, 5];

let copiedArray = [];

for (let i = 0; i < array1.length; i++) {
  copiedArray.push(array1[i]);
}
console.log(copiedArray);

let copiedArray1 = Object.assign([], array); //Es6 format

let copiedArray2 = [...array];

//Function to add sum(1,2,3,4,5 .... n)

function sum() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}
//to print nmbers 1 to 10 using setTimeout in for loop
for (var i = 0; i < 10; i++) {
  setTimeout(
    (function(i) {
      console.log(i);
    })(i),
    10
  );
}
// Find if string is isomorphic

// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character but a character may map to itself.

//  Notice
// You may assume both s and t have the same length.

// Example
// Given s = "egg", t = "add", return true.

// Given s = "ehg", t = "add", return false.

// Given s = "foo", t = "bar", return false.

// Given s = "paper", t = "title", return true.

// Given s = "abcde", t = "fghij", return true.

function isomorphic1(str1, str2) {
  return helper(str1, str2) && helper(str2, str1);
}

function helper(str1, str2) {
  var map = {};
  for (let i = 0; i < str1.length; i++) {
    let a = str1[i];
    let b = str2[i];

    if (typeof map[a] === "undefined") map[a] = b;
    else if (map[a] != b) {
      return false;
    }
  }
  return true;
}
//O(n)
console.log(isomorphic1("ehg", "add")); // false

function isomorphic(str1, str2) {
  var len1 = str1.length;

  if (len1 != str2.length) {
    console.log("Both strings have different lenghts");
    return false;
  }

  var chMap = {};

  for (var i = 0; i < len1; i++) {
    if (!chMap[str1[i]]) {
      chMap[str1[i]] = str2[i];
    } else if (chMap[str1[i]] !== str2[i]) {
      console.log("Both strings differ in maaping at index " + i);
      return false;
    }
  }
  return true;
}

console.log(isomorphic("foo", "bar")); // false
console.log(isomorphic("foo", "baa")); // true
console.log(isomorphic("ehg", "add")); // true

function printOut(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

printOut("Chetan");

let deepa = {
  age: 33,
  cars: 2
};

console.log(deepa);

function displayUser() {
  const deepa = {
    age: 44,
    cars: 4
  };
  console.log(deepa);
}

function displayUser2() {
  const deepa = {
    age: 53,
    cars: 3
  };
  console.log(deepa);
}
displayUser();
displayUser2();

deepa = "Cedsdsd";
console.log(deepa);

// Module Pattern in javascript

var person = {
  firstName: "Chetan",
  lastName: "Patil",
  getFirstName: function() {
    return this.firstName;
  }
};

//In code above any program can change the firstName, we need to implement module pattern and make firstName private

function getPersonName() {
  var firstName = "Chetan";
  var lastName = "Patil";
  return {
    getFirstName: function() {
      return firstName;
    },
    getLatName: function() {
      return lastName;
    }
  };
}

var person = getPersonName();

person.getFirstName(); //Chetan

person.firstName; //undefined

/* this reference in various function calls  */

function Bicycle(name, gear, colour, tyrePressure) {
  //While invoking constructor function
  // var this = {}
  (this.name = name), (this.gear = gear), (this.colour = colour);
  this.tyrePressure = tyrePressure;
  this.inflateTyre = function() {
    this.tyrePressure = this.tyrePressure + 3;
  };
  // return this
}
let myCycle = new Bicycle("Hero", 4, "Red", 27);

function sayHello() {
  console.log("Hello"); //Hello
  console.log(this); //Window
}

function Mechanic(mechanicName) {
  this.mechanicName = mechanicName;
}

var john = new Mechanic();
john.inflateTyre = myCycle.inflateTyre();

// If john wants to use same method of Bicylcle to inflate tyres we use call
// Call is property on function.i.e function object because function is nothing but an object
//When a function is called for ex

// Mechanic() is equal to Mechanic.call(), if call is empty it refers to Object created from Mechanic and if any object is passed to it
//'this' refers to object passed ex john.inflateTyre.call(myCycle); after this function call mycycle tyrePressure will be inflated by 3
// nd will be changed fro 27 to 30

//Prototype in javascript

// Each object which is created from constructor has a __proto__ property which points to prototype of the parent constructor from
//which object was created
//every function has a property called protype which points to Prototype Object

function Employee(name) {
  return (this.name = name);
}

var emp1 = new Employee("Jim");

var emp2 = new Employee("Mary");

//if method is added directly to Employee function for ex

Employee.sayHello = function() {
  console.log("Hello");
};

//All object that are created from Employee Constructor will have one copy of sayHello function ,
// so if 1000 employeess are created we will be having 1000copies of sayHello functions which is not good,
//to overcome this  ,if we add function to constructor using prototype object, only one copy is created and even in run time if
// functions are added to Employee functions after emp1 was created ,
//  that emp1 object still has access to functions added to Employee constructor

Employee.prototype.sayBye = function() {
  console.log("Bye Bye");
};

//When we add sayBye to prototype even emp1 will have access

emp1.sayBye(); //Bye Bye

//Prtotype object has a property constructor which points to function iteself

var someObj = Employee.prototype;

someObj.constructor; //Employee(name){return this.name = name;}

//Inheritance in javascript

function Employee(name, id) {
  this.name = name;
  this.id = id;
}

var employee = new Employee("Mark", "12345");

Employee.prototype.getName = function() {
  console.log(this.name);
};

function Manager(name, dept) {
  this.name = name;
  this.dept = dept;
}

Manager.prototype.getDeptName = function() {
  console.log(this.dept);
};

var simon = new Manager("Simon", "Tax");

simon.__proto__.__proto__ = Employee.prototype;

//CAll and apply example
var monica = {
  name: "Monica Geller",
  total: 4000,
  deductMontlyFee: function(fee) {
    this.total = this.total - fee;
    return this.name + " remaining balance is " + this.total;
  }
};

let rachel = { name: "rachel", total: 5000 };

console.log(monica.deductMontlyFee.call(rachel, 2000)); //3000

//HASH MAPS IN JAVASCRIPT

/* Hash Table */

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function() {
  let storage = [];
  const storageLimit = 14;

  this.print = function() {
    console.log(storage);
  };

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash("quincy", 10));

let ht = new HashTable();
//   ht.add('beau', 'person');
//   ht.add('fido', 'dog');
//   ht.add('rex', 'dinosour');
//   ht.add('tux', 'penguin')
//   console.log(ht.lookup('tux'))
//   ht.print();

//Es 6 Maps and sets

// Map is an Array or other iterable object whose elements are key-value pairs
// (arrays with two elements, e.g. [{ 1, 'one' },{ 2, 'two' }])

//Why use maps
// Objects properties can be accessed only if they are strings , js object supports ony one key object ,
// it cannot support more than one key as object,Map in es6 overcomes this problem with object
// 2)property/key orders are not guaranteed. Just because you have added the keys in a certain order,
// does not mean they will remain in that order, when you iterate through the keys.

// let movies  = new Map();

// movies.set(1,{'title':'Avengers'});
// movies.set(2,{'title':'Hulk'});
// movies.set(3,{'title':'Infinity War'});

let a = {};

let x = {};

x[a] = "a";
// x = {
//         a:'a'
//     };

let b = { num: 1 };
x[b] = "b";

console.log(x); //prints b, a value in x is lost

//Using map

let map = new Map();

map.set(a, "a");
map.set(b, "b");

//get value

map.get(a); // rtuens 'a'
//to delete
map.delete(b); //deletes b key and value

//To iterate through map

for (let [key, value] of map) {
  console.log("key is " + key + " and value is " + value);
}

/*Example 2 for Map function*/

var myMap = new Map();

var keyString = "a string",
  keyObj = {},
  keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
myMap.set(1, "one");
myMap.set("name", "Chetan");

myMap.size; // 3

// getting the values
myMap.get(keyString); // "value associated with 'a string'"
myMap.get(keyObj); // "value associated with keyObj"
myMap.get(keyFunc); // "value associated with keyFunc"
myMap.get(1); //"one"
myMap.get("name"); //"Chetan"

//To iterate through map

// https://codepen.io/anon/pen/dKeNpv?editors=0011

// Find if array is unique

var uniqueArray = [3, 2, 3, 1, 4];

function isUnique(uniqueArray) {
  let obj = {};

  for (var i = 0; i < uniqueArray.length; i++) {
    if (obj[uniqueArray[i]]) {
      return false;
    } else {
      obj[uniqueArray[i]] = true;
    } //obj = {3:true,2:true,}
    console.log(obj);
  }
}

//unique sort algorithm
//input [1,4,2,7,1,2] =>[1,2,4,7]

var arr = [1, 4, 2, 7, 1, 2];
function uniqSort(arr) {
  let breadcrumb = {};
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumb[arr[i]]) {
      breadcrumb[arr[i]] = true;
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray.sort((a, b) => a - b);
}

//1st approach

function times10(n) {
  return n * 10;
}

const cache = {};

const memoTimes10 = n => {
  if (cache[n] === undefined) {
    let result = times10(n);
    cache[n] = result;
    console.log("calculating result");
    return false;
  } else {
    console.log("Showing caching result");
    return cache[n];
  }
};

memoTimes10(9);
memoTimes10(9);
//2nd approach by closures
function memoClosureTimes() {
  let cache = {};
  function cachedObj(n) {
    if (cache[n] === undefined) {
      let result = times10(n);
      cache[n] = result;
      console.log("calculating result");
      return false;
    } else {
      console.log("Showing caching result");
      return cache[n];
    }
  }
  return cachedObj;
}

memoClosureTimes = memoClosureTimes();

//make times10 as callback function , remove it from global scope
function times10(n) {
  return n * 10;
}

function memoize(callbackFunc) {
  let cache = {};
  function cachedObj(n) {
    if (cache[n] === undefined) {
      let result = callbackFunc(n);
      cache[n] = result;
      console.log("calculating result");
      return false;
    } else {
      console.log("Showing caching result");
      return cache[n];
    }
  }
  return cachedObj;
}

var memoizedtimes10 = memoize(times10);

memoizedtimes10(9);
memoizedtimes10(9);

// Recursion

// loop n times

function loopNtimes(n) {
  console.log("Looped");
  if (n <= 1) {
    return "complete";
  }

  return loopNtimes(n - 1);
}

loopNtimes(5);

// factorial of a number without recursion

function fact(n) {
  let result = 1;
  while (n >= 1) {
    result = result * n;
    n--;
  }
  return result;
}

//Using recursive way
// let n=4
function factorial(n) {
  if (n <= 1) {
    return n;
  }

  return n * factorial(n - 1); //4 * 6
  // ~~~~~~~~~~~~
}

//Accumulator with recursion pattern
var arr = ["s", "cr", "t cod", ":):)"];
var element = "e";

function joinElements(arr, element) {
  let result = "";
  function recurse(index, result) {
    if (index === arr.length) {
      return result;
    } else {
      result = result + arr[index] + element;
      return recurse(index + 1, result);
    }
  }
  console.log(result);
  return recurse(0, result);
}

joinElements(arr, element);
//reverse an arrray without using reverse function

function arrRev(arr) {
  var reverseArray = [];

  let pushIndex = arr.length - 1;
  while (pushIndex >= 0) {
    reverseArray.push(arr[pushIndex]);
    pushIndex = pushIndex - 1;
  }
  return reverseArray;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var revArr = arrRev(arr);
console.log(revArr);

// Use recursive way to reverse an array

function recursiveRev(arr) {
  var reverseArray = [];

  function add(arr) {
    reverseArray.push(arr.pop());
    if (arr.length > 0) {
      return add(arr);
    }
  }

  add(arr); //[1,2,3,4]
  return reverseArray;
}

var arr = [1, 2, 3, 4];
var revArr = recursiveRev(arr);
console.log(revArr);

// Use recursive way to reverse an array without warpper function

function recursiveRev(arr) {
  if (arr.length > 0) {
    let value = arr.shift();
    recursiveRev(arr);
    arr.push(value);
  }
  return arr;
}

//Write a recursive multiplier which takes two arguments "arr and num" and multiplies each arr element
// by number and returns multiplied array

//Below is implemented by wrapper function

function recursiveMultiplier(arr, num) {
  var resultArry = [];

  function mutiplyArr(arr) {
    if (arr.length > 0) {
      resultArry.push(num * arr[0]);
      let slicedAry = arr.slice(1, arr.length);
      mutiplyArr(slicedAry);
    }
  }

  mutiplyArr(arr);
  return resultArry;
}

let arr2 = [1, 2, 3, 4, 5];

recursiveMultiplier(arr2, 2);

//Below is without wrapper function

function recursiveMultiplier2(arr, num) {
  if (arr.length > 0) {
    let last = arr.pop();
    recursiveMultiplier2(arr, num);
    arr.push(last * num);
  }
  return arr;
}

let arr3 = [1, 2, 3, 4];
recursiveMultiplier2(arr3, 2);

/*
 FOR RECURSION WITH ARRAY AND OBJECTS WE DO NOT HAVE TO RETURN COPIES BUT WE RETURN POINTERS
BUT FORPRIMITIVE DATA TYPES SUCH AS STRINGS AND NUMBERS WE RETURN  COPIES 
*/

// Merge or flatten nested Array
// [[2,3],5,[3,5]] => [2,3,5,3,5];

// arr5  = [[2,3],5,[3,5]];
//arr6  = [[2,[2,3]],5,[3,5]];

function mergeArray(arr) {
  let finalAry = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let nestedAry = arr[i];
      for (let j = 0; j < nestedAry.length; j++) {
        finalAry.push(nestedAry[j]);
      }
    } else {
      finalAry.push(arr[i]);
    }
  }
  return finalAry;
}

mergeArray(arr5);
//We have to use recursive slution for n number nested array
arr6 = [[2, [3, [4, 5, 6, 7]]], 8, [3, 5]];

function mergeArray(arr) {
  let finalAry = [];

  function concatArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let nestedAry = arr[i];
        concatArray(nestedAry);
      } else {
        finalAry.push(arr[i]);
      }
    }
  }

  concatArray(arr);
  return finalAry;
}

mergeArray(arr6);

//Implement without wrapper function

arr7 = [[2, [3, [4, 5, 6, 7]]], 8, [3, 5]];
arr6 = [[2, 3], 5, [3, 5]];

function mergeArray(arr) {
  let formatted = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // let nestedAry = arr[i];
      formatted = formatted.concat(mergeArray(nestedAry));
    } else {
      formatted.push(arr[i]);
    }
  }

  return formatted;
}

mergeArray(arr6);

joinElements(arr, element);

//Perform above function without recursion

function joinElementsWithoutRec(arr, element) {
  var result = "";
  for (i = 0; i < arr.length; i++) {
    result = result + arr[i] + element;
  }
  return result;
}

//Do a linear search in an array

//linearsearch([2,6,7,90,103,105,120])

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

//Sorting of array by merge sort
// Split the array into halves and merge them recursively
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Merged sort result>>>>");
console.log(mergeSort(list));

//   Debounce implementation in javascript
const debounce = (fn, time) => {
  let timeout;
  console.log("Inside debounce function");
  return function() {
    // var context = this;
    // var args = arguments;
    let functionCall = function() {
      // fn.apply(context, args);
      fn();
    };

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

var count = 0;
window.addEventListener(
  "keyup",
  debounce(function(event) {
    console.log(event);
    console.log(count);
    document.body.innerHTML = document.body.innerHTML + "Keyup event detected";
    console.log("Debounce implemented");
  }, 1000)
);

//https://github.com/WebPredict/angular-2-interview-questions
// https://www.sitepoint.com/understanding-component-architecture-angular/

function myPromise(func) {
  this.thencallbackArray = [];
  this.status = "pending";
  this.value = undefined;
  this.onCatch = undefined;

  this.resolve = function() {
    setTimeout(function() {
      return { data: "fakeData" };
    }, 1000);
  };
  this.then = function(callback) {
    this.thencallbackArray.push(callback);
    return this;
  };
  this.catch = function(callback) {
    this.onCatch = callback;
    return this;
  };

  func(this.resolver.bind(this), this.resolver.bind(this));

  function resolver(value) {
    this.status = "resolved";
    this.value = value;
    for (let i = 0; i < this.thencallbackArray.length; i++) {
      let func = this.thencallbackArray[i];
      func(this.value);
    }
  }

  function rejector(value) {
    this.status = "rejected";
    this.value = value;
    if (typeof this.catchCallback(value) === "function") {
      this.catchCallback(this.value);
    }
  }
}

//Dummy Implementation of fetch API lets call our method as getData

function getData(url) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(response) {
      if (status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.error = function() {
      reject(Error("Network Error"));
    };
  });
}

getData("https://nerboda.github.io")
  .then(function(response) {
    console.log("Then :1");
    console.log(response);
  })
  .then(function(result) {
    console.log(result);
    console.log("Then :2");
  });

// Display n prime numbers
function displayPrimeNubers(n) {
  let i = 1;
  let primeNumber;
  while (n > i) {
    primeNumber = primeOrNot(i);
    if (primeNumber) {
      console.log(i);
    }
    i++;
  }
}

function displayNPrimeNumbers(n) {
  let count = 0;
  let i = 1;

  while (n > count) {
    if (primeOrNot(i)) {
      count++;
      console.log(i);
    }
    i++;
  }
}

function primeOrNot(n) {
  if (n === 1) {
    return 1;
  }

  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }

  return true;
}

displayPrimeNubers(10);
displayNPrimeNumbers(5);

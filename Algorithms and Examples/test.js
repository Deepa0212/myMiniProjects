// find largest and second largest
// Check if specific element is there in an array
// remove Duplicates and find dupicate number

// let arr = [12, 45, 34, 67, 102, 34, 365, 02];
var arr = Array("20", "120", "111", "215", "111", "54", "78");
console.log("arr", arr);

// find largest and second largest

function secondlargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i in arr) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = +arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = +arr[i];
    }
  }
  console.log(
    "Largest and Second Largest in arr respectively",
    largest,
    secondLargest
  );
}
secondlargest(arr);

//Check if specific element is there in an array

function findElement(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      console.log("Element found at", elem, i);
    }
  }
  //---------------------------------
  let key = Object.keys(arr);
  key.map(
    item =>
      elem === +arr[item] && console.log(`Element ${elem} found at ${item}`)
  );
  let found = arr.includes(elem);
  console.log("found - true or false", found);
}
findElement(arr, 111);

//remove Duplicates

let newArr = [...new Set(arr)];
console.log("New Array from new Set method", newArr);

// -------By includes----------

let newArrIncludes = [];
for (let i = 0; i < arr.length; i++) {
  if (!newArrIncludes.includes(arr[i])) {
    newArrIncludes.push(arr[i]);
  } else {
    console.log(
      `Duplicate entry eliminated using includes method ${arr[i]} at ${i}`
    );
  }
}
console.log([1, 2, 3, 4, 5, 3, 2, 6, 7, 6]);

//------by indexOf----------
function dupArr(arr) {
  let newArrindex = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArrindex.indexOf(arr[i]) === -1) {
      newArrindex.push(arr[i]);
    } else {
      console.log(`Duplicate entry eliminated using indexOf ${arr[i]} at ${i}`);
    }
  }
  return newArrindex;
}

var arr = [1, 2, 3, 4, 5, 3, 2, 6, 7];
console.log(dupArr(arr));

//---Merge 2 array-----------------
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [8, 9, 10, 11, 12, 13, 14];

function mergeArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}

let x = mergeArrays(arr1, arr2);
console.log(x);
//---------

arr2 = [...arr1, ...arr2];
console.log(arr2);

//---Linear Search
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item === +arr[i]) {
      console.log(`item ${item} found at ${i}`);
      return i;
    }
  }
}
console.log(linearSearch(arr, 215));
//--Binary search an Array

var arr = Array("20", "120", "111", "215", "111", "54", "78");

function binarySearch(arr, item) {
  let min = 0;
  max = arr.length;
  mid = 0;
  while (min < max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      min = 0;
      max = mid - 1;
    } else if (arr[mid] < item) {
      min = mid + 1;
      max = arr.length;
    }
  }
}

console.log(binarySearch(arr, 215));

//----adding function to prototypes----
// hello ---> hello hello hello --> repeat string n times

String.prototype.repeatString = function(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    console.log(this);
    str = str + this;
  }
  return str;
};

console.log("hello".repeatString(3));

//------reverse

String.prototype.reverseString = function() {
  console.log(this);
  return this.split("")
    .reverse()
    .join("");
};
console.log("hello".reverseString());

//---remove dupicates from array
Array.prototype.removeDuplicates = function() {
  let newArr = [...new Set(this)];
  return newArr;
};
console.log([23, 45, 67, 21, 34, 45, 67].removeDuplicates());

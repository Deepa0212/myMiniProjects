//Closures
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

const array = [100, 12, 15, 21];

for (var i = 0; i < array.length; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(`Index:${i}, Element:${array[i]}`);
    }, array[i]);
  })(i);
}

// Index:1, Element:12
// Index:2, Element:15
// Index:3, Element:21
// Index:0, Element:100

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

String.prototype.repeatString = function(times) {
  let i = 0;
  let str = "";
  while (i < times) {
    str += this;
    console.log(str);
    i++;
  }
};
"Deepa".repeatString(3); //DeepaDeepaDeepa

//create Base
function createBase(n) {
  let sum = 0;
  return function(x = 0) {
    console.log("var n", n);
    console.log("var x", x);
    return (sum = n + x);
  };
}
var addtoBase = createBase(10);
console.log(addtoBase()); //10
console.log(addtoBase(6)); //16
console.log(addtoBase(10)); //20

//private counter
function counter() {
  let counter = 0;
  return function() {
    return (counter = counter + 1);
  };
}
var count = counter();
console.log(count); // function ref
console.log(count()); //1
console.log(count()); //2

//should return sum
function sum(a, b) {
  if (b === undefined) {
    return function(b) {
      return a + b;
    };
  } else return a + b;
}

// console.log(sum(2, 3)); //5
// console.log(sum(2)(3)); //5
console.log(sum(2));
console.log(sum(3));

//Curry functions

var greet = function greetings(greet, name) {
  if (name == undefined) {
    return function(name) {
      console.log(`${greet} ${name}`);
    };
  }
  return console.log(`${greet} ${name}`);
};

//var greetMe = greet("Good", "Morning");// Good Morning
var greetMe = greet("Hello")("world"); // Hello world
//var greetMe = greet("a");
//greetMe("b"); //a b
//greeting('x')('z');

//Nested Curry

var greet = function(greet) {
  return function(name) {
    return function(age) {
      return function(msg) {
        console.log(`${greet} ${name} ${msg} ${age}`);
      };
    };
  };
};

var greetings = greet("hello")("deepa")("30")("you are"); // hello deepa you are 30

// var sayHello = greet("Hello")("Deepa");
// sayHello("how")("u ?");

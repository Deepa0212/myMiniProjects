// using extend keyword

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in year ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//Instantiate Magazine
let mag1 = new Magazine("Mommys girl", "Dhruvi", "2019", "December");
console.log(mag1);
console.log(mag1.getSummary());

//Examples from mock interview

class Foo {
  constructor(x) {
    console.log(x);
    this.x = x;
  }
  static addFooBar(f, b) {
    console.log(x, y, f, b);
    return f.x + b.x + b.y;
  }
}

class Bar extends Foo {
  constructor(x, y) {
    console.log(x, y);
    2, 3;
    super(x);
    this.y = y;
  }
}

let f = new Foo(5);
let b = new Bar(2, 3);
console.log(Bar.addFooBar(f, b)); // 10
//------------------------------------------------//
let Circle = function(radius) {
  this.radius = radius;

  this.getArea = function() {
    // return Math.PI * Math.pow(this.radius, 2);
    return this.radius * 2;
  };
};

let myCircleNew = new Circle(5);
console.log("myCircleNew... logs");
console.log(myCircleNew.getArea()); //78.5

let myCircleDirectCall = Circle(10); // No New keyword
// console.log("myCircleDirectCall... logs");
// console.log(myCircleDirectCall.getArea()); //Cannot read property 'getArea' of undefined
// function Circle(radius) {
//   this.radius = radius;

//   this.getArea = function() {
//     // return Math.PI * Math.pow(this.radius, 2);
//     return this.radius*2;
//   };
// };

// let myCircleNew = new Circle(5);
// console.log("myCircleNew... logs");
// console.log(myCircleNew.getArea());

// let myCircleDirectCall = Circle(10);
// console.log(myCircleDirectCall.getArea());

//---------------------------------------------//

// This snippet needs correction to execute line 70.
// (function(window) {
//   var obj = {};
//   obj.dreamOn = function() {
//     console.log("I am just fine");
//   };
//   window.doer = obj;
// });

// console.log(doer.dreamOn());

// correction
(function(window) {
  var obj = {};
  obj.dreamOn = function() {
    console.log("I am just fine");
  };
  window.doer = obj;
  console.log(window);
})(window);

console.log(doer.dreamOn());
//--------------------------------//

function makeMultiplier(multiplier) {
  var myFunFunc = function(x) {
    return multiplier * x;
  };
  return myFunFunc;
}
var operation = makeMultiplier(10);
console.log(operation(10)); // 100

// function makeMultiplier(multiplier) {
//   return myFunFunc = function(x) {
//     return multiplier * x;
//   };
// }
// var operation = makeMultiplier(10);
// console.log(operation(10)); // 100

//-----------------------------------//

var counter = 0;
var myArray = ["Yak", 2, { handle: "yakchain" }];
for (var i = 0; i < myArray.length; i++) {
  counter++;
  console.log(myArray[2].handle); //priints yakchain 3 times
}
console.log(counter); // 3

//----------------------------------//

let myLiteralObj = {
  age: 20,
  setAge: newAge => {
    this.age = newAge;
  },
  getAge: () => {
    console.log(this.age);
    this.age;
  },
  getSeniorStatusThroDirectAccess: function() {
    console.log(this);
    if (this.age > 55) return "Senior";
    else return "Not Senior";
  },
  getSeniorStatusThroGetter: function() {
    console.log(this);
    if (this.getAge(57) > 55) return "Senior";
    else return "Not Senior";
  }
};
// console.log(myLiteralObj.getAge());
console.log(myLiteralObj.setAge(57));
console.log(myLiteralObj.getAge());
console.log("Direct Access", myLiteralObj.getSeniorStatusThroDirectAccess()); // Direct Access Not Senior
console.log("Thro getter", myLiteralObj.getSeniorStatusThroGetter()); //Thro getter Senior

//-------------------------------------

//Create private variables in JS
//ref : https://medium.com/javascript-in-plain-english/private-member-in-javascript-class-2359ef666aaf
// Using Constructor, Classes, Factories, WeakMap, Closures. Below example is of Classes

class ClassCar {
  constructor(mileage) {
    this.mileage = mileage; //this is public
    let privateMember = mileage; //this is private
    var x = 10;
    console.log("this", this); // ClassCar {mileage: 100}
    console.log("private variable", privateMember); // 100
    this.getPrivateMember = function() {
      return this.privateMember;
    };
    this.setPrivateMember = function(v) {
      this.privateMember = v;
    };
  }
  drive() {
    this.mileage++;
    console.log("‘Drive! ‘" + this.mileage); //101
    console.log("‘privateMember? ‘" + this.privateMember); //undefined
  }
}
const car1 = new ClassCar(100);
console.log("public:" + car1.mileage); // 100
console.log("“privateMember:”" + car1.privateMember); //undefined
car1.getPrivateMember();
car1.drive();

//-------------------------------------

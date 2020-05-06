// //1. Replace a string
// // "The quick brown fox jumps over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9"

// let str = "The quick brown fox jumps over the lazy dog";

// replaceString = str => {
//   let replStr = str.split(" ");

//   let newArr = [];
//   for (let i = 0; i < replStr.length; i++) {
//     newArr.push(replStr[i].concat(i + 1));
//   }
//   newArr = newArr.join(" ");
//   document.getElementById("repStr").innerHTML = newArr;
// };

// replaceString(str);

// //2. Reverse a String var dwarves = "bashful doc dopey grumpy happy sleepy sneezy"
// let dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
// reverseString = dwarves => {
//   let newStr = dwarves
//     .split(" ")
//     .reverse()
//     .join(" ");
//   document.getElementById("revStr").innerHTML = newStr;
// };
// reverseString(dwarves);

// //3. Write a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
// let getMonthName = function(n) {
//   if (n <= 0 || n > 12) {
//     return "Invalid number";
//   } else {
//     let month = [
//       "January",
//       "Febraury",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December"
//     ];
//     return month[n - 1];
//   }
// };

// let d = new Date();
// let display = function(month) {
//   document.getElementById("displayMonth").innerHTML = month;
// };

// display(getMonthName(d.getMonth()));
// display(getMonthName(2));

// //4. Write a regular expression that matches any string containing at least one digit.

// const text = "welcome";
// const pattern = /\d/;
// let result = text.search(pattern);
// console.log(result);

// //5. Write a function that returns true if two arrays are identical, and false otherwise.
// let arr1 = [12, 34, 5, 6];
// let arr2 = [12, 34, 15, 6];
// compareTwoArrays = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };

// compareTwoArrays(arr1, arr2);

// //6.
// var response = {
//   cartItems: [
//     {
//       id: "ci186012014536",
//       qty: 3,
//       itemInfo: {
//         model: "UN55NU6950FXZA",
//         itemNo: "980142010",
//         minDeliveryDate: 1561938400000,
//         name:
//           'UN55NU6950FXZA - SAMSUNG 55" Class 4K (2160p) Ultra HD Smart LED TV',
//         skuId: "sku23018986",
//         itemPageUrl:
//           "/sams/samsung-55in-4k-2160p-uhd-smart-led-tv-6000-series/prod22464496.ip"
//       },
//       inventoryInfo: {
//         minQtyLimit: -1,
//         lowStockLevel: 5,
//         maxQtyLimit: -1,
//         itemLowInStockFlag: false,
//         stockLevel: "inStock"
//       },
//       priceInfo: {
//         mapPriceInCents: 0,
//         listPriceInCents: 44900,
//         shippingAmountInCents: 0,
//         shippingAmount: 0,
//         originalPrice: 0,
//         itemTotalInCents: 44900,
//         totalMapPrice: 0,
//         originalPriceInCents: 0,
//         salesTax: 3500
//       },
//       props: {
//         selectedChannel: "ONLINE",
//         shippingChargeIncluded: false,
//         shippingDiscountEligible: true,
//         freeShipEligible: false,
//         specialItem: false,
//         weightedItem: false,
//         onlineChannelMinLimitQty: -1
//       }
//     }
//   ]
// };

// displayProductDetails = response => {
//   let product = {};
//   response.cartItems.map(item => {
//     product.prod = item.itemInfo.itemPageUrl;
//     product.qty = item.qty + "";
//     // convert
//     product.shipdays = moment.unix(item.itemInfo.minDeliveryDate).utc();
//     item.props.shippingDiscountEligible && (product.shipvalue = "free-plus");
//     product.subtotal = item.qty * (item.priceInfo.listPriceInCents / 100);
//     product.uprice = item.priceInfo.listPriceInCents / 100;
//     console.log(product);
//   });
// };

// displayProductDetails(response);

// var merge = function(nums1, m, nums2, n) {
//   nums1.splice(m, nums1.length);
//   nums1 = [...nums1, ...nums2];
//   console.log(nums1.length);
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = i + 1; j < nums1.length; j++) {
//       if (nums1[i] > nums1[j]) {
//         [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
//       }
//     }
//   }
//   return nums1;
// };
// let nums1 = [4, 5, 6, 0, 0, 0];
// let nums2 = [1, 2, 3];
// let m = 3;
// let n = 3;
// console.log(merge(nums1, m, nums2, n)); // [1,2,3,4,5,6]

// console.log(document.getElementById("name").value + "Hello");
// console.log(document.querySelector("#name").value + "Hello");

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("Hello");
// });

// let x = {
//   age: 20,
//   setAge: function(newAge) {
//     this.age = newAge;
//   },
//   getAge: () => this.age,
//   print: () => console.log("z"),
//   getStatus: function() {
//     if (this.age > 50) {
//       console.log("a");
//     } else {
//       console.log("aa");
//     }
//   },
//   getMyStatus: function() {
//     if (this.getAge() > 50) {
//       console.log("a");
//     } else {
//       console.log("aa");
//     }
//   }
// };

// let y = x.setAge(57);
// console.log(x.print.bind(this));

let nums = [5, 7, 7, 8, 8, 10];
let target = 18;
var searchRange = function(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      output.push(nums.indexOf(nums[i]));
    }
  }
  return output;
};
console.log(searchRange(nums, target));

// var foo = "bar";
// var foo = function bar() {
//   var foo = "baz";
//   console.log("bar method", foo);

//   function baz(foo) {
//     foo = "bam";
//     bam = "yay";
//     console.log("baz method");
//   }
//   baz();
// };

// console.log(foo);
// console.log(foo());
// // console.log(bar());
// // console.log(foo);
// console.log(bam);
// console.log(baz());

// var bar = "bar";
// function foo(str) {
//   eval(str);
//   console.log(str);
//   console.log(bar);
// }
// foo("var bar = 42;");

// (function(b) {
//   var foo = b;
//   console.log(foo);
// })(foo);
// console.log(foo);

var pplFactory = function(name, age) {
  var temp = {};
  temp.name = name;
  temp.age = age;

  temp.print = function() {
    console.log(name + age);
  };
  return temp;
};

var person1 = pplFactory("jj", 23);

var person = {
  name: "Deepa",
  age: "30",
  getName: function() {
    return this.name + "" + this.age;
  }
};

var fName = person.getName();
console.log(fName);

var person = {
  name: "Deepa",
  age: "30",
  getName: function() {
    return this.name + "" + this.age;
  },
  address: {
    street: "123 J street",
    city: "Fremont",
    state: "CAN"
  },
  isFromState: function(state) {
    if (state === this.address.state) {
      return this.name + "is from" + this.address.state;
    } else {
      return null;
    }
  }
};

console.log(person.isFromState("CAN"));

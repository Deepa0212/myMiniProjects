// let o = [1, 2, 5, 6, 4, 7, 8];

// (function missingNumber(o) {
//   let len = o.length;

//   o = o.sort((a, b) => a - b);
//   console.log(o);

//   let obj = {};

//   for (let key of o) {
//     obj[key] = true;
//   }

//   console.log(obj);
//   o = Object.keys(obj);
//   console.log(o);
//   console.log(Array.isArray(o));
//   // o = new Set(o);
//   // o = [...o];
//   // console.log(o);

//   for (let i = 0; i < len; i++) {
//     let j = i + 1;
//     if (o[i] != j) {
//       console.log(j);
//       return i;
//     }
//   }
//   console.log("No missing numbers");
// })(o);
// let missing = [];
// for (var i = 1; i <= len; i++) {
//   if (a.indexOf(i) == -1) {
//     missing.push(i);
//   }
// }
// console.log(missing);
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

Declaration();
expression();

function Declaration() {
  console.log("Finction declaration"); // Finction declaration
}

let expression = function() {
  console.log("Finction expression"); // Error: Cannot access 'expression' before initialization
};

var merge = function(nums1, m, nums2, n) {
  nums1.filter(nums1 => {
    return nums1 != 0;
  });
  //nums1.splice(m, nums1.length)
  console.log(nums1);
  for (let i = 0; i < n; i++) {
    // nums1.push(nums2[i])
    nums1 = [...nums1, nums2];
  }
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums1[i + 1]) {
      var temp = nums1[i];
      nums1[i] = nums1[i + 1];
      nums1[i + 1] = temp;
    }
  }
};
let nums1 = [4, 5, 6, 0, 0, 0];
let nums2 = [1, 2, 3];
let m = 3;
let n = 3;
merge(nums1, m, nums2, n);

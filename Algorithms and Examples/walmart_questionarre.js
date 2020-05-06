var newArr = [];
function mergeArray(a) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      mergeArray(a[i]);
    } else {
      newArr.push(a[i]);
    }
  }
  return newArr.join(".");
}
console.log(mergeArray(a));

function closureExample(a) {
  return function counter() {
    console.log("a", a);
    console.log("b", b);
  };
}

var count = closureExample();
count(5);
count(10);

// print 'ping' 'pong' alternatively every 100ms
function printPing() {
  console.log("ping");
}
function printPong() {
  console.log("pong");
}

setInterval(function() {
  let flag = false;

  if (flag == true) {
    console.log("ping");
    flag = false;
  } else {
    console.log("pong");
    flag = true;
  }
}, 100);

var foodItems = [
  { type: "indian", name: "biryani" },
  { type: "american", name: "burgers" },
  { type: "chinese", name: "chow mein" },
  { type: "indian", name: "paneer masala" }
];
// output : [{ type: "indian", name: ["biryani", "paneer masala"], count: 2 },
// { type: "american", name: ["burgers"], count: 1 },
// { type: "chinese", name: ["chow mein"], count:1 }]

function groupItems(foodItems) {
  let output = [];
  // for(let i=0; i<foodItems.length; i++){

  // }
  foodItems.map(food => {});
}

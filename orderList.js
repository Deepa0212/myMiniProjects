class Order {
  addToPendingOrderList = food => {
    let pendingList = document.querySelector("#pendingOrderList");
    let item = document.createElement("li");
    item.innerText = food;
    pendingList.appendChild(item);
    setTimeout(function() {
      myOrder.addToCompletedOrderList(food);
      pendingList.removeChild(item);
    }, 3000);
  };

  addToCompletedOrderList = food => {
    let completedList = document.querySelector("#completedOrderList");
    let item = document.createElement("li");
    item.innerText = food;
    completedList.appendChild(item);
  };
}
let myOrder = new Order();

// let foodItems = document.querySelectorAll(".list-item");
// foodItems.forEach(element => {
//   element.addEventListener("click", e => {
//     myOrder.addToPendingOrderList(e.target.innerText);
//   });
// });

let foodItems = document
  .querySelector("#menulist")
  .addEventListener("click", e => {
    console.log(e.target.innerText);
    myOrder.addToPendingOrderList(e.target.innerText);
  });

const x = {
  val: 2
};

const x1 = x => Object.assign({}, x, { val: x.val + 1 });
console.log(x1(x)); //{val: 3}

const x2 = x => Object.assign({}, x, { val: x.val * 2 });
console.log(x2(x)); //{val: 4}

console.log(x2(x)); //{val: 4}
console.log(x1(x2(x)).val); // 5
console.log(x1(x2(x))); //{val: 5}

const a = Object.freeze({
  foo: "Hello",
  bar: "world",
  baz: "!"
});

a.foo = "Goodbye";
console.log(a); // {   foo: "Hello",   bar: "world",   baz: "!" }

var axy = {
  a: 1,
  b: 2
};
const ax = Object.keys(axy);
console.log(ax); // ["a","b"]

let str = "hi";

let y = str
  .split("")
  .reverse()
  .join("");
console.log(y);

const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  }
};

obj.getA().getB();

Array.prototype.print = function() {
  this.map(e => console.log(e));
};

[11, 32, 45].print();

const objY = { a: { b: { c: 1 } } }; //  create a copy

let objCopy = JSON.parse(JSON.stringify(objY));
console.log(objCopy);

const a1 = [1, 2, 3, 4];
const b2 = [45, 6, 7, 8];

const c = [...a1, ...b2].sort((a1, b2) => a1 > b2);
console.log(c);

const clo = {
  x: 1,
  getX() {
    var that = this;
    const inner = function() {
      console.log(that.x);
    };
    inner();
  }
};
console.log(clo.getX()); // undefined

//---Example of looping through Arrays and Objects----
const myPenguin = {
  name: "Sparky the Wonder Penguin",
  origin: "This Modern World",
  author: "Tom Tomorrow",

  getDesc: function() {
    return (
      "My Penguin description" +
      "<br/>Name: " +
      this.name +
      "<br/>Origin: " +
      this.origin +
      "<br/>Author: " +
      this.author
    );
  }
};
myPenguin.canFly = true;
myPenguin.fly = function() {
  if (this.canFly === true) return console.log("I can fly too");
  else return console.log("No flying for me");
};
myPenguin.fly();
myPenguin.chirp = function() {
  console.log("CHIRP CHIRP! Is this what Penguin sounds like?", this.name);
};
myPenguin.sayHello = function() {
  console.log("Hello, I'm a penguin and my name is:" + this.name);
};
myPenguin.name = "Penguin McPenguinFace";
myPenguin.sayHello();
document.getElementById("practice").innerHTML = myPenguin.getDesc();

for (key in myPenguin) {
  console.log("properties :", key);
}
for (key in myPenguin) {
  console.log(myPenguin[key]);
}

myPenguin.favoriteFoods = ["fish", "fruits", "water"];

console.log(myPenguin.favoriteFoods[1]);
var firstFavFoods = "small Fish";
myPenguin.favoriteFoods[0] = firstFavFoods;
console.log(myPenguin.favoriteFoods);

myPenguin.favoriteFoods.push("ice cream");

console.log(myPenguin.favoriteFoods);
var n = myPenguin.favoriteFoods.length;
myPenguin.favoriteFoods[n - 1] = "pineapples";
console.log(myPenguin.favoriteFoods);

for (key of myPenguin.favoriteFoods) {
  console.log(key);
}

myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops"
};

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);
for (key in myPenguin.outfit) {
  if (key == "hat") {
    console.log(myPenguin.outfit[key]);
  }
}
myPenguin.outfit.accessory = "pocket-watch";
for (key in myPenguin.outfit) {
  if (key == "hat") {
    myPenguin.outfit[key] = "top hat";
    console.log(myPenguin.outfit);
  }
}

delete myPenguin.outfit.pants;
console.log(myPenguin.outfit);

for (key in myPenguin.outfit) {
  console.log(key, ":", myPenguin.outfit[key]);
}

console.log(myPenguin);

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: true,
  sayHello: function() {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
};

var penguins = [gunter, ramon, fred];
penguins.push(myPenguin);
console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello();
console.log(penguins[0]);

for (key in penguins) {
  console.log(penguins[key].name);
}

for (key in penguins) {
  document.getElementById("practice").innerHTML = penguins[key].sayHello();
}
for (key in penguins) {
  penguins[key].numberofFeet = 2;
}
console.log(penguins);

for (key in penguins) {
  if (penguins[key].canFly) console.log(penguins[key].name + "can fly");
}
let arr = [];
for (key in penguins) {
  if (penguins[key].canFly) {
    arr.push(penguins[key].name + "" + "can fly" + "<br />");
  }
  document.getElementById("practice").innerHTML = arr;
}
//------------------------------------------------

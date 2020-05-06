let arr = [12, 34, 56, 23, 31, 567, 34, 500, 456];
function greaterthan(element, index, array) {
  return element > 100;
}
let result = arr.filter(greaterthan);
console.log("Test Value : " + result);

var array = [12, 34, 56, 23, 31, 567, 34, 500, 456];
var r = array.filter(function(element, index, array) {
  return element > 100;
});
console.log("Test Value : " + r);
//----ES6 way

var array = [12, 34, 56, 23, 31, 567, 34, 500, 456];
var r = array.filter(element => {
  return element < 100;
});
console.log("Test Value : " + r);

var array = [12, 34, 56, 23, 31, 567, 34, 500, 456];
var r = array.find(element => {
  return element < 100;
});
console.log("Test Value : " + r);

var array = [12, 34, 56, 23, 31, 567, 34, 500, 456];
var r = array.map(element => {
  return (element = element + 0.1);
});
console.log("Test Value : " + r);

var array = [12, 34, 56, 23, 31, 567, 34, 500, 456];
var r = array.reduce(element => {
  return (element += element);
});
console.log("Test Value : " + r);

var array = [12, 34, 56, 23, 31, 567, 34, 500, 456];
var r = array.every(element => {
  return element > 400;
});
console.log("Test Value : " + r);
//checks if every elemnt in an array passes thru condition, returns true or false

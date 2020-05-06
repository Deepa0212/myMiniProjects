let o = [1, 2, 5, 6, 3, 4, 7, 8];

(function missingNumber(o) {
  let len = o.length;

  o = o.sort((a, b) => a - b);
  console.log(o);

  let obj = {};

  for (let key of o) {
    obj[key] = true;
  }

  console.log(obj);
  o = Object.keys(obj);
  console.log(o);
  console.log(Array.isArray(o));
  // o = new Set(o);
  // o = [...o];
  // console.log(o);

  for (let i = 0; i < len; i++) {
    let j = i + 1;
    if (o[i] != j) {
      console.log(j);
      return i;
    }
  }
  console.log("No missing numbers");
})(o);

let z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]; //1 number is missinng;
missingNumber;
function missingNumber(z) {
  let total = 0;
  console.log(z);
  //ideal total
  let min = z[0];
  let max = z[z.length - 1];

  let originalTotal = 0;
  let x = z.reduce((sumTotal, item) => sumTotal + item);
  console.log(x);

  while (min <= max) {
    originalTotal = originalTotal + min;
    min++;
  }
  console.log(originalTotal);

  for (let i = 0; i < z.length; i++) {
    total = total + z[i];
  }
  console.log(total);

  const missingNum = originalTotal - total;
  alert(missingNum);
}

<div class="calculator">
  <input type="text" id="result" class="calculator-screen" value="0" disabled />
  <div class="calculator-keys">
    <button type="button" class="operator" value="+">
      +
    </button>
    <button type="button" class="operator" value="-">
      -
    </button>
    <button type="button" class="operator" value="*">
      &times;
    </button>
    <button type="button" class="operator" value="/">
      &divide;
    </button>

    <button type="button" value="1">
      1
    </button>
    <button type="button" value="2">
      2
    </button>
    <button type="button" value="3">
      3
    </button>

    <button type="button" value="4">
      4
    </button>
    <button type="button" value="5">
      5
    </button>
    <button type="button" value="6">
      6
    </button>

    <button type="button" value="7">
      7
    </button>
    <button type="button" value="8">
      8
    </button>
    <button type="button" value="9">
      9
    </button>

    <button type="button" value="0">
      0
    </button>
    <button type="button" class="decimal function" value=".">
      .
    </button>
    <button type="button" class="all-clear function" value="clear">
      AC
    </button>

    <button type="button" class="equal-sign operator" value="=">
      =
    </button>
  </div>
</div>;
//-------------CSS--------------//
// .calculator {
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 400px;
// }
// .calculator-screen {
//   width: 100%;
//   font-size: 30px;
//   height: 65px;
//   border: none;
//   background-color: #252525;
//   color: #fff;
//   text-align: right;
//   padding-right: 20px;
//   padding-left: 10px;
// }
// .calculator-keys {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 2px;
//   padding: 20px;
// }
// button {
//   padding: 10px;
//   border-radius: 6px;
//   border: 1px solid #ddd;
//   font-size: 18px;
// }
// button:hover {
//   background-color: orchid;
//   color: white;
// }
// .all-clear {
//   background-color: lightcoral;
//   font: white;
// }
// .equal-sign {
//   background-color: lightskyblue;
//   color: #fff;
//   height: 100%;
//   grid-area: 2 / 4 / 6 / 5;
// }
//-------------Script------------------//
document.querySelectorAll(".calculator-keys button").forEach(e =>
  e.addEventListener("click", function() {
    var x = e.value;
    console.log("clicked", x);
    var y = x;
    if (x == "clear") {
      console.log("clear");
      document.getElementById("result").value = 0;
    } else {
      document.getElementById("result").value += x;
      var exp = document.getElementById("result").value;
      var y = eval(exp);
      document.getElementById("result").value = y;
    }
  })
);

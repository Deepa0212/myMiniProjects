[1,2,3,4,5].asyncPrint();


Array.prototype.ayncPrint = function() {
    for (let i = 0; i < this.length; i++) {
      var that = this;
      setTimeout(function() {
        console.log("Index: " + i + ", element: " + that[i]);
      }, 3000);
    }
  };

  // sum(2,3) //5
  //sum(2)(3) //5


//   sum = (a,b)=>{
//     return a+b ;
//   }

  // sum(2,3) //5
// sum(2)(3) // 5

function sum(a, b) {
    if (b == undefined) {
      return function(b) {
        return a + b;
      };
    }
    return a + b;
  }

  sum(1,2,3,4,5);//15

  function sum() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    return sum;
  }

  "deepa".repeatify(3);
  "deepa".toUpperCase();


  String.prototype.repeatify = function(times){
      for(let i=0; i<times; i++){
          console.log(this);
      }
  }

  "hello ".trim();
  String.prototype.trim = function(){

  }


  // Module Pattern in javascript

var person = {
    firstName: "Chetan",
    lastName: "Patil",
    getFirstName: function() {
      return this.firstName;
    }
  };
  
  //In code above any program can change the firstName, we need to implement module pattern and make firstName private
  
  function getPersonName() {
    var firstName = "Chetan";
    var lastName = "Patil";
    return {
      getFirstName: function() {
        return firstName;
      },
      getLatName: function() {
        return lastName;
      }
    };
  }
  
  var person = getPersonName();
  
  person.getFirstName(); //Chetan
  
  person.firstName; //undefined

  sayHello(){
      console.log(this);
  }

  sayHello();

    obj = {
        a:1,
        sayHello:function(){console.log(this)}
    }

    obj.a//1

    obj.sayHello();//obj

    //CAll and apply example
var monica = {
    name: "Monica Geller",
    total: 4000,

    
    deductMontlyFee: function(fee) {
      this.total = this.total - fee;
      return this.name + " remaining balance is " + this.total;
    }
  };
  
  let rachel = { name: "rachel", total: 5000 };
  
  console.log(monica.deductMontlyFee.call(rachel, 2000)); //3000

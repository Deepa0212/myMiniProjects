// Singleton Design Pattern
var singleton = (function() {
  var instance;

  function init() {
    var name;

    this.setName = function(name) {
      this.name = name;
    };

    this.getName = function() {
      return this.name;
    };

    return {
      setName: setName,
      getName: getName
    };
  }

  function getInstance() {
    if (!instance) {
      instance = init();
    }

    return instance;
  }

  return {
    getInstance: getInstance
  };
})();

var one = singleton.getInstance();
var two = singleton.getInstance();

//the two instance are same
alert(one == two); //true

console.log(one.setName("Akash"));
console.log(two.getName()); //"Akash"

// //Module Design Pattern

const myModule = (function() {
  const privateVar = "Hello World";

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();

myModule.publicMethod();

// Reveal Module Design Pattern

const revealModule = (function() {
  let name = "Mark";

  function getName() {
    console.log(name);
  }
  function setName(newName) {
    name = newName;
  }

  function tryaccess() {
    return getName();
  }

  return {
    getName: getName,
    setName: setName,
    tryaccess: tryaccess
  };
})();

revealModule.setName("Peter");
revealModule.getName();
revealModule.tryaccess();

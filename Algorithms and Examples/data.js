//Create a class to build a building

function Building(name, type, floors, address) {
  this.name = name;
  this.type = type;
  this.floors = floors;
  this.address = address;
}

Building.prototype.getAddress = function() {
  return this.address;
};

let myHouse = new Building(
  "somename",
  "independent",
  3,
  "314 hiden lake drive"
);

//myHouse//Building {name: "somename", type: "independent", floors: 3, address: "314 hiden lake drive"}

//Implement Stack in javascript without strings

// function Stack(){
//     this.storage = "";
// }

// Stack.prototype.push = function(val){
//     if(this.storage === ""){
//         this.storage = val;
//     }
//     else{
//         this.storage = this.storage + '-' +val;
//     }

// }

// Stack.prototype.pop = function(){
//     let storageArr = this.storage.split('-');
//     let val = storageArr.pop();;
//     this.storage = storageArr.join('-');//poha-upma-idli-
//     return val;
// }

// Stack.prototype.size = function(){
//     let storageArr = this.storage.split('-');
//     return storageArr.length - 1;
// }

// let myWeeklyMenu = new Stack();

// myWeeklyMenu.push('poha');
// myWeeklyMenu.push('upma');
// myWeeklyMenu.push('idli');
// myWeeklyMenu.push('dosa');

// myWeeklyMenu.pop();
// myWeeklyMenu.pop();

// implement stack with objects

function Stack(container) {
  this.container = container || Infinity;
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  const size = this.size();
  if (size < this.container) {
    this.storage[this.count] = value;
    let pushed = this.storage[this.count];
    this.count = this.count + 1;

    return pushed;
  }
  return "Maximum stack size exceeded";
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  this.count = this.count - 1;
  if (this.count > 0) {
    let popped = this.storage[this.count];
    delete this.storage[this.count];
    this.count = this.count - 1;
    return popped;
  }
};

let myStack = new Stack(10);

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

function Queue(container) {
  this.container = container;
  this.count = 0;
  this.storage = {};
  this.popIndex = 0;
}

Queue.prototype.put = function(value) {
  if (this.size() < this.container) {
    this.storage[this.count] = value;
    let queued = this.storage[this.count];
    this.count = this.count + 1;
    return queued;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    let popped = this.storage[this.popIndex];
    delete this.storage[this.popIndex];
    this.popIndex = this.popIndex + 1;
    return popped;
  }
};

myQue = new Queue(5);

myQue.put(1);
myQue.put(2);
myQue.put(3);
myQue.put(4);

myQue.dequeue();
myQue.dequeue();

//Find min value in a stack in a faster way
function Stack(container) {
  this.container = container || Infinity;
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  const size = this.size();
  if (size < this.container) {
    this.storage[this.count] = value;
    let pushed = this.storage[this.count];
    this.count = this.count + 1;

    return pushed;
  }
  return "Maximum stack size exceeded";
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  this.count = this.count - 1;
  if (this.count > 0) {
    let popped = this.storage[this.count];
    delete this.storage[this.count];
    this.count = this.count - 1;
    return popped;
  }
};

Stack.prototype.peep = function() {
  return this.storage[this.count - 1];
};

// [9,4,8,2];
function MinStack(container) {
  this.container = container;
  this.count = 0;
  this.storage = {};
  this._minStack = new Stack();
}
MinStack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

MinStack.prototype.push = function(value) {
  if (this.size() < this.container) {
    if (value > this._minStack.peep()) {
      this.storage[this.count++] = value;
    } else {
      this._minStack.push(value);
      this.storage[this.count++] = value;
    }
  }
};

MinStack.prototype.pop = function() {
  if (this.count > 0) {
    let popped = this.storage[--this.count];
    delete this.storage[this.count];
    if (popped === this._minStack.peep()) {
      this._minStack.pop();
    }
    return popped;
  }
};

MinStack.prototype.stackMin = function() {
  return this._minStack.peep();
};
//let arr4 = [9,4,3,6,8,2,5,9,0,1]

let testminStack = new MinStack(7);

testminStack.push(9);
testminStack.push(4);
testminStack.push(8);
testminStack.push(2);
testminStack.push(5);
testminStack.push(91);
testminStack.push(1);

//Create Linked list
function LinkedList() {
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.nextNode = null;
  };

  this.addLink = function(element) {
    var node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
  };

  this.removeLink = function(element) {
    var previousNode;
    var currentNode = head;
    if (element === head.element) {
      head = currentNode.nextNode;
      return element + " removed";
    } else {
      while (currentNode.element !== element) {
        currentNode = currentNode.nextNode;
        previousNode = currentNode;
      }

      previousNode.nextNode = currentNode.nextNode;
      return element + " removed";
    }
  };
}

var pets = new LinkedList();
pets.addLink("Dog");
pets.addLink("Cat");
pets.addLink("Rat");
pets.addLink("Fish");
pets.addLink("Lamb");

//N-ary tree implementation //

function Tree(value) {
  this.element = value;
  this.children = [];
}

Tree.prototype.add = function(element) {
  let child = new Tree(element);
  this.children.push(child);
  return child;
};

const tree = new Tree(1);
const branch1 = tree.add(2);
const branch2 = tree.add(3);
const branch3 = tree.add(4);

branch1.add(4).add(44);
branch1.add(5);

/**Create binary tree with insert and find */

binaryTree = function(element) {
  this.value = element;
  this.children = [];
};

binaryTree.prototype.insert = function(element) {
  const insertNode = new binaryTree(element);
  if (this.value < element) {
    if (this.children.length < 2) {
      this.children.push(insertNode);
    } else {
      this.children[1].insert(element);
    }
  } else {
    if (this.children.length < 2) {
      this.children.unshift(insertNode);
    } else {
      this.children[0].insert(element);
    }
  }

  return insertNode;
};

binaryTree.prototype.contains = function(element) {
  if (this.value === element) {
    return true;
  } else {
    if (this.children.length === 0) {
      return false;
    }
    if (this.value < element) {
      //10<3 5<3

      return this.children[1].contains(element);
    } else {
      return this.children[0].contains(element);
    }
  }
};

biTree = new binaryTree(10);

biTree.insert(15);
biTree.insert(5);
biTree.insert(3);
biTree.insert(2);
biTree.insert(20);
biTree.insert(16);
biTree.insert(1);
biTree.insert(0);

console.log(biTree.contains(5));
console.log(biTree.contains(1));
console.log(biTree.contains(3));

function BST(element) {
  this.value = element;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(element) {
  const insertNode = new BST(element);
  if (this.value < element) {
    if (this.right === null) {
      return (this.right = insertNode);
    } else {
      return this.right.insert(element);
    }
  } else {
    if (this.left === null) {
      return (this.left = insertNode);
    } else {
      return this.left.insert(element);
    }
  }

  return insertNode;
};

BST.prototype.contains = function(element) {
  if (this.value === element) {
    return true;
  }

  if (this.value < element) {
    if (!this.right) {
      if (this.right.value === element) {
        return true;
      } else {
        return this.right.contains(element);
      }
    } else {
      return false;
    }
  } else if (this.value > element) {
    if (this.left.value === element) {
      return true;
    } else {
      return this.left.contains(element);
    }
  }
  return false;
};

const bst = new BST(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(20);
bst.insert(16);
bst.insert(1);
bst.insert(0);

// bst.contains(10)
// bst.contains(5);
// bst.contains(15);
console.log(bst.contains(2));
// bst.contains(20);
// bst.contains(16);
// bst.contains(1);
// bst.contains(0);
bst.contains(3);

// Find a value in binary tree object

(function() {
  "use strict";

  // Every node has 0 or 2 children
  // left.value < value
  // right.value > value
  var binTree = {
    value: 15,
    left: {
      value: 10,
      left: {
        value: 8
      },
      right: {
        value: 12
      }
    },
    right: {
      value: 20,
      left: {
        value: 16
      },
      right: {
        value: 25
      }
    }
  };

  function findValue(currentNode, elementToSearch) {
    if (currentNode != null) {
      if (currentNode.value === elementToSearch) {
        return true;
      }

      if (currentNode.value > elementToSearch) {
        return findValue(currentNode.left, elementToSearch);
      } else {
        return findValue(currentNode.right, elementToSearch);
      }
    }
    return false;
    // console.log(value);
  }
  findValue(5, binTree);
})();

// Implement a hash table

function Hashtable(n) {
  //   this.storage = [0, 0, 0, [1]];
  this.storage = [];

  this.insert = function(str, value) {
    let index = this.hashFunc(str, n);

    if (!this.storage[index]) {
      let arr = [];
      arr.push([str, value]);
      this.storage[index] = arr;
    } else {
      this.storage[index].push([str, value]);
    }
  };

  this.locate = function(str) {
    let index = this.hashFunc(str, n);

    if (this.storage[index].length >= 1) {
      let nestedArray = this.storage[index];
      for (let i = 0; i < nestedArray.length; i++) {
        if (nestedArray[i][0] === str) {
          return nestedArray[i][1];
        }
      }
    }

    return false;
  };

  this.remove = function(value) {};
  this.hashFunc = function(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum = +str.charCodeAt(i) * 3;
    }
    return sum % n;
  };
}

var myHash = new Hashtable(5);
myHash.insert("Deepa", "Pattar");
myHash.insert("Minu", "Dandin");
myHash.insert("Rohan", "Patil");
myHash.insert("Dhruvi", "FNU");

console.log(myHash.locate("Deepa"));
console.log(myHash.locate("Minu"));
console.log(myHash.locate("Dhruvi"));
console.log(myHash.locate("Rohan"));

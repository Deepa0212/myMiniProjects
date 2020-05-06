/*
  Step 1 (warm-up):
    - Write a function called "range" that takes in an integer <int>, and returns an array (from 0 to <int>, inclusive)
*/

// range(4); // [0,1,2,3,4]


// function range(num){
//   let arr = [];
//   let counter = 0;
  
//   while(num >= 0){
//     arr.push(counter);
//     counter = counter + 1;
//     num  = num -1;
//   }
//   return arr;

// }

// var result = range(4);

// console.log(result);

/*
  Step 2 (warm-up, pt 2):
    - How would you improve this function to take two parameters, a minimum and a maximum, and return the range in between?
*/

// range(2,4); // [2,3,4]

// function range(start,num){
//   let arr = [];
//   let counter = start;
  
//   while(num >= start){
//     arr.push(counter);
//     counter = counter + 1;
//     num  = num -1;
//   }
//   return arr;

// }

// console.log(range(2,4))

/*
  Step 3:
    - Put this function aside, we'll need it later.
    - Write a function called "forEach", that does the same thing as a for loop, but executes a function on each item
*/

// 1
// 2
// 3

// // var func = console.log;

// function forEach(arr,func){
  
//   for(let i=0;i<arr.length;i++){
//     func(arr[i]);
//   }
// }

// // forEach([1,2,3], console.log); 
// // [1,2,3].forEach(console.log);

// Array.prototype.forEach = function(func){
//   for(let i=0;i<this.length;i++){
//     func(this[i]);
//   }
  
// }

// const arr = [1,2,3];
// arr.forEach(console.log);

/*
  Step 4:

    - Let's copy the function you have, and remove the arbitrary function requriement.  All we want to do is this new function is to print the items in the array.
    - Build a function on the array prototype to print the items in the array...
    - ...but here's the trick -- we want to do it asynchronously, instead of synchronously.
    - Go!
*/


// 1
// 2
// 3

Array.prototype.asyncPrintArray = function(){
  
  let arr = this;
  for(let i=0;i<arr.length;i++){
    
        setTimeout(function(){
          console.log(arr[i]);
        },50);
    
    
  }
  
  
}

const arr1 = [1,2,3];
arr1.asyncPrintArray();


// There is a chatbot object. Each chatbot object consists of a list of languages it speaks. 

// e.g. 

// chatbot.supported_languages = [‘english’, ‘korean’, ‘japanese’, ‘german’]

// GIven a list of bots, write a function that returns a language that all bots in the list supports. 

// e.g. 
// set[e,s]
// bots[0].supported_languages = [‘english’, ‘spanish’]
// bots[1].supported_languages = [‘english’, ‘korean’, ‘spanish’]

// console.log(getCommonLanguage(bots));
// [‘english’]


// // 1. bots is a list of bot
// // 2. Each bot has an attribute named ‘supported_languages’ which is a list of languages (e.g. [‘english’, ‘spanish’])

// function getCommonLanguages(bots) {
//    // implement here


// }


function Promise(){
  
  this.someFunc;
  this.ary = [];
  
  this.resolve= function(data){
    for(let i=0;i<this.arr.length;i++){
      let func = this.arr[i];
      func(data);
    }
    // return this;
    //this.someFunc(data);
  }
  
  this.done = function(callback) {
    this.ary.push(callback);
    this.someFunc = callback;
    return this.done;
  }

}


function ajaxCall() {
     var promise = new Promise();

     setTimeout(function(){
        promise.resolve({
            fake: 'data'
        });
     }, 1000)

     return promise;
 }

 (function(){
     var tweets = ajaxCall();

     // Part 1 (basic)
     tweets.done(function(tweets){
         console.log('part1', tweets);
     });

     // Part 2 (handle chaining and multiple callbacks)
     tweets.done(function(tweets){
         console.log('part 2-1', tweets);
     }).done(function(tweets){
         console.log('part 2-2', tweets);
     });

   
 })();


// https://codepen.io/anon/pen/dKeNpv?editors=0011


// https://codepen.io/team/lyftrecruiting/collab/7c32cba4012e7ed36d960ca9c69cabf7/
<div class="main">
  <div class="left">
    
  </div>
  <div class="right">
    
  </div>
  <div class="top">
    
  </div>
  <div class="bottom">
    
  </div>
  <div class="square"></div>
  
</div>


.main{
  background:#ddd;
  height:500px;
}

.square{
  width:100px;
  height:100px;
  background:pink;
  position:absolute;
}

.left,.right,.top,.bottom{
  width:30px;
  height:200px;
  position:absolute;
  background:red;
}

.left{
  left:0px;
}

.right{
  right:0px
}

.top{
  top:0px;
   width:500px;
  height:30px;
}

.bottom{
  bottom:0px;
  width:500px;
  height:30px;
}

// https://imgur.com/a/GGaAj

var currentPosition = 0;
var bottomPosition = 0;
$('.right').click(()=>{
  currentPosition = currentPosition + 120;
  
    $('.square').css({"left":currentPosition});
});

$('.bottom').click(()=>{
  bottomPosition = bottomPosition + 20;
  
    $('.square').css({"top":bottomPosition});
});


$('.left').click(()=>{
  currentPosition = currentPosition - 120;
  
    $('.square').css({"left":currentPosition});
});


$('.top').click(()=>{
  bottomPosition = bottomPosition - 20;
  
    $('.square').css({"top":bottomPosition});
});


//given a list of array objects items = [{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]

let items = [{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]
// print above array so that second object from an array is picked up  after first has finished executing.
function itemProcessionFunc(item,callback){
  setTimeout(function(){
    callback && callback();
    i++;
  },3000)
}


function process(items){
  var i=0;

  itemProcessionFunc(items[i],process(items[i]));
  console.log(items[i].id);
}

process(items);


// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.


Input: [6,5,4,4]
Output: true
Input: [1,3,2]
Output: false
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {

Let asc;
    for(let i=0;i < A.length;i++){
	if(A[i] >= A[i+1]){
		Asc = false;
		return ;
}
    }

for(let i=0;i < A.length;i++){
	if(asc){
if( A[i+1]  !== (A[i] + 1)){
			Return false;
}

}
	
	
    }
Return true;
};


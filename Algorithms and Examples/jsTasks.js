// http://plnkr.co/edit/sHk9JWZPTvW66nq6YVnR?p=preview


function delay(ms) {
    // your code
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve();
        },ms)
    });
  }
  
delay(3000).then(() => alert('runs after 3 seconds'));


// Implement circle anmation using callback and Promises

// 1 Step using callback
function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    }, 0);
  }
  
  //*********************************************************************************** */

function go() {
    showCircle(150, 150, 100).then(callback);
  }
  
  function callback(div){
      div.classList.add('message-ball');
      div.append("Hello, world!");
  }
  
  function showCircle(cx, cy, radius){
    return new Promise((resolve,reject)=>{
      let div = document.createElement('div');
      div.style.width = 0;
      div.style.height = 0;
      div.style.left = cx + 'px';
      div.style.top = cy + 'px';
      div.className = 'circle';
      document.body.append(div);
  
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
  
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);                                                        
    });
    
  }


  //****************************************************************************** */


//   Implement Dummy Promise in javascript
// https://itnext.io/broken-promises-a-barely-working-implementation-of-js-promises-ed7f99071f54

function myPromise(func){
    this.thencallbackArray = [];
    this.status = "pending";
    this.value = undefined;
    this.onCatch = undefined;

    this.resolve = function(){
        setTimeout(function(){
            return {data:"fakeData"}
        },1000)
    }
    this.then = function(callback){
        this.thencallbackArray.push(callback);
        return this;
    }
    this.catch = function(callback){
        this.onCatch = callback;
        return this;
    }

    func(this.resolver.bind(this),this.resolver.bind(this));

     function resolver(value){
        this.status = "resolved";
        this.value = value;
        for(let i=0;i<this.thencallbackArray.length;i++){
            let func = this.thencallbackArray[i];
            func(this.value);
        }
    }

    function rejector(value){
        this.status="rejected";
        this.value = value;
        if(typeof this.catchCallback(value) === 'function'){
            this.catchCallback(this.value);
        }

    }

}

//Dummy Implementation of fetch API let scall our method as getData


function getData(url){
    return new Promise(function(resolve,reject){
        const request = new XMLHttpRequest();
        request.open('GET',url);
        request.onload = function(response){
            if(status === 200){
                resolve(request.response);
            }else{
                reject(Error(request.statusText));
            }
        }
        request.error = function(){
            reject(Error('Network Error'));
        }
    })
}


getData("https://nerboda.github.io")
.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
}).then(function(result){
    console.log(result);
});

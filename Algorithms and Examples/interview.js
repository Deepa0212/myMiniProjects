<html>
  <head>
    <style>
      #container{
        font-family:monospace;
        font-weight:bold;
        color:black;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript">
      var cache = {};

      
            
    </script>
  </head>
  
  <body>
    
    <div id="container"></div>
    
    <script>
      
      
      
      //write a function to return fibinacci number from 10-40
      
      
      //Write a function to return 2nd largest number a given unsorted array of integers      
      
      
      $("#container").text("Hello");
      
      function fibonacci(start,end){
        var a  = 0;
        var b = 1;
        
        console.log(a);
        console.log(b);
        
        var f = a + b;
        
        for(var i =2; i< end;i++){
          f = a + b;//1
          a= b;//1
          b = f;//1
          
          if(i >start){
                console.log(f);
             }
        }
        
      }
      
      fibonacci(10,40);
      
      var arr = [3,4,55,77,8,9];
      
      //var largest = Math.apply(arr)
      
      
      function largest(arr){
        
        var n
        
        for(var i = 0; i < arr.lengh ; i++){
          var largest = 0;
          var index = 0;
          if(arr[i] > largest){
            largest = arr[i]
            index = i;
          }
        }
        
        //largest = arr.splice(index,1);
        return index;
      }
      

    </script>
    
  </body>
</html>



/*second interview*/


function Circle(radius){
     
     this.radius =radius;
     
}

Circle.prototype.area = function(){
    return this.radius*this.radius*3.14;
}

var areaCircle = new Circle(radius);

areaCircle.area();

var obj = {};
obj.radius = 12;

obj.area()


area.call(obj);


function sum(1,2,3,5,7,8)

'  hello  world  ' -> 'hello  world'



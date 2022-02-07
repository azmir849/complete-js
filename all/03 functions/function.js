/*** Definition***********************************************
 Function is a block of code designed to perform a particular task



Declarations

function functionName(parenthesis){
     Statements
}


 Example 1

  function sum(){
      var x = 10, y = 20;
     var total = x+y;
     console.log(total)
 }

 sum();

Example 2
 function sum(x,y){  //parameters
    var total = x+y;
    console.log(total)
 }

 sum() //NaN
 sum(10,20) //30
 sum(30,20) //50 *********************************/

/*********************************************Function expression
Function expression simply means create a function and put it into the variable. */

//Example
//  function sum(x,y){ 
//     //  var total = x+y;
//    return total = x+y; //return pass data into a variable
//  }

//  var sumResult =  sum(10,20)
//  console.log(sumResult)
/***
 Return keyword
 When js reaches a return statement then the function stop executing.

 Functions often compute a return value
 The return value 'returned' back to the caller */


 /*** Anonymous function
  Function without the name is called anonymous function   */
  
//  var sumResult = function(x,y){ 
//     return total = x+y; 
//   }
 
// var sum = sumResult(5,10)
//   console.log(sum)

//N.B : If we want to console.log data globally from a function then need to use return.
//      return ====> call the function,pass the arguments,keep them in a variable
 




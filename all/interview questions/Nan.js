//Interview questions
// What is an Nan

// NaN is a property of the global object.
// In The other words, it is a variable in global scope
// The initial value of a NaN is Not a number


var foodName = 'chickenFry';
var price = 140;

console.log(isNaN(foodName)); // true
console.log(isNaN(price)) // false

//By this NaN we can validate form data

// = is used for assigning values to a variable in JavaScript. 
// == is used for comparison between two variables irrespective of the datatype of variable. 
// === is used for comparision between two variables but this will check strict type, 
//     which means it will check datatype and compare two values.

//simply
// =     use for assign
// ==    use for comapre value
// ===   use for compare value and data type(ex. number or string or boolen)

0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false


//NaN Practice

console.log(NaN === NaN)        // false
console.log(Number.NaN === NaN) // false
console.log(isNaN(NaN))         // true
console.log(isNaN(Number.NaN))  // true
console.log(Number.isNaN(NaN))  // true

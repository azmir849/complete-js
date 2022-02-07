// Increment and Decrement operator
// Operator : x++ or ++x or x-- or --x


// Before start simply remember:
// x++ = only increment self /self-update base value 1 where its find
// x-- = only decrement self /self-update base value 1 where its find
// ++x = increment both /update both base value 1 where its find
// --x = decrement both /update both base value 1 where its find


// IF used postfix, with operator after operand (ex. x++),
// the increment operator increments and returns the value before incrementing.

// x++ or x-- (postfix)
// simply first self-update value 1 where its find
console.log('Postfix')

//ex.1
console.log('Increment ex1.x++')
var num = 15;
var newNum = num++;

console.log(num);   // 16
console.log(newNum) // 15

//ex.2
console.log('Increment ex2.x++')
var num = 15;
var newNum = num++ + 5; // num(15)+5

console.log(num);   // 16
console.log(newNum) // 15+5=20

//ex.1
console.log('Decrement ex1.x--')
var num = 15;
var newNum = num--;

console.log(num);   // 14
console.log(newNum) // 15

//ex.2
console.log('Decrement ex2.x--')
var num = 15;
var newNum = num-- + 5; // num(14)+5

console.log(num);   // 14
console.log(newNum) // 15+5=20


// IF used prefix, with operator before operand (ex. ++x),
// the increment operator increments and returns the value after incrementing.


// ++x (prefix)
// simply both-update value 1 where its find
console.log('Prefix')
//ex.1
console.log('Increment ex1.++x')
var num = 15;
var newNum = ++num;

console.log(num);   // 16
console.log(newNum) // 16

//ex.2
console.log('Increment ex2.++x')
var num = 15;
var newNum = ++num + 5; // num(16)+5

console.log(num);   // 16
console.log(newNum) // 16+5=21

//ex.1
console.log('Decrement ex1.--x')
var num = 15;
var newNum = --num;

console.log(num);   // 14
console.log(newNum) // 14

//ex.2
console.log('Decrement ex2.--x')
var num = 15;
var newNum = --num - 5; // num(14)-5

console.log(num);   // 14
console.log(newNum) // 14-5=9
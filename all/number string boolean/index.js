console.log(10 + '20') // 1020
console.log(9 - '5') // 4
console.log('Java' + 'Script') // JavaScript
console.log('Java' - 'Script') //NaN
console.log(' ' + ' ') // Nothing will see
console.log(true + true) // true=1 & false =0 so 1+1=2
console.log(true + false) // 1+0 = 1
console.log(false + true) // 0+1 = 1
console.log(false - true) // 0-1= -1

console.log(' ' + 0) // 0

// Strategy to remind (+) and (-) execution between Number and String

// IF (+) Signs then rule
//      conversions ===========>    results
//      number to string ======>    string concatenate

// IF (-) Signs then rule
//      conversions ===========>    results
//      string to number ======>    operation in numbers


console.log("1" +  1)  // "11"
console.log(1  + "1") // "11"
console.log(1  +  1)  // 2
console.log("a" +  1)  // a1

console.log("1" -  1)  // 0
console.log(1  - "1") // 0
console.log(1  -  1)  // 0
console.log("a" -  1)  // NaN

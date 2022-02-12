/*Spread operator for array*/

//Example-1
// const numbers=[1,2,3];
// const newNumbers =[...numbers,4,5,6]

// console.log(newNumbers)// Answer :[1,2,3,4,5,6]



//Example-2 without spread operator

// const numbers = [1,2,3]
// const newNumbers = [numbers,4,5,6]
// console.log(newNumbers) // Answer : [[1,2,3],4,5,6]

/*Spread operator for object*/

// const person =  {
//     name: 'ah'
// }

// const newPerson = {
//     ...person,
//     age:24
// }

// console.log(newPerson) //Answer: { name: 'ah', age: 24 }



/* rest for functions */

const filter = (...args) =>{
    return args.filter(el => el===1 )
}

console.log(filter(1,2,3)) // Answer : [1]
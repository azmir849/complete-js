// class person {
//     name = 'AH' //Property
//     call = ()=>{/*...*/} //Method
// }


//Usage

// const myPerson = new person ()
// myPerson.call()
// console.log(myPerson.name)

//Inheritance

//class Person extends Master 


//Practice -1

// class Person {
//    constructor(){
//        this.name= 'ah'
//    }

//    printMyname(){
//        console.log(this.name)
//    }
// }


// const person = new Person();
// person.printMyname()

//Practice -2

class Human{
    constructor(){
        this.gender = 'Male'
    }

    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor(){
        super() // if extends
        this.name = 'AH'
    }

    myname (){
        console.log(this.name)
    }
}

const person = new Person()
person.myname();
person.printGender();

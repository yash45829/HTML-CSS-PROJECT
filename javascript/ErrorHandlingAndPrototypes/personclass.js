//implementing person with default values 
// person class 
let person = class{
    constructor(name = "Unknown", age = 0){
       this.name = name
       this.age = age
    }
    getDetails(){
        return `Name: ${this.name} , Age: ${this.age}`
    }
}
// creating instance with assigning values 
let newPerson = new person("Karan" ,1000) // Name: Karan , Age: 1000
// creating instance with default values 
let newPersonTwo = new person()      // Name: Unknown, Age: 0

console.log(newPersonTwo.getDetails())
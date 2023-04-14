// creating a class calculator with static method add that takes two numbers as a arguement and returm their sum 
let calculator = class{
    constructor(numOne , numTwo){
        this.numOne = numOne
        this.numTwo = numTwo
    }
    static add(a,b){
        return a + b
    }
}
console.log(calculator.add(15,15))
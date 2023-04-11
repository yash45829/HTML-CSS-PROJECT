//calculator
let numOne = 2;  // first number decleration
let numTwo = 8;  // second number decleration
let mathOperator = "subtract" ;  //math operation to be performed



switch(mathOperator){
    
    case "subtract" : 
    console.log(`Difference of NumOne and NumTwo is ${numOne - numTwo}`)
    break ;

    case "add" : 
    console.log(`Addition of NumOne and NumTwo is ${numOne + numTwo}`)
    break ;

    case "divide" : 
    console.log(`Division of NumOne and NumTwo is ${numOne / numTwo}`)
    break ;

    case "multiply" : 
    console.log(`Multiplication of NumOne and NumTwo is ${numOne * numTwo}`)
    break ;

    default : 
    console.log("Invalid Operator.")
    
}
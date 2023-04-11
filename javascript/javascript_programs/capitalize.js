
//checking first letter of input name is capital or not 
// if not , then converting it to uppercase 

let userName = "bhupendra" // input name 
let uppercaseName = userName.toUpperCase();

//comparing first latter of input name and its uppercase version 
userName[0] == uppercaseName[0]? console.log(userName) : console.log(`${uppercaseName[0]}${userName.slice(1)}`)
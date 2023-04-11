// creating a function that take number array as input and remove all duplicate numbers and return a set 
// input number array (example)
let numArray = [ 1,2,3,4,5,6,7,2,23,4,5,2,3,1,2,2,1,1,22,2,1,1,1,1,4,6,3,5,2,52,4,2,]

// function decleration 
function onlyUniqueAllowed(inputArray){
let newSet = new Set()
inputArray.forEach(element => {
    newSet.add(element)
});
return newSet
}
let newNumArray = onlyUniqueAllowed(numArray)
console.log(newNumArray)
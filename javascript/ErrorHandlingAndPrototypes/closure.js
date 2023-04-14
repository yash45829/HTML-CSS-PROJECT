//creating function  that takes num arary and that return anotherfunction 
// another function take num as input to check wether it is present in number array or not 

function numberChecker(numArray){
 return (function (numToCheck){
    let containNum = false
    numArray.forEach(el=> {
        if(el === numToCheck){
           containNum = true
        }
    });
    return containNum
 })
}

let arr = [1,2,3,4,5,6]
let isContainNum = numberChecker(arr)  
console.log(isContainNum(1))//true 
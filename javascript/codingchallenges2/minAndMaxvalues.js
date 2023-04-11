//function to find min and max number from input array and returnig it in new object 

let numArray = [1,2,6,3,8,4,25,76,34,12,74,92,42,98]

// findNum is name of desired function 
function findNum(inputArray){
let maxNum = Math.max(...inputArray)
let minNum = Math.min(...inputArray)
return obj = {maxNum : maxNum, minNum : minNum}
}

console.log(findNum(numArray)) //output : { maxNum: 98, minNum: 1 }
// creating a function that num array as input and destructure first, second and last element of input array 
// and return these values in new array 
let numArray = [1,3,2,4,7,5,8,]
function accesNumbers(numArr){
let [a,b] = numArr
let c = numArr[numArr.length -1]
return [a,b,c] 
}

accesNumbers(numArray) // output : [1,3,8] for above example
//if you wish you can console
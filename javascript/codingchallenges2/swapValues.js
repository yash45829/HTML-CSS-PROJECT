// creating function that take two number as input and destructuring them in an array and then swping thier position 
// also returinig that array 
let varOne = 1 
let varTwo = 7 

function swap(x,y){
  let [a,b] = [...arguments]
  return  [a,b]= [b,a]  // output :  [b,a]

}

console.log(swap(varOne,varTwo))
// console it if you wish 
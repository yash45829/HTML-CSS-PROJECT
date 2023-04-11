// if reverse string of characters is required : e.split('')
// if reverse string of words is required : e.split(' ')

let input = "Hello I am yash kumar" // input string
// declaring function to reverse string 
function reverse(e){
  let text =   e.split(' ')
  console.log("Output:")
 console.log( text.reverse()) 
}
// calling function 
//function will execute after 2000 ms 
setTimeout(() => {
    reverse(input)
}, 2000);

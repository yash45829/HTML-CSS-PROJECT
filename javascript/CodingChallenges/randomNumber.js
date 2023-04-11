// program to generate a random number after a delay of 3 sec 
// also indication time left every sec until number is generated 
// and then printing that number

function randomNumber(timeout){
    // set time out method for generator random number
    setTimeout(() => {
    let num =  Math.random()
    console.log(num)
    if(typeof(num) === "number"){
     clearInterval(progress) 
    }
    }, timeout);

    // set time interval for progress indication 
    let i = 1 ;
    let progress = setInterval(() => {
    console.log(`Time left is : ${timeout - (i*1000) } ms`)
    i++
    }, 1000);
    }

 // calling function randomNumber
randomNumber(3000)

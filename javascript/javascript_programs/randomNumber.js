// declaring a self invokng arrow function that generates a random number between one to hundred .

(() => {
  let num =  Math.random() * 100;
   console.log(num.toFixed(0)) 
  })();
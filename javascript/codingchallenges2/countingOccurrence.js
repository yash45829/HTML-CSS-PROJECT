// creating function to couning words in given string and returning them in Map object 

let string = "pw skills is best institution to learn skills regarding career development like web development and android development pw is physics wallah by alakh pw is best pw is always listen students"

function wordCounter(inputString){
    // making array of words from given string 
    let array =  inputString.split(' ')
    let countObj = new Map()
    array.forEach((el,i) => {
    let count = 0 ;
    array.forEach((element,j)=>{
    if(el===element){
    count++
  }
  })
  return countObj.set(`${el}`, count)
});
console.log(countObj)
}

wordCounter(string)
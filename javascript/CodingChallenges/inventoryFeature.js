// example object 
let items = {
    cycle : 500 ,
    cap : 20 ,
    goggles : 50 ,
    marker : 80
}
function inrPrices(object){
let objectArray = Object.entries(object)
let newObject = {} ;
objectArray.map((el)=>{
    // creating newobject using map 
    newObject[`${el[0]}`]=  80 * el[1]
})
console.log(newObject)
}

inrPrices(items)


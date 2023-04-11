// creating function to get name and street property of given object 
// and returning them in new object 
// given object (example)
const person = {
    name : "Christopher",
    age : 46 ,
    address : {
        street : "Shankar Vihar Colony,Ram Ghat Road,Aligarh ." , 
        city : "Aligarh" ,
        state : "UttarPradesh"
    }
}

function getProperties(inputObject){
    let {name , address : {street : a}} = inputObject
    return {name : name , street : a}
}

getProperties(person)

//output:
// {
//     name: 'Christopher',
//     street: 'Shankar Vihar Colony,Ram Ghat Road,Aligarh .'
//   }
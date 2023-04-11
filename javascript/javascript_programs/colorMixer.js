let colorOne = "yellow";
let colorTwo = "blue";

// declaring function using switch case
function mixer(one , two){
    let key = one + two 
    console.log(key)
    switch(key){
        case "blueyellow" :
        case "yellowblue" :
        console.log("Resultant Color Combination is Green ") ;
        break ;
        case  "redblue" :
        case  "bluered" :
        console.log("Resultant Color Combination is Purple ") ;
        break ;
        case  "redyellow":
        case  "yellowred":
        console.log("Resultant Color Combination is Orange ") ;
        break ;
        default:
        console.log(`Invalid Color Combination`) ;
        break ;  
}
}
// calling function 
mixer(colorOne,colorTwo);



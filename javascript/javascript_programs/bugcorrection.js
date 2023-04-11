// doubling the quantity of entities in an array 


// array for input number of entities 
let itemsQuantity = [2,4,2,6,8,3,35,62,94,72,8,2, 9,6] 

function correctedArray(a){
    let arr = [];
    a.forEach((e,i )=> {
        arr[i] = e * 2 ;
    });
    console.log(arr)
}

correctedArray(itemsQuantity)
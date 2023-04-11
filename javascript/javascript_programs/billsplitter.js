// taking cost of each dish in array and no of persons sharing dishes .
// then finding total bill and cost per person 
let costPerDish =  [20,30,40,50,60,70]
let noOfPersons = 4

function bill(cost , persons){
     totalBill = 0;

     cost.forEach(el => {
     totalBill = totalBill + el ; 
     return totalBill ;
     });

    //  console.log(totalBill)
     costperPerson = totalBill / persons;
    //  console.log(costperPerson)
     let slip = { totalBill , costperPerson}
     return  slip // returning object
}
console.log(bill(costPerDish,noOfPersons))
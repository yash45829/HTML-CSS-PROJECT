// to calculate percentage of discount having original price and discounted price .
// percentage of discount is calculated upto two decimal places .

let originalPrice = 490; 
let discountPrice = 410; 


// arrow function to find discount percentage 
let discountPercentage = (oldPrice , newprice)=>{

  let discount = ((oldPrice-newprice)/oldPrice) *100 ;
  console.log(discount.toFixed(2));
  
}

discountPercentage(originalPrice,discountPrice);
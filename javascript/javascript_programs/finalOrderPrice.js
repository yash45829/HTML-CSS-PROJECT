// function to calculate final order price of items in Customer's cart 

// example customer cart
let customerCart = [
    {unitPrice : 20, quantity : 1} ,
    {unitPrice : 10, quantity : 6} ,
    {unitPrice : 70, quantity : 3} ,
    {unitPrice : 50, quantity : 7} ,
    {unitPrice : 20, quantity : 5} ,
]

 let finalprice = () => {
    let price = 0 ;
    customerCart.forEach((e) => { 
        return  price = price +  e.unitPrice * e.quantity
         
    })
    console.log(price)
 }
 finalprice(customerCart) // calling final price function to calculate final order price


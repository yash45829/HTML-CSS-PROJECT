// removing duplicate entities from array

// cart is array of items selected by users 
// new cart is array containing items only at once 

    
let cart = ["buds", "headphpones", "penstand",
			   "watch", "buds","headphpones" ,"watch" , "shoes"];
	
let newCart =  cart.filter((item,index) => cart.indexOf(item) === index)

console.log(newCart)



	
    


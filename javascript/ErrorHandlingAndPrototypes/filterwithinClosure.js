// creating a function that takes products array as input and return another function
//another function takes product category as arguement and 
// return product list as a new array with given category using filter method 

// ex product array 
let products = [
  { name: "Shirts", category: "clothes" },
  { name: "Pants", category: "clothes" },
  { name: "Hat", category: "accessories" },
  { name: "Sunglasses", category: "accessories" },
];

function filterWithCategory(productArray) {
    // return function 
  function filterFunc(productCategory) {
    let filterList = productArray.filter((el) => {
      if (el.category.includes(productCategory)){
        return el;
      }
    });
    return filterList;
  }
  return filterFunc;
}

console.log(filterWithCategory(products)("clothes"));

// creating a new array of books which are published after 2010 and making their author's name capatalize  from given array of books 

//given array of books 
let listOfBooks = [
  { name: "BookOne", authorName: "jaspreet", publishedYear: 2012 },
  { name: "BookTwo", authorName: "rampal", publishedYear: 2015 },
  { name: "BookThree", authorName: "manoj", publishedYear: 2009 },
  { name: "BookFour", authorName: "raman", publishedYear: 2014 },
  { name: "BookFive", authorName: "shajid", publishedYear: 2003 },
  { name: "BookSix", authorName: "vishal", publishedYear: 2019 },
  { name: "BookSeven", authorName: "rajesh", publishedYear: 2008 },
  { name: "BookEight", authorName: "biden", publishedYear: 2022 },
];

//filtering books which are published after 2010 with filter (hof)
let newListOfBooks =  listOfBooks.filter((el)=>{
if (el.publishedYear > 2010){
  return el
}
})

// filtered books with publishion year after 2010 but without capatalize author name 
// console.log(newListOfBooks) 

newListOfBooks.forEach((el)=>{
return el.authorName = el.authorName.toUpperCase
()
})
console.log(newListOfBooks) // books published after 2010 with capatalize author name 

// to create a function that takes string as a arguement and return equivalent number . 
// if string is not converted into number then return "Invalid input"
// handle this using try and catch method 

let givenString = "5235";

function convertNumToString(inputString) {
  let newString = Number(inputString);
  try {
    if (Number.isNaN(newString)) {
      throw new Error();
    } else {
    //   console.log(newString);
    return newString ; 
    }
  } catch (error) {
    // console.log("Invalid Input");
    return "Invalid Input"
    // console.log(error);
  } 
}
console.log(convertNumToString(givenString));

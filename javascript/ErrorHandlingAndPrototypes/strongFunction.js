//creating function that takes onject{property : name and age } as a arguement and print key value pair in a string format 
// if object does not contain any of property than return " invalid parameter type"

let person = {
  name: "Ram Singh",
  age: 45,
};

function getPerson(inpObj) {
  try {
    if (inpObj.name === undefined || inpObj.age === undefined) {
      throw new Error();
    } else {
      return `Name: ${inpObj.name} , Age : ${inpObj.age}`;
    }
  } catch (error) {
    return `Invalid Paramerter Type \n ${error}`;
  }
}
console.log(getPerson(arr));

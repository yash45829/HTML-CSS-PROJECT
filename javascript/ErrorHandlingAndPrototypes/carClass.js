// creating a class of car having properties (comapany ,model ,year) and method (getDescription)
// method return property in format "This is a 'year' 'comapany' 'model'
// creating a instance of class Car
// then calling getDescription method of Car instance

const Car = class {
  // constructor declaration
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }
  // method declaration
  getDescription() {
    return `This is a ${this.year}  ${this.company} ${this.model}`;
  }
};
// creating instance of Car
const newCar = new Car("yash", "yash6723", 2008);

// calling getDescription method of Car instance
console.log(newCar.getDescription());

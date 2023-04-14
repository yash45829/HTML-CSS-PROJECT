// creating a class of employee having properties (name ,position ,salary) and method (getSalary)
// method return salary
// creating a instance of class employee
// then calling getSalary method of employee instance

const employee = class {
    // constructor declaration
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
    // method declaration
    getSalary() {
    //   return this.salary;
    return newEmployee
    }
  };
  // creating instance of employee
  const newEmployee = new employee("Yash Kumar", "Web Developer", 1000000);
  
  // calling getSalary method of employee instance
  console.log(newEmployee.getSalary());
  
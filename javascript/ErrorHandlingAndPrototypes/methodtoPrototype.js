// creating a object prototype of student - class
// creating a method and assign it as prototype to object prototype of student

let Student = class {
  constructor(name) {
    this.name = name;
  }
};

Student.prototype.printDetails = function () {
  console.log(`Hello , my name is ${this.name}`);
};
// creating instance of student
let newStudent = new Student("Mithun");

console.log(newStudent.printDetails());

// Question 1
// Datatypes in javascript
// 1> Number :
//   i> integer
let intNum = 74;
//   ii>Float
let floatNum = 83.74367;
//   iii>Infinity
let infiNum = Infinity;
// 2> String
let stringName = " mystring";
// 3>Boolean
let condition = true;
let condition2 = false;
// 4>null
let variable = null;
// 5>undefined
let variable2 = undefined;
// 6>Symbol
let symboltype = Symbol("yash");
// 7>Object
//   i>Array
let arr = ["Ram", "Shyam", "Bharat", "India", 1, 2, 3, 4, 6, 7];
let array = new Array(
  1,
  23,
  4,
  5,
  6,
  7,
  "hello",
  "India",
  "Shivam",
  "Indonesia"
);
//   ii>Object
let obj = {
  firstName: "Yash",
  lastName: "Kumar",
  batch: "Btech",
  roll: 18,
};
let object = new Object();
object.firstName = "vishal";
object.lastName = "singh";
object.batch = "Btech";
object.roll = 17;
// 8>BigInt
let bignum = 7324992394n;

/******************************************/

// Question 2
// Array of ten products
let arrOfTen = [
  "Keyboard",
  "Latop",
  "Mobile",
  " smartTv",
  "earbud",
  "digitalPen",
  "charger",
  "Watch",
  "lenses",
  "Notebook",
];
/******************************************/

//Question 3
// object of 5 students
let studentData = {
  1: "Omar",
  2: "Abdul",
  3: "vishal",
  4: "Khalid",
  5: "Shayam",
};
/**********************************/
//Question 4
// Variables and TypeOF

// 1> Number :
//   i> integer
let var1 = 28;
console.log(typeof var1);
//   ii>Float
let var2 = 83.74367;
console.log(typeof var2);

//   iii>Infinity
let var3 = Infinity;
console.log(typeof var3);

// 2> String
let var4 = " mystring";
console.log(typeof var4);

// 3>Boolean
let var5 = true;
console.log(typeof var5);

let var6 = false;
console.log(typeof var6);

// 4>null
let var7 = null;
console.log(typeof var7);

// 5>undefined
let var8 = undefined;
console.log(typeof var8);

// 6>Symbol
let var9 = Symbol("yash");
console.log(typeof var9);

// 7>Object
//   i>Array
let var10 = ["Ram", "Shyam", "Bharat", "India", 1, 2, 3, 4, 6, 7];
console.log(typeof var10);

let var11 = new Array(
  1,
  23,
  4,
  5,
  6,
  7,
  "hello",
  "India",
  "Shivam",
  "Indonesia"
);
console.log(typeof var11);

//   ii>Object
let var12 = {
  firstName: "Yash",
  lastName: "Kumar",
  batch: "Btech",
  roll: 18,
};
console.log(typeof var12);
// Alternate way
let var13 = new Object();
object.firstName = "vishal";
object.lastName = "singh";
object.batch = "Btech";
object.roll = 17;
console.log(typeof var13);

// 8>BigInt
let var14 = 7324992394n;
console.log(typeof var14);

// 4(b)
// two valid variables
let studentName = "Ravikant Sharma";
let tomperdetected = true;

// invalid variables
// let 1topper = "ravikant Sharma"   // OUTPUT : syntaxError :Invalid or unexpected token
// let var = 18;                     // OUTPUT : syntaxError :Unexpected token 'var'

/****************************************************/
// Question 5
// Operators

let number = 8;
console.log(`${number} * 1 = ${number * 1}`);
console.log(`${number} * 2 = ${number * 2}`);
console.log(`${number} * 3 = ${number * 3}`);
console.log(`${number} * 4 = ${number * 4}`);
console.log(`${number} * 5 = ${number * 5}`);
console.log(`${number} * 6 = ${number * 6}`);
console.log(`${number} * 7 = ${number * 7}`);
console.log(`${number} * 8 = ${number * 8}`);
console.log(`${number} * 9 = ${number * 9}`);
console.log(`${number} * 10 = ${number * 10}`);
/*
8 * 1 = 8
8 * 2 = 16
8 * 3 = 24
8 * 4 = 32
8 * 5 = 40
8 * 6 = 48
8 * 7 = 56
8 * 8 = 64
8 * 9 = 72
8 * 10 = 80
*/
/***********************************/
// 5(b)
let num1 = 15;
let num2 = 7;

// Addition (+)
console.log(`The addition of num1 and num2 is ${num1 + num2}`);
// Subractor (-)
console.log(`The Subractor of num1 and num2 is ${num1 - num2}`);
// Multiplication(*)
console.log(`The Multiplication of num1 and num2 is ${num1 * num2}`);
// Division (/)
console.log(`The Division of num1 and num2 is ${num1 / num2}`);
// Modulus(%):Remainder
console.log(`The Modulus of num1 and num2 is ${num1 % num2}`);
// Exponentiation(**): Raising power
console.log(`The Exponential of num1 and num2 is ${num1 ** num2}`);

// OUTPUT: The addition of num1 and num2 is 22
// OUTPUT: The Subractor of num1 and num2 is 8
// OUTPUT: The Multiplication of num1 and num2 is 105
// OUTPUT: The Division of num1 and num2 is 2.OUTPUT: 142857142857143
// OUTPUT: The Modulus of num1 and num2 is 1
// OUTPUT: The Exponential of num1 and num2 is 170859375

/*************************/
// 5(c)

let length = 12;
let width = 26;

let perimeterOfRectangle = 2 * (length + width);
console.log(
  `The perimeter of rectangle having width : ${width} and length : ${length} is ${perimeterOfRectangle}`
);
// OUTPUT : The perimeter of rectangle having width : 26 and length : 12 is 76
/***********************************/
// 5(d)
// Equal
let numvar1 = 18;
let numvar2 = 18;
console.log(numvar1 == numvar2); // OUTPUT : true
let numvar3 = 18;
let numvar4 = 62;
console.log(numvar3 == numvar4); // OUTPUT : false
// Not Equal
let numvar5 = 18;
let numvar6 = 18;
console.log(numvar5 != numvar6); // OUTPUT : false
let numvar7 = 52;
let numvar8 = 37;
console.log(numvar7 != numvar8); // OUTPUT : true
// Strictly Equal
let numvar9 = 28;
let numvar10 = 28;
console.log(numvar9 === numvar10); // OUTPUT : true
let numvar11 = 18;
let numvar12 = "18";
console.log(numvar11 === numvar12); // OUTPUT : false
// Strictly Not Equal
let numvar13 = 18;
let numvar14 = 18;
console.log(numvar13 !== numvar14); // OUTPUT : false
let numvar15 = 18;
let numvar16 = "18";
console.log(numvar15 !== numvar16); // OUTPUT : true
// Greater Than
let numvar17 = 27;
let numvar18 = 18;
console.log(numvar17 > numvar18); // OUTPUT : true
let numvar19 = 18;
let numvar20 = 18;
console.log(numvar19 > numvar20); // OUTPUT : false
// Greater Than or equal to
let numvar21 = 18;
let numvar22 = 18;
console.log(numvar21 >= numvar22); // OUTPUT : true
let numvar23 = 18;
let numvar24 = 45;
console.log(numvar23 >= numvar24); // OUTPUT : false
// lesser than
let numvar25 = 15;
let numvar26 = 18;
console.log(numvar25 < numvar26); // OUTPUT : true
let numvar27 = 18;
let numvar28 = 18;
console.log(numvar27 < numvar28); // OUTPUT : false
// lesser than or equal to
let numvar29 = 18;
let numvar30 = 18;
console.log(numvar29 <= numvar30); // OUTPUT : true
let numvar31 = 74;
let numvar32 = 18;
console.log(numvar31 <= numvar32); // OUTPUT : false

/*********************************************/
// Question 6
// If , if - else , if-else-if

// 6(a)
let trafficLight = "orange";

if (trafficLight === "red") {
  console.log("Vehicals must Stop.");
} else if (trafficLight === "orange") {
  console.log("Vehicals must wait for light change to green.");
} else if (trafficLight === "green") {
  console.log("Vehicals may go ");
} else {
  console.log("Invalid traffic light");
}
/*****************************/
// 6(b)

let number1 = 85;
let number2 = 64;

if (number1 > number2) {
  console.log("number1 is greater than number2 .");
} else if (number1 < number2) {
  console.log("number1 is lesser than number2 .");
} else {
  console.log("number1 and number2 are equal.");
}

/*************************/
// 6(c)
let inputnum = 15;
if (inputnum % 3 == 0 && inputnum % 5 == 0) {
  console.log("FizzBuzz");
} else if (inputnum % 5 == 0) {
  console.log("Buzz");
} else if (inputnum % 3 == 0) {
  console.log("Fizz");
} else {
  console.log("number not divisible either by 3 or  by 5 .");
}

/***************************/

// Question 7
// Switch case
// 7(a)
let day = "Friday";

switch (day) {
  case "Monday":
    console.log("There are 5 days until the weekend.");
    break;
  case "Tuesday":
    console.log("There are 4 days until the weekend.");
    break;
  case "Wednesday":
    console.log("There are 3 days until the weekend.");
    break;
  case "Thrusday":
    console.log("There are 2 days until the weekend.");
    break;
  case "Friday":
    console.log("There are 1 day until the weekend.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("There are 0 days until the weekend.");
    break;
  default:
    console.log("Invalid input");
    break;
}

/**********************************/
// 7(b)

let monthnum = 6;

switch (monthnum) {
  case 1:
    console.log("The month is January");
    break;
  case 2:
    console.log("The month is Febuary");
    break;
  case 3:
    console.log("The month is March");
    break;
  case 4:
    console.log("The month is April");
    break;
  case 5:
    console.log("The month is May");
    break;
  case 6:
    console.log("The month is June");
    break;
  case 7:
    console.log("The month is July");
    break;
  case 8:
    console.log("The month is August");
    break;
  case 9:
    console.log("The month is September");
    break;
  case 10:
    console.log("The month is October");
    break;
  case 11:
    console.log("The month is November");
    break;
  case 12:
    console.log("The month is December");
    break;
  default:
    console.log("invalid number of month");
}

/****************************/
// Question 8
// Ternary conditions
// 8(a)
// condition ? true : false ;
const ternaryInputNum = 83;
ternaryInputNum == 0
  ? console.log("Input is zero")
  : ternaryInputNum > 0
  ? console.log("Input is positive")
  : console.log("Input is negative");

// 8(b)
let ternaryNum1 = 74;
let ternaryNum2 = 49;

ternaryNum1 > ternaryNum2
  ? console.log(`${ternaryNum1} is greater than ${ternaryNum2}.`)
  : ternaryNum1 < ternaryNum2
  ? console.log(`${ternaryNum1} is lesser than ${ternaryNum2}.`)
  : console.log(`${ternaryNum1} is equal to ${ternaryNum2}.`);

/***********************/

// Question 9
// Loops
// 9(a)
let tableNum = 82;
for (let i = 1; i <= 10; i++) {
  console.log(`${tableNum} * ${i} = ${i * tableNum}`);
}
// OUTPUT :
// 82 * 1 = 82
// 82 * 2 = 164
// 82 * 3 = 246
// 82 * 4 = 328
// 82 * 5 = 410
// 82 * 6 = 492
// 82 * 7 = 574
// 82 * 8 = 656
// 82 * 9 = 738
// 82 * 10 = 820

// 9(b)
let findNum = 8;
for (let j = 2; j <= findNum; j = j + 2) {
  console.log(j);
}
// OUTPUT :
// 2
// 4
// 6
// 8

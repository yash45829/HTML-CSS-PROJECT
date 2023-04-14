// 1. creating user class with name and password
//2. declaring getter method that return password in star format
//3. declaring setter method that set password to input password if it contain at least 8 characters , one uppercase letter and one number

//class
let user = class {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  //  declaring getter
  getter() {
    let text = this.password.split("");
    let star = "";
    text.forEach((element) => {
      star = star + "*";
    });
    return star;
  }
  // declaring setter
  setter(password) {
    let passwordtext = password.split("");
    // required conditions
    let isPasswordLengthEight = false;
    let isContainCap = false;
    let isContainNum = false;
    // 1. contain at least 8 characters
    if (passwordtext.length >= 8) {
      isPasswordLengthEight = true;
    }
    passwordtext.forEach((el) => {
      // 2. contain at leasst one uppercase letter
      if (/[A-Z]/.test(el)) {
        isContainCap = true;
      }
      // 3. contain at leasst one number
      if (/[0-9]/.test(el)) {
        isContainNum = true;
      }
    });
    // checking conditions and returning result
    if (
      isContainCap === true &&
      isContainNum === true &&
      isPasswordLengthEight === true
    ) {
      this.password = password;
      return `New Password successfully applied`;
    } else {
      return `Password must be at least 8 characters long and contain at least one number and one uppercase letter`;
    }
  }
};

// creating instance of user
let newuser = new user("yash", "passWord12345");
// calling getter method
console.log(newuser.getter()); //output : *************
// calling setter method
console.log(newuser.setter("passWord12345678"));
//if password is valid , output : New Password successfully applied

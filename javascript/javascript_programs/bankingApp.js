// creating object methods for updating balance on depositng or withdrawing money 
// methods are deposit and withdraw 
// also checking name of customer as id 

// customer object 
let customer = {
  name: "abhinav",
  currentBalance: 560,


// deposit method 
  deposit: function (id, money) {
    let newmoney = this.currentBalance;
    if (id == this.name) {
      newmoney = newmoney + money;
      return (this.currentBalance = newmoney);
    } else {
      console.log("account does not exist");
    }
  },

  // withdraw method 
  withdraw: function (id, money) {
    let newmoney = this.currentBalance;
    if (id == this.name) {
      newmoney = newmoney - money;
      return (this.currentBalance = newmoney);
    } else {
      console.log("account does not exist");
    }
  },
};

// customer.deposit("abhinav",500); // example
// customer.withdraw("abhinav", 200); //example

console.log(customer);


class Bankaccount {
    customerName;
    accountNumber = Date.now();
    balance = 0;
  
    constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.accountNumber = Date.now();
      this.balance = balance;
    }
  
    deposit(amount){
       this.balance += amount
    }
  
    withdraw(amount){
      this.balance -= amount
   }
  }
  

  class currentaccount extends Bankaccount{
     transitionlimit = 50000;

     constructor (customerName, balance = 0){
         super(customerName, balance = 0) 
     }

     TakeBusinessaccount(amount){
        console.log("Taking business Loan" +amount)
     }
  }


class savingaccount extends Bankaccount{
    transitionlimit = 5000;

    constructor (customerName, balance = 0){
        super(customerName, balance = 0) 
    }

    TakePersonalLoan(amount){
       console.log("Taking personal Loan", +amount)
    }
 }

//   const account = new Bankaccount("monesh", 1000);
//   account.deposit(4000);
//   account.withdraw(1000)

  const account = new savingaccount("monesh", 1000);
  account.TakePersonalLoan(4000);
  console.log(account);


  


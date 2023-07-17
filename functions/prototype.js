
// prototype is use to reduce to memory space bt functions methods

function Bankaccount(customerName,balance=0){
    //properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount){
    //     this.balance += amount;
    // }

    // this.widraw = (amount) => {
    //     this.balance -= amount;
    // }
}

let monikaaccount = new Bankaccount("monika",1000)

Bankaccount.prototype.deposit = function (amount){
    this.balance += amount;
}

Bankaccount.prototype.widraw = (amount) => {
    this.balance -= amount;
}

monikaaccount.deposit(2000)
monikaaccount.widraw(1000)

console.log(monikaaccount)


function Bankaccount(customerName,balance=0){
    //properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount){
        this.balance += amount;
    }

    this.widraw = (amount) => {
        this.balance -= amount;
    }
}

// let monikaaccount = new Bankaccount("monika",1000)//create new keyword // create new memory 
// let lokeshaccount = new Bankaccount("lokesh")
// lokeshaccount.deposit(5000);
// lokeshaccount.widraw(1000);

// console.log(lokeshaccount);

// =======================================================

const accounts = []
let accountform = document.getElementById("accountform");
let username = document.getElementById("userAccount");
let accountbalance = document.getElementById("balance");

accountform.addEventListener('submit',(e)=>{
   e.preventDefault();
   let monika = new Bankaccount(username.value,+accountbalance.value)
   accounts.push(monika)
   console.log(monika);
})

let depositform = document.getElementById("depositeform");
let AccountNumber = document.getElementById("depositaccount");
let amount = document.getElementById("balanceaccount");

depositform.addEventListener('submit',(e)=>{
    e.preventDefault();
   const account = accounts.find((account)=>account.accountNumber === +AccountNumber.value)
   account.deposit(+amount.value)
   console.log(account)
 })
 

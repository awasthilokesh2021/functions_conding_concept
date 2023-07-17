// clousers
// function sum(a){
//     var c=10;
//      return function (b){
//          return a+b+c;
//      }
// }

// var res = sum(2);
// console.log(res(4));

// var sum = function (a,b,c){
//     return function (){
//         return a+b+c;
//     }
// }

// var store = sum(1,2,3)
// console.log(store());

// extra call function
// function multiply(x,y){
//     return x*y
// }

// var result = multiply(2,3,4)
// console.log(result);

// let a=10;
// function sum(){
//     return a;
// }
// a=20;
//  var res = sum()
//  console.log(res);

// another function
//  var b=30;
//  function rs(){
//     var b=20;
//     return b;
//  }
//   b=10;

//   var s = rs()
//   console.log(s);

// another canfusing function

// var a= 20;
// function sum(){
//     var a=10
//     return a;
// }

// console.log(a);
// let r = sum()
// console.log(r);

// var a = 10;
// var a = 20;
// console.log(a);

// let b=10;
// let b=20;
// console.log(b);

// const c=10;
// const c= 20;
// console.log(c);

// let a= 10;
// a=20;
// console.log(a);

// let a=10;
// let b = 20;

// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);

// let data = ["a","b","c"]
// let [x,y,z] = data;
// console.log(x,y,z);

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// setTimeout(()=>{
//     console.log(1000);
// },1000)

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(2)
//     },3000)
// })

// p1
// .then((result)=> console.log(result))
// .catch((err)=>console.log(err))

// setTimeout(()=>{
//     console.log(10);
// },1000)

// setTimeout(()=>{
//     console.log(1000);
// },2000)

// const p1 = new Promise((resolve, reject) => {
//         resolve(2)
// })

// p1
// .then((result)=> console.log(result))
// .catch((err)=>console.log(err))

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(2);
//     },1000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(3)
//     },2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(4)
//     },2000)
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// promise .all condition is fulified then all promise are resolved and if any one promise is reject then promise returned reject value

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(2);
//     },3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(3)
//     },2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(4)
//     },2000)
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// promise.all and promise.any is opposite to each other . promise.any is fullfiled when promise are all reject.
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(2);
//     },3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(3)
//     },2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(4)
//     },1000)
// })

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// promise.race()

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(2);
//     },3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(3)
//     },10)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(4)
//     },1000)
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(er r);
// })

// promise.allsattled()

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(2);
//     },3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//          resolve(3)
//     },2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(4)
//     },1000)
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// object data entry in empty string

// let item = [
//     {name:"lokesh",age:28,id:1},
//     {name:"monika",age:26,id:2},
//     {name:"monesh",age:5,id:3}
// ]

// function Submit(){
//     let data = document.getElementById("data-in")
// var newItem = "";

// for(var k of item){
//     newItem += `${k.name} ${k.age} ${k.id} </br>`
// }
// data.innerHTML = newItem;

// renderHtml();
// }

// // retrive data to local storage

// callbacks

// function makecoffee(cb){
//     setTimeout(()=>{
//         const coffeeCup = 'Delicius Coffee';
//         cb(coffeeCup)
//     },10)
// }

// function enjoyCoffee(coffee){
//     console.log("Coffee is ready : " , coffee);
// }

// makecoffee(enjoyCoffee)

// function SweatShop(cb){
//     setTimeout(()=>{
//         const sweat = 'Badam Halwa';
//         cb(sweat)
//     },1000)
// }

// function Student(data){
//    console.log("Student wait for :" , data);
// }

// SweatShop(Student)

// async function sum(){
//     await console.log("d");
//     console.log("a");
//     await console.log("b");
//     console.log("f");
// }
// console.log("g");
// sum()
// console.log("e");

// function constructor

// const sum = new Function('a', 'b', 'return a + b');
// console.log(sum(2, 6));

// const multiply = new Function('c','d','return c*d')
// console.log(multiply(2,6));

// function declaration-:The function declaration creates a binding of a new function to a given name.

// function calcRectArea(width, height) {
//     return width * height;
//   }
//   console.log(calcRectArea(5, 6));

// function expression-: The function keyword can be used to define a function inside an expression.

// const getRectArea = function(width, height) {
//     return width * height;
//   };
//   console.log(getRectArea(3, 4));

// function bind-: With the bind() method, an object can borrow a method from another object.

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }

//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }

//   let fullName = person.fullName.bind(member);

// let a = 10;

// function sumVAr() {
//   console.log(a);
// }
// a = 20;
// console.log(a);
// sumVAr();

// hoisting 

// var a;
// console.log(a);
// a=10;

// let a;
// console.log(a);
// a=10;

// let arr = [1,2,3,4,5,6]

// let result =  arr.map((item) => {
//      return item*2
//  })
//  console.log(result)

// let res = arr.forEach((set)=>{
//     return set*2
// })
// console.log(res)



const arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

// function printbyMap(){
//     arr.map((item)=>{
//         console.log(item.profession);
//     })
// }

// let afunction printbyMap(){
//     arr.map((key,value)=>{
//      return key.profession.developer
//     })
// }

// function printbyforeach(){
//     arr.forEach((arr)=>{
//         console.log(arr);
//     })
// }

//===============================================================

//lexcial environment

// let x=10;
// function foo(){
//     console.log(x);
//     var x=5;
//     console.log(x)
// }

// foo();

// let y=10;
// function bar(){
//     console.log(y)
// }
// bar()

//========================
// let a=10
// let b=101

// function foobar(){
//    console.log(b); // b value is return undefined beacuse of hoisting
//     var b=20;
//     two();
//     function two(){
//       var c=30;
//       console.log(a+b+c)
//     }
// }

// foobar()

//===============================================================

// let a=10
// let b=101

// function foobar(){
//     var b=20;
//     two();
//     function two(){
//       var c=30;
//       console.log(a+b+c)
//     }
// }
// foobar()

//=================================================================

// function sum(){
//     var a=10;
// }
// sum();

//  let arr1 = [1,2,3,4,5,6]
//  console.log(arr1.slice(3,3));
//  arr1.splice(3,3)
//  console.log(arr1);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(3, 3)
// console.log(fruits); // splice used to add or remove element // At position 2, remove 2 items: 

// question related to indexes
// let a = [1,2,3]
// a[5] = 10;
// console.log(a.length);

// let b= [2,3,4,5,6]
// b[10] = 10;
// console.log(b.length);
// console.log(b);
//============================
// b.push(3)
// console.log(b);
// console.log(b.length);

// //========================
// function Add(a,b){
//   return a+b;
// }
// let res = Add(2)+Add(2,3)
// console.log(res)
//=====================================

let arr1 = [1,2,3,4,5,6]
//arr1.pop(6)
//arr1.shift()
//arr1.unshift(1)
//console.log(arr1.toString());

//======================================

// Git Repocietry 








 


  
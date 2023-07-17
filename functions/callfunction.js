//Function Parameters and Arguments

// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.
//In JavaScript all functions are object methods.

// function call()

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   let art = person.fullName();  
//   console.log(art)


// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// let art1 = person.fullName.call(person1);
// let art2 = person.fullName.call(person2);

// console.log(art1);
// console.log(art2)

//function call as an argument

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// } 

// let art = person.fullName.call(person1, "Oslo", "Norway");
// console.log(art)



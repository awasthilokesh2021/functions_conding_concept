// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.apply(person1, ["Oslo", "Norway"]);
  
  
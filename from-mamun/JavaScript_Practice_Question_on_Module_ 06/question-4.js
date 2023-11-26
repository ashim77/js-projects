// Create a constructor function Person to create person objects with properties like name, age, and gender. Add a prototype method greet to the Person constructor that returns a greeting message like "Hello, my name is [name] and I am [age] years old.

// Example:
// const person = new Person("Alice", 30, "female");
// console.log(person.greet());

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

const person = new Person("Alice", 30, "female");

console.log(person.greet());
// Literal objects
const person = {
      name: 'John',
      age: 30,
      city: 'New York',
      email: 'XXXXXXXXXXXXXX'
}

let txt = '';
for(let x in person){
      txt += person[x] + '\n';
}
console.log(txt);

// Empty JavaScript
const person2 = {};
person2.firstName = 'XXXX';
person2.lastName = 'XXXXX';
person2.age = 30;
person2.eyeColor = 'blue';

//uSing the JavaScript Keyword new
const person3 = new Object();
person3.firstName = 'XXXX';
person3.lastName = 'XXXXX';
person3.age = 30;
person3.eyeColor = 'blue';
console.log(person3);

//Object property 
const person4 = {
      name: 'John',
      age: 30,
}

console.log(person4.name);
console.log(person4['name']);

// Object + Array
const myObj = {
      name: 'John',
      age: 30,
      cars: [
            {name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang']},
            {name: 'BMW', models: ['320', 'X3', 'X5']},
            {name: 'Fiat', models: ['500', 'Panda']}
      ]
}

for(let i in myObj.cars){
      console.log(myObj.cars[i ].models[2]);
}

// Object to array using Object.values
const member = {
      name: 'John',
      age: 30,
      city: 'New York',
}

const persnArray = Object.values(member);

for(let dd of persnArray){
      console.log(dd);
}

// Constructor function
function Person(name, age, city){
      this.firstName = name;
      this.age = age;
      this.city = city;
      this.fullName = function(){
            return this.firstName + ' ' + this.age + ' ' + this.city;
      }
}
const sumit = new Person('Sumit', 30, 'New York');
const saidul = new Person('Saidul', 30, 'New York');

console.log(sumit.fullName());
const car = {
        make: 'Honda',
        versions: 'Civic',
        model: '2009',
        weight: '2000',
        start: function(){
            this.comand(),
            console.log("Car Started");
        },
        comand: function(){
            console.log("Car Stopped");
        }
}
console.log(car.make);
console.log(car.versions);
console.log(car.start());

car.start();
car.comand();


//Constant
const PI = 30.1;
let x = -100;
x <<= 5;
x = x << 5;
console.log(x);

//1. Write a JavaScript function to print the “Hello World” message
function helloWorld(){
      console.log("Hello World");
}
helloWorld();

//2. Write a function that returns the square of a number
///Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

function findSquare(num){
      return num * num;
}
console.log(findSquare(5));

//3. Write a function to convert Celsius to Fahrenheit
//Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
function calFahrenheit(celsius){
      return (celsius * 9/5) + 32;
}
console.log(calFahrenheit(30));

//4. Write a function to find the area of a given Rectangle
//Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
function rectangleArea(width, height){
      return width * height;
}
console.log(rectangleArea(5,10));

//5. Write a function to find the area and perimeter of a Circle
//Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

function circleValues(radius){
      return 2 * Math.PI * radius;
}
console.log(circleValues(5));


////////////// JavaScript Object - Exercises ////////
// 1. Write a JavaScript program to list the properties of a JavaScript object.
var student = {
      name : "David Rayy",
      sclass : "VI",
      rollno : 12
};
console.log(student.name, student.sclass, student.rollno);

var myPerson = {
      firstName : "John",
      lastName : "Smith",
      fullName : function()
      {
          return this.firstName + " " + this.lastName;
      }
}

console.log(myPerson.fullName());
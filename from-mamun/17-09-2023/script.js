//function declaration
function sayBye(){
      console.log("Bye");
}
sayBye();

//function expression
const sayBye2 = function(){
      console.log("Bye");
}
sayBye2();

//function hoisting
 

//self invoking function -> IIFE(immediate invoking function expression)
(function(){
      console.log("Bye");
})();

//Functions Can Be Used as Values
function myFunction(a,b){
      return a+b;
}
let result = myFunction(5,10);
console.log(result);

//arrow function
// const x = (a,b) => a+b;
const x = (a,b) => { return a+b; };
x(5,10);

/// Class
class Car {
      constructor(name, year, version) {
            this.name = name;
            this.year = year;
            this.version = version;
      }
}
    
const myCar1 = new Car("Ford", 2014, 5657);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name + " " + myCar2.name + " " + myCar1.version);

// Inheritance
class myCar {
      constructor(brand){
            this.carName = brand;
      }
      present(){
            return "I have a " + this.carName;
      }
}

class Model extends myCar {
      constructor(brand, mod){
            super(brand);
            this.model = mod;
      } 
      show(){
            return this.present() + ", it is a " + this.model;
      }
}

let myCarr = new Model("Ford", "Mustang");

console.log(myCarr.show());

// Getter and Setter
// class Car {
//       constructor(brand) {
//             this._carname = brand;
//       }
//       get cnam() {
//             return this._carname;
//       }
//       set cnam(x) {
//             this._carname = x;
//       }
// }

// const myCar = new Car("Ford");
// console.log(myCar.cnam);

// Class Static

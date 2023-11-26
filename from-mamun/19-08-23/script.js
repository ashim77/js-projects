// Q1
const obj1 = {
    name: "Mamun",
    age: 3,
    father: "Madhu"
};
console.log(obj1.age);

const obj2 = Object.create(obj1);
obj2.age=4;
obj2.country = "Bangladesh";
console.log(obj2);

console.log(Object.values(obj2));

//Q2
let date1 = '2023-08-16';
let date2 = '2023-08-17';

let diff = new Date(date2) - new Date(date1);
console.log(diff);

//Q3
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let index = fruits.indexOf('Banana');
if(index){
    console.log('Banana is available');
}else{
    console.log('Banana is not available');
}

//Q4
const obj = {
    name: 'Mamun',
}
obj.category = 'IT';
Object.freeze(obj);
obj.country = 'Bangladesh';
//delete obj.name;
console.log(obj);

// Q5
const data1 = {
    name: "Mamun",
    age: 3,
    father: "Madhu"
};
const data2 = {
    gender: "Female",
    age: 4,
};

const data3 = Object.assign(data1, data2);

console.log(data3);

// Q6
const numbersArr = [1,2,5,8,7,9,3]
// Solution 1
numbersArr.sort();
console.log(numbersArr);

// Solution 2
numbersArr.sort((a, b) => a - b);
console.log(numbersArr);

// Rearrange the text from "HasTech" in ascending order
let txt = 'HasTech';
let arr = txt.split('');
arr.sort();
let newTxt = arr.join('');
console.log(newTxt);

// Include the following array elemnts in the demo variable, arranged in desending order and enclosed within <li></li> tags
const term = [1,2,3,4,5];

let demo = '<ul>';
for(let i = 0; i < term.length; i++){
    demo += `<li>${term[i]}</li>`;
}
demo += '</ul>';
console.log(demo);

// Return an array of all calues in ages[] that are over 18
const ages = [32, 33, 16, 18, 40];

let over18 = ages.filter(age => age > 18);
console.log(over18);

// Make the summation of the array elements and show it into the demo variable
const num = [1,2,3,4,5,6,7,8,9,10];
let summation = num.reduce((a,b) => a + b);
console.log(summation);

// Rearranged the below elements in ascending order by year and console the result
const cars = [
    {type: 'Volvo', year: 2012},
    {type: 'Saab', year: 2005},
    {type: 'BMW', year: 2019},
]
let sortedCars = cars.sort((a,b) => a.year - b.year);
console.log(sortedCars);

//what will be the inner code to get the full name from this obj
const person = {firstName: 'XXXX', lastName: 'Doe'}

let fullName = person.firstName + ' ' + person.lastName;

console.log(fullName);

// what will the the function inner code to show randomly 1-6 number when it call
function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

console.log(randomNumber());

// Write down the code to get the total price from the products items

const products = [
    {name: 'laptop', price: 3200},
    {name: 'mouse', price: 400},
    {name: 'keyboard', price: 400},
]

let totalPrice = products.reduce((a,b) => a + b.price, 0);

console.log(totalPrice);

const ff = {
    name: 'Mamun',
    age: 3,
    father: 'Madhu',
    mother: 'Sadhu',
    country: 'Bangladesh',
    city: 'Dhaka',
    address: 'Dhaka',
    phone: '01717171717',
    email: 'XXXXXXXXXXXXXXX',
}

const personn = {
    name: "John",
    today: new Date()
  };
  
  let myString = JSON.stringify(personn.today);
  //document.getElementById("demo").innerHTML = myString;

///// JavaScript Object Constructors
function member(name, age, yera){
    this.firstName = name;
    this.age = age;
    this.year = yera;
    this.fullMemberInfo = function(){
        return this.firstName + ' ' + this.age + ' ' + this.year;
    }
}
const m1 = new member('Mamun', 3, 1999);
const m2 = new member('Madhu', 4, 1999);
const m3 = new member('Sadhu', 5, 1999);
// console.log(m1,m2,m3);
console.log(m1.fullMemberInfo());






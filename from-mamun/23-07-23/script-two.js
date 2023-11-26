// const fruits = ['apple', 'banana', 'orange'];

// fruits[2] = 'kiwi';

// let newTxt = txt.split('').sort().join('');    

// console.log(newTxt);


// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits);


// Question 7 Answer
let txt = 'HasTech';

let txt2 = txt.split('');

//console.log(txt2);

let txt3 = txt2.sort();

//console.log(txt3);

//let txt4 = txt3.join('');

let txt4 = txt2 + txt3;

console.log(txt4);

// Question 8 Answer
const ages = [32, 33, 16, 40];
let over18 = ages.filter(function(age){  
      return age > 18;
}
);

console.log(over18);


// Sum this array
const numberss = [175, 50, 25];

let summ = numberss.reduce(function(total, number){
      return total + number;
}
);

console.log(summ);

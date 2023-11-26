//2. Write a JavaScript function that takes a string as input and returns the string reversed. 
// Input: "The quick brown fox" Output: "brown fox quick The"


const strInput = 'The quick brown fox';
// console.log(strInput);
function reverseString(input){
    return input.split(" ").reverse().join(" ");
}
console.log(reverseString(strInput));

// const reversedString = str2.split(' ').sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1).join(' ');

// console.log(reversedString);

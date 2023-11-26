//2. Write a JavaScript function that takes a string as input and returns the string reversed. Input: "The quick brown fox" Output: "brown fox quick The"


const str2 = 'The quick brown fox sdfs wewe X B';

const reversedString = str2.split(' ').sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1).join(' ');

console.log(reversedString);

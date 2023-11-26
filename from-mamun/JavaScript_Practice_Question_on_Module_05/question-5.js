// Define a function getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers, using an arrow function.

// Sample Input & Output:
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const getEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



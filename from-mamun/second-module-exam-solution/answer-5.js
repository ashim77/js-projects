// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

//     Example:
//     Input: const numbers = [10, 21, 3, 14, 53, 55, 36, 48]
//     Output: [10, 14, 36, 48]

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  const numbers = [10, 21, 3, 14, 53, 55, 36, 48];
  const evenNumbers = filterEvenNumbers(numbers);
  
  console.log('Input:', numbers);
  console.log('Output:', evenNumbers);
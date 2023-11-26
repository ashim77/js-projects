// 1. Write a JavaScript function that takes an array and returns the minimum number of this array using a loop.  Ignore the built-in method for finding.

//     Example:
//     Input: const numbers = ["10", "21", 3, "14", "53", 55, ”36”, 48];

function findMinimum(arr) {
    let min = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      const current = Number(arr[i]);
      if (!isNaN(current) && current < min) {
        min = current;
      }
    }
    return min;
  }
  
  const numbers = ["10", "21", 3, "14", "53", 55, "36", 48];
  const minNumber = findMinimum(numbers);
  console.log("Minimum number:", minNumber);  

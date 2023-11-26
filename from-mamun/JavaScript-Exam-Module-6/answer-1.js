// Write a JavaScript function that takes an array and returns the minimum number of this array using a loop. Ignore the built-in method for finding.

// Example:
// Input: const numbers = ["10", "21", 3, "14", "53", 55, ”36”, 48];

// Output: 3

const numbers = ["10", "21", 3, "14", "53", 55, "36", 48];

function minNumber(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
console.log(minNumber(numbers));

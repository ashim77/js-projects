//8. Write a JavaScript function that takes an array, an index, and a value as inputs, and returns a new array with the value inserted at the specified index. The original array should remain unchanged.
    // Example:
    // input : array = [1,2,3,5] index = 3 value = 4
    // insertValueAtIndex(array, index, value)
    // Output: [1,2,3,4,5]

function insertValueAtIndex(array, index, value) {
    const newArray = [...array]; // Shalow Copy
    newArray.splice(index, 0, value);
    return newArray;
}

console.log(insertValueAtIndex([1,2,3,5], 3, 4));
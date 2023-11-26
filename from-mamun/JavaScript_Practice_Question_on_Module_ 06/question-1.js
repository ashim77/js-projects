// Write a JavaScript function that takes an array of strings as input and returns an object that represents the count of each string in the input array.

// For example, given the input:
// ["BD", "India", "USA", "UK", "BD", "UK", "BD"]

// The function should return:
// {"BD": 3, "India": 1, "USA": 1, "UK": 2}

function countStrings(array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        console.log(array.length)
        if (result[array[i]]) {
            result[array[i]]++;
        } else {
            result[array[i]] = 1;
        }
    }
    return result;
}

console.log(countStrings(["BD", "India", "USA", "UK", "BD", "UK", "BD"]));
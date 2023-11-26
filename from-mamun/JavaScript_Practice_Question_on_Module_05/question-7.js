// Define a function myParseJSON that takes a JSON string as input and attempts to parse it into a JavaScript object. Handle the case where the input is not valid JSON and provide an appropriate error message.

// Sample Input & Output:
// let jsonString1 = '{name: "John", age: 30, city: "Dhaka"}';
// console.log(myParseJSON(jsonString1)); // {name: "John", age: 30, city: "Dhaka"}
// let jsonString2 = '{name: "John", age: 30, city: "Dhaka"';
// console.log(myParseJSON(jsonString2)); // Error parsing JSON: Unexpected end of JSON input

function myParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return "Error parsing JSON: " + error;
    }
}


let jsonString1 = '{"name": "John", "age": 30, "city": "Dhaka"}';
console.log(myParseJSON(jsonString1)); // {name: "John", age: 30, city: "Dhaka"}


let jsonString2 = '{name: "John", age: 30, city: "Dhaka"';
console.log(myParseJSON(jsonString2)); // Error parsing JSON: Unexpected end of JSON input


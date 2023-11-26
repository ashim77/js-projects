// Please write a JavaScript function that takes a JSON-encoded string as input and returns a modified JSON-encoded string. You have received a dataset in JSON format representing employee information. The dataset is provided as a string of JSON-encoded data, where each object represents an employee with properties "name", "age", and "position". Your task is to process this JSON-encoded data using JavaScript and return a modified JSON-encoded string. The modified dataset should include an additional property "status" for each employee, where the "status" is calculated based on the employee's age. If the employee is younger than 30, the status should be "Junior", and if they are 30 years or older, the status should be "Senior
// Here's the input dataset as a JSON-encoded string:
// '[
//     { "name": "Alice", "age": 25, "position": "Developer" },
//     { "name": "Bob", "age": 32, "position": "Manager" },
//     { "name": "Eve", "age": 28, "position": "Designer" }
// ]'
// Expected Output:
// '[
//     { "name": "Alice", "age": 25, "position": "Developer", "status": "Junior" },
//     { "name": "Bob", "age": 32, "position": "Manager", "status": "Senior" },
//     { "name": "Eve", "age": 28, "position": "Designer", "status": "Junior" }
//     ]'

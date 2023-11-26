// 3. Create a JavaScript function that receives a string containing a mathematical expression (e.g., "2 + 3 * 4") and calculates the result using the correct order of operations (BODMAS: brackets, Order, division, multiplication, addition, and subtraction). Input: "3 + 4 * 2" Output: 11

const inputExpression = "3 + 4 * 2";

function calculateExpression(expression) {
    return eval(expression);
}

console.log(calculateExpression(inputExpression));




// const inputExpression = "3 + 4 * 2";

// const calculateExpression = expression => eval(expression);

// console.log(calculateExpression(inputExpression));

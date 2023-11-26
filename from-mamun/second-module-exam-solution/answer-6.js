// 6. Write a JavaScript function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.

//     Example:
//     Input const people = [
//         { name: "John", age: 30 },
//         { name: "Alice", age: 25 },
//         { name: "Bob", age: 35 },
//     ];
//     const data = myfunction(people, "age");
//     [
//         { name: "Alice", age: 25},
//         { name: "John", age: 30 },
//         { name: "Bob", age: 35 },
//     ]

function sortByKey(array, key) {
    return array.slice().sort((a, b) => a[key] - b[key]);
  }
  
  const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
  ];
  
  const sortedData = sortByKey(people, "age");
  console.log(sortedData);
  
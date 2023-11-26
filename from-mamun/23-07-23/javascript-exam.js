//Write a JavaScript function that takes a string and returns the string with each word capitalized.
const str = "We are learning JavaScript";

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

console.log(capitalize(str));

//Write a JavaScript function that takes a sentence as input and returns the sentence with the words sorted in alphabetical order. Ignore capitalization for sorting.
// const sentence = "The quick brown fox";

// function sortSentence(sentence) {
//   const words = [];

//   for (let word of sentence.split(" ")) {
//     words.push(word.toLowerCase());
//   }

//   return words.sort().join(" ");
// }

// console.log(sortSentence(sentence));

const str2 = 'The quick brown fox';
function fucSortinga(str){

    return str.split(' ').sort( (a,b) => a.toLowerCase() > b.toLowerCase() ? 1:-1 ).join(' ');

}
console.log(fucSortinga(str2));


// Create a JavaScript function that receives a string containing a mathematical expression (e.g., "2 + 3 * 4") and calculates the result using the correct order of operations (BODMAS: brackets, Order, division, multiplication, addition, and subtraction). Output 11

const math = "2 + 3 * 4";

// Write a JavaScript function that takes an array of books as input and return a new array containing books with prices greater than or equal to 150 and a status of "inStock".

const books = [
      { name: "Book 1", price: 160, status: "inStock" },
      { name: "Book 2", price: 100, status: "inStock" },
      { name: "Book 3", price: 150, status: "outOfStock" },
      { name: "Book 4", price: 250, status: "inStock" },
      { name: "Book 5", price: 200, status: "outOfStock" },
];

function filterBooks(books) {
const inStock = [];

  for (let book of books) {
    if (book.price >= 150 && book.status === "inStock") {
      inStock.push(book);
    }
  }

  return inStock;
}

console.log(filterBooks(books));


//Write a function that takes an array of books given below as a parameter and returns the sum of their prices of books whose price is divisible by 5.
const booksLib= [
      { name: 'Book 1', price: 15 },
      { name: 'Book 2', price: 32 },
      { name: 'Book 3', price: 33 },
      { name: 'Book 4', price: 40 },
      { name: 'Book 5', price: 45 }
]

function sumOfBooks(books) {
  let sum = 0;

  for (let book of books) {
    if (book.price % 5 === 0) {
      sum += book.price;
    }
  }

  return sum;
}

console.log(sumOfBooks(books));

// Define a JavaScript function named calculatedDiscountPrice that takes the original price and a discount percentage as parameters and returns the final discounted price.
function calculatedDiscountPrice(originalPrice, discountPercentage) {
      return originalPrice * (1 - discountPercentage / 100);
}

console.log(calculatedDiscountPrice(200, 10));



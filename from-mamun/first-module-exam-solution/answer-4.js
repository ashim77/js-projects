//4. Write a JavaScript function that takes an array of books as input and return a new array containing books with prices greater than or equal to 150 and a status of "inStock".
    // const books = [
    //     { name: "Book 1", price: 160, status: "inStock" },
    //     { name: "Book 2", price: 100, status: "inStock" },
    //     { name: "Book 3", price: 150, status: "outOfStock" },
    //     { name: "Book 4", price: 250, status: "inStock" },
    //     { name: "Book 5", price: 200, status: "outOfStock" },
    // ];

function filterBooks(books) {
    return books.filter(book => book.price >= 150 && book.status === "inStock");
}

const books = [
    { name: "Book 1", price: 160, status: "inStock" },
    { name: "Book 2", price: 100, status: "inStock" },
    { name: "Book 3", price: 150, status: "outOfStock" },
    { name: "Book 3", price: 150, status: "outOfStock" },
    { name: "Book 4", price: 250, status: "inStock" },
    { name: "Book 5", price: 200, status: "outOfStock" },
];

console.log(filterBooks(books));
//5. Write a function that takes an array of books given below as a parameter and returns the sum of their prices of books whose price is divisible by 5.
    // const books= [
    //     { name: 'Book 1', price: 15 },
    //     { name: 'Book 2', price: 32 },
    //     { name: 'Book 3', price: 33 },
    //     { name: 'Book 4', price: 40 },
    //     { name: 'Book 5', price: 45 }
    // ]

const books = [
    { name: 'Book 1', price: 15 },
    { name: 'Book 2', price: 32 },
    { name: 'Book 3', price: 33 },
    { name: 'Book 4', price: 40 },
    { name: 'Book 5', price: 45 }
    ];
    
    function sumOfBooks(books) {
        let sum = 0;
        for (let i = 0; i < books.length; i++) {
            if (books[i].price % 5 === 0) {
                sum += books[i].price;
            }
        }
        return sum;
    }
    
    console.log(sumOfBooks(books));
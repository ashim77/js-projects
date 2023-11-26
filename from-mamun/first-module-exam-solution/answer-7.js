//7. Write a function that takes an array of books, key and value given below as a parameter and returns an array of books after dynamically adding a key-value pair to each book object.
    // const books= [
    //     { name: 'Book 1', price: 15 },
    //     { name: 'Book 2', price: 32 },
    //     { name: 'Book 3', price: 33 },
    //     { name: 'Book 4', price: 40 }
    // ];
    // const key = “discount”;
    // const value = 5;
    // Example:
    // Input: addProperty(books, key, value)

    const books= [
        { name: 'Book 1', price: 15 },
        { name: 'Book 2', price: 32 },
        { name: 'Book 3', price: 33 },
        { name: 'Book 4', price: 40 }
    ];

    function addProperty(books, key, value) {
        for (let i = 0; i < books.length; i++) {
            books[i][key] = value; 
        }
        return books;
    }
   
   console.log(addProperty(books, "discount", 5));
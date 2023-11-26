//1. Write a JavaScript function that takes a string and returns the string with each word capitalized.
    //Input: "We are learning JavaScript"
    //Output: "We Are Learning JavaScript"

    const input = "We are learning JavaScript";

    const capitalizeWords = input => input.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

    console.log(capitalizeWords(input));

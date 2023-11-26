//1. Write a JavaScript function that takes a string and returns the string with each word capitalized.
    //Input: "We are learning JavaScript"
    //Output: "We Are Learning JavaScript"

    const input = "We are learning JavaScript";

    function firstWordCap(input){
        let words = input.split(" ");
        
        const capitalizeWords = words.map((word) =>{
            if(word.length > 0){
                return word.charAt(0).toUpperCase() + word.slice(1);
            }else{
                return word;
            }
        })
        return capitalizeWords.join(" ");
    }

    console.log(firstWordCap(input));
//6. Define a JavaScript function named calculatedDiscountPrice that takes the original price and a discount percentage as parameters and returns the final discounted price.
    // Example:
    // Input : calculatedDiscountPrice(200,10);
    // Output: 180

    function calculatedDiscountPrice(originalPrice, discountPercentage) {
        return originalPrice - (originalPrice * discountPercentage / 100);
    }
    console.log(calculatedDiscountPrice(200, 10));
const getEvenNumbers = (numbers) => {
      return numbers.filter(number => number % 2 === 0);
  }
  
  console.log(getEvenNumbers([10, 21, 3, 14, 53, 55, 36, 48]));
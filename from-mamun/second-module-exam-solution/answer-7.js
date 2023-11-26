// 7. Write a JavaScript function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

//     Example:
//     const arr1 = [1, 3, 5, 7];
//     const arr2 = [2, 4, 6, 8];
//     myfunction(arr1, arr2);

//     Output: [1, 2, 3, 4, 5, 6, 7, 8]

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0; // Index for arr1
    let j = 0; // Index for arr2
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1 or arr2, add them to the merged array
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  const mergedArray = mergeSortedArrays(arr1, arr2);
  console.log(mergedArray);
  
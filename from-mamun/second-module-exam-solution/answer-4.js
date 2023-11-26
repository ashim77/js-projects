// 4. How do you add or remove properties from an object dynamically two operations are managed from one function?

function manageObjectProperty(obj, propName, add) {
    if (add) {
      obj[propName] = 'new value';  // Add the property with a default value or any specific value you want
    } else {
      delete obj[propName];  // Remove the property
    }
  }
  
  const myObject = { a: 1, b: 2 };
  
  console.log('Original Object:', myObject);
  
  // Add a new property
  manageObjectProperty(myObject, 'c', true);
  console.log('After adding property:', myObject);
  
  // Remove the 'b' property
  manageObjectProperty(myObject, 'b', false);
  console.log('After removing property:', myObject);
  
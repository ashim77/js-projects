const jsonString = '{"name": "Tom", "age": 17, "birth": "1986-12-14"}';

//console.log(jsonString);

// const myObj = JSON.parse(jsonString);
// console.log(myObj);

// convert to valid JS Array
const myObj = JSON.parse(jsonString, function(key, value){
      if (key === "birth") {
            return new Date(value);
      }
      return value;
});

console.log(myObj);

// const objtojsn =  JSON.stringify(myObj)
// console.log(objtojsn);
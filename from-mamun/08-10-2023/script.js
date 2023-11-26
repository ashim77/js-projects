/////////////// Form Validation API ///////////////
function validation(){
      const inputObj = document.getElementById("id1");

      if(!inputObj.checkValidity()){
            document.getElementById("demo").innerHTML = inputObj.validationMessage;
      }
      
}



/////////////// Storage API ///////////////
// function setLocalStorage(key, value){
//       localStorage.setItem(key, value);
// }

// function getLocalStorage(key){
//       alert(localStorage.getItem(key));
// }

// function removeLocalStorage(key){
//       localStorage.removeItem(key);
// }

// function clearLocalStorage(key){
//       localStorage.clear();
// }

//////////// Worker API ///////////

// function loadData(){
//       // Create a new request
//       const xhr = new XMLHttpRequest();

//       //What to do when response arrives
//       xhr.onload = function(){
//             const container = document.getElementById("demo");
//             container.innerHTML = xhr.responseText;
//       };

//       // prepare request
//       xhr.open("GET", "data.txt");

//       xhr.send();
// }


function dataLoad(callBackF){
      // Create a new request
      const xhr = new XMLHttpRequest();

      //What to do when response arrives
      xhr.onload = function(){
            callBackF(this);
      };

      // prepare request
      xhr.open("GET", "data.txt");

      xhr.send();
}

function myCallback1(xhr){
      const container = document.getElementById("demo1");
      container.innerHTML = xhr.responseText;
}

function myCallback2(xhr){
      const container = document.getElementById("demo2");
      container.innerHTML = xhr.responseText;
}
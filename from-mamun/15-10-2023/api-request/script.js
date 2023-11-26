function loadData(){
      // Create a new request
      const xhr = new XMLHttpRequest();

      //What to do when response arrives
      xhr.onload = function(){
            const container = document.getElementById("demo");
            container.innerHTML = xhr.responseText;
      };

      // prepare request
      xhr.open("GET", "data.txt");

      xhr.send();
}
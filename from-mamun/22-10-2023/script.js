// async function fetchData(){
//       const response = await fetch("json_demo_array.txt");
//       const data = await response.json();
//       console.log(data);
// }
// fetchData();


async function changeMySelect(sel){
      const dbParam = JSON.stringify({table:sel, limit: 20});
      const response = await fetch("https://www.w3schools.com/js/json_demo_html_table.php", {
      method: 'POST',
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "x=" + JSON.stringify(dbParam),
      });

}
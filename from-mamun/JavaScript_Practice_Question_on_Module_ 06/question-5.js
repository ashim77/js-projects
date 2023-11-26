// Define a function displayColorSwatches that takes an array of color names as input and display a list of color swatches in the browser. The function should only display unique colors (no duplicates). this display on ul>li list


const colorNames = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


function displayColorSwatches(colorNames) {
    let result = "";
    for (let i = 0; i < colorNames.length; i++) {
        result += `<li><div style="background-color: ${colorNames[i]}"></div></li>`;
    }
    
    document.getElementById("colorSwatches").innerHTML = result;
}



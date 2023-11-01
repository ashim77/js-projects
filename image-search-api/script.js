const accessKey = "bY2FAoYcI3OrTlmd5EUmGpQ6qHAx43R_eGjoUFEVG9c";

const formElement = document.querySelector("form");
const inputElement = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = "";
    }

    searchResult.innerHTML += results.map((result) => {
        console.log(result.alt_description);
        return `
          <div class="search-result">
            <img src="${result.urls.small}" alt="${result.alt_description}">
            <a href="${result.links.html}" target="_blank">${result.alt_description}</a>
          </div>
        `;
    }).join("");

    // results.map((result) => {
    //     const imageWrapper = document.createElement('div');
    //     imageWrapper.classList.add("search-result");

    //     const image = document.createElement('img');
    //     image.src = result.urls.small;
    //     image.alt = result.alt_description;
        
    //     const imageLink = document.createElement('a');
    //     imageLink.href = result.links.html;
    //     imageLink.target = "_blank";
    //     imageLink.textContent = result.alt_description;

    //     imageWrapper.appendChild(image);
    //     imageWrapper.appendChild(imageLink);
    //     searchResult.appendChild(imageWrapper);
    //     console.log(result.links.html);
    // });

    page++;
    
    if(page  > 1){
        showMore.style.display = "block";
    }
}


formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
});


showMore.addEventListener("click", (event) =>{
    searchImages();
});
<<<<<<< HEAD
// async function getData(){
//   const data = await fetch('http://localhost:3000/products', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   console.log(data);
// }
// getData();


// Function to add a new product to the API JSON file
function addProductToAPI(productName, productPrice, productStock) {
    // API URL
    const apiUrl = 'http://localhost:3000/products';
  
    // Data to be added
    const productData = {
      name: productName,
      price: productPrice,
      stock: productStock,
    };
    
  
    // Send a POST request to add the product
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then((response) => {
        if (response.ok) {
          // Product added successfully, now fetch the updated product list
          return fetch(apiUrl);
        } else {
          throw new Error('Failed to add the product.');
        }
      })
      .then((response) => response.json())
      .then((data) => {
        // Update the product list based on the fetched data
        updateProductList(data);
      })
      .catch((error) => {
        console.error(error);
      });
=======
// Function to fetch and display the product list
async function fetchAndDisplayProductList() {
  try {
    // API URL
    const apiUrl = 'https://kausar.instawp.xyz/api/api-data.json';

    // Fetch the product list from the API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch product list.');
    }

    const productDataArray = await response.json();

    // Update the product list based on the fetched data
    updateProductList(productDataArray);
  } catch (error) {
    console.error(error);
>>>>>>> de7791c48766fbc2251d94dc889b6e4f127e52a4
  }
}

// Function to update the product list based on the fetched data
function updateProductList(data) {
  const productList = document.querySelector(".product-list");

  // Clear the existing product list
  productList.innerHTML = '';

  // Iterate through the fetched data and create product list items
  data.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item list-group-item-action d-inline-flex justify-content-between align-items-center";
    listItem.innerHTML = `
      <div>
        <h5>${product.name} (${product.stock})</h5>
        <p>${product.price}TK</p>
      </div>
      <div class="item-plus">➕</div>
    `;
    productList.appendChild(listItem);
  });
}

// Call the fetchAndDisplayProductList function to initially populate the product list
fetchAndDisplayProductList();

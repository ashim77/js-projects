async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': 'your_api_key'
			}
		}
	);
}


// Select the necessary elements
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productStockInput = document.getElementById("productStock");
const productList = document.querySelector(".product-list");

// Function to add a new product to the list
function addProductToList() {
  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;
  const productStock = productStockInput.value;

  // Create a new list item element
  const listItem = document.createElement("li");
  listItem.className = "list-group-item list-group-item-action d-inline-flex justify-content-between align-items-center";
  listItem.innerHTML = `
    <div>
      <h5>${productName} (${productStock})</h5>
      <p>${productPrice}TK</p>
    </div>
    <div class="item-plus">➕</div>
  `;

  // Append the new product item to the product list
  productList.appendChild(listItem);
  
  // Clear the input fields
  productNameInput.value = "";
  productPriceInput.value = "";
  productStockInput.value = "";
}

// Add an event listener to the "Save" button in the modal
const saveButton = document.querySelector("button[type='submit']");
saveButton.addEventListener("click", addProductToList);



// Function to add a new product to the API JSON file
async function addProductToAPI(productName, productPrice, productStock) {
    try {
      // API URL
      const apiUrl = 'https://kausar.instawp.xyz/api/api-data.json';
  
      // Data to be added
      const productData = {
        name: productName,
        price: productPrice,
        stock: productStock,
      };
  
      // Send a POST request to add the product
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add the product.');
      }
  
      // Fetch the updated product list
      const productListResponse = await fetch(apiUrl);
      if (!productListResponse.ok) {
        throw new Error('Failed to fetch product list.');
      }
  
      const productDataArray = await productListResponse.json();
  
      // Update the product list based on the fetched data
      updateProductList(productDataArray);
    } catch (error) {
      console.error(error);
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
  
  // Add an event listener to the "Save" button in the modal
  const saveButton = document.querySelector("button[type='submit']");
  saveButton.addEventListener("click", function () {
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const productStockInput = document.getElementById("productStock");
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;
    const productStock = productStockInput.value;
  
    addProductToAPI(productName, productPrice, productStock);
  });
  
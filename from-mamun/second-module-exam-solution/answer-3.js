// 3. Write a Javascript function that takes 2 arrays as input. Which are productList and availableProductInInventory. Your task is to determine which products are in stock and which are out of stock.

//     Example
//     Input:
//     const productList = [
//         {id: 101, title: "Product 1"},
//         {id: 102, title: "Product 2"},
//         {id: 103, title: "Product 3"},
//         {id: 104, title: "Product 4"}
//     ];
//     const availableProductInInventory = [102, 104];

//     Output:
//     {
//         inStockProductList: [{id: 102, title: "Product 2"}, {id: 104, title: "Product 4"}],
//         outOfStockProductList: [{id: 101, title: "Product 1"}, {id: 105, title: "Product 3"}]
//     }


function determineStockStatus(productList, availableProductInInventory) {
    const inStockProductList = [];
    const outOfStockProductList = [];
  
    productList.forEach((product) => {
      if (availableProductInInventory.includes(product.id)) {
        inStockProductList.push(product);
      } else {
        outOfStockProductList.push(product);
      }
    });
  
    return {
      inStockProductList,
      outOfStockProductList
    };
  }
  
  const productList = [
    { id: 101, title: "Product 1" },
    { id: 102, title: "Product 2" },
    { id: 103, title: "Product 3" },
    { id: 104, title: "Product 4" }
  ];
  
  const availableProductInInventory = [102, 104];
  
  const stockStatus = determineStockStatus(productList, availableProductInInventory);
  console.log(stockStatus);
  
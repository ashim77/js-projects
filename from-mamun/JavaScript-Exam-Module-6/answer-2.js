function filterBooks(productList) {
      return productList.filter(book => book.id >= 101 && book.status === "inStock");
  }
  
  const productList = [
      { id: 101, title: "Product 1", status: "inStock" },
      { id: 102, title:"Product 2", status: "inStock" },
      { id: 103, title:"Product 3", status: "outOfStock" },
      { id: 104, title: "Product 4", status: "outOfStock" },
  ];
  
  console.log(filterBooks(productList));
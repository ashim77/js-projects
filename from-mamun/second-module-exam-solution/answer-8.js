// 8. Write a JavaScript class definition for the Product class with a constructor and the getTotalPrice() method. Additionally, create an instance of the Product class and calculate its total price (price multiplied by quantity).

//     Assume the following product data:
//     Product Name: "Laptop"
//     Price: 1000
//     Quantity: 3

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  const productName = "Laptop";
  const price = 1000;
  const quantity = 3;
  
  const laptopProduct = new Product(productName, price, quantity);
  const totalPrice = laptopProduct.getTotalPrice();
  
  console.log(`Product Name: ${productName}`);
  console.log(`Price: $${price}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Total Price: $${totalPrice}`);
  
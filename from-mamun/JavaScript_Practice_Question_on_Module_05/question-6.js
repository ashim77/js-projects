// Create a class called Product with properties for name, price, and quantity. In this class, include two methods: updatePrice and updateQuantity, both used to modify the price and quantity of the product. Once the class is defined, show an example of how to create a Product object instance and then use the defined methods to update the product's price and quantity.

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(price) {
        this.price = price;
    }

    updateQuantity(quantity) {
        this.quantity = quantity;
    }
}

const product = new Product('Laptop', 20000, 5);

product.updatePrice(60000);
product.updateQuantity(15);

console.log(product);

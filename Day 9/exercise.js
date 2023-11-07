class Product {
  constructor(name, stock, category, color) {
    this.name = name;
    this.stock = stock;
    this.category = category;
    this.color = color;
  }
}

class Clothes extends Product {
  constructor(name, stock, category, color, size, brand) {
    super(name, stock, category, color);
    this.size = size;
    this.brand = brand;
  }
}

class Book extends Product {
  constructor(name, stock, category, color, author, pages) {
    super(name, stock, category, color);
    this.author = author;
    this.pages = pages;
  }
}

class Store {
  #items = [];
  #userCart = [];

  constructor(storeName) {
    this.storeName = storeName;
  }

  uploadItem(product) {
    let stock = product.stock;
    if (product instanceof Product && stock > 0) {
      this.#items.push(product);
    } else console.log("Invalid Product or Not enough qty");
  }

  addToCart(itemname, qty) {
    const findItem = this.#items.find((items) => items.name === itemname);
    findItem.stock = qty;
    this.#userCart.push(findItem);
    console.log(this.#userCart);
  }

  checkout() {
    if (this.#userCart != 0) {
      console.log("Thank you for shopping!");
      this.#userCart = [];
      console.log(this.#userCart);
    } else {
      console.log("Your Cart is empty!");
    }
  }
}

const Tokopedia = new Store("Tokopedia");
Tokopedia.uploadItem(
  new Book("KomikNarto", 10, "Shonen", "White", "Jump", 140)
);
Tokopedia.uploadItem(new Clothes("Jaket", 23, "Jaket", "Hitam", "L", "Uniqlo"));

Tokopedia.addToCart("KomikNarto", 2);

Tokopedia.checkout();

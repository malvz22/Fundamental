//Go food app

class Food {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class Restaurant {
  #total = 0;
  #ongkir = 0;
  #foods = [];
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }
  addToCart(food) {
    let qty = food.qty;
    if (food instanceof Food && qty > 0) {
      this.#foods.push(food);
      console.log(`In cart: ${this.#foods}`);
    } else console.log(`Invalid Product or Not enough Qty`);
  }

  removeFromCart(itemToDelete) {
    const index = this.#foods.map((value) => value.name).indexOf(itemToDelete);
    this.#foods.splice(index, 1);
  }

  hitungOngkir() {
    let ongkirPerKm = 2000;
    return (this.#ongkir = this.distance * ongkirPerKm);
  }

  editQty(name, newQty) {
    this.#foods.map((value) => {
      if (value["name"] === name) {
        value["qty"] = newQty;
        console.log(`New quantity of ${name} : ${value["qty"]}`);
      }
    });
    console.log(this.#foods);
  }

  showTotal() {
    this.#total = this.#foods.reduce(
      (sum, curr) => sum + curr?.price * curr?.qty,
      0
    );
    return this.#total + this.#ongkir;
  }

  checkout(pay = 0) {
    if (this.#total > pay) return console.log(`Insufficient Money`);
    this.#foods = [];
    console.log(
      `Thank you for shopping at ${this.name}. Here is your change: Rp. ${(
        pay - this.#total
      ).toLocaleString("id-ID")}`
    );
    return (this.#total = 0);
  }
}

const resto = new Restaurant("kwehtiau", 5);
resto.addToCart(new Food("mie ayam", 30000, 1));
resto.addToCart(new Food("kwetiau", 40000, 2));
resto.editQty("mie ayam", 3);
resto.editQty("kwetiau", 4);
resto.removeFromCart("mie ayam");
console.log(resto.hitungOngkir());
console.log(resto.showTotal());
resto.checkout(240000);

//Triangle

const triangle1 = (height) => {
  for (let i = 0; i <= height; i++) {
    let result = ` `;
    for (j = 1; j <= i; j++) {
      result += `*`;
    }
    console.log(result);
  }
  console.log(`\n`);
};

// const triangle1 = (height) => {
//   for (let i = 0; i <= height; i++) {
//     let space = ` `.repeat(height - i);
//     let result = `*`.repeat(i);

//     console.log(result + space);
//   }
//   console.log(`\n`);
// };

const triangle2 = (height) => {
  for (let i = height - 1; i >= 0; i--) {
    let result = ` `;
    for (j = i; j >= 0; j--) {
      result += `*`;
    }
    console.log(result);
  }
  console.log(`\n`);
};

// const triangle2 = (height) => {
//   for (let i = 0; i <= height; i++) {
//     let space = ` `.repeat(i);
//     let result = `*`.repeat(height - i);

//     console.log(result + space);
//   }
//   console.log(`\n`);
// };

// const triangle3 = (height) => {
//   for (let i = 1; i <= height; i++) {
//     let space = ` `.repeat(height - i);
//     let result = `*`.repeat(i);

//     console.log(space + result);
//   }
//   console.log(`\n`);
// };

const triangle3 = (height) => {
  for (let i = 1; i <= height; i++) {
    let result = ``;
    for (let j = 1; j <= height - i; j++) {
      result += ` `;
    }
    for (let j = 1; j <= i; j++) {
      result += `*`;
    }
    console.log(result);
  }
  console.log(`\n`);
};

// const triangle4 = (height) => {
//   for (let i = 0; i <= height; i++) {
//     let space = ` `.repeat(i);
//     let result = `*`.repeat(height - i);

//     console.log(space + result);
//   }
//   console.log(`\n`);
// };

const triangle4 = (height) => {
  for (let i = 0; i <= height; i++) {
    let result = ``;
    for (let j = 1; j <= i; j++) {
      result += ` `;
    }
    for (let j = 1; j <= height - i; j++) {
      result += `*`;
    }
    console.log(result);
  }
  console.log(`\n`);
};

const triangle5 = (height) => {
  for (let i = 1; i <= height; i++) {
    let space = ` `.repeat(height - i);
    let result = `*`.repeat(i * 2 - 1);

    console.log(space + result);
  }
  console.log(`\n`);
};

const triangle6 = (height) => {
  for (let i = height; i >= 1; i--) {
    let space = ` `.repeat(height - i);
    let result = `*`.repeat(i * 2 - 1);

    console.log(space + result);
  }
  console.log(`\n`);
};

triangle1(4);
triangle2(4);
triangle3(4);
triangle4(4);
triangle5(4);
triangle6(4);

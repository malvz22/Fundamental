// ● Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty

// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #total = 0;
  #products = [];

  addToCart(product, qty) {
    if (product instanceof Product && qty > 0) {
      product.qty = qty;
      this.#products.push(product);
    } else console.log(`Invalid Product`);
  }
  showTotal() {
    this.#total = this.#products.reduce(
      (sum, current) => sum + current?.price * current?.qty,
      0
    );
    return this.#total;
  }
  checkout(pay = 0) {
    this.showTotal();
    if (this.#total > pay) return console.log("Not enough cash");
    this.#products = [];
    this.#total = 0;
    return console.log("Thank you for shopping");
  }
}

const jualBeli = new Transaction();
jualBeli.addToCart(new Product(`kabel anker`, 10000), 3);
// jualBeli.addToCart(new Product(`charger anker`, 30000));
console.log(jualBeli.showTotal());
jualBeli.checkout(60000);

// ● Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

class A {
  constructor(a) {
    this.a = a;
  }
}

const a1 = new A(2);
const a2 = new A(1);
const hello = new A("Hello");

const compare = (obj1, obj2) => {
  if (obj1.a === obj2.a) console.log("true");
  else console.log("false");
};

compare(a2, a2);

// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

class B extends A {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
}

class C extends A {
  constructor(a, c) {
    super(a);
    this.c = c;
  }
}

const intersect1 = new B(1, 2);
const intersect2 = new C(1, 3);

console.log(intersect1, intersect2);

// const intersection = (inter1,inter2) {

// }

// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :

// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]

// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const array1 = new Student(
//   [`Student 1`, `student1@mail.com`],
//   [`Student 2`, `student2@mail.com`]
// );

// const array2 = new Student(
//   [`Student 1`, `student1@mail.com`],
//   [`Student 3`, `student3@mail.com`]
// );

// const mergeArr = (arr1, arr2) => {
//   newArr = [];
//   arr1.map((value) => {
//     newArr.push(value);
//   });
//   arr2.map((value) => {
//     newArr.push(value);
//   });
//   console.log(newArr);
// };

// console.log(array1, array2);

// mergeArr(array1, array2);

// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

// const data = {
//   name: `David`,
//   age: 20,
// };

// const swap = (obj) => {
//   let keys = Object.keys(obj);
//   let valueArr = [];

//   console.log(keys);
//   console.log(obj[`name`], obj[`age`]);
// };

// swap(data);

//Shooting Game

class Player {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  damage(power) {
    this.health -= power;
    if (this.health < 0) this.health = 0;
  }
  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    return console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

const player1 = new Player(`A`, 100, 10);
const player2 = new Player(`B`, 100, 10);

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return Math.floor(Math.random() * 2)
      ? { health: 0, power: 10 }
      : { health: 10, power: 0 }; //0 atau 1
  }

  start() {
    let first = Math.floor(Math.random() * 2);
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.getRandomItem();
      this.player2.getRandomItem();
      if (first) {
        this.player2.damage(this.player1.power);
        if (this.player1.health > 0) this.player.damage(this.player.power);
        else break;
      } else {
        this.player1.damage(this.player2.power);
      }
    }
  }
}

console.log(player1.showStatus());
console.log(player2.showStatus());

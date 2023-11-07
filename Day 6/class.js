class User {
  name = ""; // key "name" (bukan variabel)

  //private prop #

  #email;
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }
  greeting() {
    console.log(`Good Morning, ${this.name}`);
  }
  get getEmail() {
    return this.#email;
  }
}

const User2 = class {
  greeting() {
    console.log("Hello!");
  }
};

//class merupakan cetakan dari sebuah object

const udin = new User("Udin", "udin@gmail.com"); //value "Udin" merupakan argumen yang dipassing ke dalam function constructor di dalam class "User"
udin.greeting(); // calling method greeting di dalam object "Udin"
console.log(udin.getEmail);

//static

class DB {
  static name = "DB";
  static #connection = "";
  static #initializeConnection() {
    const Numb = Math.ceil(Math.random() * 100);
    this.#connection = `New Database Connection ${Numb}`;
  }

  static getConnection() {
    if (!this.#connection) this.#initializeConnection();

    return this.#connection;
  }
}

console.log(DB.getConnection());

//class merupakan template object
//class harus dibuat sebuah object untuk bisa digunakan isinya
//static key dalam sebuah class membuat kita bisa mengakses key tanpa harus menciptakan object terlebih dahulu

// Encapsulation

class Product {
  #stock;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  showStock() {
    if (!this.#stock) return "set stock terlebih dahulu";
    return this.#stock;
  }
  setStock(value) {
    if (typeof value == "number") return (this.#stock = value);
    return console.log("value tidak sesuai");
  }
}

const keyboard = new Product("Razer Huntsman", 500000);
keyboard.setStock(7);
console.log(keyboard);
console.log(keyboard.showStock());

const komikNaruto = new Product("komik naruto", 10000);
komikNaruto.author = "ucok";
komikNaruto.releaseYear = 1999;
console.log(komikNaruto);

const komikWanpis = new Product("komik Wanpis", 10000);
komikWanpis.author = "ujang";
komikWanpis.releaseYear = 1999;
console.log(komikWanpis);

class Book extends Product {
  constructor(name, price, author, releaseYear) {
    super(name, price); //super adalah method yang menjalankan constructor dari kelas product
    this.author = author;
    this.releaseYear = releaseYear;
  }
}

const comicShinchan = new Book("komik shinchan", 15000, "bujang", 1989);
console.log(comicShinchan);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ` ` + this.lastName;
  }

  set fullName(fullname = "") {
    const splitted = fullname.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1];
  }
}

const person1 = new Person("ujang", "uchiha");
console.log(person1.fullName);
person1.fullName = "zhong li";
console.log(person1.fullName);

class Computer {
  constructor(cpu, gpu, ram) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
  }

  get fullSpecs() {
    return this.cpu + `, ` + this.gpu + `, ` + this.ram;
  }
}

const comp = new Computer("i7", "RTX 3060", "16GB DDR5");

console.log(comp.fullSpecs);

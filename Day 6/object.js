const bmw = {
  brand: "bmw",
  model: "320i",
  price: 800000000,
};

const toyota = {
  brand: "toyota",
  model: "supra 2jz",
  price: 1600000000,
};

//template = class
// class adalah template dari Object

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const honda = new Car("honda", "Jazz GK5", 200000000);
const ferrari = new Car("ferrari", "scuderia", 4000000000);

console.log(bmw, toyota, honda, ferrari);

const user = {
  name: "dapid",
  greet() {
    console.log("Hello, " + this.name);
  },
};

console.log(user);
console.log(user.name);
user.greet();

const person = {
  name: "frank",
  age: 22,
  address: {
    street: "BSD",
    postalCode: 15311,
  },
};

person.hobby = "basket";
person.age = 20;
delete person.hobby;

console.log(person.address.street);

// console.log(Object.keys(person));
console.log(Object.entries(person));

//looping seluruh key yang ada di dalam Object "person"
for (let key in person) {
  console.log(key, person[key]);
}

const chara = {
  firstName: "Kiritong",
  lastName: "Kazuto",
  get fullName() {
    return this.firstName + " " + this.lastName; //Kiritong Kazuto
  },
  set fullName(value = "") {
    const splittedValues = value.split(" "); //string akan diubah menjadi array, dipisahkan lewat spasi (" ")
    this.firstName = splittedValues[0]; //reassign values prop firstName
    this.lastName = splittedValues[1]; //reassign valies prop lastName
  },
};
//getter = sebuah function dalam object yang return dalam object yang return sebuah tipe data

console.log(chara.fullName);
chara.fullName = "naruto sasuke";
console.log(chara.fullName);

//destructure = unpack values object or array

const computer = {
  vga: "4090",
  processor: "i7 13700k",
};

const { vga, processor } = computer;

console.log(vga);
console.log(processor);

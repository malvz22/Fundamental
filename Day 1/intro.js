// @format

console.log("Hello world!"); //fungsi dari javascript untuk print out yang kita isi di dalamnya

let message; // Declaration
message = `Hello World 2`; //assign

console.log(message); //memanggil variable message dan print out

// var

var pakaian = `baju merah`; //declare and assign
pakaian = `baju biru`; //re-assign
var pakaian = ``; //redeclare and reassign
console.log(pakaian);

// let

let sepatu = `converse`; //declare and assign
sepatu = `nike`; //re-assign
//let sepatu = `adidas`; //tidak bisa redeclare
console.log(sepatu);

// const

const topi = `new era`; //declare and assign
// topi = `NY`; // tidak bisa re-assign
// const topi = `bday hat`; // tidak bisa re-declare

console.log(topi);

let say = `hello`; //alamat 1
let say2 = `hello2`; //alamat 2
let say_ = `hello3`;
let say$ = `hello4`;

// let 123say = "error"

// STRING;

// "" double
// '' single
// `` back tick

let string = "this string";
string = `also a string`;
string = ` "hehe" `;
string = " 'hehe' ";
string = ` '' "" `;

// Number
let number = 123;
let number2 = 456;
let bigInt = 123n;

console.log(typeof number, "is number");

// Boolean
let kenyang = true;
let lapar = false;

// null

let Null = null; //dapat digunakan sebagai sebuah variable yang akan diisi tapi tidak untuk saat ini
//product, qty, location
//mouse, 10, null

let productName;

//undefined

let Undefined;

// console.log(Undefined);

//object

const mobil = {
  warna: "hitam",
  brand: "volkswagen",
};

//array
const merkSepatu = ["adidas", "converse", "nike"];
console.log(typeof merkSepatu, "ini merkSepatu");

//Mutable vs Immutable

const mouse = "mouse hitam"; //immutable
// mouse = "mouse merah"; tidak bisa reassign

const arr = [1, 2, 3, 4]; //kumpulan angka

arr.push(5);
console.log(arr);

let name = "jhonny"; //stack 1
let newName = name; //stack 2 mengambil dari value stack pertama
newName = "jhon";

let person = {
  name: "Jhonny",
  age: 26,
};

let newPerson = person; //bersifat sebagai pointer (value nya menuju ke stack sebelumnya)
newPerson.name = "udin";

// deep copy = mengambil value dari variable mutable dan dijadikan sebagai pointer
// shallow copy = mengambil value dari variable mutable dan tidak tijadikan pointer
let deepCopy = person; //sifat menjadi pointer
//akan menunjuk value dari varlable person
//apabila terjadi perubahan didalam deepcopy akan mengubah isi dari person (reference)

let shallowCopy = { ...person }; //spread

console.log(name, newName);
console.log(person, newPerson);

deepCopy.name = "ujang";

console.log(person, deepCopy, shallowCopy);

//tipe data dan value

let angka = 123;
let string2 = "hello purwadhika";
console.log(string2, string2.length, "digits");
console.log(string2.slice(6, 11));
console.log(string2.replace("hello", "malam,"));
console.log(string2.toUpperCase());

// Operators + - * /

let string3 = string2 + " online";
console.log(string3 + "online online");
console.log(`ini string ${string3}.`); //literal
console.log("ini string " + string3 + ". ");

//index

//char = 1 digit string
//string = kumpulan char
//setiap char di dalam string memiliki posisi yang disebut sebagai index
//index dimulai dari 0

//object memiliki property dan method (fungsi yang ada dalam sebuah object)
//prop and method adalah sebuah key
//method adalah fungsi dalam object
//property adalah variable dalam object

//Number built in method
let number3 = 10;
console.log(number3.toString());

console.log(10 + "10"); //number + string = string
console.log(10 + "abc"); //number*string = NaN (Not a Number)

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-1)); //true
//number selain 0 dianggap true

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
//string yang lengthnya lebih dari 0 dianggap true

//Date data type

let date = new Date(0);
date = new Date("2017-01-26");
console.log(date);

//Operator 2
console.log(10 + 10); //20

//Modify in place

//pseudocode

//cari luas persegi panjang

//Hint: luas = panjang * lebar

//Akan ada 2 variable: panjang dam lebar
// untuk mencari luas, maka panjang akan dikali denga lebar
//

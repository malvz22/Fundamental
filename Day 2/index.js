console.log("Hello world");

//IF STATEMENT
//The basic foundation of conditioning, takes a condition which results in Boolean, and a block of code of code that executes when the condition result is true.

let age = 18;

if (age >= 17) {
  //task
  console.log("You're eligible to create iD");
} else {
  //task
  console.log("You're not eligible to create iD, Age required is at least 17");
}

let grade = "A";

if (grade === "A") console.log("Excellent result!");
else if (grade === "B") console.log("Great result!");
else if (grade === "C") console.log("Average result!");
else console.log("Invalid grade!");

let provinsi = "jakarta";

if (provinsi === "banten") {
  console.log("Gading Serpong");
  console.log("BSD City");
} else console.log("bukan banten");

let kota = "Tangerang Kota";
let kodepos = 15310;

if (provinsi === "banten" && kota === "Tangerang Kota" && kodepos === 15310) {
  console.log("Welcome to BSD City");
} else if (
  provinsi === "banten" &&
  kota === "Tangerang Kota" &&
  kodepos === 15311
) {
  console.log("Pasar lama tangerang");
} else if (provinsi === "jakarta" || kodepos === 11115) {
  console.log("welcome to Jakarta");
} else console.log("Bukan area tangerang");

//Nested IF (if yang bersarang)

let gender = "male";
let name = "naruto";
age = 10;

if (gender === "male") {
  if (age <= 10) {
    if (name === "naruto") console.log("anak konoha");
  } else console.log("Anak cowo");
} else if (age > 10 && age <= 17) console.log("cowo remaja");
else console.log("pria dewasa");
if (gender === "female") {
  if (age <= 10) console.log("Anak cewe");
  else if (age > 10 && age <= 17) console.log("cewe remaja");
  else console.log("wanita dewasa");
}

let kendaraan = "motor";
let brand = "toyota";

if (kendaraan === "mobil") console.log("ini adalah mobil");
else if (brand === "toyota") console.log("ini adalah mobil toyota");
else console.log("ini adalah motor");

if (kendaraan === "mobil") console.log("ini adalah mobil");
if (brand === "toyota") console.log("ini adalah mobil toyota");
else console.log("ini adalah motor");

let warna = "biru";
if (!(kendaraan === "mobil")) console.log("ini adalah motor not mobil");
// ! = tidak
// kendaraan === mobil adalah true
// !(true) = false

//Switch case

const fruit = "papaya";

switch (fruit) {
  case "papaya":
    console.log("ini buah pepaya");
    break;
  case "banana":
    console.log("ini buah pisang");
    break;
  case "orange":
    console.log("ini buah jeruk");
    break;
  default:
    console.log("ini bukan buah");
}

let number = 1;
switch (number) {
  case "1":
    console.log("ini adalah ==");
    break;
  default:
    console.log("ini adalah ===");
}

//falsy truthy

if (1) console.log("true");
if (!0) console.log("ini adalah 0");
if ("hello") console.log("ini hello true");
if (!"") console.log("tidak muncul");

let angka = 1;
if (angka) console.log("true dari variabel angka");

let nama = "";

if (!nama) console.log("nama kosong, wajib diisi");

//Ternary Operator (if else dalam single statement)

gender == "male" ? console.log("namanya Joko") : console.log("namanya Luna");

let kenegaraan = "jepang";
kenegaraan == "indonesia"
  ? console.log("halo indonesia") //if
  : kenegaraan == "jepang" //else if
  ? console.log("halo jepang")
  : console.log("halo korea"); //else

//Looping

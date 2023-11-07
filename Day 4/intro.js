//Array
//Anggap saja array itu seperti lemari. di dalam lemari ini kita dapat menyimpan berbagai barang

let arr1 = [`A`, `B`, `C`, `D`, `E`];
let arr2 = new Array(`A`, `B`, `C`, `D`, `E`);

console.log(arr1);
console.log(arr2);

const arrNumber = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5];
const books = ["ipa", "ips", "wanpis", "konoha"];

console.log(books);

//Object

const student1 = {
  name: "oden",
  email: "udin@gmail.com",
  age: 18,
};

const student2 = {
  name: "bujang",
  email: "bujang@gmail.com",
  age: 20,
};

const students = [student1, student2];

console.log(students);

//Build in method Array

//toString, method yang merubah array menjadi sebuah string
numbers.push(6, 7, 8);
console.log(numbers);
console.log(numbers.toString().replace(/,/g, ""));

// numbers.push(" 7 "); //tidak disarankan untuk menambahkan tipe data lain ke dalam array

//join mengubah string menjadi array dan mengganti setiap , menjadi value yang berada di parameter join
console.log(numbers.join(" "));

//pop menghapus index terakhir dari array
numbers.pop();
console.log(numbers);

numbers.shift(); //menghapus index pertama dari array
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.splice(0, 1, 8);
console.log(numbers);

console.log(numbers.length);

const numbers2 = [11, 12, 13, 14];

numbers.shift();
const gabunganNumbers = numbers.concat(numbers2);
console.log(gabunganNumbers);
const gabunganNumbers2 = [...numbers, ...numbers2];

console.log(gabunganNumbers2);

console.log(gabunganNumbers.indexOf(4)); //indexof method untuk mencari index dari value pada array

const fruits = ["apel", "mangga", "durian", "rambutan", "anggur"];
console.log(fruits.sort()); //mengurutkan berdasarkan Alphabet
console.log(gabunganNumbers.sort((a, b) => a - b)); //mengurutkan array of numbers dari kecil ke besar
console.log(gabunganNumbers.sort((a, b) => b - a));

console.log(fruits.reverse());

gabunganNumbers.map((value, index) => {
  console.log(value, "merupakan index ke-", index);
});

let numbers3 = [1, 2, 3, 4, 5];

const filterNumber = numbers3.filter((values) => {
  if (values % 2 === 0) return values;
});

console.log(filterNumber);

const found = numbers3.find((values) => {
  if (values % 2 === 0) return values;
});

console.log(found);

let sum = 0;

numbers3.forEach((values) => {
  sum += values;
});

console.log(sum);

let sum2 = numbers3.reduce((sum, value) => sum + value, 0);
console.log(sum2);

//Butuh parameter
//parameter map sebuah callback function
// () => {} ||  () =>
//callbnack function memiliki parameter

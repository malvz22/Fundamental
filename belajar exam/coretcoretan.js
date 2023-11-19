// var arr = [];
// var arr = new Array();

// var arr1 = ["toyota", "honda", "mazda"];

// arr1.push("ferrari", "lamborghini", "fiat");
// console.log(arr1);

// console.log(arr1[3]);

// console.log(typeof arr1.join(""));

// var nums = [10, 20, 30];

// let mergeArr = arr1.concat(nums);

// console.log(mergeArr);

// console.log(arr1.push(nums));

// console.log(arr1.join(" "));

// console.log(nums.toString());

// function perkalian(n1, n2) {
//   return console.log(n1 * n2);
// }

// const perkalian = (n1, n2) => {
//   return n1 * n2;
// };

// perkalian(61, 2);

// const result = perkalian(4, 2);

// const greet = () => {
//   let hello = "Hello World!";
//   return hello;
// };

// const greet2 = (name = "no name") => {
//   const hello = "Hello";

//   return hello + " " + name;
// };

// console.log(greet2());

// console.log(greet());

// function myFunc(a, b, ...more) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("More args", more);
// }

// myFunc("one", "two", "three", "four", "five");

// const message = (firstName) => {
//   const sayHello = () => {
//     return "Hello" + " " + firstName + ".";
//   };

//   const welcomeMessage = () => {
//     return "Welcome to Purwadhika!";
//   };

//   return sayHello() + " " + welcomeMessage();
// };

// console.log(message("randomname"));

// let arr2 = [3, 4, 5, 6, 7, 8, 9];

// console.log(arr2.slice(3));

// var test = "2";
// var test = "4";
// console.log(test);

// let sepatu = "converse";
// sepatu = "nike";

// const mobil = "honda";

// console.log(mobil);

// const hello = () => {
//   return "Hello World";
// };

// console.log(hello());

// var fibGenerator = function* () {
//   //create out put yg menghasilkan array kosong//

//   // jika n = 1 outputnya 0 //

//   if (n === 1) {
//     output.push(0);
//   }

//   // jika n = 2 outputnya 0,1 //
//   else if (n === 2) {
//     output.push(0, 2);
//   }

//jika n =3 maka outputnya jumlah dua angka sebelumnya//
//   else {
//     output.push(0, 1);
//     for (i = 2; i < n; i++) output.push(output[i - 2] + output[i - 1]);
//   }
//   return output;
// };

// console.log(fibonacciGenerator(5));

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(
//   array.filter((val) => {
//     return val > 4;
//   })
// );

// let res;

// function greet(str) {
//     res = str;
// }

// function hello() {
//     greet("Hello");
// }

// function thanks() {
//     greet("Thanks!");
// }

// const uppercase = (str) => {

//   for (let i = 0; i <= word.length; i++) {
//     if (word.charAt(i) === " ") {
//       word[i].toUpperCase();
//     }
//     return word.join();
//   }
// return word.map((val, index) => {
//   console.log(val[index + 1]);
// });
// };
// uppercase("Hello World");

// var res = 20;

// function a() {
//   console.log(res);
// }

// function b() {
//   var res = 30;
//   // console.log(res);
//   c();
// }

// function c() {
//   var res = 35;
//   a();
// }

// b();

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = array.map((el) => Math.round(el));

// let b = array.map((el) => {
//   return Math.ceil(el);
// });

// let c = array.filter((el) => {
//   return el < 3;
// });

// console.log(b);

// console.log(Math.ceil(6.5));

// const useObj = {
//   username: "userTest",
//   password: "123",
//   email: "test123@gmail.com",
//   intro: function () {
//     return [
//       "email saya" + this.email + " password saya " + this.password,
//       "Hello bandung",
//     ];
//   },
// };

// console.log(useObj.intro()[1]);

// let str = "javascript is for everyone yo!".split(" ");
// console.log(str);
// let result = " ";
// for (let i = 0; i < str.length; i++) {
//   // console.log(i + 2);
//   // i + 2;
//   result = str[i].split("");
// }

// console.log(result);

// let array2 = [
//   "5",
//   [["2.7"], [false]],
//   true,
//   "false",
//   0.5,
//   [[9], 0.3, [NaN, undefined, "true"]],
//   null,
//   "0",
//   undefined,
// ];

// console.log(Boolean(array2[1][2]));

// console.log(Boolean(array2[5][0]));

// console.log(Boolean(array2[1][2]) + Boolean(array2[5][0]));

let res2 = "jason naik kuda";
let count = 3;
do {
  switch (count % 3 == 0) {
    case 0:
      res2.slice(count, count + 20);
      break;
    default:
      res2 = res2.slice(count, count + 20);
  }
  count -= 1;
} while (count);
console.log(res2);

const test = "helloworld";

function tast() {
  console.log(test);
}
tast();

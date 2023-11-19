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

function perkalian(n1, n2) {
  return console.log(n1 * n2);
}

// const perkalian = (n1, n2) => {
//   return n1 * n2;
// };

perkalian(61, 2);

const result = perkalian(4, 2);

const greet = () => {
  let hello = "Hello World!";
  return hello;
};

const greet2 = (name = "no name") => {
  const hello = "Hello";

  return hello + " " + name;
};

console.log(greet2());

console.log(greet());

function myFunc(a, b, ...more) {
  console.log("a", a);
  console.log("b", b);
  console.log("More args", more);
}

myFunc("one", "two", "three", "four", "five");

const message = (firstName) => {
  const sayHello = () => {
    return "Hello" + " " + firstName + ".";
  };

  const welcomeMessage = () => {
    return "Welcome to Purwadhika!";
  };

  return sayHello() + " " + welcomeMessage();
};

console.log(message("randomname"));

let arr2 = [3, 4, 5, 6, 7, 8, 9];

console.log(arr2.slice(3));

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

var fibGenerator = function* () {
  //create out put yg menghasilkan array kosong//

  // jika n = 1 outputnya 0 //

  if (n === 1) {
    output.push(0);
  }

  // jika n = 2 outputnya 0,1 //
  else if (n === 2) {
    output.push(0, 2);
  }

  //jika n =3 maka outputnya jumlah dua angka sebelumnya//
  else {
    output.push(0, 1);
    for (i = 2; i < n; i++) output.push(output[i - 2] + output[i - 1]);
  }
  return output;
};

// console.log(fibonacciGenerator(5));

let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
  array.filter((val) => {
    return val > 4;
  })
);

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

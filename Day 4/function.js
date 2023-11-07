//Function

//func declaration

function square(number) {
  //number disini adalah parameter
  //task dari function "square"
  return number * number;
}

function square2(number) {
  number * number;
}

function square3(number) {
  console.log(number * number); //print
}

function print(value) {
  console.log(value);
}

//square merupakan nama function
//number merupakan parameter
//parameter adalah sebuah variable yang exist di dalam sebuah function
//passing value ke dalam function lewat parameter
//return merupakan hasil dari function

console.log(square(5, "with return"));
console.log(square2(5), "no return");

let hasil1 = square(8);
let hasil2 = square2(7);

console.log(hasil1);
console.log(hasil2);

let hasil3 = square3(4);

console.log(hasil3);

print("haha");

function sum(num1, num2) {
  print(num1 + num2);
}

sum(4, 7);

function pengurangan(num1, num2) {
  print(num1 - num2);
}

pengurangan(4, 2);

//Function Expression

const perkalian = function (angka1, angka2) {
  print(angka1 * angka2);
};

perkalian(4, 11);

const pembagian = (num1, num2) => {
  print(num1 / num2);
};

//"pembagian" adalah nama function
//num1, num2 merupakan parameter

pembagian(8, 2);

//Arrow function

const penjumlahan3 = (num1, num2, num3) => num1 + num2 + num3;
const penjumlahan3_1 = (num1, num2, num3) => {
  num1 + num2 + num3;
};

console.log(penjumlahan3(4, 5, 6));

const greetings = (name) => {
  const hello = "Hello";
  return hello + ` ` + name;
};

console.log(greetings("David"));

//Memory stack
//greetings
//greetins dipanggil
//greetings selesai dipanggil

const say = (name, greet = "Hello, ") => {
  console.log(greet + name);
};

say("Malv");
say("Malv", "henyoo ");

const restFunction = (param1, param2, ...restparam) => {
  console.log(param1, "arg1");
  console.log(param2, "arg2");
  console.log(restparam, "restParam");
};

restFunction(1, 2, 3, 4, 5, 6, 7);

const testFunction = (param1, param2, param3) => {
  console.log(param1, "arg1");
  console.log(param2, "arg2");
  console.log(param3, "arg2");
};
testFunction(1, 2, 3, 4);

const restFunction2 = (...restParam) => {
  console.log(restParam, "restParam");
};

restFunction2(1, 2, 3, 4, 5);

const restSum = (...restParam) => {
  let result = 0;
  restParam.map((value) => {
    result += value;
  });

  return result;
};

console.log(restSum(1, 2, 3, 4));

//nested Function

const getMsg = (name) => {
  const say = () => "Hey, " + name + ".";
  const welcomeMsg = () => " Welcome to Purwadhika";

  return say() + welcomeMsg();
};

console.log(getMsg("Malv"));

//Closure

const greetingsClosure = (name) => {
  const hello = "hello, ";

  return () => hello + name;
};

const fullName = (fName, lName) => fName + " " + lName;

const greet = (cb) => "hello, " + cb;

console.log(greet(fullName("Malvin", `A`)));

const greetingMalv = greetingsClosure("Malv");

console.log(greetingMalv());

console.log(greetingsClosure("konoha")());

//call back function
//function yang berada di dalam argumen/parameter

const names = ["udin", "nobita", "naruto"];

const map = names.map((values) => {
  return values === "nobita" ? "cengeng" : values;
});

const tampung = [];
const foreach = names.forEach((values) => {
  tampung.push(values);
});

console.log(map, `ini map`);
console.log(tampung, `ini forEach`);

//Currying

const multiplier = (factor, number) => number * factor;
console.log(multiplier(5, 3));

const multiplier2 = (factor) => (number) => factor * number;

console.log(multiplier2(5)(3));

const mul3 = multiplier2(3);
const mul5 = mul3(5);

console.log(mul5);

//Recursive

const countDown = (fromNumber) => {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) return countDown(nextNumber);
};

countDown(5);

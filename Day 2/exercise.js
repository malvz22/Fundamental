//1. Celsius to Fahrenheit

let celsius = 60;

console.log(celsius, `Celsius equals`, celsius * (9 / 5) + 32, `Fahrenheit`);

//2. Odd or Even numbers

let number = 25;

if (number % 2 === 0) {
  console.log(number, "is Even Number");
} else {
  console.log(number, "is Odd Number");
}

//3. Prime Numbers

//Prime numbers are round number > 1 and can only divided by the number itself and 1

let number2 = 6;
let isPrime = true;

if (number2 === 1) {
  console.log(`${number2} is not a prime number`);
} else if (number2 > 1) {
  for (let i = 2; i < number2; i++) {
    if (number2 % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${number2} is a prime number`);
} else {
  console.log(`${number2} is not a prime number`);
}

if (number2 < 1) {
  console.log(`${number2} is not a prime number`);
}

//4. Sum Numbers of N

let n = 5;
let result = 0;
let output = " ";

for (let i = 1; i <= n; i++) {
  if (i == n) output += i;
  else output += `${i} + `;
  result += i;
}

console.log(output, "=", result);

//5. Factorial

let facNum = 4;
let resultFac = 1;
let msg = " ";

for (let i = 1; i <= facNum; i++) {
  if (i == facNum) msg += i;
  else msg += `${i} x `;
  resultFac *= i;
}

console.log(msg, "=", resultFac);
// console.log(facNum, "=", resultFac);

//6. Fibonacci numbers

// let nFibonacci = 15;
// let first = 1;
// let second = 1;
// let printt = " ";
// let res;

// for (let i = 1; i <= nFibonacci; i++) {
//   printt += `${first} `;
//   let next = first + second;
//   first = second;
//   second = next;
// }

// console.log(`${nFibonacci} ->`, printt);
// console.log(`${nFibonacci} ->`, res);

nFibonacci = 15;
let tmp1 = 0, //angka sebelumnya
  tmp2 = 1, //angka saat ini
  tmp3 = 0; //angka berikutnya
for (let i = 2; i <= nFibonacci; i++) {
  tmp3 = tmp1 + tmp2;
  tmp1 = tmp2;
  tmp2 = tmp3;
}

console.log(nFibonacci, "->", tmp3);

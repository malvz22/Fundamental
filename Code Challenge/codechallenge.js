//1. Memoize

//Sum function

const sum = (n1, n2) => n1 + n2;

// Fibonacci Function

const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

//Factorial Function

const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

//Memoization Function

let memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = String(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

let fName = "sum";
let actions = ["call", "call", "getCallCount", "call", "getCallCount"];
let values = [[2, 2], [2, 2], [], [1, 2], []];
let resultArr = [];

let sumValues = values[0][0] + values[0][1];

// console.log(sumValues);

let callCount = 0;

// console.log(memoizeFn(1, 3));  // 4
// console.log(memoizeFn(2, 7)); // 9
// console.log(memoizeFn(1, 3)); // 4
// console.log(callCount); // 2

const memoizeFn = memoize(function (a, b) {
  callCount++;
  return sum(a, b);
});

if (actions.length === values.length) {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j <= values[i].length; j++) {
      console.log(values[i][j]);
      if (actions[i] === "call") {
        // resultArr.push(memoizeFn(values[i][j], values[i][j + 1]));
      } else if (actions[i] === "getCallCount") {
        // resultArr.push(callCount);
      }
    }
  }
  console.log(resultArr);
} else {
  console.log("different length");
}

// switch (fName) {
//   case "sum":
//     let callCount = 0;

//     break;

//   case "fib":
//     console.log("do fib here");
//     break;

//   default:
//     break;
// }

//

// //1. Memoize

// //Sum function

// const sum = (n1, n2) => n1 + n2;

// // Fibonacci Function

// const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// //Factorial Function

// const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

// //Memoization Function

// let memoize = (fn) => {
//   const cache = {};
//   return function (...args) {
//     const key = String(args);
//     if (key in cache) {
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// };

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });

// const getCallCount = () => {
//   return callCount;
// };

// console.log(memoizedFn(2, 2));
// console.log(memoizedFn(2, 2));
// console.log(getCallCount());

// let fName = "sum";
// let actions = ["call", "call", "getCallCount", "call", "getCallCount"];
// let values = [[2, 2], [2, 2], [], [1, 2], []];
// let resultArr = [];

// let sumValues = values[0][0] + values[0][1];

// console.log(sumValues);

// let callCount = 0;

// console.log(memoizeFn(1, 3));  // 4
// console.log(memoizeFn(2, 7)); // 9
// console.log(memoizeFn(1, 3)); // 4
// console.log(callCount); // 2

// const memoizeFn = memoize(function (a, b) {
//   callCount++;
//   return sum(a, b);
// });

// if (actions.length === values.length) {
//   for (let i = 0; i < values.length; i++) {
//     for (let j = 0; j <= values[i].length; j++) {
//       console.log(values[i][j]);
//       if (actions[i] === "call") {
//         // resultArr.push(memoizeFn(values[i][j], values[i][j + 1]));
//       } else if (actions[i] === "getCallCount") {
//         // resultArr.push(callCount);
//       }
//     }
//   }
//   console.log(resultArr);
// } else {
//   console.log("different length");
// }

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

//2. Counter

// let n = -2;

// class Counter {
//   constructor(n) {
//     this.count = n;
//   }
//   next() {
//     return this.count++;
//   }
// }

// var createCounter = function (n) {
//   let count = n;
//   return function () {
//     return count++;
//   };
// };

// let calls = ["call", "call", "call", "call", "call"];
// const counter = createCounter(n);

// if (n <= -1000 || n >= 1000) {
//   console.log("n must be between -999 to 999");
// } else {
//   for (let i = 0; i < calls.length; i++) {
//     if (calls[i] === "call") {
//       console.log(counter());
//     } else {
//       console.log("false");
//     }
//   }
// }

//3. Sleep

// async function sleep(millis) {
//   await new Promise((resolve, reject) => {
//     millis < 1 || millis > 1000
//       ? reject(new Error("Invalid Argument."))
//       : setTimeout(resolve, millis);
//   });
// }

// let t = Date.now();

// sleep(200).then(() => console.log(Date.now() - t));

//4. Array Prototype Last

// Array.prototype.last = function () {
//   return this.length === 0 ? -1 : this[this.length - 1];
// };

// let arr = [null, {}, 3];
// arr.last();

//5. Function Composition

// var compose = function (functions) {
//   return functions.reduce(
//     (acc, fn) => {
//       return (x) => acc(fn(x));
//     },
//     (x) => x
//   );
// };

// const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
// console.log(fn(1));

//6. Filter Elements from Array

// console.log(-(10 ** 9));

// var filter = function (arr, fn) {
//   var filtered = [];
//   arr.forEach((val, index) => {
//     if (fn(val, index)) filtered.push(val);
//   });
//   return filtered;
// };

// function greaterThan10(n) {
//   return n > 10;
// }
// console.log(filter([0, 10, 20, 30], greaterThan10));

//7. Apply Transform Over Each Element in Array

// var map = function (arr = [], fn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = fn(arr[i], i);
//   }
//   return newArr;
// };

// function plusone(n) {
//   return n + 1;
// }

// function plusI(n, i) {
//   return n + i;
// }

// function constant() {
//   return 42;
// }

// console.log(map([1, 2, 3], plusone));
// console.log(map([1, 2, 3], plusI));
// console.log(map([1, 2, 3], constant));

//8. Check if Object Instance of Class

// var checkIfInstanceOf = function (obj, classFunction) {
//   return (
//     obj != null &&
//     typeof classFunction === `function` &&
//     Object(obj) instanceof classFunction
//   );
// };

// class Animal {}
// class Dog extends Animal {}

// console.log(checkIfInstanceOf(new Date(), Date));
// console.log(checkIfInstanceOf(new Dog(), Animal));
// console.log(checkIfInstanceOf(Date, Date));
// console.log(checkIfInstanceOf(5, Number));

//9. Array Reduce Transformation

// var reduce = function (nums, fn, init) {
//   let val = init;
//   if (init <= 1000 && init >= 0 && nums.length >= 0 && nums.length <= 1000) {
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] >= 0 && nums[i] <= 1000) val = fn(val, nums[i]);
//     }
//     return val;
//   } else {
//     console.log("Error");
//   }
// };

// function sum(accum, curr) {
//   return accum + curr;
// }

// console.log(reduce([1, 2, 3, 4], sum, 0));

//10. Generate Fibonacci Sequence

// var fibGenerator = function* () {
//   let curr = 0,
//     next = 1;
//   while (true) {
//     yield curr;
//     [curr, next] = [next, curr + next];
//   }
// };

// const gen = fibGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

//11. Counter II

// var createCounter = function (init) {
//   if (init <= -1000 || init >= 1000) return console.log("invalid argument");
//   else {
//     let curr = init;
//     return {
//       increment: () => ++curr,
//       decrement: () => --curr,
//       reset: () => (curr = init),
//     };
//   }
// };

// const counter = new createCounter(10);

// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

//12. Chunk Array

// var chunk = function (arr, size) {
//   let result = [];
//   while (arr.length) {
//     result.push(arr.splice(0, size));
//   }
//   return result;
// };

// console.log(chunk([1, 9, 6, 3, 2], 3));

//13. Array Wrapper

// var ArrayWrapper = function (nums) {
//   this.nums = nums;
// };

// /**
//  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function () {
//   return this.nums.reduce((sum, num) => (sum += num), 0);
// };

// /**
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function () {
//   return `[${this.nums.join(`,`)}]`;
// };

// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);

// //14. Hello world function

// var createHelloWorld = function () {
//   return function (...args) {
//     while (args) return "Hello World";
//   };
// };

// const f = createHelloWorld();

// console.log(f([{}, null, 42]));

//15. To be or not to be

//Function called "Expect"
//Returns two functions: toBe(value) accepts

// var expect = function (val) {
//   var toBe = (va) => {
//     if (val === va) return true;
//     else throw new Error("Not Equal");
//   };

//   var notToBe = (va) => {
//     if (val !== va) return true;
//     else throw new Error("Equal");
//   };

//   return {
//     toBe,
//     notToBe,
//   };
// };

// console.log(expect(5).notToBe(5));

//17. Join Two Arrayss by ID

// var join = function (arr1, arr2) {
//   let result = {};
//   arr1.forEach((val) => (result[val.id] = val));
//   arr2.forEach((val) => {
//     if (result[val.id]) {
//       Object.keys(val).forEach((key) => {
//         result[val.id][key] = val[key];
//       });
//     } else result[val.id] = val;
//   });
//   return Object.values(result);
// };

// let arr1 = [
//     { id: 1, x: 1 },
//     { id: 2, x: 9 },
//   ],
//   arr2 = [{ id: 3, x: 5 }];

// console.log(join(arr1, arr2));

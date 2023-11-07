// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

//Without Sort Function

let arr = [12, 5, 23, 18, 4, 45, 32];

console.log(Math.min(...arr));

const sort = (array) => {
  //   let lowestValue = Math.min(...array);

  //   let highestValue = Math.max(...array);

  let lowestValue = array.sort((a, b) => a - b)[0];
  let highestValue = array.sort((a, b) => b - a)[0];

  let sumValue = 0;

  arr.forEach((value) => {
    sumValue += value;
  });

  let average = sumValue / arr.length;

  console.log(
    `Lowest : ${lowestValue}, highest : ${highestValue}, average : ${average}`
  );
};

sort(arr);

// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = [] → “apple,banana,cherry, and date”

// let arr2 = ["apple", "banana", "cherry", "date"];

// console.log(arr2.join());

// const concat = (array) => {
//   lastArrayValue = array.slice(-1);
//   console.log(lastArrayValue);

//     array.join();
// };

// concat(arr2);

// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

let string = "Hello World";

const splitString = (str) => {
  split = str.split(` `);
  console.log(split);
};

splitString(string);

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let array1 = [1, 2, 3],
  array2 = [3, 2, 1];

const sumArray = (arr1, arr2) => {
  sum1 = arr1[0] + arr2[0];
  sum2 = arr1[1] + arr2[1];
  sum3 = arr1[2] + arr2[2];
  let newArray = [];
  newArray.push(sum1, sum2, sum3);
  console.log(newArray);
};

sumArray(array1, array2);

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// let arrAdd = [1, 2, 3, 4];
// let newElement = 4;

// const addElement = (array, newElement) => {
//   array.map((value) => {
//     if (newElement != value) {
//       array.push(newElement);
//     }
//   });
//   console.log(array);
// };

// addElement(arrAdd, newElement);

// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

let array = [1, 2, 3, 4, 5, 6];

const removeOddNumber = (array) => {
  const newArr = array.filter((value) => {
    return value % 2 == 0;
  });
  console.log(newArr);
};

removeOddNumber(array);

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

// let maxSize = 5;

// const newArray = (n) => {
//     let newArray = [];
//     newArray.map((value) => {
//         newArray.push(n);
//     })
// }

// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const mergeArray = (arr1, arr2) => {
  let newArray = arr1.concat(arr2);
  console.log(newArray);
};

mergeArray(arr1, arr2);

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const duplicateValue = (arr) => {
  let findDuplicate = arr.filter((value, index) => {
    arr.indexOf(value) !== index;
  });
  console.log(findDuplicate);
};

duplicateValue(arr);

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

let arrdiff1 = [1, 2, 3, 4, 5],
  arrdiff2 = [3, 4, 5, 6, 7];

const arrayDifference = (arr1, arr2) => {
  let arrdiff = arr1.filter((item) => !arr2.includes(item));
  console.log(arrdiff);
};

arrayDifference(arrdiff1, arrdiff2);

// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

let primitiveArr = [1, [], undefined, {}, "string", {}, []];

const scanPrimitive = (arr) => {
  let newArr = [];
  arr.map((value) => {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "undefined"
    ) {
      newArr.push(value);
    }
  });
  console.log(newArr);
};

scanPrimitive(primitiveArr);

// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

let numbers = [5, 3, 1, 7, 2, 6];

const secondSmallest = (n) => {
  let secondSmallest = n.sort((a, b) => a - b)[1];
  console.log(secondSmallest);
};

secondSmallest(numbers);

// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

let mixedArray = ["3", 1, "string", null, false, undefined, 2];

const sumMixedArray = (array) => {
  let total = 0;
  array.map((value) => {
    if (typeof value === "number") {
      total += value;
    }
  });
  console.log(total);
};

sumMixedArray(mixedArray);

// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

let sumDuplicateArr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

const sumDuplicate = (array) => {
  let sortArr = array.sort((a, b) => a - b);
  let duplicateArray = [];
  let sum = 0;
  sortArr.map((value, index) => {
    if (value === sortArr[index - 1] || value === sortArr[index + 1])
      duplicateArray.push(value);
  });
  duplicateArray.map((value) => {
    sum += value;
  });
  console.log(sum);
};

sumDuplicate(sumDuplicateArr);

// let newArr = sumDuplicateArr.sort((a, b) => a - b);
// console.log(newArr);
// let duplicateArr = [];

// newArr.forEach((value, index) => {
//   if (value === newArr[index - 1] || value === newArr[index + 1])
//     duplicateArr.push(value);
// });

// let sum = 0;
// duplicateArr.map((value) => {
//   sum += value;
// });

// console.log(sum);

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

let pick = "scissor";

const rockPaperScissor = (pick) => {
  let randomArr = [`rock`, `paper`, `scissor`];
  let randomIndex = Math.floor(Math.random() * randomArr.length);
  let randomItem = randomArr[randomIndex];
  let resultArr = [];
  resultArr.push(pick);
  resultArr.push(randomItem);

  console.log(resultArr);

  if (resultArr[0] === `scissor` && resultArr[1] === `rock`)
    console.log(`lose`);
  else if (resultArr[0] === `scissor` && resultArr[1] === `paper`)
    console.log(`win`);
  else if (resultArr[0] === `scissor` && resultArr[1] === `scissor`)
    console.log(`draw`);
  else if (resultArr[0] === `paper` && resultArr[1] === `rock`)
    console.log(`win`);
  else if (resultArr[0] === `paper` && resultArr[1] === `scissor`)
    console.log(`lose`);
  else if (resultArr[0] === `paper` && resultArr[1] === `scissor`)
    console.log(`draw`);
  else if (resultArr[0] === `rock` && resultArr[1] === `paper`)
    console.log(`lose`);
  else if (resultArr[0] === `rock` && resultArr[1] === `scissor`)
    console.log(`win`);
  else if (resultArr[0] === `rock` && resultArr[1] === `rock`)
    console.log(`draw`);
};

rockPaperScissor("rock");

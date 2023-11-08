// ● Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2

const majority = (arr = []) => {
  let major = 0,
    count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[major]) count++;
    else count--;

    if (count === 0) {
      major = i;
      count = 1;
    }
  }
  return arr[major];
};

console.log(majority([3, 2, 3]));

// ● Create a function to convert roman numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: 3
// ○ Explanation: III = 3.
// ● Example 2:
// ○ Input: s = "LVIII"
// ○ Output: 58
// ○ Explanation: L = 50, V= 5, III = 3.
// ● Example 3:
// ○ Input: s = "MCMXCIV"
// ○ Output: 1994
// ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const convertRoman = (romanNum = "") => {
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output = 0;

  for (let i = 0; i < romanNum.length; i++) {
    if (romanNum[i] === "I" && romanNum[i + 1] === "V") {
      output += 4;
      i++;
    } else if (romanNum[i] === "I" && romanNum[i + 1] === "X") {
      output += 9;
      i++;
    } else if (romanNum[i] === "X" && romanNum[i + 1] === "L") {
      output += 40;
      i++;
    } else if (romanNum[i] === "X" && romanNum[i + 1] === "C") {
      output += 90;
      i++;
    } else if (romanNum[i] === "C" && romanNum[i + 1] === "D") {
      output += 400;
      i++;
    } else if (romanNum[i] === "C" && romanNum[i + 1] === "M") {
      output += 900;
      i++;
    } else {
      output += romanHash[romanNum[i]];
    }
  }

  return output;
};

console.log(convertRoman("MCMXCIV"));

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const pascal = (rows) => {
  if (rows === 0) return [];
  if (rows === 1) return [[1]];

  let result = [];

  for (let i = 1; i <= rows; i++) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        arr.push(1);
      } else arr.push(result[i - 2][j - 1] + result[i - 2][j]);
    }
    result.push(arr);
  }
  return result;
};

console.log(pascal(5));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maximumProfit = (pricesArr) => {
  let profit = 0;

  let stockToBuy = pricesArr[0];

  for (let i = 1; i < pricesArr.length; i++) {
    if (stockToBuy > pricesArr[i]) {
      stockToBuy = pricesArr[i];
    }

    const currProfit = pricesArr[i] - stockToBuy;

    if (currProfit > profit) {
      profit = currProfit;
    }
  }

  return profit;
};

console.log(maximumProfit([7, 6, 4, 3, 1]));

// ● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// ● Example :
// ○ Input : AB
// ○ Output : 28

const titleToNumber = (string) => {
  let output = 0;

  for (let i = 0; i < string.length; i++) {
    const charVal = string.charCodeAt(i) - 64;
    output = output * 26 + charVal;
  }

  return console.log("Column " + string + " is " + output);
};

titleToNumber("A");

// ● Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]

const detectSingleNumber = (arr = []) => {
  let sortedArr = arr.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i - 1] !== sortedArr[i] && sortedArr[i + 1] !== sortedArr[i])
      return console.log(sortedArr[i]);
  }
};

detectSingleNumber([1]);

// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

const isAnagram = (s, t) => {
  s = s.replace(/\s/g, ``).toLowerCase();
  t = t.replace(/\s/g, ``).toLowerCase();

  if (s.length !== t.length) {
    return false;
  }

  s = s.split(``).sort().join();
  t = t.split(``).sort().join();

  return s === t;
};

console.log(isAnagram("anagram", "nagaram"));

// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps

// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step

const climbStairs = (numbers) => {
  if (numbers <= 2) {
    return numbers;
  }

  const ways = new Array(numbers + 1);
  ways[1] = 1;
  ways[2] = 2;

  for (let i = 3; i <= numbers; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[numbers];
};

console.log(climbStairs(4));

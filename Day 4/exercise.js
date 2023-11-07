// Triangle function

// const triangle = (height) => {
//   let nums = "";
//   for (let i = 1; i <= height; i++) {
//     nums += i;
//     console.log(nums);
//   }
// };

// triangle(5);

arrInput = [10, 55, 79, 32];

const maxValue = (arrInput) => {
  let maxValue = 0;
  for (let i = 0; i < arrInput.length; i++) {
    if (maxValue < arrInput[i]) maxValue = arrInput[i];
  }
  return maxValue;
};

console.log(maxValue(arrInput));

//Triangle 2

const triangle2 = (height) => {
  let counter = 0;
  for (let i = 1; i <= height; i++) {
    let result = ``; //menampung setiap baris segitiga yang akan di print
    for (let j = 0; j < i; j++) {
      //increment counter
      counter++;
      result += counter > 9 ? `${counter} ` : `0${counter} `;
    }
    console.log(result);
  }
};

triangle2(4);

// ● Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

let n = 15;

const fizzBuzz = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz, ";
    } else if (i % 3 === 0) {
      result += "Fizz, ";
    } else if (i % 5 === 0) {
      result += "Buzz, ";
    } else {
      result += `${i}, `;
    }
  }
  console.log(result);
};

fizzBuzz(n);

// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

const bodyMassIndex = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("less weight");
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log("ideal");
  } else if (bmi >= 25 && bmi < 30) {
    console.log("overweight");
  } else if (bmi >= 30 && bmi < 39.9) {
    console.log("very overweight");
  } else if (bmi > 39.9) {
    console.log("obesity");
  }
};

bodyMassIndex(50, 1.5);

// ● Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

arrExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterOddNumber = (arr) => {
  const newArr = arr.filter((values) => {
    return values % 2 == 0;
  });
  console.log(newArr);
};

filterOddNumber(arrExample);

// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

const splitString = (str) => {
  let newString = str.split(` `);
  console.log(newString);
};

splitString("Hello World");

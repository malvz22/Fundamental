// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

let n = 9;

let ans;

for (let i = 1; i <= 10; i++) {
  ans = n * i;
  console.log(`${n} x ${i} = ${ans}`);
}

// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

let string = "madam";

// for (let i = 0; i < string.length; i++) {
//   console.log(string.charAt(i));
//   if (string.charAt(i) === string.charAt(0)) {
//     console.log(`'${string}' -> palindrome`);
//   } else {
//     console.log(`'${string}' -> not palindrome`);
//   }
// }

let reverseString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string.charAt(i);
}

console.log(
  string,
  "->",
  string === reverseString ? "palindrome" : "not palindrome"
);

// Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

let cm = 100000;

console.log(`${cm} cm = "${cm / 100000} km"`);

//  Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

let numCurr = 1000;

let formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format(numCurr);

console.log(`${numCurr} -> "${formatRupiah}"`);

let string2 = "hello world";

// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

let searchString = "ell";
console.log(string2.replace(searchString, ""));
// let index = string2.indexOf(searchString);
// if (index === -1) {
//   console.log(string2);
// }

// console.log(
//   string2.slice(0, index) + string2.slice(index + searchString.length)
// );

//  Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

let capitalize = " ";

for (let i = 0; i < string2.length; i++) {
  if (i == 0 || string2.charAt(i - 1) == " ") {
    capitalize += string2.charAt(i).toUpperCase();
  } else {
    capitalize += string2.charAt(i).toLowerCase();
  }
}
console.log(capitalize);

console.log(string2.charAt(0).toUpperCase() + string2.slice(1));

// Write a code to reverse a string.
// ○ Example : “hello” → “olleh”

console.log(string2.split("").reverse().join(``));

// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

let string3 = "The QuiCk BrOwN Fox";
let newString3 = " ";

for (let i = 0; i < string3.length; i++) {
  if (string3[i] == string3[i].toUpperCase())
    newString3 += string3[i].toLowerCase();
  else if (string3[i] == string3[i].toLowerCase())
    newString3 += string3[i].toUpperCase();
}

console.log(newString3);

// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

let num1 = 42,
  num2 = 27,
  num3 = 18;

let largest = num1 > num2 ? num1 : num2;

console.log(largest);

// ● Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let lower = num3,
  middle = num2,
  highest = num1;

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

let detectType = "string";

console.log(typeof detectType);

if (typeof detectType === "string") {
  console.log(`${detectType} -> 1`);
} else if (typeof detectType === "number") {
  console.log(`${detectType} -> 2`);
} else {
  console.log(`${detectType} -> 3`);
}

console.log(typeof detectType);

// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor
// *w*y`

let word = "An apple a day keeps the doctor away";
let newWord = " ";

for (let i = 0; i < word.length; i++) {
  if (word[i] == "A" || word[i] == "a") {
    newWord += word[i].replace("*");
  }
}

console.log(newWord);

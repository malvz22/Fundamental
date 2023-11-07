//For Loop

for (let i = 0; i < 3; i++) {
  //task
  console.log("Hello!"); // 0, 1, 2
}
// statememt 1: let i = 0 dipanggil pertama kali for dijalankan
// statement 2: i < 3 adalah kondisi yang menentukan apakah task harus/tidak dijalankan
// statement 3: i++ akan dijalankan setiap seluruh task berhasil dijalankan

// while

let number = 0;

while (number < 3) {
  console.log("Hello while!");
  number++;
}

number = 0; //falsy
do {
  //task
  console.log("ini jalan sebelum kondisi");
} while (number);

for (let i = 0; i < 5; i++) {
  if (i == 2) continue; //skip apabila i == 2
  console.log("ini angka", i);
}

const numberOfFactorial = 6;
let result = 1;
let message = "factorial 6 => ";
for (let i = 1; i <= numberOfFactorial; i++) {
  // message += numberOfFactorial ? i : `${i} x `;
  if (i == numberOfFactorial) message += i;
  else message += `${i} x `; //factorial 6 => 1 x
  result *= i;
}

console.log(message, "adalah", result);

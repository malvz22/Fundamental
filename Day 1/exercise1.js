const quokka = {
  isAwesome: true,
};

console.log(quokka);

console.log("hello world");

//1. Mencari luas sebuah persegi panjang

//Pseudocode:
//Akan ada 2 variabel, yaitu panjang dan lebar
//Untuk mencari luas sebuah persegi panjang, variabel panjang akan dikalikan dengan variabel lebar
//Rumus mencari luas: p x l

//ans

let panjang1 = 5;
let lebar1 = 3;
const luasPersegiPanjang = panjang1 * lebar1;

console.log(
  `Luas persegi panjang dengan panjang ${panjang1} dan lebar ${lebar1} adalah ${luasPersegiPanjang}`
);

//2. Mencari keliling sebuah persegi panjang

//Pseudocode:
//Seperti mencari luas, akan ada 2 variabel yaitu panjang dan lebar
//Rumus: 2(panjang+lebar)
//dari rumus diatas bisa dibaca bahwa untuk mencari keliling sebuah persegi panjang, panjang akan ditambah dengan lebar, setelah itu hasil penjumlahan tersebut dikali dengan 2

//ans

let panjang2 = 5;
let lebar2 = 3;

const kelilingPersegiPanjang = 2 * (panjang2 + lebar2);

console.log(
  `Keliling persegi panjang dengan panjang ${panjang2} dan lebar ${lebar2} adalah ${kelilingPersegiPanjang}`
);

//3. Lingkaran (mencari diameter, circumference(keliling), and luas lingkaran)
//terdapat dua variable untuk mencari 3 value yang disebutkan yaitu pi (nilai pi: 3.14) dan jari-jari
//Untuk mencari diameter lingkaran, jari-jari akan dikalikan dengan 2 (rumus: d = 2r)
//Untuk mencari keliling lingkaran, jari-jari akan dikalikan dengan pi dan setelah itu dikalikan dengan 2 (rumus: 2(pi)r)
//Dan untuk mencari luas lingkaran, jari-jari akan dikuadratkan dan dikalikan dengan pi
//print hasil diameter, keliling, dan luas lingkaran di dalam console

let pi = Math.PI,
  r = 5;

//Diameter Lingkaran

let diameterLingkaran = r * 2;

//Keliling Lingkaran

let kelilingLingkaran = 2 * pi * r;

//Luas Lingkaran

let luasLingkaran = pi * r ** 2;

console.log(diameterLingkaran, kelilingLingkaran, luasLingkaran);

console.log(`Jari-jari: ${r}`);
console.log(`Diameter: ${diameterLingkaran}`);
console.log(`Keliling: ${kelilingLingkaran.toFixed(4)}`);
console.log(`Luas: ${luasLingkaran.toFixed(3)}`);

//4. Sudut segitiga
// Jumlah sudut dalam sebuah segitiga adalah 180
// Terdapat 3 variabel yaitu sudut A, sudut B, dan sudut C
// untuk mencari sudut C, jumlah sudut (180) akan dikurangi oleh sudut A dan sudut B

let jumlahSudut = 180;
let sudutA = 80;
let sudutB = 65;

let sudutC = jumlahSudut - sudutA - sudutB;

console.log(`Nilai Sudut C adalah ${sudutC} derajat.`);

//5. Menghitung Perbedaan tanggal dalam hari
//terdapat dua variable yaitu tanggal1 dan tanggal2

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

timeDifference = Math.abs(date2 - date1);
daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

console.log(daysDifference);

//6. Konversi hari ke format tahun, bulan, dan hari

function convertDays(days) {
  daysInYear = 365;
  daysInMonth = 30;

  let years = Math.floor(days / daysInYear);
  let remainingDays = days % daysInYear;
  let months = Math.floor(remainingDays / daysInMonth);
  let remainingDaysInMonth = remainingDays % daysInMonth;

  return {
    years,
    months,
    days: Math.round(remainingDaysInMonth),
  };
}

let days = 366;
let result = convertDays(days);
console.log(
  `${result.years} years, ${result.months} months, ${result.days} days.`
);

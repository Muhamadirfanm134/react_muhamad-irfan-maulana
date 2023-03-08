// Deklarasi Variabel Let
let num1 = 10;
num1 = 15;

console.log({ num1 });

// Deklarasi Variabel Const
const nama = "Muhamad Irfan Maulana";

console.log({ nama });

// Scooping
var name = "Ando";
let age = 23;
const isMarried = true;

coba1();

function coba1() {
  let x = "Andi";
  let y = 23;
  console.log({ x });
}

if (false) {
  let a = 1;
  let b = 2;
  let c = a + b;
  console.log({ c });
}

console.log({ age });

// hoisting
namaSaya = "Irfan";
var namaSaya;

console.log({ namaSaya });

// Values and References
let a3 = 10;
let a4 = a3;

console.log(a3 === a4);
console.log(a4 === 10);

let arr1 = [10];
let arr2 = [10];

console.log(arr1 === arr2);

// Pembanding
const data1 = 10;
const data2 = "10";

console.log(data1 === data2);

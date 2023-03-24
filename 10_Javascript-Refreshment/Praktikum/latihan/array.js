let arr1 = [1, 2, 3, 4];
let arr2 = [
  [1, 2],
  [4, 5],
];

let arr3 = ["ando", "undo"];

// index = 0
// console.log(arr1[3]);
// console.log(arr2[1][1]);
// console.table(arr2);
// console.log(arr3[0]);

const [element1, , element2] = arr1;

// console.log({ element2 });

const obj1 = {
  name: "Irfan",
  age: 23,
};

// console.log(obj1.age);

const { el1, el2 } = obj1;

const obj2 = { ...obj1 };

const cobaMap = arr1.map((item) => item);

// console.log(cobaMap);

const data = [
  {
    nama: "Irfan",
    umur: 23,
  },
  {
    nama: "Undo",
    umur: 23,
  },
  {
    nama: "Undo",
    umur: 23,
  },
  {
    nama: "Undo",
    umur: 23,
  },
];

const dataNew = data.map((item) => item.umur + 1);
console.log(dataNew);

function tambah(x, y) {
  let hasil = x + y;
  console.log({ hasil });
}

tambah(2, 3);

function b() {
  console.log("function b");
}

b();

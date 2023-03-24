// Reverse Array
let n = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(n);

function reverseArray(n) {
  for (let i = 0; i < n.length; i++) {
    n[i].reverse();
  }

  return n.reverse();
}

console.table(reverseArray(n));

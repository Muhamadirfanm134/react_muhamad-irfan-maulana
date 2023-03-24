// Reverse Integer
function reverseInt(n) {
  let sign;
  if (n < 0) {
    sign = "-";
    n *= -1;
  }
  const reversed = sign + n?.toString().split("").reverse().join("");
  return parseInt(reversed);
}

console.log(reverseInt(-87));

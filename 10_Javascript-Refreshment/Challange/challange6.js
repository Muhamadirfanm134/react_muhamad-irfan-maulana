function palindrome(value) {
  let result;
  let removeSpace = value.split(" ").join("").toLowerCase();
  let reverse = removeSpace.split("").reverse().join("");

  console.log({ removeSpace });
  console.log({ reverse });

  if (reverse === removeSpace) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(palindrome("Kasur rusak"));

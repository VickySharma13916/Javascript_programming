// Q1. Write a function that takes in an array of numbers and returns the sum of all the numbers.
let arr = [12, 45, 15, 94, 69, 47, 98];
function array(arr) {
  let sumOfArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArray += arr[i];
  }
  return sumOfArray;
}
console.log(array(arr));

//Q2. Write a function that takes in a string and returns the reverse of that string.
let str = "Hello World is a must thing";
function string(str) {
  let reverseStr = [];
  for (let i = 0; i < str.length; i++) {
    reverseStr.push(str[str.length - 1 - i]);
  }
  reverseStr = reverseStr.join("");
  return reverseStr;
}
console.log(string(str));

//Q3. Write a function that takes in an array of strings and returns a new array with the lengths of those strings.
let ar = ["Hello", "World", "vicky sharma", "New", "World", "Order"];
function FindLength(ar) {
  let lengthOfArray = [];
  for (let i = 0; i < ar.length; i++) {
    lengthOfArray.push(ar[i].length);
  }
  return lengthOfArray;
}
console.log(FindLength(ar));

// Q4. Write a function that takes in a number and returns true if it is even and false if it is odd.
let number = 9;
function checkNumber(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber(number));

//Q5. Write a function that takes in an array of numbers and returns the largest number in the array.

let arNum = [564, 89, 48, 164, 76, 944];
function largestNumber(arNum) {
  let maxNumber = 0;
  for (let i = 0; i < arNum.length; i++) {
    maxNumber = arNum[i] > maxNumber ? arNum[i] : maxNumber;
  }
  return maxNumber;
}
console.log(largestNumber(arNum));

//Q6. Write a function that takes in a string and returns the number of vowels (a, e, i, o, u) in the string.

let vowels = "hello aeiou find the vowels consteliation in this by you";
console.log(vowels);

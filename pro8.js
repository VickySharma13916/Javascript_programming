// Print "Hello, World!"
console.log("Hello world!!");

// Find the sum of two numbers
function sumOfTwoNumber(n1, n2) {
  return n1 + n2;
}
console.log("The sum of two number is ", sumOfTwoNumber(61, 84));

// Check if a number is even or odd
const number = function checkNumberIsOddOrEven(n) {
  return n % 2 === 0 ? true : false;
  //   if (n % 2 === 0) return true;
  //   else return false;
};
console.log(`the number is ${number(94) ? "Even" : "Odd"}`);

// Find the largest of three numbers
const largeValue = function largestInThreeNumber(n1, n2, n3) {
  let newValue = n1 > n2 ? n1 : n2;
  return newValue > n3 ? newValue : n3;

  // by predefined function
  //   return Math.max(n1, n2, n3);
};
console.log(`the largest of 3 number are ${largeValue(95, 89, 41)}`);

// Check if a number is positive, negative, or zero
const checkNumber = function numberIsPOsitiveNegativeOrZero(number) {
  if (number === 0) {
    return "Zero";
  } else if (number > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
};
console.log(`the Number is ${checkNumber(9)}`);

// Swap two numbers
function swapNumber(n1, n2) {
  // swap two variable without third variable
  n2 = n1 + n2;
  n1 = n2 - n1;
  n2 = n2 - n1;
  return [n1, n2];

  // swap two variable with third variable
  // let c = n1 + n2;
  // n2 = c - n2;
  // n1 = c - n1;
  // return [n1, n2];

  //swap two variable by array destructure method
  // return ([n1, n2] = [n2, n1]);
}
console.log(swapNumber(5, 9));

// Convert Celsius to Fahrenheit
function celciusToFarenheiht(temp) {
  return (temp * 9) / 5 + 32;
}
console.log(
  `The farenheight of ${37} into celciue is ${celciusToFarenheiht(37)}`
);

// Calculate the area of a triangle
function calculateAreaOfTriangle(base, height) {
  return (1 / 2) * base * height;
}
console.log("the area of triangle is", calculateAreaOfTriangle(5, 6));

// Generate random numbers between a range
function generteRandomNumberBetweenTwoRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(generteRandomNumberBetweenTwoRange(10, 52));

// Reverse a string
function reverseString(string) {
  let str = "";
  //forward for loop
  for (let i = 0; i < string.length; i++) {
    str += string[string.length - 1 - i];
  }

  //backward for loop
  // for (let i = string.length - 1; i >= 0; i--) {
  //   str += string[i];
  // }
  return str;
}
console.log(reverseString("Hello world"));

//Print minimum and maximum in the array
let arr = [31, 5, 9, 7, 58, 16, 98];
function minAndMaxinAnArray(a) {
  let min = a[0];
  let max = a[1];
  for (let i = 0; i < a.length; i++) {
    min = min > a[i] ? a[i] : min;
    max = max < a[i] ? a[i] : max;
  }
  return [min, max];
}

let result = minAndMaxinAnArray(arr);
console.log(
  "In array of",
  arr,
  "the minimun is",
  result[0],
  "and the maximum is",
  result[1]
);

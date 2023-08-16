// To Check Whether a Given Number is Even or Odd
let n = 3;
console.log(n % 2 === 0 ? "Even Number" : "Odd Number");

// To Check Whether a Given Number is Even or Odd without Modulus function
let n1 = 21;
let r = Math.round(n1 / 2);
console.log(r * 2 === n1 ? "Even Number" : "Odd Number");

// To Find the Sum of Even and Odd Numbers
let sumOfEven = 0;
let sumOfOdd = 0;
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    sumOfEven += index;
  } else {
    sumOfOdd += index;
  }
}
console.log(sumOfEven, "sumOfEven");
console.log(sumOfOdd, "sumOfOdd");

// To Check Whether a Number is Positive or Negative
let a = -4;
console.log(a > 0 ? "Positive Number" : "Negative Number");

// Find the Largest Number Among Three Numbers
let x = 41;
let y = 16;
let z = 9;
let r1 = x > y ? x : y;
r1 > z
  ? r1 === x
    ? console.log("X is largest")
    : console.log("Y is largest")
  : console.log("Z is largest");

// Check if a given number is a perfect square.

function checkPerfectSquare(num) {
  if (num % Math.sqrt(num) === 0) return "It is a perfect square";
  else return "Not a perfect square";
}
console.log(checkPerfectSquare(144));

// Find the second largest element in an array.
function secondMaxInAnArray(arr) {
  if (arr.length === 0) return "Empty array";
  if (arr.length === 1) return "It has only one number exist in array";
  let max = arr[0];
  let secondMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
console.log(secondMaxInAnArray([-14, 17]));

// Calculate the factorial of a number using recursion.

function resursionFactorial(n) {
  let num = 1;
  if (n === 0) return 1;
  else {
    num = n * resursionFactorial(n - 1);
  }
  return num;
}
console.log(resursionFactorial(5));

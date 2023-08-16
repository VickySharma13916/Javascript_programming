//print Factorial of a number
function factorialOfNumber(n) {
  let factorial = 1;
  if (n === 0) return 1;
  else if (n < 0) {
    return "-ve value not defined";
  } else {
    //forward loop
    //   for (let i = 1; i <= n; i++) {
    //     factorial *= i;
    //   }

    //backward loop
    for (let i = n; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  }
}

console.log(factorialOfNumber(5));

function recursionFactorial(n) {
  let num = 1;
  if (n === 0) return 1;
  else {
    num = n * recursionFactorial(n - 1);
  }
  return num;
}

console.log(recursionFactorial(5));

//print second and third largest number in an array
let a = [84, 99, 54, 64, 94];
function secondMaxInAnArray(a) {
  let max = 0;
  let secondMax = 0;
  let thirdMax = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = a[i];
    } else if (a[i] > secondMax && a[i] !== max) {
      thirdMax = secondMax;
      secondMax = a[i];
    } else if (a[i] > thirdMax && a[i] !== secondMax && a[i] !== max) {
      thirdMax = a[i];
    }
  }
  return [secondMax, thirdMax];
}
console.log(secondMaxInAnArray(a));

//Check a number or string is palindrome

//time complexicity 0(n)
function checkPalindrome(n) {
  let string = n.toString();
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("12121"));

//time complexicity 0(n/2)
function CheckWhilePalidrome(n) {
  let string = n.toString();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(CheckWhilePalidrome("nitin nitins"));

//print reverse the order of words of a string

function reverseOrderOfWords(string) {
  // return string.split(" ").reverse().join(" ");    split.reverse.join
  // return string.match(/\S+/g).reverse().join(" ");  reg expression
  let str = string.split(" ");
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join(" ");
}

console.log(reverseOrderOfWords("Hello World! Welcome to OpenAI"));
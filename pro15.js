// Print a Number is Even or Odd

function isEven(n) {
  return n & 1 ? "Odd Number" : "Even Number";
}

console.log(isEven(1));

//Program to find NCR of a number with power

function findNCR(n, r) {
  if (n <= 1) return 1;
  if (n < r) return 0;
  function factorialNumber(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  let Numberator = factorialNumber(n);
  let Denominator = factorialNumber(r) * factorialNumber(n - r);
  return Math.floor(Numberator / Denominator);
}

console.log(findNCR(4, 2));
console.log(findNCR(0, 2));
console.log(findNCR(4, 7));
console.log(findNCR(4, 2));

// Print Counting

function printCounting(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return n;
}

console.log(printCounting(10));

// Check a number is Prime Or Not

function CheckPrime(n) {
  if (n < 1) return "Enter A Valid Number";
  let check = true;
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
  return check ? "Prime Number" : "Not A Prime Number";
}

console.log(CheckPrime(15));
console.log(CheckPrime(61));
console.log(CheckPrime(0));

// program to find the value of nth Term of an AP

function FindAPValue(n) {
  return 3 * n + 7;
}

console.log(FindAPValue(3));
console.log(FindAPValue(2));
console.log(FindAPValue(5));

// Program to find the Total No. Of Set Bit of the Numbers

function totalBit(a, b) {
  function bit(n) {
    let count = 0;
    while (n != 0) {
      let bit = n & 1;
      if (bit === 1) {
        count++;
      }
      n = n >> 1;
    }
    return count;
  }

  return bit(a) + bit(b);
}

console.log(totalBit(2, 6));

// Program to Find the Number on the Fibonacci Series of the Nth Number

function FindNumberOfFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    let ans = fibo[i - 1] + fibo[i - 2];
    fibo.push(ans);
  }
  return fibo[n];
}

console.log(FindNumberOfFibonacci(10));

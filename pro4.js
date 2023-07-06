// Print Fibonacci Series upto 20

// 1st method by While loop method;
// time complexity of O(2^n) due to its resurcive nature
let n = 0,
  b = 0,
  c = 1,
  d,
  array = [0, 1];

while (n < 18) {
  d = b + c;
  b = c;
  c = d;
  array.push(c);
  n++;
}

console.log("Fibonacci series upto 20 number", array);

// 2nd is For loop method
// time complexity of O(n)  due to its resurcive nature
function fibonacciSeries(limit) {
  let fiboSeries = [0, 1];
  for (let i = 2; i < limit; i++) {
    let nextNum = fiboSeries[i - 1] + fiboSeries[i - 2];
    fiboSeries.push(nextNum);
  }
  return fiboSeries;
}

console.log("Fibonacci Series upto", fibonacciSeries(20));

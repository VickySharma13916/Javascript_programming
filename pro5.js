// Check prime number
let a1 = 14;
let check1 = true;

function checkPrime(n) {
  //   for (let i = 2; i < n; i++) {
  //     if (n % i === 0) {
  //       check1 = false;
  //       break;
  //     }
  //   }

  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

checkPrime(a1);
if (check1) console.log("Prime number");
else console.log("Not a prime number");

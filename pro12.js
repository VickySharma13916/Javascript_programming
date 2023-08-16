//Higher Order Function
function ab() {
  return function () {
    console.log("hello");
  };
}
let bd = ab();
bd();

// Constructor Function
function Constr(name, age, width, height) {
  this.name = name;
  this.age = age;
  this.width = width;
  this.height = height;
}

const person1 = new Constr("Vicky", 34, 845, 54684);
const person2 = new Constr("Vikaram", 54, 6754, 549);
const person3 = new Constr("Hello", 24, 65, 579854);
console.log(person1);
console.log(person2);
console.log(person3);

//IIFE - (Immediately Invoked Function Expression)
// used for creating the private varible which can not be access outside until we give not the access
var ans = (function () {
  var private = 216;
  return {
    getter: function () {
      console.log(private);
    },
    setter: function (val) {
      private = val;
    },
  };
})();
ans.getter();
ans.setter(4845);
ans.getter();

// Prototype Inheritance
// we can pass the features through with the help of prototype
let human = {
  canWalk: true,
  haveEmotions: true,
  canFly: false,
  canTalk: true,
  canDie: true,
};

let goodCoder = {
  canCode: true,
  canSolveDSA: true,
  canMakeWebsite: true,
  canMakeUseModernJS: true,
};

goodCoder.__proto__ = human; // .__proto__
console.log(goodCoder.canFly);

//Pure Function
function abcd(a, b) {
  return a * b;
}

var ans1 = abcd(6, 5);
console.log(ans1);

// print LCM of numbers

function findLCM(n, m) {
  let lcm = m > n ? m : n;
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) {
      return lcm;
    }
    lcm++;
  }
}

console.log(findLCM(61, 84));

// print HCF of numbers
function fincHCF(a, b) {
  if (b === 0) return a;
  return fincHCF(b, a % b);
}

console.log(fincHCF(6, 10));

// Print the count of vowels in the string

function printNumOfVowels(str) {
  if (str.length === 0 || typeof str !== "string") return "Not a string";
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  let lowerStr = str.toLocaleLowerCase();
  for (let j = 0; j < lowerStr.length; j++) {
    if (vowel.includes(lowerStr[j])) {
      count++;
    }
  }
  return count;
}
console.log(printNumOfVowels(10));
console.log(printNumOfVowels("Hello there is a good number of worlds"));

// Print the lowestnumber closest to zero in an array of numbers
function findClosestToZero(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid input";
  }
  let closest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i]) < Math.abs(closest)) {
      closest = arr[i];
    } else if (Math.abs(arr[i]) === Math.abs(closest)) {
      closest = Math.max(closest, arr[i]);
    }
  }
  return closest;
}
const numbers = [10, 1, -3, 7, -2, -1];
console.log(findClosestToZero(numbers));

// Print sum of even number in an array
let arr = [1, 5, 3, 7, 9, 4, 18];

// linear time complexity of O(n)
function sumOfEvenNumber(array) {
  let a = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      a += array[i];
    }
  }
  return a;
}

// linear time complexity of O(n) but prefered method is array.reduce
function sumOfEvenNum(array) {
  return array.reduce((sum, current) => {
    if (current % 2 === 0) {
      return sum + current;
    }
    return sum;
  }, 0);
}

console.log("Sum of even number in an array", sumOfEvenNumber(arr));
console.log("Sum of even number in an array", sumOfEvenNum(arr));

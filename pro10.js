// Write a function to remove duplicates from an array.

function removeDuplicate(arr) {
  //for loop
  // time complexity = 0(n^2)
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (newArr.indexOf(arr[i]) === -1) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;
  // Reduce Method
  //   let newArr = arr.reduce((acc, current) => {
  //     if (!acc.includes(current)) {
  //       acc.push(current);
  //     }
  //     return acc;
  //   }, []);
  //   return newArr;
  //Filter method
  let filterArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return filterArr;
  //For Each method
  //   let newArr = [];
  //   arr.forEach((element) => {
  //     if (!newArr.includes(element)) {
  //       newArr.push(element);
  //     }
  //   });
  //   return newArr;
  //Set method
  //   return [...new Set(arr)];
}
const arr = [1, 84, 56, 1, 56, 84];
// console.log(removeDuplicate(arr));

// Write a function to sort an array of numbers in ascending order.

function sortingArray(a) {
  // return ar.sort((a, b) => a - b);
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      let temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;
      i = -1;
    }
  }
  return a;
}
const array = [1, 8, 76, 9, 24, 6, 16, 87];
console.log(sortingArray(array));
// Write a function to check if two strings are anagrams.
// Write a function to find the average of numbers in an array.
// Write a function to remove falsy values from an array.
// Write a function to convert a string to title case.
// Write a function to find the maximum occurring character in a string.
// Write a function to find the second smallest number in an array.
// Write a function to merge two sorted arrays into one sorted array.
// Write a function to check if a number is a power of two.
// Write a function to reverse the words in a sentence.
// Write a function to check if a given year is a leap year.
// Write a function to find the missing number in an array of consecutive numbers.
// Write a function to count the frequency of each element in an array.

// Print fizz and buzz 
function printMutlipleof3and5(n) {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  return n;
}

console.log(printMutlipleof3and5(100));

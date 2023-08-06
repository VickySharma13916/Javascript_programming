const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
            newObj: {
              hello: "world",
            },
          },
        },
      },
    },
  },
};

// For get the data from the nested object with recursion
function collectStrings(obj) {
  const values = [];
  function traverseObject(currentObj) {
    for (const key in currentObj) {
      const value = currentObj[key];
      if (typeof value === "object" && value !== null) {
        traverseObject(value);
      } else {
        values.push(value);
      }
    }
  }
  traverseObject(obj);
  return values;
}

console.log(collectStrings(obj));

/*
    Sliding Window - minSubArrayLen
    Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

    This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
    Examples:

    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
    
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

console.log(findMinSubArray([4, 3, 3, 8, 1, 2, 3], 11));
console.log(findMinSubArray([2, 3, 1, 2, 4, 3], 7));
console.log(findMinSubArray([2, 1, 6, 5, 4], 9));
console.log(findMinSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(findMinSubArray([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(findMinSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(findMinSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

function findMinSubArray(arr, targetSum) {
  let currentSum = 0;
  let end = 0;
  let start = 0;
  let minLength = Infinity;
  while (end < arr.length) {
    currentSum += arr[end];
    while (currentSum >= targetSum) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= arr[start];
      start++;
    }
    end++;
  }
  return minLength === Infinity ? 0 : minLength;
}

function findMinSubArray(nums, sum) {
  // Infinity is greatest numbers of all numbers as we already know.
  let minLength = Infinity;
  let total = 0;
  let start = 0;
  let end = 0;
  // console.log("Min length is ",minLength);
  // run this loop untill start less than length of num
  while (start < nums.length) {
    // create a window which sum of items greater or equal to sum
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if total sum  of current created window items is greater than sum then
    // reduce the window and find another sum with on less value of start
    else if (total >= sum) {
      minLength = Math.min(minLength, end - start);
      total -= nums[start];
      start++;
    }
    // If non of the condition is true then break the loop
    else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

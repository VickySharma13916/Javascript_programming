// Find the Book Allocation Problem Solution
let m = 2;
let n = 4;

function isPossible(arr, mid, m, n) {
  let studentCount = 1;
  let pageSum = 0;
  for (let i = 0; i < n; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      studentCount++;
      if (studentCount > m || arr[i] > mid) {
        return false;
      }
      pageSum = 0;
      pageSum = arr[i];
    }
  }
  return true;
}

function BookAllocation(arr, m, n) {
  let s = 0;
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  let e = sum;
  let mid = Math.floor(s + Math.floor((e - s) / 2));
  let ans = -1;
  while (s <= e) {
    if (isPossible(arr, mid, m, n)) {
      ans = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
    mid = Math.floor(s + Math.floor((e - s) / 2));
  }
  return ans;
}
console.log(BookAllocation([10, 20, 30, 40], m, n));

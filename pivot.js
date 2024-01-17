// Find  the Pivot Element in a reverse Sorted Array

function pivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + Math.floor((end - start) / 2));
  while (start < end) {
    if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor(start + Math.floor((end - start) / 2));
  }
  return start;
}

console.log(pivot([9, 10, 18, 3, 5, 7]));

// Find the Elenent in a Sorted Array

function SortedArray(key, s, e, arr) {
  let mid = Math.floor(s + Math.floor((e - s) / 2));
  while (s <= e) {
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] < key) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
    mid = Math.floor(s + Math.floor((e - s) / 2));
  }
  return -1;
}

// Find the Element in a reverse sorted array

function searchKey(key, arr) {
  const pivotPoint = pivot(arr);
  if (arr[pivotPoint] > key) {
    return SortedArray(key, 0, pivotPoint, arr);
  } else {
    return SortedArray(key, pivotPoint, arr.length - 1, arr);
  }
}

console.log(searchKey(2, [9, 10, 18, 2, 3, 5, 7]));

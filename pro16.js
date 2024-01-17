// Find the pivot no. in an array

function pivotNumber(a) {
  let s = 0;
  let e = a.length - 1;
  let Mid = Math.floor(s + Math.floor((e - s) / 2));
  while (s < e) {
    if (a[Mid] >= a[0]) {
      s = Mid + 1;
    } else {
      e = Mid;
    }
    Mid = Math.floor(s + Math.floor((e - s) / 2));
  }

  return s;
}

console.log(pivotNumber([7, 9, 10, 3, 4]));

// Search the KEy in the Sorted Reverse Array like monotonic Function

function BinarySearch(arr, s, e, key) {
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

function searchKey(arr, key) {
  const pivot = pivotNumber(arr);
  if (arr[pivot] > key) {
    return BinarySearch(arr, 0, pivot, key);
  } else {
    return BinarySearch(arr, pivot, arr.length - 1, key);
  }
}

console.log(searchKey([9, 10, 18, 2, 3, 5, 7], 2));

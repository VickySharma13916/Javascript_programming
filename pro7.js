// Print a string in reverse order

//forward for loop
// time complexity of O(n)
let str = "Vicky sharma";
function reverseString(string) {
  let reverse = "";
  for (let i = 0; i < string.length; i++) {
    let next = string[string.length - 1 - i];
    reverse += next;
  }
  return reverse;
}

//bacward for loop
// time complexity of O(n)
function reverseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;

  //both 1 and 2 are the preferes approach
  // 1  return str.split('').reverse().join('');  split and join
  // 2  return [...str].reverse().join(''); spread and join
}

//recursion method
function reverseStringRecursion(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString(str));
console.log(reverseStr("Hello world with namaste javascript"));
console.log(reverseStringRecursion("Hello namaste javascript"));

// *
// **
// ***
// ****
// *****
let num = 4;
function rightPascalTriangle(num) {
  for (i = 0; i <= num; i++) {
    for (j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
rightPascalTriangle(num);

// function leftPascalTriangle(num) {
//   for (i = 0; i <= num; i++) {
//     for (j = 0; j <= i; j++) {
//       if (j > i + 1 - i || j === i/2) {
//         process.stdout.write("*");
//       } else {
//         process.stdout.write(" ");
//       }
//     }
//     process.stdout.write("\n");
//   }
// }

// leftPascalTriangle(num);

let firstName = "Vicky";
let LastName = "Sharma";
let arrayName = [...firstName];
arrayName.push(...LastName);
console.log(arrayName);

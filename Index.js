//function currying by bind method
// let multiply = function (x, y) {
//     return console.log(x * y);
// }
// let multiplyby2 = multiply.bind(this, 2);
// multiplyby2(5);
// let multiplyby3 = multiply.bind(this, 3);
// multiplyby3(5);

//function currying by cloasure method
let multi = function (x) {
    return function (y) {
        return console.log(x * y);
    }
}
let twomulti = multi(2)
twomulti(7);

let three = multi(3);
three(8);
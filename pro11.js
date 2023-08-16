if (-54) {
  console.log("hello"); //its working
} else {
  console.log("hsjhvvh");
}

function bike(na) {
  console.log("bike", na);
}

bike("na");
bike("apasara");
bike("kawasaki");
// function statement
// function declaration
// function expresion
// anonymous function
// named function
// arrow function

var a = [2, 4, 35, 35, 98];
var b = [...a]; // copy the reference value with spread operator
var obj = { a: "vmbfgb", b: "fknf", c: 90 };
var newObj = { ...obj };
delete newObj.c;
console.log(obj);
console.log(newObj);
b.pop();
console.log(a);
console.log(b);

function an() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // by var declaration it can be used outside of the scope
  //but for let condition it not working
}
// an();

function bc() {
  var c = 90;
  //   console.log(d);  we cannot access the d from outside the function bf()
  function bf() {
    var d = 78;
    console.log(c + d);
  }
  return bf();
}
// bc();

//forEach
let cd = a.forEach(function (val) {
  console.log(val + 2);
});

//for in
for (key in obj) {
  console.log(key, " : ", obj[key]);
}

// callback function
setTimeout(() => {
  console.log("Hello");
}, 2000);

//first class citizen
function bfd(vbf) {
  vbf();
}
bfd(function () {
  console.log("dfghjklhgfcvbn");
});

// array
console.log(typeof a);
a[-1] = 61;
console.log(a);

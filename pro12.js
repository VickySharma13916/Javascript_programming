//Higher Order Function
function ab() {
  return function () {
    console.log("hello");
  };
}
let bd = ab();
bd();

// Constructor Function
function Constr(name, age, width, height) {
  this.name = name;
  this.age = age;
  this.width = width;
  this.height = height;
}

const person1 = new Constr("Vicky", 34, 845, 54684);
const person2 = new Constr("Vikaram", 54, 6754, 549);
const person3 = new Constr("Hello", 24, 65, 579854);
console.log(person1);
console.log(person2);
console.log(person3);

//IIFE - (Immediately Invoked Function Expression)
// used for creating the private varible which can not be access outside until we give not the access
var ans = (function () {
  var private = 216;
  return {
    getter: function () {
      console.log(private);
    },
    setter: function (val) {
      private = val;
    },
  };
})();
ans.getter();
ans.setter(4845);
ans.getter();

// Prototype Inheritance
// we can pass the features through with the help of prototype
let human = {
  canWalk: true,
  haveEmotions: true,
  canFly: false,
  canTalk: true,
  canDie: true,
};

let goodCoder = {
  canCode: true,
  canSolveDSA: true,
  canMakeWebsite: true,
  canMakeUseModernJS: true,
};

goodCoder.__proto__ = human; // .__proto__
console.log(goodCoder.canFly);

//Pure Function
function abcd(a, b) {
  return a * b;
}

var ans1 = abcd(6, 5);
console.log(ans1);

// let a = 4;

// let b = a;

// b = 5;

// const obj1 = {
//   a: 'a',
//   func: function () {
//     console.log(this.a);
//   }
// };

// obj1.func(); // a

// obj1.a = 'b';

// obj1.func(); // b

// const ovj2 = obj1;

// obj2.a = 4;

// let a;

// function func() {
//   let counter = 0;
//   return function (num) {
//     if (typeof num === "number") {
//       counter = num;
//     } else {
//       counter++;
//     }
//     console.log(counter);
//   };
// }

// const count1 = func();
// count1();
// count1();
// count1();

// let count2 = func();
// count2();
// count2();

// let count3 = func();
// count3();
// count3();

// console.log(window);

// function Constr(name) {
//   this.name = name;
// }

// const obj1 = new Constr("Name1");
// obj1.age = 21;
// console.log(obj1);

// Constr.prop1 = "hi";

// console.log(Constr.prop1);

// const name1 = function () {}
// name1.prop = 'a';

// const name2 = {};
// name2.prop = 'b';

// var a = 1;

// const func = () => {
//   console.log(this.a);
// }

// const count = function () {
//   console.log(++count.index);
// };
// count.index = 0;
// count();
// count();
// count();
// count();

// let i = 0;
// function count() {
//   console.log(++i);
// }
// count();
// count();
// count();

// function multiply(a, b) {
//   return a * b;
// }

// // console.log(multiply(2, 4));

// function newMultiply(a, b, c) {
//   return multiply(multiply(a, b), c);
// }

// console.log(newMultiply(2, 4, 2));

// let str = " a, b, c, d, e, f ";

// function splitString(str, spliter) {
//   return str.split(spliter);
// }

// console.log(splitString(str, ", "));

// function newSplitString(str, spliter) {
//   return splitString(str, spliter).map((e) => e.trim());
// }

// console.log(newSplitString(str, ", "));

// function f(arg, arg2) {
//   let i = 1;
// }

// console.log(f.length);

// f2 = f;

// f2()

// const arr = []
// const [a, b] = arr;
// const a = arr[0];
// const b = arr[1];

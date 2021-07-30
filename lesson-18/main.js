// const multiple = (a, b) => {
//   const stamp = new Date().getTime();
//   while (new Date().getTime() < stamp + 2000) {}
//   return a * b;
// };

// // console.log(multiple(2, 3));

// function decorate() {
//   const cache = new Map();

//   return function (a, b) {
//     const key = `${a}-${b}`;
//     if (cache.has(key)) {
//       return cache.get(key);
//     } else {
//       const result = multiple(a, b);
//       cache.set(key, result);
//       return result;
//     }
//   };
// }

// const newMultiple = decorate();

// console.log(newMultiple(3, 1));
// console.log(newMultiple(2, 1));
// console.log(newMultiple(1, 1));
// console.log(newMultiple(3, 1));
// console.log(newMultiple(2, 1));
// console.log(newMultiple(1, 1));
// console.log(newMultiple(3, 1));
// console.log(newMultiple(2, 1));
// console.log(newMultiple(1, 1));

///////////////////////////////////

// const button = document.querySelector("#button");
// const textarea = document.querySelector("#textarea");
// const table = document.querySelector("table");

// button.addEventListener("click", () => {
//   const text = textarea.value
//     .replace(/[.,\/#!$%\^&\*;:{}=\-—_`~()]/g, "")
//     .replace(/\n/g, " ")
//     .toLowerCase();
//   let words = text.split(" ");
//   words = words.filter((word) => word !== "");
//   const unicValues = new Set(words);
//   unicValues.forEach((word) => {
//     const row = `<tr>
//         <td>${word}</td>
//         <td>${words.filter((w) => w === word).length}</td>
//       </tr>`;
//     table.innerHTML += row;
//   });
// });

//console.log(button, textarea, table);

// console.log(object);

// const greet = function (somebody, age) {
//   console.log(`Hello ${somebody}, I'm ${this.name}, I'm ${age}`);
// };

// const person = {
//   name: "Peter",
// };

// const anotherPerson = {
//   name: "Sarah",
// };

// greet.apply(person, ["Max", 30]);

const square = function (radius) {
  return this.pi * radius ** 2;
};

const circle = {
  pi: 3.14,
};

//console.log(circle.square(2.1)); // 13.8474

// function decorate(square) {
//   return function (radius) {
//     const result = square(radius);

//     return Math.round(result);
//   };
// }

// circle.square = decorate(circle.square.bind(circle));

// const newSquare = square.bind(circle);

// console.log(square.bind(null)(13.4));

// console.log(square(2.6));

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   },
// };

// setTimeout(() => {
//   user.sayHi();
// }, 4000); // Привет, undefined!

// const obj = {
//   property: "value",
//   _firstName: "Dean",
//   _lastName: "Winchester",
//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   },
//   set fullName(value) {
//     [this._firstName, this._lastName] = value.split(" ");
//   },
// };

// obj.fullName = "Dean Winchester";

// console.log(obj.fullName);

// Object.defineProperty(obj, "newProp", {
//   enumerable: true,
//   writable: true,
//   configurable: false,
//   value: "someVal",
// });

// obj.another = "new value";

// for (prop in obj) {
//    console.log(prop);
// }

//delete obj.another;

// console.log(obj);

// console.log(Object.getOwnPropertyDescriptors(obj));

// function Box() {
//   Object.defineProperties(this, {
//     height: { value: 10 },
//     width: { value: 10 },
//     length: { value: 10 },
//     size: {
//       get() {
//         return [this.height, this.width, this.length];
//       },
//       set(size) {
//         [this.height, this.width, this.length] = size;
//       },
//     },
//   });
// }

// const box = new Box();
// box.size = [1, 2, 3];
// console.log(box.size);

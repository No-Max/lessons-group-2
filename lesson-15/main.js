// function getWordEnding(num, words) {
//   const remainder10 = num % 10;
//   const remainder100 = num % 100;
//   if (remainder100 > 10 && remainder100 < 20) return words[2];
//   else if (remainder10 === 1) return words[0];
//   else if (remainder10 > 1 && remainder10 < 5) return words[1];
//   else return words[2];
// }

// const num = 20;
// const words = ["Дракон", "Дракона", "Драконов"];

// for (let i = 0; i <= 1021; i++) {
//   console.log(i, getWordEnding(i, words));
// }

// function createPerson(name, age, hobbies, city) {
//   return {
//     name,
//     age,
//     hobbies,
//     city,
//   };
// }

// const Ann = createPerson(
//   "Энн",
//   4,
//   ["рисовать мелками", "играть с соседским мальчиком в песочнице"],
//   "Лондон"
// );
// const Ann2 = createPerson(
//   "Энн",
//   4,
//   ["рисовать мелками", "играть с соседским мальчиком в песочнице"],
//   "Лондон"
// );

// Object.assign(Ann2, { parens: [Ann] });

// Ann2.hobbies.forEach((hobby) => {
//   console.log(hobby);
// });

// const person = {
//   name: "Sam",
//   age: 14,
//   sayHi() {
//     console.log("My name is " + this.name + " I'm " + this.age);
//   },
// };

// person.sayHi();

// person.name = "Dean";
// person.age = 20;

// person.sayHi();

// name = "Nana";

// let person = {
//   name: "Liz",
//   sayHello() {
//     const funcHasOwnContex = function () {
//       console.log(`Hello, I'm ${this.name}`);
//     };
//     const funcHasNotOwnContext = () => {
//       console.log(`Hello, I'm ${this.name}`);
//     };
//     funcHasOwnContex();
//     funcHasNotOwnContext();
//   },
// };

// person.sayHello();

// const arr = ["", ""];

// arr.map(function () {
//   console.log(this);
// });

// const obj = {
//   func(cb) {
//     cb();
//   },
// };

// obj.func(() => {
//   console.log(obj);
// });

// function CreatePerson(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let Ann = new CreatePerson("Ann", 24);
// let Sarah = new CreatePerson("Sarah", 50);

// console.log(Ann);
// console.log(Sarah);

// ["1", "2"].forEach((e) => {
//   console.log(e);
// });

// new Array("1", "2").forEach((e) => {
//   console.log(e);
// });

// const b = 1;

// {
//   {
//     console.log(b);
//   }
// }

// function name() {
//   const a = 3;
// }

// const str = new String("DASDASDASDA");

// console.log(str.length);

// const someMethod = () => {
//   this.length;
// }

// obj1 = {
//   length: 10,
//   someMethod: someMethod
// }

// obj2 = {
//   length: 11,
//   someMethod: someMethod,
// };

// obj1.length;
// obj1.someMethod();

// console.log(0.1 + 0.2 !== 0.3 + 0.0);

const arr = [11, 22, 33, "двадцать"];

const newArr = arr.map((elem, index) => {
  return {
    num: elem,
    typeof: typeof elem,
  };
});

const variable = newArr.find((el) => {
  return el.typeof === "number";
});
console.log(variable);
// console.log(newArr);

const filtered = newArr.filter((el) => el.typeof === "number");

console.log(filtered.reduce((acc, val) => acc + val.num, 0));

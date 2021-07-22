// const codeString = `Германия, Берлин, 83млн, 357.4тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6тыс.кв.км; Польша, Варшава, 37.9млн, 312.6тыс.кв.км; Франция, Париж, 67.8млн, 643.8тыс.кв.км; Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км; Испания, Мадрид, 44.3млн, 505.9тыс.кв.км; Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км`;

// let codeArray = codeString.split("; ");

// codeArray = codeArray.map((item) => {
//   const country = item.split(", ");
//   return new Country(
//     country[0],
//     country[1],
//     country[2],
//     parseFloat(country[3])
//   );
// });

// console.log(codeArray);

// function Country(name, capital, population, area) {
//   this.name = name;
//   this.capital = capital;
//   this.population = population;
//   this.area = area;
// }

// for (let el of { a: "12", b: "14" }) {
//   console.log(el);
// }

// const pseudo = { 0: "a", 1: "b", length: 2 };

// for (let el of Array.from(pseudo)) {
//   console.log(el);
// }
// console.log(Array.from(pseudo));

// const map = new Map([
//   ["a", "abc"],
//   ["d", "efg"],
// ]);

// console.log(map);

// const obj = {
//   [{ a: "a" }]: "1asdas",
//   [{ b: "b" }]: "2asdas",
// };
// console.log(obj);

// const map = new Map();

// const key = { a: "a" };

// map.set("a", "1adasdas");
// map.set("b", "2adasdas");

// for (let el of map) {
//   console.log(el[0], el[1]);
// }

// console.log(Object.fromEntries(map.entries()));

// const set = new Set();

// while (true) {
//   const number = prompt("введите уникальное число");
//   if (number === "stop") break;
//   set.add(number);
// }

// set.add("a");
// set.add("b");
// set.add("c");

// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });

// console.log(Array.from(new Set(["a", "a", "b", "b", "c"])));

// const symbol = Symbol.for("new");
// const symbol2 = Symbol.for("new");

// console.log(symbol);

// const arr = [undefined, "b", "c", "d"];

// const [a = prompt, b, c, d, e] = arr;

// console.log(a);

//

// let index = 0;
// while (true) {
//   index++;
//   eval(`let d${index} = 'd'; console.log(d${index})`);
//   if (index === 100) break;
// const person = {
//   firstName: "Sam",
//   lastName: "Winchester",
//   age: 24,
// };

// const { aaa } = person;

// let ada;

// console.log(aaa);
// }

// function func({ firstName, ...rest }) {
//   console.log(rest);
// }

// const person = {
//   firstName: "Sam",
//   lastName: "Winchester",
//   age: 24,
//   a: "",
//   v: "",
// };

// func(person);

// const arr = [1, 2, 3, 4, 5, 150];

// function sum() {
//   return Array.from(arguments).reduce((acc, val) => acc + val, 0);
// }

// console.log(sum(...arr));

// function sum(...arr) {
//   return arr.reduce((acc, val) => acc + val, 0);
// }

// console.log(sum(...arr));

// global
// function func(arg1, arg2) {
//   let a;
//   const b = '1';
//   return () => {

//   }
// }

// func();

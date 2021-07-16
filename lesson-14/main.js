// const button = document.querySelector("#button");

// let status = 0;

//button.addEventListener("click", function () {
// switch (status++) {
//   case 1:
//     console.log("status === 1");
//     break;
//   case 2:
//     console.log("status === 2");
//     break;
//   default:
//     console.log("default");
// }
// if (status === 1) {
//   console.log("status === 1");
// } else if (status === 2) {
//   console.log("status === 2");
// } else {
//   console.log("default");
// }
// });

// for (let i = 0; i < 10; i++) {
//   if (i === 4) break;
//   console.log(i);
// }

// function multiplyNumbers(a, b) {
//   const div = document.createElement("div");
//   div.innerText = a * b;
//   return div;
// }

// document.body.appendChild(multiplyNumbers(1, 2));

// function func() {
//   return function () {
//     return "nanan";
//   };
// }

// const secondFunc = func();

// console.log(secondFunc());

// const button = document.querySelector("#button");

// let status = false;

// button.onclick = () => {
//   status = !status;
//   f1(
//     status,
//     () => print("status true"),
//     () => print("status false")
//   );
// };

// function print(text) {
//   console.log(text);
// }

// function f1(status, cb1, cb2) {
//   if (status) {
//     cb1();
//   } else {
//     cb2();
//   }
// }

// let a = 2;
// a = 24;

// function func(a = 2) {
//   console.log(arguments);
// }
// func(24);

// let count = 0;

// function func() {
//   console.log(count);
//   count++;
//   if (count < 10) {
//     func();
//   }
// }

// func();

// const propertyName = prompt();

// let obj = {
//   name: "John",
//   age: 22,
//   [propertyName]: "stupid user",
// };

// delete obj.age;

// console.log(obj);

// for (let prop in obj) console.log(obj[prop]);

// const DB = [];

// function saveUser(name, password, age) {
//   DB.push({ name, password, age });
// }

// saveUser("Ibrahim", "a@dasdR", 25);
// saveUser("Sonya", "a@dasdRdasda", 21);
// saveUser("Vlad", "", 150);

// console.log(DB);

const obj = {
  name: "Sam",
  age: 23,
  coords: {
    x: 10,
    y: 10,
  },
};

const newObj = Object.assign({}, obj);

obj.age = 100;
obj.coords.x = 0;

console.log(obj);
console.log(newObj);

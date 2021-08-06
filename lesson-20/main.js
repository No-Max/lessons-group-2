// function func(element) {
//   document.getElementById(element).onclick = (e) => {
//     console.log(e.target);
//   }
// }

// for (let i = 0; i < 1000; i++) {
//   func(`#id-${i}`);
// }

// parent = {
//   name: 'name',
//   age: 26,
// }

// obj = {
//   method: function () {
//     this
//   },
// }

// Object.assign({}, parent, obj)

// // obj.method()
// obj.age //

// 1. классы
// 2. функции
// 3. прототипы

// class Component {}

// const comp = new Component();

// console.log("dasdadas", comp);

// const divs = document.getElementsByTagName("div");

// let count = 0;
// for (let div of divs) {
//   count++;
//   div.innerHTML = '<a href="http//' + count + '">1</a>';
// }

// const body = document.body;

// body.addEventListener("click", () => {
//   body.classList.toggle("active");
// });

// class A {
//   constructor(arg) {
//     this.someMethod();
//     this.arg = arg;
//   }
//   static someMethod(a) {
//     this.arg = "a";
//     return this.arg;
//   }
// }

// new A.someMethod;

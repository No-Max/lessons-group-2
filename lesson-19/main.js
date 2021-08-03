// const car = {
//   color: "red",
//   speed: 0,
//   wheels: 4,
//   ride(speed) {
//     this.speed = speed;
//   },
//   brake() {
//     this.speed = 0;
//   },
// };

// const bmw = {
//   brand: "BMW",
// };

// // const carBmw = Object.assign({}, car, bmw);
// const carBmw = Object.create(car);
// carBmw.brand = "BMW";

// const BMWX8 = Object.create(carBmw);
// BMWX8.model = "X8";

// function Component(selector, height = "100px") {
//   let this = {};
//   this.$element = document.querySelector(selector);
//   this.height = height;
//   this.$element.style.height = this.height;
//   this.hide = function () {
//     this.$element.style.display = "none";
//   };
//   this.show = function () {
//     this.$element.style.display = "block";
//   };
//   this.setHeight = function (height) {
//     this.$element.style.height = height;
//   };
//   return this
// }

// const myComponent = new Component("#component", "50px");

// document.querySelector("#show").addEventListener("click", () => {
//   myComponent.show();
// });

// console.log(myComponent.__proto__.constructor === Component);

// const myComponent2 = new myComponent.__proto__.constructor(
//   "#component2",
//   "50px"
// );

// const obj = {
//   name: "name",
// };

// new Object();

// function DropDown({ selector, title, items, onSelect }) {
//   this.$element = document.querySelector(selector);
//   this.$titleElement = document.createElement("span");
//   this.$titleElement.innerText = title;
//   this.$element.append(this.$titleElement);
//   this.$listElement = document.createElement("ul");
//   this.items = items;
//   this.items.forEach(({ name, link }) => {
//     this.$listElement.innerHTML += `<li data-link="${link}">${name}</li>`;
//   });
//   this.$element.append(this.$listElement);
//   this.$element.addEventListener("click", (event) => {
//     this.$element.classList.toggle("active");
//     if (event.target.nodeName === "LI") {
//       onSelect(event.target.dataset.link,event.target );
//     }
//   });
//   this.show = function () {
//     this.$element.classList.add("active");
//   };
// }

// const dropdowns = [
//   {
//     selector: "#dropdown",
//     title: "title",
//     items: [
//       {
//         name: "Google",
//         link: "https://www.google.com/",
//       },
//       {
//         name: "GitHub",
//         link: "https://github.com/",
//       },
//     ],
//     onSelect: link => {
//       window.location.href = link;
//     },
//   },
//   {
//     selector: "#dropdown2",
//     title: "title2",
//     items: [
//       {
//         name: "Google2",
//         link: "https://www.google.com/",
//       },
//       {
//         name: "GitHub",
//         link: "https://github.com/",
//       },
//     ],
//     onSelect: link => {
//       window.location.href = link;
//     },
//   },
// ];

// dropdowns.forEach((dd) => {
//   new DropDown(dd);
// });

// class Car {
//   _speed = 0;
//   _wheels = 4;
//   constructor(color) {
//     this.color = color;
//   }
//   ride(speed) {
//     this._speed = speed;
//   }
//   brake() {
//     this._speed = 0;
//   }
//   get speed() {
//     return this._speed;
//   }
// }

// const car = new Car("brown");
// car.ride(100);

// class Bmw extends Car {
//   constructor(brand, color) {
//     super();
//     this.brand = brand;
//   }
//   ride(mph) {
//     const speedInKmh = mph * 1.4;
//     super.ride(speedInKmh);
//     console.log(this);
//   }
//   static hello() {
//     console.log(this);
//   }
// }

// const bmw = new Bmw("BMW");
// bmw.ride(100);
// // const carBmw = Object.assign({}, car, bmw);
// const carBmw = Object.create(car);
// carBmw.brand = "BMW";

// const BMWX8 = Object.create(carBmw);
// BMWX8.model = "X8";

// Object.create({});
// Object.assign({}, {});
// Object.defineProperty();

// Array.isArray();

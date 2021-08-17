// Promise.all([promise1, promise2]).then((result) => {});

// const promises = [
//   fetch("http://localhost:3000/posts"),
//   fetch("http://localhost:3000/users"),
// ];

// Promise.all(promises)
//   .then((responses) => {
//     return !responses[1]
//       ? Promise.reject("Не пришел оответ от второггоо проомиса")
//       : Promise.resolve("Все ответы получены");
//   })
//   .then((message) => {
//     console.log(message);
//   });

// Promise.resolve({
//   id: "1",
//   name: "Sam",
// }).then((status) => {
//   console.log(status);
// });

// Promise.reject({
//   type: "syntax",
//   message: "Toooooooo toot ",
// }).catch((err) => {
//   console.log(err);
// });

// async function func() {
//   const users = await fetch("http://localhost:3000/users").then((resp) =>
//     resp.json()
//   );
//   const posts = await fetch("http://localhost:3000/posts").then((resp) =>
//     resp.json()
//   );

//   const post1 = posts[0];
//   const firtsPostUserId = post1.userId;
//   const firtsPostUser = users.find((user) => user.id === firtsPostUserId);

//   console.log(firtsPostUser.name);
// }

// async function func2() {
//   return 1;
// }

// Promise.all([func(), func2()]).then((results) => {
//   console.log(results);
// });

// func2();

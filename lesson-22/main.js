// function func(cb) {
//   let response = 10; //5sec
//   //
//   cb(response);
// }

// func((num) => {
//   console.log(num);
// });

// console.log('Max');
// document.addEventListener('click', () => {

// })

// function asyncFunction(number, success, error) {
//   if (typeof number === "string") {
//     error(new Error("Нелязя разделить строку на число, укажите число!"));
//     return;
//   }
//   setTimeout(() => {
//     const result = number / 2;
//     success(result);
//   }, 2000);
// }

// asyncFunction(
//   32,
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     alert(err);
//   }
// );

// asyncFunction(
//   "dasdas",
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     alert(err);
//   }
// );

// const asyncFunction = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     if (typeof number === "string") {
//       reject("Нелязя разделить строку на число, укажите число!");
//       return;
//     }
//     setTimeout(() => {
//       const result = number / 2;
//       resolve(result);
//     }, 500);
//   });

//   return promise;
// };

// asyncFunction(10).then((result) => {
//   console.log(result);
// });

// asyncFunction(16)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// asyncFunction(10)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const btn = document.querySelector("#btn");
// const postsContainer = document.querySelector("#posts");

// btn.onclick = () => {
//   btn.disabled = true;
//   fetch("https://gorest.co.in/public/v1/posts")
//     .then((response) => {
//       return response.json();
//     })
//     .then(({ data }) => {
//       data.forEach((postData) => {
//         let postElement = document.createElement("div");
//         postElement.innerHTML = postData.body;
//         postsContainer.appendChild(postElement);
//       });
//       btn.disabled = false;
//     });
// };

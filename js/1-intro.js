// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   setTimeout(() => {
//     if (success) {
//       resolve("Success");
//     }
//     reject("Error");
//   }, 1500);
// });

// let isLoading = false;
// isLoading = true;

// promise
//   .then((result) => {
//     console.log(`%c${result}`, "color:green; font-size: 24px");
//   })
//   .catch((error) => console.log(`%c${error}`, "color:red; font-size: 24px"))
//   .finally(() => {
//     isLoading = false;
//   });

// Chaining
const promise = new Promise((resolve) => {
  resolve(5);
});

promise
  .then((x) => {
    console.log("x: ", x);
    return x * 2;
  })
  .then((y) => {
    console.log("y: ", y);
    return y + 50;
  })
  .then((z) => {
    console.log("z: ", z);
  })
  .catch((error) => console.log(error));

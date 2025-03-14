/// Promises

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeItRed);

// function iamACallback() {
//   console.log("I'm a callback function");
// }

// setTimeout(iamACallback, 5000);

// Callback Hell

// setTimeout(() => {
//   console.log("Download Photo");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo to the photo");
//       setTimeout(() => {
//         console.log("Show Photo in website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// let myPromise = new Promise((resolveF, rejectF) => {
//   let connect = false;
//   if (connect) {
//     resolveF("Connection Established");
//   } else {
//     rejectF(Error("Connection Failed"));
//   }
// }).then(
//   (resolved) => {
//     console.log(`Good ${resolved}`);
//   },
//   (rejected) => {
//     console.log(`Bad ${rejected}`);
//   }
// );

// let myPromise = new Promise((resolveF, rejectF) => {
//   let employess = ["Ahmed", "Amin", "Adem", "Anouar"];
//   if (employess.length === 4) {
//     resolveF(employess);
//   } else {
//     rejectF(Error("Number of employees is not 4"));
//   }
// })
//   .then((resolved) => {
//     resolved.length = 2;
//     return resolved;
//   })
//   .then((resolved) => {
//     resolved.length = 1;
//     return resolved;
//   })
//   .then((resolved) => {
//     console.log(`The chosen one is ${resolved}`);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   })
//   .finally(() => {
//     console.log("The Operation is Done");
//   });

/* Promise and XHR(XMLHttpRequest)  */

// const getData = (apiLink) => {
//   return new Promise((resolveF, rejectF) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolveF(JSON.parse(this.responseText));
//       } else {
//         rejectF(Error("No data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/BoubakerSaif/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => {
//     console.log(result[0].name);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   });

/* Fetch Api */

// fetch("https://api.github.com/users/BoubakerSaif/repos")
//   .then((result) => {
//     let myData = result.json();
//     return myData;
//   })
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => {
//     console.log(result[0].name);
//   });

// const myFirstPromise = new Promise((resF, rejF) => {
//   setTimeout(() => {
//     resF("Im the first Promise");
//   }, 5000);
// });
// const mySecondPromise = new Promise((resF, rejF) => {
//   setTimeout(() => {
//     resF("Im the Second Promise");
//   }, 1000);
// });
// const myThirdPromise = new Promise((resF, rejF) => {
//   setTimeout(() => {
//     resF("Im the Third Promise");
//   }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (result) => {
//     console.log(result);
//   },
//   (rejecResult) => {
//     console.log(rejecResult);
//   }
// );
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (result) => {
//     console.log(result);
//   },
//   (rejecResult) => {
//     console.log(rejecResult);
//   }
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (result) => {
//     console.log(result);
//   },
//   (rejecResult) => {
//     console.log(rejecResult);
//   }
// );

/*
Async
-Async before a function mean this function return a promise
-Async and await help in creating a asynchronous promise with cleaner style

*/

// function getData() {
//   return new Promise((resF, rejF) => {
//     let users = ["a"];
//     if (users.length > 0) {
//       resF("Users Found");
//     } else {
//       resF("No users Found");
//     }
//   });
// }

// function getData() {
//   let users = ["a"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No users Found");
//   }
// }

// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => {
//     console.log(resolvedValue);
//   },
//   (rejectedValue) => {
//     console.log(rejectedValue);
//   }
// );

/*
Await
-Await works only inside Async Function
-Await make javcascript wait for the promise result
*/

// const myPromise = new Promise((resF, rejF) => {
//   setTimeout(() => {
//     // resF("Im a good Promise");
//     rejF(Error("Im a a bad promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   //   myPromise.then((result) => {
//   //     console.log(result);
//   //   });
//   console.log(await myPromise.catch((err) => err));
//   console.log("After Promise");
// }

// readData();

// async function getData() {
//   console.log("Before Fetch");
//   try {
//     let myData = await fetch("https://api.github.com/users/BoubakerSaif/repos");
//     console.log(await myData.json());
//   } catch (error) {
//     console.log(`Reason : ${error}`);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// getData();

/// Synchronous // Asynchronous
console.log("1");
console.log("2");
setTimeout(() => {
  // Web Apis
  console.log("Operation");
}, 4000);
console.log("3");

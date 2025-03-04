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

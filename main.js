// function find_max(nums) {
//   let max_num = Number.NEGATIVE_INFINITY;
//   for (let num of nums) {
//     if (num > max_num) {
//       max_num += 1;
//     }
//   }
//   return max_num;
// }

// find_max([2, 3, 5, 8]);

// document.getElementById("p2").style.color = "blue";

// const locationURL = window.location.href;

// const targetAI = document.getElementById("new");
// console.dir(targetAI.href);
// console.dir(locationURL);
// targetAI.addEventListener("click", function () {
//   if (locationURL == targetAI) {
//     targetAI.style.color = "green";
//   }
// });

// const locationURL = window.location.href;

// const targetAI = document.getElementById("new");
// const linkParent = document.querySelector(".link-parent");
// const childNodes = linkParent.children;
// // console.log(linkParent.parentNode);
// linkParent.addEventListener("click", function (e) {
//   for (let i = 0; i < childNodes.length; i++) {
//     childNodes[i].style.color = "";
//   }
//   console.dir(e.linkParent);
//   // console.log(e.target);
//   e.target.style.color = "green";
// });

// const locationURL = window.location.href;
// const linktarget = document.querySelector(".link-parent");


const locationURL = window.location.href;

const targetAI = document.getElementById("new");
const linkParent = document.querySelector(".link-parent");
const childNodes = linkParent.children;

linkParent.addEventListener("click", function (e) {
  for (let i = 0; i < childNodes.length; i++) {
    childNodes[i].style.color = "";
  }
  e.target.style.color = "green";
});

// targetAI.addEventListener("click", function () {
//   if (locationURL == targetAI) {
//     targetAI.style.color = "green";
//   }
// });


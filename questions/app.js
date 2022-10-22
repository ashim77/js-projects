//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   // console.log(btn);
//   btn.addEventListener("click", function (e) {
//     const qustion = e.currentTarget.parentElement.parentElement;
//     qustion.classList.toggle("show-text");
//     console.log(qustion);
//   });
// });

// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   console.log(question);
// });

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");

questions.forEach(function (queston) {
  const btn = queston.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    //remove class
    questions.forEach(function (item) {
      if (item !== queston) {
        item.classList.remove("show-text");
      }
    });

    queston.classList.toggle("show-text");
  });
});

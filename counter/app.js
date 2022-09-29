// set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (btn) {
  // console.log(btn);

  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count == 0) {
      value.style.color = "#000";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    value.textContent = count;
  });
});

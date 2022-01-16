let count = 0;

const btns = document.querySelectorAll(".btn");
const number = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // console.log(styles);

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      number.style.color = "red";
    } else if (count > 0) {
      number.style.color = "blue";
    } else {
      number.style.color = "black";
    }

    number.textContent = count;
  });
});

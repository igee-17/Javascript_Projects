const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   // we use "let" because we're going to loop through an a function that'll change the value of hexColor on each loop

//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }

//   color.textContent = hexColor;
//   color.style.color = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexValue = "#";

  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomNumber()];
  }

  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

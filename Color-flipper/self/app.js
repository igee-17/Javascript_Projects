const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// to change the color of the background by clicking the button
// we first start by selecting the button
const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // we want a random number between 0 and 3 cos of the size of the array
  randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];

  //   we also want the color of the text to change
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

// now we create a function that would generate a random number and link it to our "randomNumber" variable

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

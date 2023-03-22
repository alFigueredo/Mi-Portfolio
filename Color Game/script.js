let colors, pickedColor, numSquare;
let numSquares = { easy: 3, hard: 6 };
let bodyColor = getComputedStyle(document.body).backgroundColor;
let difficulty = document.querySelectorAll(".difficulty");
let cuadrados = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let selected = document.querySelector(".selected");

function invColor(color) {
  let sumColor = color
    .slice(4, -1)
    .split(", ")
    .reduce((sum, num) => (sum += parseInt(num)), 0);
  console.log(sumColor);
  if (sumColor > 400) {
    return "black";
  }
  return "white";
}
function changeColors(color) {
  h1.style.color = invColor(color);
  h1.style.backgroundColor = color;
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}
function generateSquares() {
  for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.display = "block";
      cuadrados[i].style.backgroundColor = colors[i];
    } else {
      cuadrados[i].style.display = "none";
    }
  }
}
function randomNumber(numbers) {
  return Math.floor(Math.random() * numbers);
}
function pickColor() {
  return colors[randomNumber(numSquare)];
}
function randomColor() {
  return `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(
    256
  )})`;
}
function generateRandomColors() {
  colors = [];
  for (let i = 0; i < numSquare; i++) {
    colors.push(randomColor());
  }
}
function setDifficulty() {
  numSquare = numSquares[selected.textContent.toLowerCase()];
}
function reset() {
  resetButton.textContent = "New Colors";
  message.textContent = "Choose A Color";
  h1.style.color = "white";
  h1.style.backgroundColor = bodyColor;
  generateRandomColors();
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  generateSquares();
}
function setUpButtons() {
  for (let i = 0; i < difficulty.length; i++) {
    difficulty[i].addEventListener("click", () => {
      if (!difficulty[i].classList.contains("selected")) {
        difficulty[0].classList.toggle("selected");
        difficulty[1].classList.toggle("selected");
        selected = document.querySelector(".selected");
        setDifficulty();
        reset();
      }
    });
  }
  setDifficulty();
  resetButton.addEventListener("click", () => reset());
}
function setUpSquares() {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].addEventListener("click", () => {
      if (cuadrados[i].style.backgroundColor !== pickedColor) {
        cuadrados[i].style.backgroundColor = bodyColor;
        message.textContent = "Try Again!";
      } else {
        changeColors(pickedColor);
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
      }
    });
  }
}
function init() {
  setUpButtons();
  setUpSquares();
  reset();
}

init();

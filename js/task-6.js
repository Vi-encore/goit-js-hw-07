function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

function createBoxes(amount = 0) {
  const tempArr = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    tempArr.push(
      `<div style='display: block; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px'></div>`
    );

    size += 10;
  }
  input.value = "";
  boxesDiv.innerHTML = tempArr.join("");
}

createBtn.addEventListener("click", () => {
  if (input.value > 100 || input < 0) return;
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  boxesDiv.innerHTML = "";
});

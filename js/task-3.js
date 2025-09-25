const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  e.target.value
    ? (output.innerHTML = e.currentTarget.value.trim())
    : (output.innerHTML = "Anonymous");
});

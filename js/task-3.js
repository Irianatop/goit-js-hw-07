const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", event => {
  const trimmedName = event.currentTarget.value.trim();

  output.textContent = trimmedName || "Anonymous";
});
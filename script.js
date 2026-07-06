const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const notes = document.querySelector("#notes");
const clearButton = document.querySelector("#clear-notes");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = text;
  notes.appendChild(item);
  input.value = "";
});

clearButton.addEventListener("click", () => {
  notes.replaceChildren();
});
